import React, { createContext, useEffect, useRef, useState } from "react";
// import PubSub, { publish, subscribe, unsubscribe } from "pubsub-js";
import ReactPlayer from "react-player";
// import TimelineControls from "./TimelineControls";
import { useInView } from "react-intersection-observer";
import website from "@/app/config/website";
import clsx from "clsx";
// import screenfull from "screenfull"
import { BaseReactPlayerProps } from "react-player/base";
import { animate } from "framer-motion";
import TimelineControls from "./TimelineControls";
import "./index.scss";
import Figure from "../Figure";
import { SanityImageAsset } from "sanity-codegen";
import { SanityReference } from "@/app/types/schema";
// import { subscribe } from "pubsub-js";

type InputProps = {
  url: string;
  autoplay?: boolean;
  thumbnail?: SanityImageAsset | SanityReference<SanityImageAsset> | any;
  aspectRatio?: string;
};

type VideoStateProps = {
  playing: boolean;
  muted: boolean;
  volume: number;
  fullscreen: boolean;
  progress: number | any;
  duration: number | any;
  ready: boolean;
};

const initialVideoState = {
  playing: false,
  muted: false,
  volume: 0,
  fullscreen: false,
  progress: 0 || null,
  duration: 0 || null,
  ready: false,
};

type VideoContextProps = {
  video: VideoStateProps;
  setVideo: Function;
};

const VideoContext = createContext<VideoContextProps>({} as VideoContextProps);

const VideoWrapper: React.FC<InputProps> = ({
  url,
  autoplay = false,
  thumbnail,
  aspectRatio = "16 / 9",
}) => {
  initialVideoState.playing = autoplay;
  initialVideoState.volume = autoplay ? 0 : 1;
  initialVideoState.muted = autoplay;

  const [ready, setReady] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);
  const [video, setVideo] = useState<VideoStateProps>(initialVideoState);
  const [seek, setSeek] = useState<number>(0);
  const playerRef = useRef<ReactPlayer>(null);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // console.log(autoplay, video);

  useEffect(() => {
    setReady(true);
    // const token = PubSub.subscribe("SEEK", (e, d) => {
    //   console.log(d);
    //   playerRef.current?.seekTo(parseFloat(d));
    // });
    // const token = PubSub.subscribe("VIDEO_PLAY_PAUSE", (e, d) => {
    //   console.log(d);
    //   if (d.url === url) {
    //     setVideo((video) => ({
    //       ...video,
    //       playing: d.play,
    //     }));
    //   }
    // });

    return () => {
      // PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    playerRef.current?.seekTo(seek);
  }, [seek]);

  useEffect(() => {
    // console.log(inView, autoplay);
    if (autoplay && window.innerWidth > 1080) {
      if (inView) {
        setVideo((video) => ({
          ...video,
          playing: autoplay,
          muted: video.muted,
        }));
      } else {
        setVideo((video) => ({
          ...video,
          playing: false,
          muted: video.muted,
        }));
      }
    }
  }, [inView]);

  // console.log(video)

  const _onStart = () => {
    console.log("here start");
    setStarted(true);
  };

  const _onDuration = (duration: number) => {
    // console.log(duration)
    setVideo((video) => ({
      ...video,
      duration: duration,
    }));
  };
  const _onReady = (event: any) => {
    // console.log(event)

    setVideo({
      ...video,
      progress: null,
      duration: null,
      ready: true,
    });
    // setReady(true);
  };
  // const _onStart = (event) => {};
  // const _onError = (event) => {};
  const _onProgress = (progress: any) => {
    // console.log(progress);
    setVideo((video) => ({
      ...video,
      progress: progress,
    }));
  };

  const _onEnded = () => {
    // publish("VIDEO_ENDED");
  };

  const _togglePlayPause = () => {
    setVideo({
      ...video,
      playing: !video.playing,
    });
  };

  const _toggleMuted = () => {
    setVideo({
      ...video,
      muted: !video.muted,
    });
  };

  useEffect(() => {
    if (!playerRef.current) return;
    if (!video.ready) return;

    if (video.muted) {
      animate(1, 0, {
        duration: 0.5,
        onUpdate: (latest) => {
          setVideo({
            ...video,
            volume: latest,
          });
        },
      });
    } else {
      animate(0, 1, {
        duration: 0.5,
        onUpdate: (latest) => {
          setVideo({
            ...video,
            volume: latest,
          });
        },
      });
    }
  }, [video.muted]);

  const config = {
    youtube: {
      playerVars: {
        iv_load_policy: 2,
        cc_load_policy: 0,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0,
        origin: website.url,
      },
    },
    vimeo: {
      title: "false",
    },
  };
  // console.log(showControls);
  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      <div
        className={clsx(
          "video-wrapper bg-black h-full ",
          autoplay && "is-autoplay",
          video.playing ? "is-playing" : "is-pause",
        )}
        ref={ref}>
        {url && (
          <div
            onClick={_togglePlayPause}
            className='cursor-pointer pointer-events-auto '>
            <ReactPlayer
              ref={playerRef}
              className={clsx(
                "react-player",
                // autoplay ? "pointer-events-none" : ""
              )}
              url={url}
              width='100%'
              height='100%'
              // playing={video.playing}
              controls={true}
              // loop={false}
              playsinline
              config={config}
              // muted={video.volume === 0 ? true : false}
              // volume={video.volume}
              onPlay={_onStart}
              onDuration={_onDuration}
              onReady={_onReady}
              onProgress={_onProgress}
              onEnded={_onEnded}
              style={{
                aspectRatio: aspectRatio,
              }}
            />
          </div>
        )}

        {/* {!video.playing && (
          <div className='inset-0 absolute'>
            <Figure asset={thumbnail} width={600} />
          </div>
        )} */}

        {/* <div className='controls flex'>
          <button
            className='cartouche cartouche--gray btn-play'
            onClick={_togglePlayPause}
            title='play'>
            <svg
              width='15'
              height='19'
              viewBox='0 0 15 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M15 9.5L0.75 18.5933L0.75 0.406734L15 9.5Z'
                fill='black'
              />
            </svg>
          </button>
          <button
            className='cartouche cartouche--gray btn-pause'
            onClick={_togglePlayPause}
            title='pause'>
            <svg
              width='13'
              height='16'
              viewBox='0 0 13 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect width='4' height='16' fill='black' />
              <rect x='9' width='4' height='16' fill='black' />
            </svg>
          </button>
          <TimelineControls setSeek={setSeek} />
        </div> */}

        {/* {autoplay && video.playing && (
          <button
            className={clsx(
              "toggle-muted cartouche",
              video.muted ? "is-active" : ""
            )}
            onClick={_toggleMuted}>
            {video.muted ? "SOUND OFF" : "SOUND ON"}
          </button>
        )} */}
      </div>
    </VideoContext.Provider>
  );
};

export { VideoContext, VideoWrapper };
