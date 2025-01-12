import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <div>
        <div className=" bg-cover bg-bottom bg-[url(https://img.freepik.com/free-photo/red-traffic-light-pedestrians-with-countdown_23-2148139857.jpg?t=st=1736578626~exp=1736582226~hmac=4d821e394530ae7210f060dc4cd3c535f2f837311a6833d7256abcaf4e878922&w=360)]  h-screen pt-8  flex justify-between flex-col w-full  bg-red-400 ">
          <img
            className="w-16 ml-8 "
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="#"
          />
          <div className="bg-white py-5 px-5">
            <h2 className="text-2xl font-bold">get started with Uber</h2>
            <Link
              to="/login"
              className="w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
