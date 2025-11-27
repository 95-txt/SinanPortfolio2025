import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function HomeProjects() {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("/data/projects.json")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data))
  //     .catch((err) => console.error(err));
  // }, []);

  const projects = [
    {
      name: "EasyPay Payment Wallet",
      tools: "MongoDB, Express, React, Node, Tailwind",
      description:
        "Developed a digital wallet application that enable users to send, request, and monitor transactions easily. with a simple interface for seamless payments.",
    },
    {
      name: "SNN-Based Approach for Social Media Threat Detection Using NLP ",
      tools: "Python, PyTorch, snnTorch, NLP",
      description:
        "Designed and implemented a spiking neural network to detect cyber threats from tweets by combining NLP, structural, and URL features.\nEnhanced robustness with adaptive training and achieved energy-efficient, accurate intrusion detection.",
    },
    {
      name: "Plant Disease Detection & Solution Recommendation",
      tools: "Python, PyTorch, Flutter, Bootstrap",
      description:
        "Developed a Software Solution to Find Plant Disease from image and get treatment and improvement solutions.",
    },
    {
      name: "Movie Filtering & Management",
      tools: "Python, HTML, CSS, MySQL",
      description:
        "Built a Web Solution to organize, filter movies, and get recommendations according to users wish.",
    },
    {
      name: "MediFix",
      tools: "Figma, Flutter",
      description:
        "Built a Software Solution to Medical Service Access Like Consulting, Medicine Supply, Ambulance Service.",
    },
  ];

  return (
    <>
      <div className="px-8 md:px-20 lg:px-50">
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[6rem] text-right pt-15 will-change-transform md:mt-30"
        >
          Projects
        </motion.p>

        <div className="mt-10 md:mt-15 mb-10 md:mb-20">
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
                  <p className="text-base md:text-2xl">{project.name}</p>
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
