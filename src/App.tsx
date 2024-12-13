import { useRef } from "react"
import { Fireworks } from '@fireworks-js/react'
import './App.css'

import audioFireWork from '../public/fireworkblast-106275.mp3'

function App() {
  const fireworksRef = useRef(null)

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center bg-black">
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
              volume: { min: 1, max: 100 },
              files: [audioFireWork]
            },
            delay: { min: 50, max: 500 },
            acceleration: 0.05,
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
