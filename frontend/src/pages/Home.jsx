import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const panelref = useRef(null);
  const panelcloseref = useRef(null);
  const [vehiclepannel, setvehiclepannel] = useState(false)
  const vehiclepannelref = useRef(null)

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
      transform: 'translate(100%)'
    })
   }
  }, [vehiclepannel])

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
            onSubmit={(e) => {
              e.preventDefault();
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
      <div ref={vehiclepannelref} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6">
        <h3 className="text-2xl font-semibold mb-8">choose a vehicle</h3>
       <div className="flex p-3 w-full border-2 mb-2 bg-gray-100 active:border-black rounded-xl items-center justify-between ">
        <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className="w-1/2" >
          <h4 className="font-medium text-base">uber go <span><i className="ri-map-pin-user-fill"></i>4</span> </h4>
          <h5>2 min away </h5>
          <p className=" font-normal text-xs text-gray-600">affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">rs. 193.20</h2>
       </div>
       <div className="flex p-3 w-full border-2 mb-2 bg-gray-100 active:border-black rounded-xl items-center justify-between ">
        <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
        <div className="w-1/2" >
          <h4 className="font-medium text-base"> moto <span><i className="ri-map-pin-user-fill"></i>1</span> </h4>
          <h5>2 min away </h5>
          <p className=" font-normal text-xs text-gray-600">affordable, motorcycle rides</p>
        </div>
        <h2 className="text-xl font-semibold">rs. 65.20</h2>
       </div>
       <div className="flex p-3 w-full border-2 mb-2 bg-gray-100 active:border-black rounded-xl items-center justify-between ">
        <img className="h-10" src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
        <div className="w-1/2" >
          <h4 className="font-medium text-base"> auto <span><i className="ri-map-pin-user-fill"></i>3</span> </h4>
          <h5>2 min away </h5>
          <p className=" font-normal text-xs text-gray-600">affordable, auto rides</p>
        </div>
        <h2 className="text-xl font-semibold">rs. 188.68</h2>
       </div>
      </div>
    </div>
  );
}

export default Home;
