import React, { useState } from "react";
import { motion } from "framer-motion";
import Line from "./Line";

function Freelances() {
  const [visiblefreelances, setVisiblefreelances] = useState(false);
  const freelances = [
    { name: "Creative23", place: "England" },
    { name: "Accumed", place: "UAE" },
    { name: "icebae", place: "Calicut" },
    { name: "FR Cunsultancy", place: "UAE" },
    { name: "Roohi henna", place: "Calicut" },
    { name: "iBIZZ", place: "UAE" },
    { name: "Raha Holidays", place: "Calicut" },
  ];

  return (
    <div className="p-8 md:p-32 lg:px-50 md:text-center">
      <div className="text-xl md:text-6xl font-bold mb-6 md:mb-12">
        Freelanced for
      </div>
      <div className="flex gap-12 items-center">
        <ul className="w-full ">
          {freelances.slice(0, 4).map((freelance, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="relative text-right text-base md:text-2xl  border-r border-zinc-500/70"
            >
              <div className="py-3 md:py-6 pr-5 md:pr-12 hover:-translate-x-10 duration-500">
                <p>{freelance.name}</p>
                <p className="text-xs md:text-base">{freelance.place}</p>
              </div>
              <div className="absolute -right-1 top-1/2 z-10 border w-2 h-2 border-zinc-500/70 rounded-2xl bg-zinc-100 dark:bg-zinc-900"></div>
            </motion.li>
          ))}
        </ul>
        <ul className="w-full ">
          {freelances.slice(4, 7).map((freelance, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="relative text-left text-base md:text-2xl  border-l border-zinc-500/70"
            >
              <div className="py-3 md:py-6 pl-5 md:pl-12 hover:translate-x-10 duration-500">
                <p>{freelance.name}</p>
                <p className="text-xs md:text-base">{freelance.place}</p>
              </div>
              <div className="absolute -left-1 top-1/2 z-10 border w-2 h-2 border-zinc-500/70 rounded bg-zinc-100 dark:bg-zinc-900 "></div>
            </motion.li>
          ))}
        </ul>
      </div>

      {freelances.length > 7 && (
        <div className="w-full text-center md:mt-6">
          <button
            onClick={() => setVisiblefreelances(!visiblefreelances)}
            className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider btn-clr"
          >
            {visiblefreelances ? "SHOW LESS ←" : "SHOW MORE →"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Freelances;
