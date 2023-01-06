// 1. import `ChakraProvider` component
import './Sidebar.css'
import React from 'react'

function Sidebar(props) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div class="sidebar">
      <div className="title-bar">
        <h1 class="sidebar-title">Notes</h1>
        <button className="title-bar-add-note" onClick={props.addNewNote}>+</button>
      </div>
    </div>
  )
}

export default Sidebar
