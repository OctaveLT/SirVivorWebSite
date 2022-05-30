import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "../styles/main.css"

import HomeView from './homeView'
import AboutView from './aboutView'
import RulesView from './rulesView'
import DemoView from './demoView'
import AudioView from "./audioView"
import NavBarView from "./navBarView"

export default function MainView(props) {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/*" element={
          <div>
            <NavBarView/>
            <div className='scrollView'>
              <HomeView/>
              <RulesView/>
              <DemoView/>
              <AudioView/>
              <AboutView id="serviceLink"/>
            </div>
          </div>
        }></Route>
      </Routes>
    </div>

  )
}