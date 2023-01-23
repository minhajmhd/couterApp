import './App.css';
import Counterclass from './components/Counterclass';
import Counterfunction from './components/Counterfunction';
import { useState } from 'react';
import User from './components/User';
import Employee from './components/Employee';

function App() {
  const [username,setUsername]=useState('Minhaj')
  const [age,setage]=useState('21')
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      
    }} className="App">
      <header className="App-header">
       <Counterfunction/>
       <Counterclass/>
       <User username={username} age={age}/>
       <Employee/>
      </header>
    </div>
  );
}

export default App;
