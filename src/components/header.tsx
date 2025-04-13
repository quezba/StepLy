"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch("/sampleImages/oracle0.png");
    const imageBlob = await res.blob();
    console.log(imageBlob);
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);
  
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex justify-center items-center w-[90%] h-[85%]">
        <img
          src={img}
          alt="platform screenshot for tutorial"
          className="w-full h-full object-contain" // using object-contain to make sure the image fits the container and doesn't stretch
        />
      </div>

    </div>
  );
}
