import React from 'react'

function Header(props) {
  return (
    <div>
        <h1 style={{color:'white', fontWeight:'800', textAlign:'center', padding:'30'}}>{props.text}</h1>
    </div>
  )
}

export default Header