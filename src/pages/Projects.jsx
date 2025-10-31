import React, { useState } from "react";
import { motion } from "framer-motion";
import Devfolio from "../components/Devfolio";
import Logofolio from "../components/Logofolio";
import Artfolio from "../components/Artfolio";
import Designfolio from "../components/Designfolio";

function Projects() {
  const tabs = [
    "Devfolio",
    "Logofolio",
    "UI/UX Folio",
    "Design Folio",
    "Artfolio",
  ];
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="z-10 hidden fixed top-16 w-full md:flex justify-center border-b-2 border-zinc-500/20 bg-zinc-200/20 dark:bg-zinc-900/10 backdrop-blur-xl shadow-lg/5">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative px-8 py-4 text-sm md:text-base font-medium transition-colors 
            ${
              active === i
                ? ""
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            }`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-zinc-900 dark:bg-zinc-50"
              />
            )}
          </button>
        ))}
      </div>
      <div className="z-10 md:hidden fixed top-16 w-full flex border-b-2 border-zinc-500/20 bg-zinc-500/8 backdrop-blur-xl shadow-lg/5">
        {tabs.map((tab, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            className={`relative py-4 text-sm md:text-base font-medium transition-colors border border-b-0 border-zinc-500/20
            ${
              active === i
                ? "px-8"
                : "flex-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            } ${i === 0 ? "border-l-0" : ""} ${i === 4 ? "border-r-0" : ""}`}
          >
            {active === i ? tab : tab.charAt(0)}
          </motion.button>
        ))}
      </div>
      <div className="h-10"></div>
      {active === 0 && <Devfolio />}
      {active === 1 && <Logofolio />}
      {active === 2 && <Logofolio />}
      {active === 3 && <Designfolio />}
      {active === 4 && <Artfolio />}
    </>
  );
}

export default Projects;
