"use client";

import { useState } from "react";
import PlayerFrame from "./playerframe";

const images = [
  "/sampleImages/oracle0.png",
  "/sampleImages/oracle1.png",
  "/sampleImages/oracle2.png",
  "/sampleImages/oracle3.png",
  "/sampleImages/oracle4.png",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentIndex(parseInt(e.target.value));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <PlayerFrame currentImage={images[currentIndex]} />
      </div>

      <div className="fixed bottom-5 w-full flex flex-col items-center gap-4 pointer-events-auto">
        <input
          type="range"
          min={0}
          max={images.length - 1}
          value={currentIndex}
          onChange={handleSliderChange}
          className="w-4/5 accent-gray-500"
        />
      </div>
    </div>
  );
}
