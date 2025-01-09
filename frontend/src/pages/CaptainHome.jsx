import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Captaindetails from "../components/Captaindetails";
import RidePopup from "../components/RidePopup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

function CaptainHome() {
  const [RidePopuppanel, setridePopuppanel] = useState(true)
   const [ConfirmridePopuppanel, setConfirmridePopuppanel] = useState(false)



  const Ridepopuppanelref = useRef(null)
  const ConfirmridePopuppanelref = useRef(null)

  useGSAP(function(){
    if(RidePopuppanel){
     gsap.to(Ridepopuppanelref.current, {
       transform: 'translateY(0)'
     })
    }else{
     gsap.to(Ridepopuppanelref.current, {
       transform: 'translatey(100%)'
     })
    }
   }, [RidePopuppanel])
 
 
   useGSAP(function(){
    if(ConfirmridePopuppanel){
     gsap.to(ConfirmridePopuppanelref.current, {
       transform: 'translateY(0)'
     })
    }else{
     gsap.to(ConfirmridePopuppanelref.current, {
       transform: 'translatey(100%)'
     })
    }
   }, [ConfirmridePopuppanel])


  return (
    <div className="h-screen">
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.bqExYZjODlSZgOb0VqNtGwAAAA?w=438&h=872&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
  <Captaindetails />
      </div>
      <div ref={Ridepopuppanelref} className="fixed w-full z-10  bg-white bottom-0 px-3 py-6 pt-12">
    <RidePopup setridePopuppanel={setridePopuppanel} setConfirmridePopuppanel={setConfirmridePopuppanel}  />
      </div>
      <div ref={ConfirmridePopuppanelref} className="fixed w-full z-10  bg-white bottom-0 px-3 py-6 h-screen pt-12">
    <ConfirmRidePopup setConfirmridePopuppanel={setConfirmridePopuppanel} setridePopuppanel={setridePopuppanel} />
      </div>
    </div>
  );
}

export default CaptainHome;
