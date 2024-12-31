import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Captainlogin() {
   const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState('')
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      })
  setemail('')
  setPassword('')
    }
    return (
      <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
     <img className='w-16 mb-10 ' src="https://logohistory.net/wp-content/uploads/2023/06/Uber-Symbol.png" alt="#" />
  <form onSubmit={(e) =>  submitHandler(e) }>
    <h3 className=' text-lg font-medium mb-2'>what's your email</h3>
    <input
     required 
     value={email}
     onChange={(e) => {
        setemail(e.target.value)
     }}
     className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
     type="email"
     placeholder='email@example.com' />
    <h3 className=' text-lg font-medium mb-2'>Enter Password</h3>
    <input 
    required 
    value={password}
    onChange={(e) => {
       setPassword(e.target.value)
    }}
    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password'/>
    <button  className='bg-[#111] text-white font-semibold  mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' >login</button>
    <p>join a feet? <Link to='/captain-signup' className='text-blue-600 '>Register as a Captain</Link></p>
  </form>
     </div>
    
     <div>
   <Link to='/login'  className='bg-[#d5622d] text-white flex items-center justify-center font-semibold  mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
     </div>
      </div>
    )
}

export default Captainlogin
