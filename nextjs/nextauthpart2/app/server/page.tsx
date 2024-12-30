import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Middleware() {
    const session = await auth();
    if(!session?.user){
        redirect("/")
    }
  return (
    <div>
        <p>{session?.user?.email}</p>
        <h1>Server Page </h1>
        
    </div>
  )
}
