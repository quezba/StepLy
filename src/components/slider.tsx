"use client";

import { useEffect, useState } from "react";
import PlayerFrame from "./playerframe";
import ButtonBar from "./ButtonBar";

export default function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("/sampleImages/image-test.json")
      .then(res => res.json())
      .then((data) => setImages(data.image_list))
  }, [])
  
  // progress the slider
  useEffect(() => {
    if (!isPlaying || currentIndex >= images.length - 1) return;

    const speed = Math.max(1000, 10000 / images.length);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= images.length - 1) {
          setIsPlaying(false); // stop auto-play at the end
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const togglePlay = () => {
    if (currentIndex >= images.length - 1) {
      // replay the slider if you click play at the end
      setCurrentIndex(0);
      setIsPlaying(true);
    } else {
      // toggle play/pause if not at the end
      setIsPlaying((prev) => !prev);
    }
  };

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

      <ButtonBar
        onPrevious={goToPrevious}
        onNext={goToNext}
        onTogglePlay={togglePlay}
        isPlaying={isPlaying}
        isEnd={currentIndex === images.length - 1} 
      />
    </div>
  );
}
