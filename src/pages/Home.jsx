import { motion } from "framer-motion";
import { useRef, useState } from "react";
import pic1 from "/assets/images/pic1.JPG";
import CountUp from "react-countup";
import HomeProjects from "../components/HomeProjects";
import HomeBrands from "../components/HomeBrands";
import HomeDesigns from "../components/HomeDesigns";
import Line from "../components/Line";
import { useNavigate } from "react-router-dom";
import GridButton from "../components/GridButton";
import InfiniteTools from "../components/InfiniteTools";
import ShinyText from "../components/ShinyText";
import FloatNav from "../components/FloatNav";

export default function Home() {
  const [start, setStart] = useState(false);
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const designsRef = useRef(null);
  const toolsRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <>
      <div className="h-[85vh] md:h-[90vh] lg:h-[95vh] flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="px-8 md:px-12 text-left text-3xl md:text-6xl"
        >
          Hi, I’m
        </motion.div>

        <div className="text-center lg:mb-20">
          <div className="-mb-2 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-block tracking-[4rem] -mr-[4rem] text-2xl md:text-3xl lg:text-4xl w-fit"
            >
              MUHAMMED{" "}
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
              className="h-fit inline-block text-[28vw] md:text-[14vw] leading-none"
            >
              SINAN
            </motion.div>
          </div>
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
            viewport={{ once: true }}
            className="text-sm md:text-2xl italic text-zinc-500 inline mx-auto"
          >
            <ShinyText speedInMs={6000} className="w-fit">
              Designer &amp; Developer
            </ShinyText>
          </motion.div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 my-10 border-y-2 border-zinc-500">
            <GridButton
              text="Designs"
              handleClick={() => navigate("/projects/design")}
            />
            <GridButton
              text="Projects"
              handleClick={() => navigate("/projects")}
            />
            <GridButton
              text="Resume ↓"
              handleClick={() =>
                window.open("/Muhammed_Sinan_Resume.pdf", "_blank")
              }
            />
            <GridButton
              text="Contact"
              handleClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>
      <Line />
      <FloatNav
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        designsRef={designsRef}
        toolsRef={toolsRef}
        connectRef={connectRef}
      />
      <div
        ref={aboutRef}
        className="relative w-full flex flex-row-reverse justify-between lg:items-end"
      >
        <div className="max-w-7xl flex flex-col space-y-8 px-8 pt-8 md:p-10 lg:px-50 mb-20 md:my-40">
          <motion.img
            initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src={pic1}
            alt="Profile"
            className="w-full max-h-20 md:max-h-48 object-cover overflow-hidden"
          />

          <motion.p
            initial={{ clipPath: "inset( 0 100% 0 0 )" }}
            whileInView={{ clipPath: "inset( 0 0 0 0 )" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-justify text-sm md:text-xl leading-relaxed"
          >
            Computer Science and engineering graduate who loves bringing ideas
            to life through both code and design. I enjoy creating digital
            experiences that are not just functional, but also visually
            engaging, blending my technical skills with creative touch.
          </motion.p>

          {/* Row 3 - Link */}

          <motion.div
            className="z-1 text-right"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href="about"
              className="inline-block text-xl md:text-2xl mt-10 md:mt-20 tracking-wider font-semibold hover:underline btn-clr"
            >
              MORE ABOUT ME →
            </a>
          </motion.div>
        </div>
        <motion.div
          onViewportEnter={() => setStart(true)}
          viewport={{ once: true }}
          className="relative z-0 h-30 lg:h-100"
        >
          <p className="absolute -left-20 bottom-0 lg:-bottom-30 leading-none text-[72vw] md:text-[40vw] opacity-5">
            {start ? <CountUp end={95} duration={5} /> : 0}
          </p>
        </motion.div>
      </div>
      {/* <Line /> */}
      <div ref={projectsRef}></div>
      <HomeProjects />
      {/* <Line /> */}
      <div ref={designsRef}></div>
      <HomeDesigns />
      <div ref={toolsRef}>
        <div className="flex justify-center py-50">
          <InfiniteTools />
          <HomeBrands />
        </div>
      </div>
      <div ref={connectRef}></div>
      {/* <Line />
      <InfiniteTools />
      <Line /> 
      <HomeBrands /> */}
    </>
  );
}
