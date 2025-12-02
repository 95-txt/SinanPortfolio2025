import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";

function Carousel({ children, name }) {
  const [slide, setSlide] = useState(0);
  const transformStyle = `translateX(-${slide * 100}%)`;

  return (
    <div key={name} className="relative mt-10 lg:mt-25 z-0 max-w-lg mx-auto">
      <button
        className="md:hidden absolute -left-8 p-3 rounded-2xl h-[70%]"
        onClick={() =>
          setSlide((slide - 1 + children.length) % children.length)
        }
      >
        <FaAngleLeft />
      </button>
      <button
        className="md:hidden absolute -right-8 p-3 rounded-2xl h-[70%]"
        onClick={() => setSlide((slide + 1) % children.length)}
      >
        <FaAngleRight />
      </button>
      <div className=" overflow-hidden rounded-lg md:rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: transformStyle }}
        >
          <PhotoProvider>{children}</PhotoProvider>
        </div>
      </div>

      <div className="flex justify-between gap-1 md:gap-2 mt-2">
        {children.map((_, i) => (
          <button
            key={i}
            className={`w-full h-2 rounded-full hover:cursor-pointer ${
              i === slide ? "bg-zinc-500" : "bg-zinc-500/25"
            }`}
            onClick={() => setSlide(i)}
          ></button>
        ))}
      </div>

      <div className="rounded-lg md:rounded-2xl mt-2 border-2 border-zinc-500/25 py-1 md:py-3 px-5">
        {name}
      </div>

      <div className="hidden md:flex justify-center space-x-4 mt-2">
        <button
          className="p-4 bg-zinc-500/10 hover:bg-zinc-500/20 rounded-2xl "
          onClick={() =>
            setSlide((slide - 1 + children.length) % children.length)
          }
        >
          <FaAngleLeft />
        </button>
        <button
          className="p-4 bg-zinc-500/10 hover:bg-zinc-500/20 rounded-2xl "
          onClick={() => setSlide((slide + 1) % children.length)}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
