import { useState } from 'react';
import './App.css';

function App() {

  //other functions and hooks are declared and defined here

 const [serachvalue, setserachvalue] = useState('');



 const searchbox = (event) => {

  let value = event.target.value.toLocaleLowerCase();
  setserachvalue(value);
  console.log({serachvalue});
 
  
 };


  return (
    <div className="App">


      <input type="text" placeholder='Enter Monster name here'  onChange={searchbox} />
    
  
    </div>
  );
}

export default App;
