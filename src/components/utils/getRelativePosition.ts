export type Position = 'top' | 'right' | 'bottom' | 'left';

interface PositionArgs {
  anchorElement: HTMLElement;
  anchorDims: DOMRectReadOnly;
  floaterElement: HTMLElement;
  floaterDims: DOMRectReadOnly;
}

export interface PositionValue {
  top: number;
  left: number;
}

const getBottomPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorDims,
    anchorElement
  } = positionArgs;

  return {
    top: anchorElement.offsetTop + anchorDims.height,
    left: anchorElement.offsetLeft
  }
};

const getTopPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorElement,
    floaterDims
  } = positionArgs;

  return {
    top: anchorElement.offsetTop - floaterDims.height,
    left: anchorElement.offsetLeft
  };
};

const getLeftPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorElement,
    floaterElement,
    floaterDims
  } = positionArgs;

  const centerPointY = (anchorElement.offsetHeight/2) + anchorElement.offsetTop;

  return {
    top: Math.abs(centerPointY - (floaterElement.offsetHeight/2)),
    left: anchorElement.offsetLeft - floaterDims.width
  };
};

const getRightPosition = (positionArgs: PositionArgs): PositionValue => {
  const {
    anchorDims,
    anchorElement,
    floaterElement
  } = positionArgs;

  const centerPointY = (anchorElement.offsetHeight/2) + anchorElement.offsetTop;

  return {
    top: centerPointY - (floaterElement.offsetHeight/2),
    left: anchorElement.offsetLeft + anchorDims.width
  };
};

export const getRelativePosition = (desiredPosition: Position, anchorElement: HTMLElement, floaterElement: HTMLElement) => {

  const positionArgs = {
    anchorElement,
    anchorDims: anchorElement.getBoundingClientRect() as DOMRectReadOnly,
    floaterElement,
    floaterDims: floaterElement.getBoundingClientRect() as DOMRectReadOnly
  };

  switch (desiredPosition) {
    case 'top':{
      const distanceToTop = positionArgs.anchorDims.y - positionArgs.floaterDims.height;

      if (distanceToTop <= 0) {
        return getBottomPosition(positionArgs);
      }

      return getTopPosition(positionArgs);
    }
    case 'right': {
      const distanceToRight = positionArgs.anchorDims.x + positionArgs.anchorDims.width + positionArgs.floaterDims.width;

      if (distanceToRight >= window.innerWidth) {
        return getLeftPosition(positionArgs);
      }

      return getRightPosition(positionArgs);
    }
    case 'bottom': {
      const distanceToBottom = positionArgs.anchorDims.y + positionArgs.floaterDims.height;

      if (distanceToBottom >= window.innerHeight) {
        return getTopPosition(positionArgs);
      }

      return getBottomPosition(positionArgs);
    }
    case 'left': {
      const distanceToLeft = positionArgs.anchorDims.x - positionArgs.floaterDims.width;

      if (distanceToLeft < 0) {
        return getRightPosition(positionArgs);
      }

      return getLeftPosition(positionArgs);
    }
  }
};
