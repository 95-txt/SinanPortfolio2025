import React, { useState } from "react";
import { motion } from "framer-motion";
import Devfolio from "../components/Devfolio";
import Logofolio from "../components/Logofolio";
import Artfolio from "../components/Artfolio";

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
      <div className="fixed top-16 w-full flex justify-center border-b-2 border-zinc-500/20 bg-zinc-500/8 backdrop-blur-xl shadow-lg/5">
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

      {active === 0 && <Devfolio />}
      {active === 1 && <Logofolio />}
      {active === 2 && <Logofolio />}
      {active === 3 && <Logofolio />}
      {active === 4 && <Artfolio />}
    </>
  );
}

export default Projects;
