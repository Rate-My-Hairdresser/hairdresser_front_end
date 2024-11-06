import './App.css';
import LoadGoogleMaps from './LoadMaps';
import LocalRouter from "./LocalRouter"
import HairdresserFrontPage from "./pages/hairdresser_frontpage";
import HairdresserLoginPage from "./pages/hairdresser_login";
import Homepage from "./pages/home_page";

function App() {
  return (
    <div className='app'>
        <LoadGoogleMaps />
        <LocalRouter />
    </div>
  );
}

export default App;
