import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import Addnote from "../components/Addnote";
import notes from "../notes"



export default function Home() {
  function showNote(i) {
    return <Note title={i.title} content={i.content} />
  }
  function addNote(note) {
    console.log(note)
  }

  return (
    <div>
      <Header />
      <div className="addcontainer">
        <Addnote onAdd={addNote} />
      </div>
      <div className="notecontainer">
        {notes.map(showNote)}
      </div>
      <Footer />
    </div>
  );
}

