import './Sidebar.css'
import React from 'react'

function Sidebar(props) {
  const noteElements = props.notes.map((note,index) => (
    <div onClick={() => props.setCurrentId(note.id)} key={note.id} className={`note-card ${note.id === props.currentId ? `selected-note` : ``}`}>
      <h2>Note {index}</h2>
    </div>
  ))

  console.log("noteElements")
  console.log(noteElements);

  return (
    <div class="sidebar">
      <div className="title-bar">
        <h1 class="sidebar-title">Notes</h1>
        <button className="title-bar-add-note" onClick={props.addNewNote}>+</button>
      </div>
      <div className="note-list">
        {noteElements}
      </div>
    </div>
  )
}

export default Sidebar
