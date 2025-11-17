'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Countdown from '../components/Countdown';

export default function SecondScreen() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element and play music
    const audio = new Audio('/john_pork_is_calling.mp3');
    audio.loop = true;
    audio.volume = 0.5; // Set volume to 50%
    
    // Try to play the audio
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Audio started playing
          audioRef.current = audio;
        })
        .catch((error) => {
          // Autoplay was prevented - user interaction required
          console.log('Autoplay prevented. User interaction required to play music.');
        });
    }

    // Cleanup: pause and remove audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Back Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute left-3 top-3 z-50 rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800 sm:left-4 sm:top-4"
      >
        ← Volver
      </button>

      {/* Top Red Section - One fifth of screen */}
      <div className="relative flex h-[20vh] items-start justify-center bg-[#DC143C] pt-8 sm:pt-12">
        {/* White Rounded Banner */}
        <div className="rounded-2xl bg-white px-6 py-3 sm:px-8 sm:py-4">
          <h1 className="text-xl font-bold uppercase tracking-wide text-black sm:text-2xl md:text-3xl">
            LA GALA DEL AÑO
          </h1>
        </div>
      </div>

      {/* White Triangle Section with Emblem */}
      <div className="relative -mt-1 flex flex-col items-center bg-white">
        {/* Black Horizontal Line */}
        <div className="h-1 w-full bg-black"></div>
        
        {/* White Triangle - Smaller */}
        <div className="relative -mt-1 h-16 w-full overflow-hidden sm:h-20">
          <div className="absolute left-1/2 top-0 h-full w-[200%] -translate-x-1/2 bg-white" 
               style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
          </div>
        </div>

        {/* Emblem Container - Philip Morris Logo Image - Shifted Down */}
        <div className="relative -mt-6 flex flex-col items-center sm:-mt-8">
          <img
            src="/logo-philip-morris.jpg"
            alt="Philip Morris Logo"
            className="h-auto w-auto max-w-[200px] object-contain sm:max-w-[250px]"
          />
        </div>
      </div>

      {/* Countdown Section */}
      <div className="flex flex-col items-center justify-center bg-white py-1">
        <Countdown />
      </div>

      {/* Bottom Section with Large EC31 Text with Black Box */}
      <div className="flex items-center justify-center bg-white pb-2 pt-4 sm:pb-4 sm:pt-6">
        <h2 className="font-serif text-5xl font-bold text-black sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="rounded-lg border-4 border-black px-3 py-1 sm:px-4 sm:py-2">
            EC31
          </span>
        </h2>
      </div>
    </div>
  );
}

