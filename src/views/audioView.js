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
            frameBorder="no" 
            allow="autoplay" 
            src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + sound.track +"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"}></iframe>
        )
      )
    }

  return (
    <div className='audioContainer' id="audioLink">
      <h2>Audio</h2>
      <div>
        <div>
          <p>Sir Vivor has atmospheric music to dive into.</p>
          <p>The original music is created by group member Benjamin Esdor and can be enjoyed on SoundCloud outside of the game.</p>
        </div>
        <div className='audioScroll'>{showSounds()}</div>
      </div>
    </div>
  )
}

// Tracks by Benjamin Esdor: soundcloud.com/sir-vivor-music
const soundsArray = [
  {
    track: "1276862629"
  },
  {
    track: "1276862260"
  },
  {
    track: "1276861432"
  },
  {
    track: "1268923183"
  },
  {
    track: "1268922274"
  }
]