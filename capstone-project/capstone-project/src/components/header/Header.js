import React from 'react'

function Header(props) {
  return (
    <div style={{padding:'10px'}}>
        <h1 style={{color:'white', fontWeight:'800', textAlign:'center', padding:'40', fontSize:'40px'}}>{props.text}</h1>
    </div>
  )
}

export default Header