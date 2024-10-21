import React from "react";
import { useState } from "react";
export default function App() {
  let [count, setcount] = useState(10);

  function increase() {
    setcount(count++);
  }

  return (
    <div>
      <button onClick={increase}>Count is {count}</button>
    </div>
  );
}
