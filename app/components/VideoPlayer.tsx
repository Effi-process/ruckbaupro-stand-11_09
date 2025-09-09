'use client';
import { useState, useRef } from 'react';
import Icon from './Icon';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title: string;
  description?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

export default function VideoPlayer({ 
  src, 
  poster, 
  title, 
  description,
  autoplay = false,
  muted = true,
  loop = true,
  className = ''
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(muted);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Ihr Browser unterstützt keine Videos.
      </video>
      
      {/* Video Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
            {description && (
              <p className="text-white/80 text-sm">{description}</p>
            )}
          </div>
          
          {/* Control Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              <Icon 
                name={isPlaying ? 'pause' : 'play'} 
                size={20} 
                color="white"
              />
            </button>
            
            <button
              onClick={toggleMute}
              className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              <Icon 
                name={isMuted ? 'volume-x' : 'volume-2'} 
                size={20} 
                color="white"
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Play Button Overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={togglePlay}
            className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Play Video"
          >
            <Icon name="play" size={32} className="ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}