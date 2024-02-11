import { useState } from "react";

function Alarm() {
  const [alarmTime, setAlarmTime] = useState("");
  const [isAlarmSet, setIsAlarmSet] = useState(false);

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
    <div>
      <h1 style={{ fontWeight: "bold" }}>
        Alarma con notificacion <hr />
      </h1>
      <input
        type="datetime-local"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={handleAlarmSet}>
        {isAlarmSet ? "Alarma Configurada" : "Configurar Alarma"}
      </button>
    </div>
  );
}

export default Alarm;
