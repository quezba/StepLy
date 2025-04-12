"use client";

import Header from "./header";


type PlayerFrameProps = {
  currentImage: string;
};

export default function PlayerFrame({ currentImage }: PlayerFrameProps) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex justify-center items-center w-[65%] h-[75%] border-2 border-white rounded-xl bg-transparent p-5 ml-10 mr-10 mt-10 fixed bottom-30">
        <div className="relative w-[90%] h-[675px] overflow-hidden">
           <Header currentImage={currentImage} />
        </div>
      </div>
    </div>
  );
}
