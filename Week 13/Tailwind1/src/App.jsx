import React from "react";
import { FaWebflow } from "react-icons/fa6";

export default function App() {
  return (
    <div className="h-screen w-screen bg-slate-700 flex items-center justify-center">
      <div className="flex items-center gap-2 fixed top-10">
        <FaWebflow className="text-white text-5xl" />
        <h1 className="text-white text-3xl"><span className="text-blue-500">Webinars</span>.gg</h1>
      </div>
      <div className="flex flex-col h-[50vh] w-[50vw]  items-center justify-around">
        <h1 className="text-white text-3xl font-sans font-bold">Verify Your Age</h1>
        <div className="flex items-center justify-center flex-col gap-10">
        <div className="flex flex-col gap-2 items-center ">
        <h1 className="text-slate-100 font-extralight ">Please confirm birth year. This data will not be shared</h1>
        <input type="text " className="bg-slate-500 px-10 py-2 rounded-lg text-white outline-none w-[80%]" placeholder="Your Birth Year"/>
        </div>
        <button className="bg-slate-400 text-white px-28 py-2 rounded-md">Contiue</button>
        </div>
      </div>
    </div>
  );
}
