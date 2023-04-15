import React from 'react';
import './LocationBox.css';

function LocationBox(props) {
  return (
    <div className='background'>

        <h1 style={{color:'white', textAlign:'center', padding:'20' }}>{props.location}</h1>
        <div style={{position:'absolute', display:'flex', left:0, right:0, margin:'auto', border:'5px solid #FFFFFF', justifyContent:'center', width:'50%'}}></div>
        <br/>
        <p style={{color: 'white', textAlign:'center', padding:'20'}}>{props.comment}</p>

    </div>
  )
}

export default LocationBox