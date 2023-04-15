import './App.css';
import Header from './components/header/Header';
import LocationBox from './components/locationBox/LocationBox';
import WeatherBox from './components/weatherBox/WeatherBox';

function App() {
  return (
    <div className="App">
      <Header text="Weather Tracker" />
      <LocationBox location="Luton" comment="Mostly sunny this week with light rain" />

      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>

            <WeatherBox day='Monday' temp='17C'/>
            <WeatherBox day='Tuesday' temp='21C'/>
            <WeatherBox day='Wednesday' temp='18C'/>
            <WeatherBox day='Thursday' temp='22C'/>
            <WeatherBox day='Friday' temp='24C'/>

      </div>

    </div>
  );
}

export default App;
