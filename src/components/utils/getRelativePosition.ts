interface PositionArgs {
  anchorElement: HTMLElement;
  anchorDims: DOMRectReadOnly;
  floaterElement: HTMLElement;
  floaterDims: DOMRectReadOnly;
}

export interface Position {
  top: number;
  left: number;
}

export interface Region {
  top: number;
  left: number;
  height: number;
  width: number;
}

// gets the scroll distance for the given axis
function getScroll(w: any, isTop: boolean) {
  let ret: any = w[`page${isTop ? 'Y' : 'X'}Offset`];
  const method = `scroll${isTop ? 'Top' : 'Left'}`;
  if (typeof ret !== 'number') {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}

// gets the total left scroll distance
function getScrollLeft(w: any) {
  return getScroll(w, false);
}

// gets the total top scroll distance
function getScrollTop(w: any) {
  return getScroll(w, true);
}

// returns the window object for the given element
function getWindow(element: HTMLElement) {
  const doc = element.ownerDocument;

  if (doc) {
    return doc.defaultView;
  }
}

// gets the anchor position by taking into account the current scroll position
function getAnchorRegion(element: HTMLElement): Region {
  let x;
  let y;

  const doc = element.ownerDocument;
  const body = doc && doc.body;
  const docElem = doc && doc.documentElement;
  const win = getWindow(element);
  const box = element.getBoundingClientRect();

  x = box.left;
  y = box.top;

  console.log(x, y);

  x -= (docElem && docElem.clientLeft)|| (body && body.clientLeft) || 0;
  y -= (docElem && docElem.clientTop) || (body && body.clientTop) || 0;

  x += getScrollLeft(win);
  y += getScrollTop(win);

  return {
    left: Number(x.toFixed(0)),
    top: Number(y.toFixed(0)),
    height: box.height,
    width: box.width
  };
}

// gets the anchor from the anchor
/*
          tc
tl  *-----*-----*  tr
    |     cc    |
cl  *-----*-----*  cr
    |           |
bl  *-----*-----*  br
          bc
*/
function getAnchorPoint(anchorPoint: string, anchorRegion: Region): Position {
  const verticalPoint = anchorPoint.charAt(0);
  const horizontalPoint = anchorPoint.charAt(1);
  const regionHeight = anchorRegion.height;
  const regionWidth = anchorRegion.width;

  let x = anchorRegion.left;
  let y = anchorRegion.top;

  if (verticalPoint === 'c') {
    y += regionHeight / 2;
  } else if (verticalPoint === 'b') {
    y += regionHeight;
  }

  if (horizontalPoint === 'c') {
    x += regionWidth / 2;
  } else if (horizontalPoint === 'r') {
    x += regionWidth;
  }

  return {
    top: Number(y.toFixed(0)),
    left: Number(x.toFixed(0))
  }
}

function getFloaterPoint(
  anchorRegion: Region,
  floaterRegion: Region,
  anchorPoint: Position,
  floaterPoint: Position,
  isRelative: boolean
): Position {
  // total diff
  const xdi = anchorPoint.left - floaterPoint.left;
  const ydi = anchorPoint.top - floaterPoint.top;

 // viewport diff
  const xv = xdi + floaterRegion.left - (isRelative ? anchorRegion.left : 0);
  const yv = ydi + floaterRegion.top - (isRelative ? anchorRegion.top : 0);

  return {
    top: yv,
    left: xv
  };
}

function calculateRelationPosition(anchorElement: HTMLElement, floaterElement: HTMLElement, position: string[], isRelative: boolean) {
  // current position of the anchor
  const anchorRegion = getAnchorRegion(anchorElement);
  const floaterRegion = getAnchorRegion(floaterElement);

  // get anchor point to attach floater to
  const anchorPoint = getAnchorPoint(position[0], anchorRegion);

  // get floater point to attach to anchor
  const floaterPoint = getAnchorPoint(position[1], floaterRegion);

  return getFloaterPoint(anchorRegion, floaterRegion, anchorPoint, floaterPoint, isRelative);
}

export const getRelativePosition = (anchorElement: HTMLElement, floaterElement: HTMLElement, position: string[], container?: HTMLElement): Position => {

  if (container) {
    const win = getWindow(container);
    const style = win && win.getComputedStyle(container);
    if (style && style.position === 'relative') {
      return calculateRelationPosition(anchorElement, floaterElement, position, true);
    }
  }

  return calculateRelationPosition(anchorElement, floaterElement, position, false);
};
