import './App.css';
import Header from './components/header/Header';
import InformationBox from './components/informationBox/InformationBox';
import LocationBox from './components/locationBox/LocationBox';
import SearchBox from './components/searchBox/SearchBox';
import WeatherBox from './components/weatherBox/WeatherBox';
import WindBox from './components/windBox/WindBox';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState({});

  const API = '049909705e431bbafa807eb4a6840770';

  const searchLocation = (value) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}`)
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEnterPress = (value) => {
    console.log(weatherData);
    searchLocation(value);
  };

  const weatherDescription = weatherData.weather?.[0]?.description || ''; // if weatherData.weather is undefined, then set weatherDescription to an empty string

  return (
    <div className="App">
      <Header text="Weather Tracker" />
      <LocationBox location={weatherData.name} comment={weatherDescription} />

      <SearchBox onEnterPress={handleEnterPress} />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <WeatherBox day="Monday" temp="17C" />
        <WeatherBox day="Tuesday" temp="21C" />
        <WeatherBox day="Wednesday" temp="18C" />
        <WeatherBox day="Thursday" temp="22C" />
        <WeatherBox day="Friday" temp="24C" />
      </div>

      <div>
        <InformationBox data = {weatherData}/>
      </div>

      <p style={{ color: 'white' }}>Visitbility | 10,000</p>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '10' }}>
        <WindBox measurement="Wind Speed" value="0.62" />
        <WindBox measurement="Wind Deg" value="0.62" />
        <WindBox measurement="Wind Gust" value="0.62" />
        <WindBox measurement="Wind Speed" value="0.62" />
        <WindBox measurement="Wind Speed" value="0.13" />
      </div>
    </div>
  );
}

export default App;
