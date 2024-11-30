import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {

  const[counterVisible,SetcounterVisible] = useState(true);

  const [count, Setcount] = useState(0);
  function increase() {
    Setcount(count + 1);
  }
  function decrease() {
    if (count == 0) {
      alert("You reached 0");
    } else {
      Setcount(count - 1);
    }
  }
  function reset() {
    Setcount(0);
  }
  useEffect(()=>{
      let clock = setInterval(()=>{  // mounting
        SetcounterVisible(c => !c)
      },5000);
      return function(){
        clearInterval(clock) // unmounting 
      }
      
  },[])



  return (
    <div>
      <b>Counter Website</b>
      <h1>{count}</h1>
      <button onClick={increase}>increase the value</button>
      <button onClick={decrease}>Decrase The Value</button>
      {
        counterVisible && <button onClick={reset}>Reset the Value</button>
      }
    </div>
  );
}
