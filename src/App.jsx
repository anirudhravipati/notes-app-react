import './App.css'
import EditorPane from './EditorPane'
import Sidebar from './Sidebar'
import { nanoid } from 'nanoid'
import React, { useEffect } from 'react'

function App() {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  )
  
  function createNewNote() {
      const newNote = {
          id: nanoid(),
          body: "<h1>New Note<h1>"
      }
      setNotes(prevNotes => [ ...prevNotes, newNote])
      console.log(`note ${newNote.id} created`)
  }

  function updateNote(text) {
      console.log(`updating with ${text}`)
      setNotes(oldNotes => oldNotes.map(oldNote => {
          return oldNote.id === currentNoteId
              ? { ...oldNote, body: text }
              : oldNote
      }))
  }
  
  function findCurrentNote() {
      const result = notes.find(note => {
          return note.id === currentNoteId
      }) 

      console.log(`result is ${JSON.stringify(result)}`)
      return result
  }

  useEffect(() => { 
    if(notes.length===1) setCurrentNoteId(notes[0].id)
    localStorage.setItem("notes", JSON.stringify(notes))
    console.log(JSON.stringify(notes))
  },[notes]); 

  useEffect(() => {
    console.log(`currentNoteId: ${currentNoteId}`)
  },[currentNoteId]);

  return (
    <div className="app">
      <Sidebar notes={notes} currentId={currentNoteId} addNewNote={createNewNote} setCurrentId={setCurrentNoteId}/>
      <EditorPane note={findCurrentNote()} currentId={currentNoteId} updateContent={updateNote} />
    </div>
  )
}

export default App
