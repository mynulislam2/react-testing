import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [color,setColor] = useState("red")
const [Check, setCheck] = useState(false)
const newColor=color=="red"?"blue":"red"

  return (
    <div className="App">
<button style={{backgroundColor:color}} disabled={Check} onClick={()=>setColor(newColor)}>Change to {newColor}</button>
<input type="checkbox" onClick={()=>setCheck(!Check)} name="" value=""/>
    </div>
  );
}

export default App;
