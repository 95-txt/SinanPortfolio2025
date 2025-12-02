import React from "react";

function Uiuxfolio() {
  const uiuxs = [
    { aksc: "AKSC'23 Redisign Winner" },
    { web3: "Web3 Club" },
    { iei: "IEI CSE TKMCE" },
    { ship: "Ship Rental, Competetion" },
    { ivan: "Ivan Gold" },
    { rexa: "Rexa Technologies" },
    { innovex: "Innovex IEDC TKMCE" },
  ];

  return (
    <div className="md:text-center p-8 md:py-18 ">
      <div className="text-xl md:text-6xl font-bold ">UI/UX Folio</div>
      <div className="text-sm md:text-xl mt-2 mb-10 opacity-70">
        Some of the web designs i created
      </div>
      <div>
        {uiuxs.map((src, i) => (
          <div
            key={i}
            className="bg-zinc-500/10 rounded-2xl mx-auto max-w-6xl mb-50 md:mb-80 h-50 sm:h-100 lg:h-140 pt-6 text-center"
          >
            <p className="md:-mb-6 opacity-30">{Object.values(src)[0]}</p>
            <img
              className="md:w-[80%] mx-auto hover:scale-101 duration-300 drop-shadow-[0_0px_40px_rgba(0,0,0,0.25)]"
              src={`/assets/images/uiuxfolio/${Object.keys(src)[0]}.png`}
              alt={`UI/UX Design ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Uiuxfolio;
