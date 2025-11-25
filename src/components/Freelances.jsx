import React, { useState } from "react";
import { motion } from "framer-motion";

function Freelances({ freelances }) {
  const [visiblefreelances, setVisiblefreelances] = useState(false);

  return (
    <div className="p-8 md:p-32 lg:px-50 md:text-center">
      <div className="text-xl md:text-6xl font-bold mb-6 md:mb-12">
        Freelanced for
      </div>
      <ul className="w-full ">
        {(visiblefreelances ? freelances : freelances.slice(0, 4)).map(
          (freelance, i) => (
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
              <div className="absolute -right-1 bottom-0 border w-2 h-2 border-zinc-500/70 rounded-2xl bg-zinc-100 dark:bg-zinc-900"></div>
            </motion.li>
          )
        )}
      </ul>
      {freelances.length > 4 && (
        <div className="w-full text-center md:mt-6">
          <button
            onClick={() => setVisiblefreelances(!visiblefreelances)}
            className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider"
          >
            {visiblefreelances ? "SHOW LESS ←" : "SHOW MORE →"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Freelances;
