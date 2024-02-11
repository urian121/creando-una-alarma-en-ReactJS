import Alarma from "./components/Alarma";
import Alarma_1 from "./components/Alarma_1";
import AudioPlayer from "./components/ReproducirAudio";
import "./App.css";

function App() {
  return (
    <>
      <Alarma_1 />
      <Alarma />
      <hr />
      <p>Reproducir Audio</p>
      <AudioPlayer />
    </>
  );
}

export default App;
