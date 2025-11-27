import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function HomeProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="px-8 md:px-20 lg:px-50">
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[6rem] text-right pt-15 will-change-transform mt-30"
        >
          Projects
        </motion.p>

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
          className="text-right content-end"
        >
          <a
            href="/projects/dev"
            className="text-xl md:text-2xl tracking-wider font-semibold hover:underline btn-clr -mb-10"
          >
            SEE MORE PROJECTS →
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default HomeProjects;
