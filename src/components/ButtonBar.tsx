"use client";

import { ArrowLeftToLine, Play, Pause, ArrowRightToLine } from "lucide-react";

interface ButtonBarProps {
  onPrevious: () => void;
  onNext: () => void;
  onTogglePlay: () => void;
  isPlaying: boolean;
  isEnd: boolean; 
}

export default function ButtonBar({
  onPrevious,
  onNext,
  onTogglePlay,
  isPlaying,
  isEnd,
}: ButtonBarProps) {
  return (
    <div className="fixed bottom-15 left-1/2 -translate-x-1/2 flex justify-around w-1/2 border border-[#C6C6C6] rounded-2xl py-2">
      {/* backwards button*/}
      <button
        className="transition-transform duration-300 transform hover:scale-150  hover:bg-transparent" 
        onClick={onPrevious}>
        <ArrowLeftToLine />
      </button>
      
      {/* play/pause button*/}
      <button
        className="transition-transform duration-300 transform hover:scale-150 hover:bg-transparent" 
        onClick={onTogglePlay}>
        {isEnd || !isPlaying ? <Play /> : <Pause />} 
      </button>
      
      {/* fast forward button*/}
      <button
        className="transition-transform duration-300 transform hover:scale-150 hover:transparent"
        onClick={onNext}>
        <ArrowRightToLine />
      </button>
    </div>
  );
}
