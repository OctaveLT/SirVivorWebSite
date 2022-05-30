import React from 'react'
import "../styles/home.css"

import logoImg from "../assets/logo_shadow.png";

export default function HomeView() {
  return (
    <div className='homeContainer' id="homeLink">
        <div>
          <img src={logoImg}/>
        </div>
        <form action="https://drive.google.com/file/d/15FkpcdPc-VB4f83whM6mdJc-spX8IW80/view?usp=sharing" method="get" target="_blank">
          <button type="submit">Download Now</button>
        </form>
    </div>
  )
}