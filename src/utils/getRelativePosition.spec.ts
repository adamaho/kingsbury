// import {
//   getRelativePosition
// } from "./getRelativePosition";
//
// // returns the anchor element at the desired position
// function getAnchorElement(x: number, y: number): HTMLElement {
//   // @ts-ignore
//   return {
//     offsetTop: y,
//     offsetLeft: x,
//     offsetHeight: 30,
//     getBoundingClientRect: (): DOMRectReadOnly => ({
//       height: 30,
//       width: 100,
//       bottom: 30,
//       top: y,
//       left: x,
//       right: 68,
//       x: x,
//       y: y,
//       toJSON: () => undefined
//     })
//   }
// }
//
// // element with height: 100 and width: 100 and positioned at 0, 30 (just below anchorElement)
// // @ts-ignore
// const mockFloaterElement: HTMLElement = {
//   offsetLeft: 200,
//   offsetTop: 230,
//   offsetHeight: 100,
//   getBoundingClientRect: (): DOMRectReadOnly => ({
//     height: 100,
//     width: 100,
//     bottom: 130,
//     top: 230,
//     left: 200,
//     right: 100,
//     x: 200,
//     y: 230,
//     toJSON: () => undefined
//   })
// };
//
//
// describe('util:getRelativePosition', () => {
//
//   describe('position floater', () => {
//     const mockAnchorElement = getAnchorElement(200, 200);
//
//     it('positions element to the right of anchor', () => {
//       const position = getRelativePosition(mockAnchorElement, mockFloaterElement, ['cr', 'cl']);
//       expect(position).toStrictEqual({ top: 165, left: 300 });
//     });
//
//     it('positions element to the left of anchor', () => {
//       const position = getRelativePosition(mockAnchorElement, mockFloaterElement, ['cl', 'cr']);
//       expect(position).toStrictEqual({ top: 165, left: 100 });
//     });
//
//     it('positions element to the bottom of anchor', () => {
//       const position = getRelativePosition(mockAnchorElement, mockFloaterElement, ['bc', 'tc']);
//       expect(position).toStrictEqual({ top: 230, left: 200 });
//     });
//
//     it('positions element to the top of anchor', () => {
//       const position = getRelativePosition(mockAnchorElement, mockFloaterElement, ['tc', 'bc']);
//       expect(position).toStrictEqual({ top: 100, left: 200 });
//     });
//   });
//
//   // describe('edge detection', () => {
//   //   it('flips the position if too close to right edge', () => {
//   //     const mockAnchorElement = getAnchorElement(900, 200);
//   //     const position = getRelativePosition('right', mockAnchorElement, mockFloaterElement);
//   //     expect(position).toStrictEqual({ top: 165, left: 800 });
//   //   });
//   //
//   //   it('flips the position if too close to left edge', () => {
//   //     const mockAnchorElement = getAnchorElement(50, 200);
//   //     const position = getRelativePosition('left', mockAnchorElement, mockFloaterElement);
//   //     expect(position).toStrictEqual({ top: 165, left: 150 });
//   //   });
//   //
//   //   it('flips the position if too close to bottom edge', () => {
//   //     const mockAnchorElement = getAnchorElement(200, 900);
//   //     const position = getRelativePosition('bottom', mockAnchorElement, mockFloaterElement);
//   //     expect(position).toStrictEqual({ top: 800, left: 200 });
//   //   });
//   //
//   //   it('flips the position if too close to top edge', () => {
//   //     const mockAnchorElement = getAnchorElement(200, 50);
//   //     const position = getRelativePosition('top', mockAnchorElement, mockFloaterElement);
//   //     expect(position).toStrictEqual({ top: 80, left: 200 });
//   //   });
//   // })
// });
