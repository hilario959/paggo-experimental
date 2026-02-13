import { useEffect, useRef, useState, type VideoHTMLAttributes } from 'react';

type SmartVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> & {
  src: string;
  type?: string;
  priority?: boolean;
  rootMargin?: string;
};

export function SmartVideo({
  src,
  type = 'video/mp4',
  priority = false,
  rootMargin = '300px 0px',
  autoPlay,
  preload,
  ...props
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isVisible, setIsVisible] = useState(priority);

  useEffect(() => {
    if (priority || !videoRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
        }
      },
      { rootMargin }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [priority, rootMargin, shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay || !shouldLoad) {
      return;
    }

    if (isVisible || priority) {
      void video.play().catch(() => {});
      return;
    }

    video.pause();
  }, [autoPlay, isVisible, priority, shouldLoad]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      preload={preload ?? (priority ? 'metadata' : 'none')}
      {...props}
    >
      {shouldLoad ? <source src={src} type={type} /> : null}
    </video>
  );
}
