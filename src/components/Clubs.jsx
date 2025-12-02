import { motion } from "framer-motion";
import React, { useState } from "react";

function Clubs() {
  const clubs = [
    {
      name: "Google Developer Student Clubs TKMCE",
      pos: "Creative Head, Design Lead",
      des: "A community that inspires students to learn and innovate with Google technologies.",
    },
    {
      name: "IEEE SB TKMCE",
      pos: "Design Head, Design Lead, Second Year Representative",
      des: "The official IEEE Student Branch promoting technical excellence, research, and professional development.",
    },
    {
      name: "HESTIA'22,23,24",
      pos: "National Techno Cultural Festival",
      des: "TKMCE’s premier national techno-cultural fest blending innovation, creativity, and entertainment.",
    },
    {
      name: "Coading Club",
      pos: "Design",
      des: "Club for programmers to improve problem-solving skills and collaborate on coding challenges and hackathons.",
    },
    {
      name: "IEI CSE TKMCE",
      pos: "Web Design",
      des: "A branch of the Institution of Engineers (India) focusing on advancing computing knowledge and industry interaction.",
    },
    {
      name: "L&D Club TKMCE",
      pos: "Design",
      des: "Literary and Debate club focused on fostering literary skills, critical thinking, and public speaking abilities among students.",
    },
    {
      name: "TKM Film Fest",
      pos: "Design",
      des: "Annual event that showcases student creativity and filmmaking talent through screenings at TKMCE.",
    },
    {
      name: "AKIASSC'23",
      pos: "Design",
      des: "The All Kerala Industry Applications Society Student Conclave of professional and academic minds on technological innovation and excellence.",
    },
    {
      name: "AKSC'23",
      pos: "Design",
      des: "All Kerala Students Congress, a state-level platform for student collaboration and technical exchange.",
    },
    {
      name: "ATHENA'24",
      pos: "Design",
      des: "flagship technical event by ISTE TKMCE showcasing innovation, creativity, and engineering excellence through competitions and workshops.",
    },
  ];
  const [visibleclubs, setVisibleclubs] = useState(false);

  return (
    <>
      <div className="m-8 text-xl md:text-6xl font-bold md:text-center md:mt-20">
        Been a part of
      </div>
      <div className="md:mt-20 pb-15 px-8 md:px-32 lg:max-w-7xl mx-auto">
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
                <p className="text-lg md:text-2xl">{club.name}</p>
                <p className="text-xs md:text-base opacity-70">{club.des}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        {clubs.length > 4 && (
          <div className="w-full text-center mt-10 md:mt-6">
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
