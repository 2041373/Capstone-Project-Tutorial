import React from 'react'
import Fan from '../../assets/fan.jpg'

export default function WindBox(props) {
  return (
    <div style={
        {display:'flex',
         flexDirection:'row',
         backgroundColor:'rgba(0,0, 65, 0.5)',
         border:'1px solid #FFFFFFF',
         borderRadius:'12px',
         padding:'20',
         width:'10%',
         margin:'20'
         }}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
             <h2 style={{color:'white', fontSize:'14',fontWeight:'500', textAlign:'center'}}>{props.measurement}</h2>
              <h2 style={{color:'white', fontSize:'16', fontWeight:'600', textAlign:'center'}}>{props.value}</h2>
              <div style={{alignSelf:'center'}}>
                    <img src={Fan} alt='' style={{maxWidth:'25px', alignSelf:'center'}}></img>
              </div>
         </div>
    </div>
  )
}
