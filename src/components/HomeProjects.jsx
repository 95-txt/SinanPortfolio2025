import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Line from "./Line";

function HomeProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const works = [
    {
      name: "Roohi Henna",
      images: ["/assets/images/roohi1.jpg", "/assets/images/roohi3.jpg"],
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
      name: "Mediater",
      images: ["/assets/images/mediater1.jpg"],
    },
    // {
    //   name: "Raha Holidays",
    //   images: ["/assets/images/raha1.png", "/assets/images/raha2.jpg"],
    // },
  ];

  return (
    <>
      <div className="px-8 md:px-20 lg:px-50">
        <div className="overflow-hidden ">
          <motion.p
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[6rem] text-right py-15 will-change-transform"
          >
            Projects
          </motion.p>
        </div>

        <div className="mt-15 pb-20">
          <ul className="border-t-1 border-t-zinc-500/50">
            {projects.slice(0, 4).map((project, i) => (
              <motion.li
                className="border-b-1 border-b-zinc-500/50"
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 lg:px-10 hover:translate-x-2 hover:bg-zinc-500/10 duration-300">
                  <p className="text-lg md:text-2xl">{project.name}</p>
                  <p className="text-xs md:text-base text-zinc-500">
                    {project.tools}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="text-right content-end mb-30"
        >
          <a
            href="projects"
            className="text-xl md:text-2xl tracking-wider font-semibold hover:underline "
          >
            SEE MORE PROJECTS →
          </a>
        </motion.div>
        <Line />
        <div className="overflow-hidden ">
          <motion.p
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[6rem] py-15 will-change-transform"
          >
            Works
          </motion.p>
        </div>

        <div className="md:mt-15 pb-20">
          {works.map((work, i) => (
            <div key={i}>
              <div className="grid grid-flow-col gap-3 md:gap-4">
                {work.images.map((w, j) => (
                  <img
                    key={j}
                    src={w}
                    alt="w"
                    loading="lazy"
                    className="rounded-lg md:rounded-2xl object-cover"
                  />
                ))}
              </div>
              <div className="rounded-lg md:rounded-2xl border-2 border-zinc-500/20 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-20">
                {work.name}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          className="text-right content-end mb-30"
        >
          <a
            href="projects/design"
            className="text-xl md:text-2xl tracking-wider font-semibold hover:underline "
          >
            SEE MORE DESIGNS →
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default HomeProjects;
