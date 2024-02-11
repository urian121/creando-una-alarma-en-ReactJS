import { useState, useRef } from "react";
import audioFile from "../assets/audio/alarma-para-despertar.mp3";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <h2>Reproductor de Audio</h2>
      <audio ref={audioRef}>
        <source src={audioFile} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
      <button onClick={togglePlay}>
        {isPlaying ? "Pausar" : "Reproducir"}
      </button>
    </div>
  );
}

export default AudioPlayer;
