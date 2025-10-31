import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

function Artfolio() {
  const carvs = [];
  const potraits = [];
  const arts = [];
  const artarrays = [potraits, carvs, arts];
  const artnames = ["Pencil Potraits", "Pencil Carvings", "Arts"];
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
    <div className="p-8 md:p-18 lg:px-50 md:text-center lg:pt-40">
      {/* <div className="text-xl md:text-6xl font-bold mt-20">Pencil Potraits</div>
      <div className="text-sm md:text-xl mt-2 mb-10">Description</div> */}
      <PhotoProvider>
        {artarrays.map((artarray, i) => (
          <div key={i}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {artarray}
            </div>
            <div className="rounded-lg md:rounded-2xl border-2 border-zinc-500/25 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-20">
              {artnames[i]}
            </div>
          </div>
        ))}
      </PhotoProvider>
    </div>
  );
}

export default Artfolio;
