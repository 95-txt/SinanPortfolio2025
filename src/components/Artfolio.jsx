import React from "react";

function Artfolio() {
  const carvs = [];
  const potraits = [];
  const arts = [];
  const artarrays = [potraits, carvs, arts];
  const artnames = ["Pencil Potraits", "Pencil Carvings", "Arts"];
  for (let i = 1; i < 10; i++) {
    carvs.push(
      <img
        src={"/assets/images/carv" + i + ".jpg"}
        alt="w"
        loading="lazy"
        className="rounded-lg md:rounded-2xl object-cover aspect-square"
      />
    );
    potraits.push(
      <img
        src={"/assets/images/pencil" + i + ".jpg"}
        alt="w"
        loading="lazy"
        className="rounded-lg md:rounded-2xl object-cover aspect-square"
      />
    );
  }
  for (let i = 1; i < 4; i++) {
    arts.push(
      <img
        src={"/assets/images/art" + i + ".jpg"}
        alt="w"
        loading="lazy"
        className="rounded-lg md:rounded-2xl object-cover aspect-square"
      />
    );
  }
  return (
    <div className="p-8 md:p-18 lg:px-50 md:text-center lg:pt-40">
      {/* <div className="text-xl md:text-6xl font-bold mt-20">Pencil Potraits</div>
      <div className="text-sm md:text-xl mt-2 mb-10">Description</div> */}
      {artarrays.map((artarray, i) => (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {artarray}
          </div>
          <div className="rounded-lg md:rounded-2xl border-2 border-zinc-300 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-20">
            {artnames[i]}
          </div>
        </>
      ))}
    </div>
  );
}

export default Artfolio;
