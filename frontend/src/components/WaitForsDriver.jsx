import React from 'react'

function WaitForsDriver(props) {
  return (
    <div>
    <div>
         <h5 className="p-1 text-center w-[90%] absolute top-0 " onClick={()=>{
            props.waitingfORDriver(false)
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <div className='flex items-center justify-between'>
          <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='text-right'>
            <h1 className='text-lg font-medium'>Harshit</h1>
            <h4 className='text-xl font-semibold -mt-2 -mb-1'>mp04 AB 1234</h4>
            <p className=' text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
          </div>
           <div className='flex  gap-2 flex-col  justify-between items-center'>
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
          </div>
      </div>
      </div>
  )
}

export default WaitForsDriver
