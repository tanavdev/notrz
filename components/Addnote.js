import { useState } from "react";

export default function Addnote(props) {
    const [note, setNote] = useState(
        {
            title: "",
            content: ""
        }
    )
    
    function handleChange(e){
        const {name, value} = e.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
    function submitNote(){
        props.onAdd(note)
    }
    return (
        <div className="addnote">
            <input className="title" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
            <textarea className="content" name="content" onChange={handleChange} value={note.content} rows="3" placeholder="Take a note..." />
            <div className="add">
                <button onClick={submitNote}>+</button>
            </div>
        </div>
    );
}
