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
      setNotes(prevNotes => [ ...prevNotes, newNote])
      // setCurrentNoteId(newNote.id)
      console.log(`note ${newNote.id} created`)
  }

  function updateNote(text) {
      // console.log(`calling note update for ${currentNoteId} notes.length: ${notes.length}`)
      setNotes(oldNotes => oldNotes.map(oldNote => {
          return oldNote.id === currentNoteId
              ? { ...oldNote, body: text }
              : oldNote
      }))

      // console.log("Notes as accesed in updateNote")
      // for(let i = 0 ; i < notes.length ; i++)
      // {
      //     console.log(`id:${notes[i].id} body:${notes[i].body}`)
      // }
      // console.log("done")
  }
  
  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }



  useEffect(() => {
    console.log(`currentNoteId: ${currentNoteId}`)
  },[currentNoteId]);

  useEffect(() => { 
    if(notes.length===1) setCurrentNoteId(notes[0].id)

    console.log(`Showing notes \n notes length : ${notes.length}`)
    for(let i = 0 ; i < notes.length ; i++)
      console.log(`id: ${notes[i].id} body: ${notes[i].body}`)
  },[notes]);
 

  return (
    <div className="app">
      <Sidebar notes={notes} currentId={currentNoteId} addNewNote={createNewNote} setCurrentId={setCurrentNoteId}/>
      <EditorPane updateContent={updateNote} />
    </div>
  )
}

export default App
