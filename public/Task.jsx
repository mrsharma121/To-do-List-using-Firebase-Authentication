import React, { useState } from 'react'
const Note = (props) =>{
    const [note, setNote] = useState({
        title: "",
        content: ""
    }) 
    const InputEvent = (event) =>{
        const {name, value} = event.target
        setNote((prevData) =>{
            return {
                ...prevData,
                [name] : value,
            }
        })
        console.log(note)
    }
    const addEvent = () =>{
        // e.preventDefault() 
        props.passNote(note)
        setNote({
            title: '',
            content: '',
    })
    };
    return (
        <>
        <div>
            <form>
                <input 
                type = "text"
                name = "title"
                value = {note.title}
                onChange = {InputEvent}            
                placeholder = "Enter the Task"
                autoComplete = "off"

                />
                <br/>
                <textarea
                type = "text"
                name = "content"
                value = {note.content}
                onChange = {InputEvent} 
                placeholder = "Enter The Details"
                rows = ""
                column = ""
                ></textarea>
                <button
                onClick = {addEvent}
                >Click Me</button>
            </form>
        </div>   
        </>
    )
}

export default Note
