import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <div>
        <div className=" bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1584649525122-8d6895492a5d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80)]  h-screen pt-8  flex justify-between flex-col w-full  bg-red-400 ">
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
