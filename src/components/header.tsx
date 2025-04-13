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
  

type HeaderProps = {
  currentImage: string;
};

export default function Header({ currentImage }: HeaderProps) {
  return (
    <div className="flex justify-center items-center w-full h-full overflow-hidden">
      <div className="relative w-[90%] h-[675px] overflow-hidden">
        <img
          src={img}
          src={currentImage}
          alt="platform screenshot for tutorial"
          className="w-auto h-full object-contain"
        />
      </div>
    </div>
  );
}
