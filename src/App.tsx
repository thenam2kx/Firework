import { useEffect, useRef } from "react"
import { Fireworks } from '@fireworks-js/react'
import './App.css'

import audioFireWork from '/fireworkblast-106275.mp3'
import firework_whistle from '/firework-whistle-190306.mp3'
import knall1_lang from '/knall1_lang-48122.mp3'
import fireworks_080492 from '/080492_fireworks-47616.mp3'

import happyAudio from '/Happy_New_Year.mp3'

function App() {
  const fireworksRef = useRef(null)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.addEventListener('click', () => {
      if (audioRef.current) {
        audioRef.current.play();
        audioRef.current.volume = 0.5;
      }
    });
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center bg-black">

      <div className="">
        <audio ref={audioRef} loop>
          <source src={happyAudio} type="audio/mp3" />
        </audio>
      </div>

      <div className="fireworks-area absolute top-0 left-0 w-full h-full bg-black">
        <Fireworks
          className="absolute top-0 left-0 z-99 w-full h-full bg-black"
          ref={fireworksRef}
          options={{
            opacity: 0.7,
            particles: 200,
            explosion: 7,
            intensity: 70,
            mouse: {
              click: true
            },
            sound: {
              enabled: true,
              volume: { min: 50, max: 100 },
              files: [audioFireWork, firework_whistle, knall1_lang, fireworks_080492]
            },
            delay: { min: 50, max: 500 }
          }}
        />
      </div>

      <div className="content absolute text-center text-white">
        <h1 className="title">Happy Lunar New Year!<br />Happy Coding...
          <div className="animate-color">
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
          </div>
        </h1>
        <div className="mt-[20px] flex justify-center">
          <a
            href="https://portfolio-gamma-rust-97.vercel.app/"
            target="_blank"
            className="text-white flex items-center justify-center gap-2 text-base hover:text-[#ff7979]"
          >
            Thenam2xk - Devfulls!
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
