import Alarma from "./components/Alarma";
import Alarma_1 from "./components/Alarma_1";
import AudioPlayer from "./components/ReproducirAudio";
import goku from "./assets/imgs/goku.jpg";
import "./App.css";

function App() {
  const imgGoku = {
    width: "250px",
    borderRadius: "50%",
    height: "250px",
    border: "10px solid #f2f2f2",
  };

  return (
    <>
      <img style={imgGoku} src={goku} />
      <Alarma_1 />
      <Alarma />
      <hr />
      <p>Reproducir Audio</p>
      <AudioPlayer />
    </>
  );
}

export default App;
