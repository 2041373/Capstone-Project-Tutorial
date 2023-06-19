import './App.css';
import Header from './components/header/Header';
import LocationBox from './components/locationBox/LocationBox';
import SearchBox from './components/searchBox/SearchBox';
import WeatherBox from './components/weatherBox/WeatherBox';
import WindBox from './components/windBox/WindBox';

function App() {
  return (
    <div className="App">
      <Header text="Weather Tracker" />
      <LocationBox location="Luton" comment="Mostly sunny this week with light rain" />

      <SearchBox/>

      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>

            <WeatherBox day='Monday' temp='17C'/>
            <WeatherBox day='Tuesday' temp='21C'/>
            <WeatherBox day='Wednesday' temp='18C'/>
            <WeatherBox day='Thursday' temp='22C'/>
            <WeatherBox day='Friday' temp='24C'/>

      </div>

      <p style={{color:'white'}}>Visitbility | 10,000</p>

      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginLeft:'10'}}>
        <WindBox measurement='Wind Speed' value='0.62'/>
        <WindBox measurement='Wind Deg' value='0.62'/>
        <WindBox measurement='Wind Gust' value='0.62'/>
        <WindBox measurement='Wind Speed' value='0.62'/>
        <WindBox measurement='Wind Speed' value='0.13'/>

      </div>



    </div>
  );
}

export default App;
