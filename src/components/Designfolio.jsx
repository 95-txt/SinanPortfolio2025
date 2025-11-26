import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Carousel from "./Carousel";
import MouseSlider from "./MouseSlider";

function Designfolio() {
  const [visiblefirst, setVisiblefirst] = useState(false);
  const [visiblesecond, setVisiblesecond] = useState(false);
  const [visiblethird, setVisiblethird] = useState(false);
  const des = [
    "DJ Holy C EDM Night",
    "HESTIA'24 Artist lineup",
    "Sports events",
    "Hestia'24 Pre event",
    "GDSC Solution Challenge'23",
    "NorthGate Lighting",
  ];
  const h24 = [];
  const iki24 = [];
  const h25 = [];
  const frkln = [];
  const icebae = [];
  const fr = [];
  const sp = [];
  const tn = [];

  const carousels = [
    <Carousel name={"Hestia'25 Brochure"}>{h25}</Carousel>,
    <Carousel name={"Hestia'24 Pre Event Brochure"}>{h24}</Carousel>,
    <Carousel name={"IKIGAI Brochure"}>{iki24}</Carousel>,
    <Carousel name={"Youtube Thumbnails"}>{tn}</Carousel>,
    <Carousel name={"FRANKLIN'S LECTURES"}>{frkln}</Carousel>,
  ];

  for (let i = 1; i <= 18; i++) {
    tn.push(
      <PhotoView key={i} src={`/assets/images/thumbnails/tn${i}.jpg`}>
        <img src={`/assets/images/thumbnails/tn${i}.jpg`} />
      </PhotoView>
    );
  }
  for (let i = 1; i <= 6; i++) {
    frkln.push(
      <PhotoView key={i} src={`/assets/images/frklnbrsr/br${i}.jpg`}>
        <img src={`/assets/images/frklnbrsr/br${i}.jpg`} />
      </PhotoView>
    );
  }
  for (let i = 1; i <= 26; i++) {
    h25.push(
      <PhotoView key={i} src={`/assets/images/h25brsr/${i}.jpg`}>
        <img src={`/assets/images/h25brsr/${i}.jpg`} />
      </PhotoView>
    );
  }
  for (let i = 1; i <= 11; i++) {
    h24.push(
      <PhotoView key={i} src={`/assets/images/h24brsr/${i}.jpg`}>
        <img src={`/assets/images/h24brsr/${i}.jpg`} />
      </PhotoView>
    );
  }
  for (let i = 1; i <= 5; i++) {
    iki24.push(
      <PhotoView key={i} src={`/assets/images/ikibrsr/iki${i}.jpg`}>
        <img src={`/assets/images/ikibrsr/iki${i}.jpg`} />
      </PhotoView>
    );
  }
  for (let i = 1; i <= 13; i++) {
    icebae.push(`/assets/images/icebae/icebae${i}.jpg`);
  }
  for (let i = 1; i <= 25; i++) {
    fr.push(`/assets/images/fr/fr${i}.jpg`);
  }
  for (let i = 1; i <= 11; i++) {
    sp.push(`/assets/images/sports/sp${i}.jpg`);
  }
  return (
    <>
      <div className="p-8 md:p-18 lg:px-50 md:text-center">
        <div className="text-xl md:text-6xl font-bold ">Design Folio</div>
        <div className="text-sm md:text-xl mt-2 mb-10">
          Some of the designs i created
        </div>

        <PhotoProvider loop>
          {(visiblefirst ? des : des.slice(0, 2)).map((d, i) => (
            <div key={i}>
              <PhotoView
                key={i}
                src={`/assets/images/desfolio/des${i + 1}.jpg`}
              >
                <img
                  src={`/assets/images/desfolio/des${i + 1}.jpg`}
                  alt={`${d} design`}
                  loading="lazy"
                  className="rounded-lg md:rounded-2xl object-cover"
                />
              </PhotoView>
              <div className="rounded-lg md:rounded-2xl border-2 border-zinc-500/25 py-1 md:py-3 px-5 my-1 md:my-4 mb-4 md:mb-15">
                {d}
              </div>
            </div>
          ))}

          <div className="w-full text-center">
            <button
              onClick={() => setVisiblefirst(!visiblefirst)}
              className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider btn-clr"
            >
              {visiblefirst ? "SHOW LESS ←" : "SHOW MORE →"}
            </button>
          </div>
        </PhotoProvider>
        <div className="flex flex-wrap">
          {visiblesecond ? carousels : carousels.slice(0, 2)}
        </div>
        <div className="w-full text-center ">
          <button
            onClick={() => setVisiblesecond(!visiblesecond)}
            className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider btn-clr"
          >
            {visiblesecond ? "SHOW LESS ←" : "SHOW MORE →"}
          </button>
        </div>
        <MouseSlider images={sp} name={"Sports"} />
        <MouseSlider images={icebae} name={"icebae."} />
        {visiblethird && (
          <MouseSlider images={fr} name={"FR Management Consultancy"} />
        )}
        <div className="w-full text-center ">
          <button
            onClick={() => setVisiblethird(!visiblethird)}
            className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider btn-clr"
          >
            {visiblethird ? "SHOW LESS ←" : "SHOW MORE →"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Designfolio;
