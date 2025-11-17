'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-13T18:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-2 flex flex-col items-center gap-1">
      <div className="flex gap-2 text-center sm:gap-3">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-semibold uppercase text-gray-600 sm:text-xs">
            Días
          </div>
        </div>
        <div className="flex items-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
          :
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-semibold uppercase text-gray-600 sm:text-xs">
            Horas
          </div>
        </div>
        <div className="flex items-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
          :
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-semibold uppercase text-gray-600 sm:text-xs">
            Min
          </div>
        </div>
        <div className="flex items-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
          :
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-[10px] font-semibold uppercase text-gray-600 sm:text-xs">
            Seg
          </div>
        </div>
      </div>
    </div>
  );
}

