"use client";
import Header from "./header";

export default function PlayerFrame() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
    <div className="flex justify-center items-center w-[95%] h-[90%] border-2 border-white rounded-xl bg-transparent p-5 ml-10 mr-10 mt-10 fixed bottom-15 ">
    <Header />
    </div>
    </div>
    
  );
}
