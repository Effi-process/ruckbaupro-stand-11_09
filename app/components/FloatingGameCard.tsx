'use client';

import { useState } from 'react';
import CanvasShooterGame from './CanvasShooterGame';

export default function FloatingGameCard() {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      {/* Floating Game Card - etwas größer */}
      <div 
        className="fixed bottom-8 right-8 z-30 cursor-pointer group"
        onClick={() => setShowGame(true)}
      >
        <div className="relative w-64 h-40 rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300">
          {/* Mini-Vorschau vom Spiel */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-oxford-blue flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-xs mb-2 opacity-80">🎮 MINI SPIEL</div>
              <div className="text-white font-bold text-sm">RÜCKBAU SHOOTER</div>
              <div className="text-white/60 text-xs mt-1">Klick zum Spielen!</div>
            </div>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>
          
          {/* Badge */}
          <div className="absolute top-3 left-3">
            <div className="bg-cerulean/90 text-white text-xs px-3 py-1 rounded-full font-bold">
              SPIEL
            </div>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      {showGame && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowGame(false)}
        >
          <div 
            className="relative w-full max-w-5xl h-[70vh] bg-gradient-to-br from-gray-800 to-oxford-blue rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Game Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 backdrop-blur-md border-b border-white/20 p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white text-xl font-bold">🎯 RÜCKBAU SHOOTER</h3>
                  <p className="text-white/80 text-sm">Schieße alle "RÜCKBAUPRO" Buchstaben ab! Maus = Bewegen, Klick = Schießen</p>
                </div>
                <button
                  onClick={() => setShowGame(false)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Spiel schließen"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Game Area */}
            <div className="absolute inset-0 pt-20">
              <CanvasShooterGame />
            </div>

            {/* Footer Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900/80 to-oxford-blue/80 backdrop-blur-md border-t border-white/20 p-3">
              <div className="flex justify-between items-center">
                <div className="text-white/60 text-xs">
                  💡 Tipp: Leertaste = Dauerschuss
                </div>
                <div className="text-white/60 text-xs">
                  🎮 Ein kleines Spiel von RückbauPRO
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}