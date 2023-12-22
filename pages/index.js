import { useState } from "react";
import Head from 'next/head';
import Header from "../components/Header";
import Note from "../components/Note";
import Addnote from "../components/Addnote";
import About from "../components/About";

export default function Home() {
  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    })
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight - 100, // Change the scroll distance as needed
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Head>
        <title>Notrz</title>
      </Head>
      <Header />
      <div className="addcontainer">
        <Addnote onAdd={addNote} />
      </div>
      <div className="notecontainer">
        {notes ? (notes.map((noteItem, index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })) : "no notes"}
      </div>
      <hr />
      <About />
      <button onClick={scrollDown} class="down-arrow-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  );
}

