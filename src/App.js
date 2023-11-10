import './App.css';
import { useState } from 'react';

function App() {
  const [text , settext] = useState("");
  const changeText = (event)=>{
      settext(event.target.value);
  }
  return (
    <>
       <div className="container">
       <div className="mb-3">
        <h2>Responsive paragraph word counter</h2>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={changeText}
          placeholder="Enter text here"
          
        ></textarea>
        </div>
        </div>

        <div className="container">
        <h2>Number of words are {(text === '') ? 0 : text.split(" ").length}</h2>
        </div>
    </>
 
  );
}

export default App;
