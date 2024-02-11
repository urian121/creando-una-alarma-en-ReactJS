import { useState, useRef } from "react";
import audioFile from "../assets/audio/alarma-para-despertar.mp3"; // Importa el archivo de audio

function Alarm() {
  const [alarmTime, setAlarmTime] = useState("");
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const audioRef = useRef(null);

  const handleAlarmSet = () => {
    if (alarmTime) {
      const alarmDateTime = new Date(alarmTime);
      const currentTime = new Date();

      if (alarmDateTime > currentTime) {
        const timeUntilAlarm = alarmDateTime - currentTime;
        setTimeout(() => {
          // Cuando suena la alarma
          if ("Notification" in window) {
            Notification.requestPermission().then(function (permission) {
              if (permission === "granted") {
                new Notification("¡Hora de despertar!", {
                  body: "¡Es hora de comenzar tu día!",
                });
              }
            });
          }

          // Reproducir el audio
          if (audioRef.current) {
            audioRef.current.play();
          }

          setIsAlarmSet(false);
        }, timeUntilAlarm);

        setIsAlarmSet(true);
      } else {
        alert("La hora de la alarma debe ser en el futuro.");
      }
    } else {
      alert("Por favor, ingresa una hora válida para la alarma.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h1>Alarma con Sonido + Notificación</h1>
      <input
        type="datetime-local"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={handleAlarmSet}>
        {isAlarmSet ? "Alarma Configurada" : "Configurar Alarma"}
      </button>
      <audio ref={audioRef}>
        {/* Utiliza la variable audioFile como la fuente del audio */}
        <source src={audioFile} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Alarm;
