import React from 'react'
import "../styles/audio.css"

export default function AudioView() {

  function showSounds() {
    return (
      soundsArray.map((sound, i) => 
          <iframe 
            width="100%" 
            height="45%" 
            key={"sound" + i} 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + sound.track +"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"}></iframe>
        )
      )
    }

  return (
    <div className='audioContainer' id="audioLink">
      <h2>Sound and Music</h2>
      <div>
        <div>
          <p>Sir Vivor has atmospheric music to dive into.</p>
          <p>The original music is created by group member Benjamin Esdor and can be enjoyed on Soundcloud outside of the game.</p>
        </div>
        <div className='audioScroll'>{showSounds()}</div>
      </div>
    </div>
  )
}

const soundsArray = [
  {
    track: "1268928949"
  },
  {
    track: "1268925622"
  },
  {
    track: "1268924689"
  },
  {
    track: "1268923183"
  },
  {
    track: "1268922274"
  }
]