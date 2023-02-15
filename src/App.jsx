import TranscriptionView from "./transcription/transcriptionView";
import Weather from "../weather/Weather";
import Login from "../login/login";

function App() {

  return (
    <div>
      <Login />
      <Weather />
      <TranscriptionView />
    </div>
  )
}

export default App;
