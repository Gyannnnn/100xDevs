"use client";

import { login } from '@/actions/auth';
import React from 'react'
import { FaGithub } from "react-icons/fa";

export default function LoginWithGithub() {
  return (
    <div className='flex items-center justify-center gap-2 py-2 hover:cursor-pointer bg-zinc-700 text-white rounded-md'>
        <FaGithub onClick={()=>login("github")}/>
        <p>Continue With Github</p>        
    </div>
  )
}
