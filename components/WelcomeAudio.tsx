'use client';

import { useEffect, useState } from 'react';

export default function WelcomeAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-play after a short delay on every page load
    // COMMENTED OUT: Voice feature disabled
    // const timer = setTimeout(() => {
    //   playAudio();
    // }, 1500);
    
    // return () => clearTimeout(timer);
  }, []);

  const playAudio = () => {
    // COMMENTED OUT: Voice feature disabled
    // Create speech synthesis
    // const utterance = new SpeechSynthesisUtterance(
    //   'Welcome to WOW Gutter Cleaning! Get your free quote today and protect your home with our professional services.'
    // );
    
    // Configure voice settings
    // utterance.rate = 0.9;
    // utterance.pitch = 1.0;
    // utterance.volume = 1.0;
    
    // Try to use a more natural voice
    // const voices = speechSynthesis.getVoices();
    // const preferredVoice = voices.find(voice => 
    //   voice.lang.includes('en-GB') || voice.lang.includes('en-US')
    // );
    // if (preferredVoice) {
    //   utterance.voice = preferredVoice;
    // }

    // Event handlers
    // utterance.onstart = () => {
    //   setIsPlaying(true);
    // };

    // utterance.onend = () => {
    //   setIsPlaying(false);
    // };

    // utterance.onerror = () => {
    //   setIsPlaying(false);
    // };

    // Play audio
    // speechSynthesis.speak(utterance);
  };

  return (
    <>
      {isPlaying && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-[#19C58B] to-[#14B27D] text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3">
            <div className="flex gap-1">
              <span className="w-1 h-6 bg-white rounded-full animate-pulse"></span>
              <span className="w-1 h-6 bg-white rounded-full animate-pulse delay-75"></span>
              <span className="w-1 h-6 bg-white rounded-full animate-pulse delay-150"></span>
            </div>
            <span className="font-bold">Welcome WOW GUTTERS...</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .delay-75 {
          animation-delay: 75ms;
        }
        
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </>
  );
}
