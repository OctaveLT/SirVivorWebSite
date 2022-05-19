import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "../styles/main.css"

import HomeView from './homeView'
import AboutView from './aboutView'
import RulesView from './rulesView'
import DemoView from './demoView'
import AudioView from "./audioView"

export default function MainView(props) {
  return (
    <div className="mainContainer">
      {/* <SideBar /> */}
      <Routes>
        <Route path="/*" element={
          <div>
            <HomeView/>
            <RulesView/>
            <DemoView/>
            <AudioView/>
            <AboutView/>
          </div>
        }></Route>
        <Route path="/about" element={<div>about</div>}></Route>
      </Routes>
    </div>

  )
}