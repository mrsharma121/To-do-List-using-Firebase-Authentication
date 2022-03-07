import React from 'react';


const AddNote = (props) =>{
    const DeleteNote = () =>{
        props.deleteItem(props.id)
    }

    return (
        <>
        <div>
          <h2>{props.title}</h2>  
          <h4>{props.content}</h4>
          <button onClick = {DeleteNote}>Delete</button>
          </div>
        </>
    )
};   

export default AddNote
