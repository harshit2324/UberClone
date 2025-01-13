import React from 'react'

function Vehiclepanel(props) {
  return (
    <div>
         <h5 className="p-1 text-center w-[90%] absolute top-0 " onClick={()=>{
          props.setvehiclepannel(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-8">choose a vehicle</h3>
       <div onClick={()=>{
        props.setConfirmRidepanel(true)
       }} className="flex p-3 w-full border-2 mb-2 bg-gray-100 active:border-black rounded-xl items-center justify-between ">
        <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className="w-1/2" >
          <h4 className="font-medium text-base">uber go <span><i className="ri-map-pin-user-fill"></i>4</span> </h4>
          <h5>2 min away </h5>
          <p className=" font-normal text-xs text-gray-600">affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">rs. 193.20</h2>
       </div>
       <div onClick={()=>{
        props.setConfirmRidepanel(true)
       }} className="flex p-3 w-full border-2 mb-2 bg-gray-100 active:border-black rounded-xl items-center justify-between ">
        <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
        <div className="w-1/2" >
          <h4 className="font-medium text-base"> moto <span><i className="ri-map-pin-user-fill"></i>1</span> </h4>
          <h5>2 min away </h5>
          <p className=" font-normal text-xs text-gray-600">affordable, motorcycle rides</p>
        </div>
        <h2 className="text-xl font-semibold">rs. 65.20</h2>
       </div>
       <div onClick={()=>{
        props.setConfirmRidepanel(true)
       }} className="flex p-3 w-full border-2 mb-2 bg-gray-100 active:border-black rounded-xl items-center justify-between ">
        <img className="h-10" src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
        <div className="w-1/2" >
          <h4 className="font-medium text-base"> auto <span><i className="ri-map-pin-user-fill"></i>3</span> </h4>
          <h5>2 min away </h5>
          <p className=" font-normal text-xs text-gray-600">affordable, auto rides</p>
        </div>
        <h2 className="text-xl font-semibold">rs. 188.68</h2>
       </div>
    </div>
  )
}

export default Vehiclepanel
