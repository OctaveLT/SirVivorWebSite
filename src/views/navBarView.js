import React from 'react'
import { Link } from 'react-scroll'
import "../styles/navBar.css"

export default function NavBarView() {
  return (
    <div className='navBarContainer'>
        <Link activeClass="active" to="homeLink" spy={true} smooth={true}>Home</Link>
        <Link  to="rulesLink" spy={true} smooth={true}>Features</Link>
        <Link  to="demoLink" spy={true} smooth={true}>Demo</Link>
        <Link  to="audioLink" spy={true} smooth={true}>Audio</Link>
        <Link  to="aboutLink" spy={true} smooth={true}>The Team</Link>
    </div>
  )
}