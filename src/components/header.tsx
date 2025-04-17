"use client";  

type HeaderProps = {
  currentImage: string;
};

export default function Header({ currentImage }: HeaderProps) {

  return (
    <div className="flex justify-center items-center w-full h-full overflow-hidden">
      <div className="relative w-[90%] h-[675px] overflow-hidden">
        <img
          src={currentImage}
          alt="platform screenshot for tutorial"
          className="w-auto h-full object-contain"
        />
      </div>
    </div>
  );
}
