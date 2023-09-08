
import { useState } from 'react';
import './App.css';
// import Joke from './Components/Joke';
import WindowTracker from './WindowTracker';

function App() {

  const [show, setShow] = useState(true);
  

  function toggle(){
    setShow((prevShow) => !prevShow)
  }
  return (
    <div className="container">
    <button onClick={toggle}>
     Toggle WindowTracker
     </button>
    {show && <WindowTracker />} 
    {/* <Joke/> */}
     
    </div>
  );
}

export default App;
