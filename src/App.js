import './App.css';
import LoadGoogleMaps from './LoadMaps';
import LocalRouter from "./LocalRouter"
import HairdresserFrontPage from "./pages/hairdresser_frontpage";
import HairdresserLoginPage from "./pages/hairdresser_login";

function App() {
  return (
    <div className='app'>
        <HairdresserLoginPage />
    </div>
  );
}

export default App;
