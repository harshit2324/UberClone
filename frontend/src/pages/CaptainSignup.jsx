import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('')
  
    const submitHandler = (e) => {
      e.preventDefault()
      setUserData({
        setUserData:({
          fullName:{
            firstName:firstName,
            lastName: lastName
          },
          password: password,
          email: email
  
        })
      })

      setEmail('')
      setPassword('')
      setLastName('')
      setFirstname('')
    }
    return (
      <div>
         <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
     <img className='w-16 mb-10 ' src="https://logohistory.net/wp-content/uploads/2023/06/Uber-Symbol.png" alt="#" />
  <form onSubmit={(e) =>  submitHandler(e) }>
  <h3 className=' text-base font-medium mb-2'>what's our captain's name</h3>
  <div className='flex gap-4 '>
  <input
     required 
     className='bg-[#eeeeee] w-1/2 mb-6 rounded px-4 py-2 border  text-lg placeholder:text-base'
     type="text"
     placeholder='First name'
     value={firstName}
     onChange={(e) => {
    setFirstname(e.target.value)
     }}
     />
     
      <input
     required 
     className='bg-[#eeeeee] w-1/2 mb-6 rounded px-4 py-2 border  text-lg placeholder:text-base'
     type="text"
     placeholder='Last name'
     value={lastName}
     onChange={(e) => {
      setLastName(e.target.value)
     }}
     />
  </div>
  
  
    <h3 className=' text-base font-medium mb-2'>what's our captain's email</h3>
    <input
     required 
     value={email}
     onChange={(e) => {
     setEmail( e.target.value )
     }}
     className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
     type="email"
     placeholder='email@example.com' />
    <h3 className=' text-base font-medium mb-2'>Enter Password</h3>
    <input 
    required 
    value={password}
    onChange={(e) => {
      setPassword(e.target.value)
    }}
    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password'/>
    <button  className='bg-[#111] text-white font-semibold  mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' >signup</button>
   <p> already have a account? <Link to='/captain-login' className='text-blue-600'>Login hare</Link></p>
  </form>
     </div>
    
     <div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
     Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
     </div>
      </div>
      </div>
    )
}

export default CaptainSignup
