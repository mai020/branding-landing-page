import React, { useEffect, useRef, useState } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const sources = Array.isArray(src) ? src : [src];
  const activeSrc = sources[currentSrcIndex];

  const isFadingOutRef = useRef(false);
  const isFadingInRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  const setVideoOpacity = (val: number) => {
    if (videoRef.current) {
      videoRef.current.style.opacity = String(val);
    }
  };

  const fade = (start: number, end: number, duration: number, onComplete?: () => void) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = start + (end - start) * progress;
      setVideoOpacity(currentOpacity);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        if (onComplete) onComplete();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleLoadedData = () => {
    isFadingOutRef.current = false;
    isFadingInRef.current = true;
    fade(0, 1, 500, () => {
      isFadingInRef.current = false;
    });
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const remainingTime = video.duration - video.currentTime;
    if (!isFadingOutRef.current && !isFadingInRef.current && !isNaN(remainingTime) && remainingTime <= 0.55) {
      isFadingOutRef.current = true;
      fade(1, 0, 550);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    if (sources.length === 1) {
      video.currentTime = 0;
      video.play()
        .then(() => {
          handleLoadedData();
        })
        .catch((e) => console.error("Error playing video:", e));
    } else {
      setCurrentSrcIndex((prevIndex) => (prevIndex + 1) % sources.length);
    }
  };

  // Sync index and handle video load/play when source list changes
  useEffect(() => {
    setCurrentSrcIndex(0);
  }, [src]);

  useEffect(() => {
    isFadingOutRef.current = false;
    isFadingInRef.current = false;
    const video = videoRef.current;
    if (video) {
      video.style.opacity = '0';
      // Loading the video manually is required for updating the active source
      video.load();
      video.play().catch((e) => console.error("Error playing video on src change:", e));
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSrcIndex, activeSrc]);

  return (
    <video
      ref={videoRef}
      src={activeSrc}
      className={className}
      style={{
        opacity: 0,
        transition: 'none',
        ...style,
      }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};
