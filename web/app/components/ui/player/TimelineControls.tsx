import React, { useRef, useContext, useEffect } from "react";
import PubSub from "pubsub-js";
import { VideoContext } from "./index";
import "./timeline-controls.scss";

const idleWait = 3000;

type Props = {
  setSeek: Function;
};
const TimelineControls = (props: Props) => {
  const timelineControlsRef = useRef<HTMLDivElement>(null);
  const { video, setVideo } = useContext(VideoContext);

  let idleTimer: number | any = null,
    idleState = true;

  useEffect(() => {
    // console.log(video)
    _idle();
    window.addEventListener("mousemove", _idle);

    return () => window.removeEventListener("mousemove", _idle);
  }, [video.playing]);

  const _idle = () => {
    if (idleTimer) clearTimeout(idleTimer);
    // console.log(video.playing)
    if (idleState === true) {
      _showControls();
    }

    idleState = false;
    if (!video.playing) {
      if (timelineControlsRef.current)
        timelineControlsRef.current.classList.add("show");
      return;
    }

    if (idleTimer)
      idleTimer = setTimeout(() => {
        console.log("time out");
        _hideControls();
        idleState = true;
      }, idleWait);
  };

  const _hideControls = () => {
    if (timelineControlsRef.current)
      timelineControlsRef.current.classList.remove("show");
  };

  const _showControls = () => {
    if (timelineControlsRef.current)
      timelineControlsRef.current.classList.add("show");
  };

  const _secondsToHms = (t: number) => {
    const d = Number(t);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") +
      m +
      ":" +
      (s < 10 ? "0" : "") +
      s
    );
  };

  const _seek = (e: React.MouseEvent) => {
    const { layerX } = e.nativeEvent;
    const node = e.target as HTMLElement;
    const { width } = node.getBoundingClientRect();
    const percent: number = (layerX * 100) / width;
    const { duration } = video;
    const newTime: number = (percent * duration) / 100;
    props.setSeek(newTime);
  };

  const { progress, duration, playing } = video;
  // const playPauseLabel = playing ? 'pause' : 'play'

  return progress ? (
    <div className='timeline-controls' ref={timelineControlsRef}>
      <div>
        {/* <div className='actions flex justify-between items-center'>
          <div
            className='timecode'
            onClick={_seek}
            role='button'
            tabIndex={0}
            aria-label='seek'>
            {_secondsToHms(progress.playedSeconds)}
            <span>—</span>
            {_secondsToHms(duration)}
          </div>

        </div> */}
        <div className='timeline' onClick={(e: React.MouseEvent) => _seek(e)}>
          <div
            className='timeline--played'
            style={{
              // width: progress.played * 100 + "%",
              left: progress.played * 100 + "%",
              // transform: `translateX(${progress.played * 100}%)`,
            }}></div>
          {/* <div
            className='timeline--loaded'
            style={{ width: progress.loaded * 100 + "%" }}></div> */}
        </div>
      </div>
    </div>
  ) : null;
};

export default TimelineControls;
