import { useState } from "react";
import Header from "../components/Header";
import Note from "../components/Note";
import Addnote from "../components/Addnote";

export default function Home() {
  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    })
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((i, index) => {
        return index != id;
      })
    })
  }

  return (
    <div>
      <Header />
      <div className="addcontainer">
        <Addnote onAdd={addNote} />
      </div>
      <div className="notecontainer">
        {notes.map((i, index) => {
          return <Note key={index} title={i.title} content={i.content} onDelete={deleteNote} />
        })}
      </div>
    </div>
  );
}

