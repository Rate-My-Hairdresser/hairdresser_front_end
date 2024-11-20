import './App.css';
import LoadGoogleMaps from './LoadMaps';
import LocalRouter from "./LocalRouter"

function App() {
  return (
    <div className='app'>
        <LoadGoogleMaps />
        <LocalRouter />
    </div>
  );
}

export default App;
