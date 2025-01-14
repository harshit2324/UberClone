import React, { useContext }from 'react'
import {CaptainDataContext} from '../context/CaptainContext'

const Captaindetails = () => {
  const {captain} = useContext(CaptainDataContext)
  return (
    <>
        <div className="flex items-center justify-between gap-3">
      <div className="flex items-center justify-start gap-3">
        <img className="h-10 w-10 rounded-full object-cover " src="https://th.bing.com/th/id/OIP.p37Q5R-voutcTFu7nDh1kAHaNK?rs=1&pid=ImgDetMain" alt="" />
        <h1 className="text-lg font-medium capitalize">{captain.fullname.firstname+ " " + captain.fullname.lastname}</h1>
      </div>
      <div>
        <h4 className="text-xl font-semibold">₹295.20</h4>
        <p className="text-sm rounded-lg text-center bg-gray-100">Earned</p>
      </div>
    </div>
    <div>
    </div>
    <div className="flex justify-center mt-6 bg-gray- rounded-xl gap-4 items-start">
      <div className="text-center">
        <i className=" text 2xl font-thin ri-timer-2-line"></i>
        <h5 className=" text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Outline</p>
      </div>
      <div className="text-center">
      <i className=" text 2xl font-thin ri-speed-up-line"></i>
        <h5 className=" text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Outline</p>
      </div>
      <div className="text-center">
      <i className=" text 2xl font-thin ri-booklet-line"></i>
        <h5 className=" text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Outline</p>
      </div>
      </div>
    </>
  )
}

export default Captaindetails
