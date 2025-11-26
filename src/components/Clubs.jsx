import { motion } from "framer-motion";
import React, { useState } from "react";

function Clubs({ clubs }) {
  const [visibleclubs, setVisibleclubs] = useState(false);

  return (
    <>
      <div className="m-8 text-xl md:text-6xl font-bold md:text-center md:mt-20">
        Been a part of
      </div>
      <div className="md:mt-20 pb-15 px-8 md:px-50">
        <ul className="w-full border-t-1 border-t-zinc-500/50">
          {(visibleclubs ? clubs : clubs.slice(0, 4)).map((club, i) => (
            <motion.li
              className="border-b-1 border-b-zinc-500/50"
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="p-4 lg:px-10 hover:translate-x-2 hover:bg-zinc-500/10 duration-300">
                <p className="text-xl md:text-2xl">{club.name}</p>
                <p className="text-xs md:text-base opacity-70">{club.des}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        {clubs.length > 4 && (
          <div className="w-full text-center md:mt-6">
            <button
              onClick={() => setVisibleclubs(!visibleclubs)}
              className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider btn-clr"
            >
              {visibleclubs ? "SHOW LESS ←" : "SHOW MORE →"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Clubs;
