import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
        // console.log("Form Submitted!")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 p-20 border-emerald-600 rounded-xl">
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center '>
                <input
                value = {email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-xl py-2 px-6 rounded-full placeholder:text-gray-400' 
                type="email" 
                placeholder='Enter your email'
                required />
                <input 
                value = {password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-xl py-2 px-6 rounded-full placeholder:text-gray-400 mt-3' 
                type="password" 
                placeholder='Enter password'
                required />
                <button className='text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 w-full rounded-full mt-7 '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login