import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {

 const [finishRidepanel, setFinishRidePanel] = useState(false)
const finishRidepanelref = useRef(null)
  useGSAP(function(){
    if(finishRidepanel){
     gsap.to(finishRidepanelref.current, {
       transform: 'translateY(0)'
     })
    }else{
     gsap.to(finishRidepanelref.current, {
       transform: 'translatey(100%)'
     })
    }
   }, [finishRidepanel])


  return (
    <div className="h-screen relative flex flex-col justify-end">

    <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
      <img
        className=" w-16"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <Link
        to="/home"
        className="top-2 h-10 w-10 bg-white flex items-center rounded-full justify-center "
      >
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className="h-4/5 ">
      <img
        className="h-full w-full object-cover"
        src="https://th.bing.com/th/id/OIP.bqExYZjODlSZgOb0VqNtGwAAAA?w=438&h=872&rs=1&pid=ImgDetMain"
        alt=""
      />
    </div>
    <div className='h-1/5 p-6 flex relative items-center justify-between bg-yellow-400' 
    onClick={() => {
      setFinishRidePanel(true)
  }}
>
    <h5 className="p-1 text-center w-[90%] absolute top-0 "><i className="text-3xl text-gray-700 ri-arrow-up-wide-line"></i></h5>
     <h4 className='text-xl font-semibold'>4 KM away</h4>
     <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
    </div>
    <div ref={finishRidepanelref} className="fixed w-full z-10  bg-white bottom-0 px-3 py-6 pt-12">
    <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
  </div>
  )
}

export default CaptainRiding
