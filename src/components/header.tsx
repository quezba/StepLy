"use client";


export default function Header() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex justify-center items-center w-[90%] h-[85%]">
        <img
          src="/sampleImages/oracle1.png"
          alt="platform screenshot for tutorial"
          className="w-full h-full object-contain" // using object-contain to make sure the image fits the container and doesn't stretch
        />
      </div>

    </div>
  );
}
