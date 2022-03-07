import React, { useState } from 'react';
import Note from './Task';
import AddNote from './Details';
function App() {
  const [addItem, setAddItem] = useState([]);
    const addNote = (note) =>{
        setAddItem((prevData)=>{
            return [...prevData, note]
        });
        console.log(addItem)
      };
    const onDelete =(id) =>{
      setAddItem((oldData) =>{
        oldData.filter((curData, indx) =>{
          return indx!==id;
        })
      })
    };
  return (
      <>
        <Note passNote= {addNote}/>
        {addItem.map((val, index) => {
          return ( <AddNote
          key = {index}
          id = {index}
          title = {val.title}
          content = {val.content}
          deleteItem  = {onDelete}
          />
        )})
        } 
      </>
    );
}

export default App;
