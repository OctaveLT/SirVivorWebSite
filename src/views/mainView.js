import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "../styles/main.css"

export default function MainView(props) {
  return (
    <div className="main">
      {/* <SideBar /> */}
      <Routes>
        <Route path="/*" element={<div>main</div>}></Route>
        <Route path="/about" element={<div>about</div>}></Route>
      </Routes>
    </div>

  )
}