import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);

  
  function addNote(newNote) {
    setArr((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteItem(idx) {
    // console.log("item is deleted");
    // console.log(idx);
    setArr((prevItems) => {
      return prevItems.filter((item, index) => {
        return idx !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {arr.map((element, index) => (
        <Note
          key={index}
          index={index}
          title={element.title}
          content={element.content}
          deleteItem={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
