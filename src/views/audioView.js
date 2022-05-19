import React from 'react'
import "../styles/audio.css"

export default function AudioView() {
  return (
    <div className='audioContainer'>
        <h1>Sir Vivor</h1>
        <audio src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1268928949&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" controls autoPlay/>
        
        <iframe width="50%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1268928949&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_recommendations=false">
          </iframe>
{/*           <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a href="https://soundcloud.com/sir-vivor-music" title="Sir Vivor Music" target="_blank" style="color: #cccccc; text-decoration: none;">Sir Vivor Music</a>
         · <a href="https://soundcloud.com/sir-vivor-music/the-field-1" title="The Field" target="_blank" style="color: #cccccc; text-decoration: none;">The Field</a>
         </div> */}
    </div>
  )
}