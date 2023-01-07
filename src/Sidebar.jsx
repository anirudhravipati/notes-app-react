import './Sidebar.css'
import React from 'react'
import {BsTrashFill} from "react-icons/bs"

function Sidebar(props) {
  let parser = new DOMParser();
  var maxLength = 25;

  const noteElements = props.notes.map((note) => {

    let parsedHtml = parser.parseFromString(note.body, 'text/html');   
    var title = parsedHtml.body.firstChild.textContent

    if(title.length > maxLength)
    {
      title = `${title.substring(0,maxLength-3)}...`
    }
    if(title.length===0)
    {
      title=`untitled`
    }

    return (
    <div onClick={() => props.setCurrentId(note.id)} key={note.id} className={`note-card ${note.id === props.currentId ? `selected-note` : ``}`}>
      <h2>{title}</h2>
      <button onClick={(event) => props.deleteNote(event,note.id)} className={`delete-button ${note.id === props.currentId ? `selected-delete-note` : ``}`}>
        <BsTrashFill />
      </button>
    </div>)
  })

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
