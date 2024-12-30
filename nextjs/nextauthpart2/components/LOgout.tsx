"use client";

import { logout } from '@/actions/auth'
import React from 'react'

export default function LOgout() {
  return (
    <div>
        <div onClick={()=>logout()} className=''>
            Logout
        </div>
    </div>
  )
}
