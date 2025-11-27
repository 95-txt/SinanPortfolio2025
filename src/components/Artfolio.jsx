import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Line from "./Line";

function Artfolio() {
  const carvs = [];
  const potraits = [];
  const arts = [];
  const artarrays = [potraits, carvs, arts];
  const artnames = ["Pencil Potraits", "Pencil Carvings", "Arts"];
  const [isOpen, setIsOpen] = useState([false, false, false]);

  for (let i = 1; i < 10; i++) {
    carvs.push(
      <PhotoView key={i} src={"/assets/images/artfolio/carv" + i + ".jpg"}>
        <img
          src={"/assets/images/artfolio/carv" + i + ".jpg"}
          alt="w"
          loading="lazy"
          className="rounded-lg md:rounded-2xl object-cover aspect-square"
        />
      </PhotoView>
    );
    potraits.push(
      <PhotoView key={i} src={"/assets/images/artfolio/pencil" + i + ".jpg"}>
        <img
          src={"/assets/images/artfolio/pencil" + i + ".jpg"}
          alt="w"
          loading="lazy"
          className="rounded-lg md:rounded-2xl object-cover aspect-square"
        />
      </PhotoView>
    );
  }
  for (let i = 1; i < 4; i++) {
    arts.push(
      <PhotoView key={i} src={"/assets/images/artfolio/art" + i + ".jpg"}>
        <img
          src={"/assets/images/artfolio/art" + i + ".jpg"}
          alt="w"
          loading="lazy"
          className="rounded-lg md:rounded-2xl object-cover aspect-square"
        />
      </PhotoView>
    );
  }
  return (
    <div className=" md:text-center py-8 md:py-18">
      <div className="px-8">
        <div className="text-xl md:text-6xl font-bold ">Artfolio</div>
        <div className="text-sm md:text-xl mt-2 mb-10 opacity-70">
          Some of the designs i created
        </div>
      </div>
      {/* <div className="text-xl md:text-6xl font-bold mt-20">Pencil Potraits</div>
      <div className="text-sm md:text-xl mt-2 mb-10">Description</div> */}
      <PhotoProvider>
        {artarrays.map((artarray, i) => (
          <div key={i}>
            <div className="px-8 md:px-18 lg:max-w-7xl mx-auto ">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {isOpen[i] ? artarray : artarray.slice(0, 3)}
              </div>
              <div className="rounded-lg md:rounded-2xl border-2 border-zinc-500/25 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-6">
                {artnames[i]}
              </div>
            </div>
            {artarray.length > 3 && (
              <div className="w-full text-center">
                <button
                  onClick={() => {
                    const copy = [...isOpen];
                    copy[i] = !copy[i];
                    setIsOpen(copy);
                  }}
                  className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider btn-clr lg:mb-16"
                >
                  {isOpen[i] ? "SHOW LESS ←" : "SHOW MORE →"}
                </button>
              </div>
            )}
            {/* <Line /> */}
          </div>
        ))}
      </PhotoProvider>
    </div>
  );
}

export default Artfolio;
