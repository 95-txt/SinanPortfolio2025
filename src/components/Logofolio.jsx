import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

function Logofolio() {
  const roohi = [];
  const ibizz = [];
  const aurora = [];
  const cc = [];
  const am = [];
  const logonames = ["roohi", "aurora", "ibizz", "am", "cc"];
  const logoarrays = [roohi, aurora, ibizz, am, cc];
  const logodesc = [
    "Roohi Henna",
    "Aurora Festival",
    "iBIZZ Paper Works",
    "Accumed Medical Equipments",
    "Coding Club TKMCE",
  ];
  for (let j = 0; j < logoarrays.length; j++) {
    for (let i = 1; i < 4; i++) {
      logoarrays[j].push(
        <PhotoView
          key={i - 1}
          src={"/assets/images/logofolio/" + logonames[j] + i + ".jpg"}
        >
          <img
            key={i}
            src={"/assets/images/logofolio/" + logonames[j] + i + ".jpg"}
            alt="w"
            loading="lazy"
            className="rounded-lg md:rounded-2xl object-cover aspect-square"
          />
        </PhotoView>
      );
    }
  }
  return (
    <div className="p-8 md:p-18 lg:max-w-7xl mx-auto md:text-center">
      <div className="text-xl md:text-6xl font-bold ">Logo Folio</div>
      <div className="text-sm md:text-xl mt-2 mb-10 opacity-70">
        Some of the logos i created
      </div>
      {logoarrays.map((logoarray, i) => (
        <div key={i}>
          <div className="grid grid-flow-col gap-3 md:gap-4">
            <PhotoProvider>{logoarray}</PhotoProvider>
          </div>
          <div className="rounded-lg md:rounded-2xl border-2 border-zinc-500/25 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-20">
            {logodesc[i]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Logofolio;
