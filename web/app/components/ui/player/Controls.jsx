// import React, { useEffect, useContext } from "react";
// import Icons from "../Icons";
// // import PubSub from 'pubsub-js'
// import { VideoContext } from "./index";

// const idleWait = 3000;

// const Controls = () => {
//   const [video, setVideo] = useContext(VideoContext);

//   useEffect(() => {
//     // console.log(video)
//     _idle();
//   }, []);

//   const _idle = () => {
//     const self = this;
//     let idleTimer = null,
//       idleState = true;

//     window.addEventListener("mousemove", () => {
//       // console.log("mousemove", idleState)
//       clearTimeout(idleTimer);

//       if (idleState == true) {
//         // console.log("Welcome Back.")
//         // self.refs.controls.style.opacity = 1
//         document.body.classList.add("show-controls");
//       }

//       idleState = false;
//       if (!video.isPlaying) return;
//       idleTimer = setTimeout(() => {
//         // Idle Event
//         // console.log("You've been idle for " + idleWait/1000 + " seconds");
//         // self.refs.controls.style.opacity = 0
//         document.body.classList.remove("show-controls");
//         idleState = true;
//       }, idleWait);
//     });
//   };

//   const _prev = () => {
//     const newIndex =
//       (((video.index + -1) % video.total) + video.total) % video.total;
//     setVideo({
//       ...video,
//       index: newIndex
//       // progress: null,
//       // duration: null
//     });
//   };

//   const _toggle = () => {
//     setVideo({
//       ...video,
//       isPlaying: !video.isPlaying
//     });
//   };

//   const _next = () => {
//     const newIndex = (video.index + 1) % video.total;
//     console.log(video.index, video.total);
//     console.log("newIndex", newIndex);
//     setVideo({
//       ...video,
//       index: newIndex
//       // progress: null,
//       // duration: null
//     });
//   };

//   const _mute = () => {
//     setVideo({
//       ...video,
//       isMuted: !video.isMuted
//     });
//   };

//   const className = video.isPlaying ? "is-playing" : "";
//   return (
//     <div className={"controls text-sm-base md:text-base" + className}>
//       <div className='prev' onClick={_prev}>
//         <Icons name='play' />
//       </div>
//       <div className='play-pause text-center' onClick={_toggle}>
//         <Icons name='play' />
//         <Icons name='pause' />
//       </div>
//       <div className='next' onClick={_next}>
//         <Icons name='play' />
//       </div>
//       <div className='mute' onClick={_mute}>
//         {video.isMuted ? <Icons name='mute' /> : <Icons name='volume' />}
//       </div>
//     </div>
//   );
// };

// export default Controls;
