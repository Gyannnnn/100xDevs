"use client";
import React, { useState } from 'react'

export default function page() {

const [cout,Setcount] = useState(0)
const time = Date.now()


  return (
    <div>
      {time}
      <button onClick={()=>Setcount(c => c+1)}>Click Me{cout}</button>
    </div>
  )
}
