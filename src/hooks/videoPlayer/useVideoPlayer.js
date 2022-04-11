import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progressUpdate =
      (videoElement.current.currentTime / videoElement.current.duration) *
        100 || 0; // on load compunent value was load NAN but now load 0
    setProgress(progressUpdate);
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };

  const handleVideoSpeed = (event) => {
    const videoSpeed = Number(event.target.value);
    videoElement.current.playbackRate = videoSpeed;
    setSpeed(videoSpeed);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [isMuted, videoElement]);

  const handleVolume = (event) => {
    const videoVolume = Number(event.target.value);
    videoElement.current.volume = videoVolume;
    setVolume(videoVolume);
  };
  return {
    isPlaying,
    progress,
    speed,
    isMuted,
    volume,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    handleVolume,
  };
};

export default useVideoPlayer;
