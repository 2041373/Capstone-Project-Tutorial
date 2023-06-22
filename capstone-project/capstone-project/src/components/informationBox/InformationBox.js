import React from 'react'
import WeatherInfoBox from './WeatherInfoBox'

export default function InformationBox() {
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
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'black'/> 
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'white' /> 
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'black'/> 
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'white' /> 

  </div>

  

  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'black'/> 
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'white' /> 
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'black'/> 
    <WeatherInfoBox measurement = 'Temp' value = '24.9' color = 'white' /> 


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
