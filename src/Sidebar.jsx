import './Sidebar.css'
import React from 'react'

function Sidebar(props) {
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
