import Login from '@/login/Login'
import Weather from '@/weather/Weather'
import TranscriptionView from '@/transcription/TranscriptionView'
import Backdrop from '@/login/Backdrop';
import LogModal from '@/login/LogModal';

function App() {

  return (
    <div>
      {/* <Weather /> */}
      <TranscriptionView />
      <LogModal />
      <Backdrop />
    </div>
  )
}

export default App;
