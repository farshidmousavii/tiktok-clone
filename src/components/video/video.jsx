import React, { useRef } from "react";
import useVideoPlayer from "../../hooks/videoPlayer/useVideoPlayer";
import {
  BsFlag,
  BsPlayFill,
  BsPauseFill,
  BsVolumeUp,
  BsVolumeMuteFill,
} from "react-icons/bs";
import "./video.css";

const Video = ({ src }) => {
  const videoElement = useRef(null);
  const {
    isPlaying,
    progress,
    // speed,
    isMuted,
    volume,
    handleOnTimeUpdate,
    handleVideoProgress,
    // handleVideoSpeed,
    handleVolume,
    toggleMute,
    togglePlay,
  } = useVideoPlayer(videoElement);

  const renderVideo = () => {
    return (
      <div className="video__Player-container">
        <video
          loop
          src={src}
          onTimeUpdate={handleOnTimeUpdate}
          ref={videoElement}
          className="video__player"
        ></video>
        <div className="video__Controller">
          <div className="video__controller-report">
            <BsFlag />
            <span>Report</span>
          </div>
          <div className="video__controller-nav">
            <div className="video__controller-nav_play" onClick={togglePlay}>
              {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
            </div>
            <div className="video__controller-nav_sound" onClick={toggleMute}>
              {isMuted ? <BsVolumeMuteFill /> : <BsVolumeUp />}
              <div className="volumeContainer">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => handleVolume(e)}
                  className="volume"
                />
              </div>
            </div>
          </div>
          <div className="video__controller-nav_progress">
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => handleVideoProgress(e)}
            />
          </div>
        </div>
      </div>
    );
  };
  return <>{src && renderVideo()}</>;
};

export default Video;
