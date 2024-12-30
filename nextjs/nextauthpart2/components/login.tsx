import React from 'react'
import AuthButton from './AuthButton'

export default function Login() {
  return (
    <div>
        <form action="">
            <div>
                <input type="email" placeholder="Email" id='email' name='email' className='w-full mt-4 px-2 py-2 rounded-md text-black '  />
            </div>
            <div>
                <input type="password" placeholder="password" id='password' name='password' className='w-full px-2 py-2 rounded-md text-black mt-2 mb-4 '  />
            </div>
            <div>
                <AuthButton/>
            </div>
        </form>
    </div>
  )
}
