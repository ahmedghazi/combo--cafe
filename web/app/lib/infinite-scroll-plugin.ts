// import { gsap, Power4 } from "gsap";

// export function infinitScroll(
//   wrapper: HTMLDivElement,
//   items: HTMLElement[],
//   direction: string,
//   onScroll: Function,
//   rootMargin: boolean
// ) {
//   var imagesBoundingRect: any = null,
//     deltaTotal = 0,
//     wrapY: any,
//     lerpDelta = 0,
//     rootMarginSize: number = 0;

//   if (!wrapper) return;

//   window.addEventListener("resize", _onResize);
//   wrapper.addEventListener("wheel", _onWheel);
//   _onResize();

//   requestAnimationFrame(_update);
//   _animeIntro();

//   function _animeIntro() {
//     if (rootMargin) {
//       const header = document.querySelector("header");
//       if (header) {
//         const bounding = header.getBoundingClientRect();
//         rootMarginSize = bounding.height;
//       }
//     }

//     var obj = { lerpDelta: 0 };
//     const nextVal = window.innerHeight * 1 - rootMarginSize;
//     gsap.to(obj, 1, {
//       lerpDelta: nextVal,
//       duration: 4,
//       delay: 1,
//       ease: Power4.easeInOut,
//       onUpdate: (o) => {
//         lerpDelta = obj.lerpDelta;
//       },
//     });
//   }
//   function _onResize() {
//     imagesBoundingRect = items.map(function (article) {
//       return article.getBoundingClientRect();
//     });

//     //set range
//     //start pos => minus first height
//     if (window.innerWidth < 1080) {
//       var first = -imagesBoundingRect[0].width;
//       //end pos => total width
//       var last =
//         imagesBoundingRect.reduce(function (
//           accumulateur: number,
//           current: any
//         ) {
//           return accumulateur + current.width;
//         },
//         0) - imagesBoundingRect[0].width;
//     } else {
//       var first = -imagesBoundingRect[0].height;
//       //end pos => total height
//       var last =
//         imagesBoundingRect.reduce(function (
//           accumulateur: number,
//           current: any
//         ) {
//           return accumulateur + current.height;
//         },
//         0) - imagesBoundingRect[0].height;
//     }

//     wrapY = gsap.utils.wrap(first, last);

//     if (rootMargin) {
//       const header = document.querySelector("header");
//       if (header) {
//         const bounding = header.getBoundingClientRect();
//         rootMarginSize = bounding.height;
//       }
//     }
//   }

//   function _onWheel(e: WheelEvent | any) {
//     deltaTotal = deltaTotal - e.deltaY;
//     lerpDelta = lerp(lerpDelta, deltaTotal, 0.1);
//   }

//   function _update() {
//     items.forEach(function (el, index) {
//       const lerpDeltaByDirection =
//         direction === "up" ? lerpDelta * -1 : lerpDelta;
//       // console.log(lerpDelta);
//       if (window.innerWidth < 1080) {
//         // MOBILE
//         const nextY: number = wrapY(
//           lerpDeltaByDirection + index * imagesBoundingRect[index].width
//         );
//         el.style.transform = "translate3d(" + nextY + "px,0, 0)";
//         if (typeof onScroll === "function") onScroll(nextY);
//       } else {
//         // DESKTOP
//         let nextY: number = wrapY(
//           lerpDeltaByDirection + index * imagesBoundingRect[index].height
//         );
//         if (rootMargin) nextY += rootMarginSize;
//         el.style.transform = "translate3d(0," + nextY + "px, 0)";
//         if (typeof onScroll === "function") onScroll(nextY);
//       }
//       el.style.opacity = "1";
//     });

//     requestAnimationFrame(_update);
//   }

//   /*
//     for easing scroll
//     */
//   function lerp(start: number, end: number, amt: number) {
//     return (1 - amt) * start + amt * end;
//   }
// }
