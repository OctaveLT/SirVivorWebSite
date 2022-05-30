import React from 'react'
import "../styles/home.css"

import logoImg from "../assets/logo_shadow.png";

export default function HomeView() {
  return (
    <div className='homeContainer' id="homeLink">
        <div>
          <img src={logoImg}/>
        </div>
        <button>Download Now</button>
    </div>
  )
}