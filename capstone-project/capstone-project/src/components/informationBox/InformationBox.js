import React from 'react'
import WeatherInfoBox from './WeatherInfoBox'

export default function InformationBox(props) {

  const {temp, temp_min, temp_max, feels_like, humidity, pressure} = props.data.main || {};
  const {description, main} = props.data.weather[0] || {};
  console.log(temp);


  return (
    <div style={{display:'flex', justifyContent:'space-around', flexDirection:'row', background:'linear-gradient(180deg, rgba(21, 98, 191, 1) 0%, rgba(3, 41, 105, 1) 100%)', padding: '50px', margin:'50px'}}>

        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <h1 style={{color: 'white', fontSize: 50}}>24</h1>

             <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <h1 style={{color:'white', fontSize: 15}}>rain | moderate | Today :    01:30 | zocca </h1>
              <h1 style={{color:'white', fontSize: 15}}>rain 1h:36 Cloud:100 Time Zone:7200  </h1>
            </div>


  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft:'50px'  }}>
 
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 50 }}>
    <WeatherInfoBox measurement = 'Temp' value = {temp} color = 'black'/> 
    <WeatherInfoBox measurement = 'Temp_Min' value = {temp_min} color = 'white' /> 
    <WeatherInfoBox measurement = 'Pressure' value = {pressure} color = 'black'/> 
    <WeatherInfoBox measurement = 'Sea Level' value = '24.9' color = 'white' /> 

  </div>

  

  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <WeatherInfoBox measurement = 'Feels Like' value = {feels_like} color = 'black'/> 
    <WeatherInfoBox measurement = 'Temp_Max' value = {temp_max} color = 'white' /> 
    <WeatherInfoBox measurement = 'Humidity' value = {humidity} color = 'black'/> 
    <WeatherInfoBox measurement = 'Ground Level' value = '24.9' color = 'white' /> 


  </div>
  </div>


       
        </div>

    <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <h1 style={{color:'white', fontSize:15}}>sunrise </h1>
            <h1 style={{color:'white', fontSize:15}}>sunset </h1>
        </div>
    </div>

    </div>
  )
}
