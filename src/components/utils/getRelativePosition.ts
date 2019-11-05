import disableAutomock = jest.disableAutomock;

export type Position = 'top' | 'right' | 'bottom' | 'left';

interface PositionArgs {
  anchorElement: HTMLElement;
  anchorDims: DOMRectReadOnly;
  floaterElement: HTMLElement;
  floaterDims: DOMRectReadOnly;
}

interface PositionValue {
  top: number;
  left: number;
}

export const getRelativePosition = (desiredPosition: Position, anchorElement: HTMLElement, floaterElement: HTMLElement) => {

  const positionArgs = {
    anchorElement,
    anchorDims: anchorElement.getBoundingClientRect() as DOMRectReadOnly,
    floaterElement,
    floaterDims: floaterElement.getBoundingClientRect() as DOMRectReadOnly
  };

  switch (desiredPosition) {
    case 'top':{
      return getTopPosition(positionArgs);
    }
    case 'right': {
      return getRightPosition(positionArgs);
    }
    case 'bottom': {
      return getBottomPosition(positionArgs);
    }
    case 'left': {
      return getLeftPosition(positionArgs);
    }
  }
};

const getTopPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorElement,
    anchorDims,
    floaterDims
  } = positionArgs;

  const distanceToTop = anchorDims.y - floaterDims.height;

  if (distanceToTop <= 0) {
    return getBottomPosition(positionArgs);
  }

  return {
    top: anchorElement.offsetTop - floaterDims.height,
    left: anchorElement.offsetLeft
  };
};

const getRightPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorDims,
    anchorElement,
    floaterDims,
    floaterElement
  } = positionArgs;

  const centerPointY = (anchorElement.offsetHeight/2) + anchorElement.offsetTop;
  const distanceToRight = anchorDims.x + anchorDims.width + floaterDims.width;

  if (distanceToRight >= window.innerWidth) {
    return getLeftPosition(positionArgs);
  }

  return {
    top: Math.abs(centerPointY - (floaterElement.offsetHeight/2)),
    left: anchorElement.offsetLeft + anchorDims.width
  };
};

const getBottomPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorDims,
    anchorElement,
    floaterDims
  } = positionArgs;

  const distanceToBottom = anchorDims.y + floaterDims.height;

  if (distanceToBottom >= window.innerHeight) {
    return getTopPosition(positionArgs);
  };

  return {
    top: anchorElement.offsetTop + anchorDims.height,
    left: anchorElement.offsetLeft
  }
};

const getLeftPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorElement,
    anchorDims,
    floaterElement,
    floaterDims
  } = positionArgs;

  const centerPointY = (anchorElement.offsetHeight/2) + anchorElement.offsetTop;
  const distanceToLeft = anchorDims.x - floaterDims.width;

  if (distanceToLeft < 0) {
    return getRightPosition(positionArgs);
  }

  return {
    top: Math.abs(centerPointY - (floaterElement.offsetHeight/2)),
    left: anchorElement.offsetLeft - floaterDims.width
  };
};
