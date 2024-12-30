import Login from '@/components/login'
import LoginWithGithub from '@/components/LoginWithGithub'
import React from 'react'

export default function SignIn() {
  return (
    <div className='w-full flex  mt-20 justify-center'>
        <section className='flex flex-col w-[400px]'>
            <h1 className='text-4xl'>Sign in</h1>
            <Login/>
            <LoginWithGithub/>
        </section>
    </div>
  )
}
