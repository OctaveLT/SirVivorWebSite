import React from 'react'
import "../styles/home.css"

import logoImg from "../assets/Logo3.png";

export default function HomeView() {
  return (
    <div className='homeContainer' id="homeLink">
        <div>
          <img src={logoImg}/>
        </div>
    </div>
  )
}