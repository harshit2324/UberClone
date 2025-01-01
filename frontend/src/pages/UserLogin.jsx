import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { UserDataContext } from '../context/UserContext'
import axios from 'axios'


const UserLogin = () => {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState('')
  
 const {user, setUser} = useContext(UserDataContext)
 const Navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      Navigate('/home')
    }
setemail('')
setPassword('')
  } 
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
   <div>
   <img className='w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="#" />
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
 <p> New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
</form>
   </div>
  
   <div>
 <Link to='/captain-login'  className='bg-[#10b461] text-white flex items-center justify-center font-semibold  mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
   </div>
    </div>
  )
}

export default UserLogin