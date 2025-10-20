import { stringify } from "postcss";
import React from "react";

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
        <img
          key={i}
          src={"/assets/images/" + logonames[j] + i + ".jpg"}
          alt="w"
          loading="lazy"
          className="rounded-lg md:rounded-2xl object-cover aspect-square"
        />
      );
    }
  }
  return (
    <div className="p-8 md:p-18 lg:px-50 md:text-center">
      <div className="text-xl md:text-6xl font-bold ">Log Folio</div>
      <div className="text-sm md:text-xl mt-2 mb-10">
        Some of the logos i created
      </div>
      {logoarrays.map((logoarray, i) => (
        <div key={i}>
          <div className="grid grid-flow-col gap-3 md:gap-4">{logoarray}</div>
          <div className="rounded-lg md:rounded-2xl border-2 border-zinc-300 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-20">
            {logodesc[i]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Logofolio;
