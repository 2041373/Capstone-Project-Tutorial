import React from 'react'
import './WeatherBox.css'
import cloud from '../../assets/cloud.png'

function WeatherBox(props) {
  return (
    <div className='box'>

        <p style={{color:'white', textAlign:'center'}}> {props.day} </p>
        <img style={{width:'100px'}} src={cloud} alt='cloud'></img>
        <p style={{color:'white', textAlign:'center'}}> {props.temp} </p>
    </div>
  )
}

export default WeatherBox