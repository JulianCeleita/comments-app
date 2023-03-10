"use client"

import React, {useState} from 'react'

function Main() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [isLogginIn, setIsLogginIn] = useState(true);

function submitHandler() {
  if (!email || !password) {
      setError('Incorrect username or password. Try again.')
    return
  }
}

  return (
    <div className="mt-28 flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
      {isLogginIn ? 'Login' : 'Register'}
      </h1>

      {error && <div className='select-none w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2 '>{error}</div>}

      <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="text"
        placeholder="Username / Email"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-orange-600
         text-slate-900 px-2 py-1 w-full max-w-[40ch]"
      />
      <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-orange-600
         text-slate-900 px-2 py-1 w-full max-w-[40ch]"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative
         after:absolute after:top-0 after:right-full after:bg-blue-100 after:z-10 after:w-full after:h-full 
         overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">Submit</h2>
      </button>
      <h2 className='duration-300 hover:scale-110 cursor-pointer'
      onClick={()=>setIsLogginIn(!isLogginIn)}> 
      {!isLogginIn ? 'Login' : 'Register'} </h2>
    </div>
  );
}
export default Main;
