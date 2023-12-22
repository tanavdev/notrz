import { useState } from "react";

export default function Addnote(props) {
    const [isExpanded, setExpanded] = useState(false)
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
        if(note.title != "" && note.content != ""){
            props.onAdd(note)
            setNote({ title: "", content: "" })
        } else {
            alert("Enter both title and description.")
        }
    }
    return (
        <div className="addnote">
            {isExpanded && (
                <input className="title" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
            )}
            
            <textarea onClick={() => setExpanded(true)} className="content" name="content" onChange={handleChange} value={note.content} cols={6} rows={isExpanded ? 3 : 1} placeholder="Take a note..." />
            
            {isExpanded && (        
                <div className="add">
                    <button onClick={submitNote}>ADD</button>
                </div>
            )}
        </div>
    );
}
