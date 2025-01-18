import React from 'react'

function RidePopup(props) {
 
  return (
    <div>
    <h5 className="p-1 text-center w-[90%] absolute top-0 " onClick={()=>{
     props.setridePopuppanel(false)
     }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className="text-2xl font-semibold mb-8">New Ride Available!</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg mt-4'>
      <div className='flex items-center gap-3' >
        <img className='h-12 w-12 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.p37Q5R-voutcTFu7nDh1kAHaNK?rs=1&pid=ImgDetMain" alt="" />
        <h1 className='text-xl font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname} </h1>
      </div>
      <h5>2.2km</h5>
      </div>
      <div className='flex  gap-2 flex-col  justify-between items-center'>
  
      <div className='w-full mt-5'>
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className=" text-lg ri-map-pin-user-fill"></i>
      <div>
       <h3 className='text-lg font-medium'>562/11/A</h3>
       <p className='text-sm -m-1 text-gray-600'>{props.ride?.pickup}</p>
      </div>
      </div>
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className="ri-map-pin-2-fill"></i>
      <div>
       <h3 className='text-lg font-medium'>562/11/A</h3>
       <p className='text-sm -m-1 text-gray-600'>{props.ride?.destination}</p>
      </div>
      </div>
      <div className='flex items-center gap-5 p-3'>
      <i className="ri-currency-line"></i>
      <div>
       <h3 className='text-lg font-medium'>{props.ride?.fare} </h3>
       <p className='text-sm -m-1 text-gray-600'>Cash Cash</p>
      </div>
      </div>
      </div>
      <button onClick={()=>{
    props.setConfirmridePopuppanel(true)
      }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>accept</button>
      <button onClick={()=>{
   props.setridePopuppanel(false)
       
      }} className='w-full mt-5 bg-gray-200  text-gray-700 font-semibold p-2 rounded-lg'>Ignore</button>
      </div>
 </div>
  )
}

export default RidePopup
