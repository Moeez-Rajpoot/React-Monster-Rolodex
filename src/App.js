import { useState } from 'react';
import './App.css';

function App() {

  //other functions and hooks are declared and defined here
  console.log("render");
 const [serachvalue, setserachvalue] = useState('');
 console.log({serachvalue});
 


 function searchbox(event) {

  let value = event.target.value.toLocaleLowerCase();
  setserachvalue(value);
  
  
 };


  return (
    <div className="App">


      <input type="text" placeholder='Enter Monster name here'  onChange={searchbox} />
    
  
    </div>
  );
}

export default App;
