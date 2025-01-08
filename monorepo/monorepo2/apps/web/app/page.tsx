"use client";

import React from 'react'
import { InputText } from '@repo/ui/inputtext'
import { Button } from '@repo/ui/button'
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  return (
    <div style={{
      height:'100vh',
      width:'100vw',
      backgroundColor:"black",
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',  
      alignItems:'center'
    }}>

     <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
 
     }}>
     <InputText onChange={()=>{
      alert("hello")
     }} placeholder="Room Number" />
     <Button onClick={()=>{
      router.push("/room/123")
     }} buttonName="Join Room" />
     </div>
      
    </div>
  )
}
 