import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

function HomeDesigns() {
  const designs = [
    {
      name: "Roohi Henna",
      images: ["/assets/images/roohi3.jpg", "/assets/images/roohi1.jpg"],
    },
    {
      name: "Kallu Short Film",
      images: [
        "/assets/images/kallu1.jpg",
        "/assets/images/kallu2.jpg",
        "/assets/images/kallu3.jpg",
      ],
    },
    {
      name: "icebae.",
      images: ["/assets/images/ice1.jpg", "/assets/images/ice2.jpg"],
    },
    {
      name: "Aurora Fest",
      images: [
        "/assets/images/logofolio/aurora3.jpg",
        "/assets/images/logofolio/aurora2.jpg",
        "/assets/images/logofolio/aurora1.jpg",
      ],
    },
  ];
  return (
    <div className="px-8 md:px-20 lg:px-50">
      <div className="overflow-hidden mt-40">
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[6rem] pb-15 will-change-transform"
        >
          Designs
        </motion.p>
      </div>
      <div className="flex justify-between gap-6">
        {designs.map((design, i) => (
          <div key={i} className="flex flex-col text-zinc-500">
            <div>{design.name}</div>
            <div className="relative">
              {design.images.map((image, j) => (
                <img
                  key={j}
                  src={image}
                  alt="image"
                  className={`
      w-xs
      ${j === 0 ? "relative z-[2]" : "absolute "}
      ${j === 1 ? "z-[1]" : "z-[0]"}
      hover:scale-102 hover:z-[3]
      transition duration-300
    `}
                  style={{
                    top: j === 0 ? undefined : `${j}rem`,
                    left: j === 0 ? undefined : `${j}rem`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        viewport={{ once: true }}
        className="text-right content-end"
      >
        <a
          href="projects/design"
          className="text-xl md:text-2xl tracking-wider font-semibold hover:underline btn-clr"
        >
          SEE MORE DESIGNS →
        </a>
      </motion.div>
    </div>
  );
}

export default HomeDesigns;
