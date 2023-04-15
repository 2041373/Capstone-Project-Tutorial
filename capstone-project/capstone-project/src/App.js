import './App.css';
import Header from './components/header/Header';
import LocationBox from './components/locationBox/LocationBox';

function App() {
  return (
    <div className="App">
      <Header text="Weather Tracker" />
      <LocationBox location="Luton" comment="Mostly sunny this week with light rain" />

    </div>
  );
}

export default App;
