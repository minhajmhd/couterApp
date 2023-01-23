import React from 'react'
import { useState } from 'react'

function Counterfunction() {
    const [counter,setCounter]=useState(0);
  // counter - state - to hold value
  function incrementcounter(){
    setCounter(counter+1);
  }
  function decrementcounter() {
    setCounter(counter-1);
  }
  function resetcounter(){
    setCounter(0);
  }
  return (
    <div>Counterfunction
         <h2 className='counter-name'>Counter Application</h2>
        <h1 className='number' >{counter}</h1>
        <button className='btn'
        style={
          {
            backgroundColor:'green',
            color:'white',
          }
        }
        onClick={incrementcounter}>Add</button>
        <button className='btn' style={{
          backgroundColor:'red',
          color:'white',
        }} onClick={decrementcounter}>Remove</button>
        <button className='btn' style={{
          backgroundColor:'grey',
          color:'white',
        }} onClick={resetcounter}>Reset</button>
    </div>
  )
}

export default Counterfunction