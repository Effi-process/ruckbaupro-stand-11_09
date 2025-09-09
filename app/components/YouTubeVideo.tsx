'use client'

import { useState, useEffect } from 'react'

export default function YouTubeVideo() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Video als geladen markieren nach 2 Sekunden
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#2C4F5E]">
      {/* Lade-Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#2C4F5E] z-20 flex items-center justify-center">
          <div className="animate-pulse text-white text-xl">Video wird geladen...</div>
        </div>
      )}
      
      <iframe
        className="absolute top-1/2 left-1/2 w-[180%] h-[180%] transform -translate-x-1/2 -translate-y-1/2 scale-125"
        src="https://www.youtube.com/embed/ASBESTSANIERUNG_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=ASBESTSANIERUNG_VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3"
        title="Asbestsanierung Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  )
}