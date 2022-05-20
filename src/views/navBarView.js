import React from 'react'
import { Link } from 'react-scroll'
import "../styles/navBar.css"

export default function NavBarContainer() {
  return (
    <div className='navBarContainer'>
        <Link activeClass="active" to="homeLink" spy={true} smooth={true}>Home</Link>
        <Link  to="rulesLink" spy={true} smooth={true}>Rules</Link>
        <Link  to="demoLink" spy={true} smooth={true}>Demo</Link>
        <Link  to="audioLink" spy={true} smooth={true}>Audio</Link>
        <Link  to="aboutLink" spy={true} smooth={true}>About</Link>
        <Link  to="serviceLink" spy={true} smooth={true}>Service</Link>
    </div>
  )
}