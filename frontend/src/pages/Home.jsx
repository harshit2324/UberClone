import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import Vehiclepanel from "../components/Vehiclepanel";
import ConfermedRide from "../components/ConfermedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForsDriver from "../components/WaitForsDriver";


const  Home =() => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const [vehiclepannel, setvehiclepannel] = useState(false)
  const [confirmRidepanel, setConfirmpanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingfORDriver, setWaitingForDriver ] = useState(false)



  const panelref = useRef(null);
  const panelcloseref = useRef(null);
  const vehiclepannelref = useRef(null)
  const confirmRidepanelref = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingFordriverref = useRef(null)

  
  const submitHandler = () => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelref.current, {
          height: "70%",
          opacity: 1,
        });
        gsap.to(panelcloseref.current, {
          opacity: 0,
        });
      } else {
        gsap.to(panelref.current, {
          height: "0%",
          opacity: 0,
        });
        gsap.to(panelcloseref.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function(){
   if(vehiclepannel){
    gsap.to(vehiclepannelref.current, {
      transform: 'translateY(0)'
    })
   }else{
    gsap.to(vehiclepannelref.current, {
      transform: 'translatey(100%)'
    })
   }
  }, [vehiclepannel])
  
  useGSAP(function(){
   if(confirmRidepanel){
    gsap.to(confirmRidepanelref.current, {
      transform: 'translateY(0)'
    })
   }else{
    gsap.to(confirmRidepanelref.current, {
      transform: 'translatey(100%)'
    })
   }
  }, [confirmRidepanel])

  useGSAP(function(){
   if(waitingfORDriver){
    gsap.to(waitingFordriverref.current, {
      transform: 'translateY(0)'
    })
   }else{
    gsap.to(waitingFordriverref.current, {
      transform: 'translatey(100%)'
    })
   }
  }, [waitingfORDriver])

  return (
    <div className="h-screen reletive overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="#"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.bqExYZjODlSZgOb0VqNtGwAAAA?w=438&h=872&rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className=" absolute flex flex-col justify-end h-screen top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5 className=" absolute w-10 top-2 right-6 text-xl">
            <i
              onClick={() => {
                setpanelOpen(false);
              }}
              className="ri-arrow-down-wide-fill"
            ></i>
          </h5>

          <h4 className="text-2xl font-semibold relative">Find a trip</h4>
          <form
          onSubmit={() => {
            submitHandler(e)
          }}
          >
            <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-10 py-2 text-base rounded-lg w-full mb-2"
              type="text"
              placeholder="add a pick-up location"
            />
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-10 py-2 text-base rounded-lg w-full mt-3 "
              type="text"
              placeholder="enter your destination"
            />
          </form>
        </div>
        <div ref={panelref} className="bg-white h-0 opacity-0 ">
          <LocationSearchPanel vehiclepannel={vehiclepannel} setvehiclepannel={setvehiclepannel} setpanelOpen={setpanelOpen} />
        </div>
      </div>
      <div ref={vehiclepannelref} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12">
     <Vehiclepanel setConfirmpanel={setConfirmpanel} setvehiclepannel={setvehiclepannel} />
      </div>
      <div ref={confirmRidepanelref} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
     <ConfermedRide setConfirmpanel={setConfirmpanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
     <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div  ref={waitingFordriverref} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12">
     <WaitForsDriver waitingfORDriver={waitingfORDriver } />
      </div>
    </div>
  );
}

export default Home;
