import React from 'react'
import "../styles/home.css"

import logoImg from "../assets/pics/logo_shadow.png";

export default function HomeView() {
  return (
    <div className='homeContainer' id="homeLink">
        <div>
          <img src={logoImg}/>
        </div>
        <p>
          Sir Vivor is a fast paced, roguelike action game where the player has to survive waves of enemies through combat by attacking or utilizing various skills that the player has learned. Every skill requires a set of resources to perform.
        </p>
        <form action="https://drive.google.com/file/d/15FkpcdPc-VB4f83whM6mdJc-spX8IW80/view?usp=sharing" method="get" target="_blank">
          <button type="submit">Download Now</button>
        </form>
    </div>
  )
}