// 1. import `ChakraProvider` component
import './App.css'
import EditorPane from './EditorPane'
import Sidebar from './Sidebar'
import { nanoid } from 'nanoid'
import React, { useEffect } from 'react'

function App() {
  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  )
  
  function createNewNote() {
      const newNote = {
          id: nanoid(),
          body: "<h1>Type your markdown note's title here<h1>"
      }
      setNotes(prevNotes => [newNote, ...prevNotes])
      setCurrentNoteId(newNote.id)
      console.log(`note ${newNote.id} created setting current id is ${currentNoteId}`)
  }

  function updateNote(text) {
      console.log(`calling note update for ${currentNoteId} notes.length: ${notes.length}`)
      setNotes(oldNotes => oldNotes.map(oldNote => {
          return oldNote.id === currentNoteId
              ? { ...oldNote, body: text }
              : oldNote
      }))
  }
  
  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }

  useEffect(() => {
    console.log(`notes length : ${notes.length}`)
  },[notes]);

 

  return (
    <div className="app">
      <Sidebar addNewNote={createNewNote} />
      <EditorPane updateContent={updateNote} />
    </div>
  )
}

export default App
