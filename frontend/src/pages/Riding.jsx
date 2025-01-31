import React from 'react'
import {Link} from 'react-router-dom'

function Riding() {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center '>
  <i className='text-lg font-medium ri-home-5-line'></i>
      </Link>
  <div className='h-1/2'>
  <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.bqExYZjODlSZgOb0VqNtGwAAAA?w=438&h=872&rs=1&pid=ImgDetMain"
          alt=""
        />
  </div>
  <div className='h-1/2'>
  <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right mr-5 pt-2">
            <h1 className="text-lg font-medium">Harshit</h1>
            <h4 className="text-xl font-semibold -mt-2 -mb-1">mp04 AB 1234</h4>
            <p className=" text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex  gap-2 flex-col  justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
      
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11/A</h3>
                <p className="text-sm -m-1 text-gray-600">
                  kankariya talab, bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">Rs. 193.20 </h3>
                <p className="text-sm -m-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
 <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>make a payment</button>
  </div>
    </div>
  )
}

export default Riding
