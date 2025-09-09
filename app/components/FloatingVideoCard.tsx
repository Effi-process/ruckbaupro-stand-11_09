'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FloatingVideoCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Floating Video Card */}
      <div 
        className="fixed bottom-6 right-6 z-30 cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        <div className="relative w-48 h-32 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300">
          <Image
            src="/images/hero-poster.jpg"
            alt="RückbauPRO in Aktion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white text-xs font-medium">Professioneller Rückbau</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full"
              controls
              autoPlay
              muted
              src="/videos/asbestos-removal-professional.mp4"
            >
            </video>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Video schließen"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}