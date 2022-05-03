import React from 'react'
import "../styles/demo.css"

export default function DemoView() {
  return (
    <div className='demoContainer'>
      <div>
        <h5>Demo</h5>
        <iframe width="645" height="363" src="https://www.youtube.com/embed/KzGqqemxQ90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

  )
}