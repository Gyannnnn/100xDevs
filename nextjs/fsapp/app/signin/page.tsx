"use client";
import { useState } from "react";
import axios from "axios";

export default function signin() {
    const[username,Setusername] = useState("")
    const[password,Setpassword] = useState("")
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-1/2 w-1/2 p-2 flex flex-col gap-2 items-center justify-center">
      <input onChange={(e)=>Setusername(e.target.value)} className="bg-transparent border text-white px-1 py-2 " type="text" placeholder="Enter Your Username" />
      <input onChange={(e)=>Setpassword(e.target.value)} className="bg-transparent border text-white px-1 py-2 " type="password" placeholder="Enter Your Password" />
      <button onClick={()=>{
        axios.post("http://localhost:3000/api/v1/signin",{
            username,
            password
        })

      }} className="text-black bg-white px-10 py-2 rounded-md ">Sign Up</button>
      </div>
    </div>
  );
}
