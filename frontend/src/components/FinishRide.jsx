import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div>
    <h5
      className="p-1 text-center w-[90%] absolute top-0 "
      onClick={() => {
        props.setFinishRidePanel(false);
      }}
    >
      <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-8">Finish This Ride</h3>
    <div className="flex items-center justify-between p-3 border-yellow-300 border-2 rounded-lg mt-4">
      <div className="flex items-center gap-3">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://th.bing.com/th/id/OIP.p37Q5R-voutcTFu7nDh1kAHaNK?rs=1&pid=ImgDetMain"
          alt=""
        />
        <h1 className="text-xl font-medium">Harsh Patel</h1>
      </div>
      <h5>2.2km</h5>
    </div>
    <div className="flex  gap-2 flex-col  justify-between items-center">
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className=" text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11/A</h3>
            <p className="text-sm -m-1 text-gray-600">
              kankariya talab, bhopal
            </p>
          </div>
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

      <div className="mt-6 w-full ">
        
          <Link
            to='/captain-Home'
            className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
          >
            Finish Ride
          </Link>
           
           <p className=' mt-10 text-xs '>click on finish ride button if you have completed the payment.</p>
      </div>
    </div>
  </div>
  )
}

export default FinishRide
