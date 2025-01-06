import React from 'react'

function ConfermedRide(props) {
  return (
    <div>
       <h5 className="p-1 text-center w-[90%] absolute top-0 " onClick={()=>{
          props.setConfirmpanel(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
         <h3 className="text-2xl font-semibold mb-8">Confirm your Ride</h3>
         <div className='flex  gap-2 flex-col  justify-between items-center'>
         <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
         <div className='w-full mt-5'>
         <div className='flex items-center gap-5 p-3 border-b-2'>
         <i className=" text-lg ri-map-pin-user-fill"></i>
         <div>
          <h3 className='text-lg font-medium'>562/11/A</h3>
          <p className='text-sm -m-1 text-gray-600'>kankariya talab, bhopal</p>
         </div>
         </div>
         <div className='flex items-center gap-5 p-3 border-b-2'>
         <i className="ri-map-pin-2-fill"></i>
         <div>
          <h3 className='text-lg font-medium'>562/11/A</h3>
          <p className='text-sm -m-1 text-gray-600'>kankariya talab, bhopal</p>
         </div>
         </div>
         <div className='flex items-center gap-5 p-3'>
         <i className="ri-currency-line"></i>
         <div>
          <h3 className='text-lg font-medium'>Rs. 193.20 </h3>
          <p className='text-sm -m-1 text-gray-600'>Cash Cash</p>
         </div>
         </div>
         </div>
         <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmpanel(false)
          
         }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>confirm</button>
         </div>
    </div>
  )
}

export default ConfermedRide
