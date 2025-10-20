import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import pic1 from "/assets/images/pic1.JPG";
import CountUp, { useCountUp } from "react-countup";
import HomeProjects from "../components/HomeProjects";
import HomeBrands from "../components/HomeBrands";
import Line from "../components/Line";

export default function Home() {
  const [start, setStart] = useState(false);
  return (
    <>
      <div className="h-140 sm:h-210 flex flex-col justify-between dark:bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="px-8 md:px-12 text-left text-3xl md:text-6xl"
        >
          Hi, I’m
        </motion.div>

        <div className="text-center">
          <div className="-mb-2 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="sm:inline tracking-widest text-3xl md:text-5xl lg:text-8xl"
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
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            viewport={{ once: true }}
            className="text-sm md:text-2xl italic text-zinc-500"
          >
            Creative Developer &amp; Designer
          </motion.div>
          <div className="mt-8 text-sm md:text-lg">
            <motion.button
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
              className="mr-2 border p-2 px-4 rounded-3xl hover:bg-zinc-900 hover:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors duration-300"
            >
              Resume ↓
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              viewport={{ once: true }}
              className="ml-2 border p-2 px-4 rounded-3xl hover:bg-zinc-900 hover:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors duration-300"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
      <Line />

      <div className="w-full md:h-svh grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Big Number */}
        <motion.div
          onViewportEnter={() => setStart(true)}
          viewport={{ once: true }}
          className="relative order-2 md:order-1 z-0"
        >
          <p className="absolute -left-5 -bottom-40 md:-bottom-50 md:-left-30 text-[72vw] md:text-[40vw] opacity-5">
            {start ? <CountUp end={95} duration={5} /> : 0}
          </p>
        </motion.div>

        {/* Right Column - 3 Rows */}
        <div className="order-1 md:order-2 flex flex-col justify-center space-y-8 px-8 pt-8 md:mt-0 md:p-0 md:pr-50 mb-20 md:mb-30">
          <motion.img
            initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src={pic1}
            alt="Profile"
            className="w-full max-h-20 md:max-h-48 object-cover overflow-hidden"
          />

          {/* Row 2 - Text */}
          <motion.p
            initial={{ clipPath: "inset( 0 100% 0 0 )" }}
            whileInView={{ clipPath: "inset( 0 0 0 0 )" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-justify text-sm md:text-xl leading-relaxed"
          >
            Computer Science graduate who loves bringing ideas to life through
            both code and design. I enjoy creating digital experiences that are
            not just functional, but also intuitive and visually engaging,
            blending my technical skills with a creative touch.
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
              className="inline-block text-xl md:text-2xl mt-10 md:mt-20 tracking-wider font-semibold hover:underline"
            >
              MORE ABOUT ME →
            </a>
          </motion.div>
        </div>
      </div>
      <Line />
      <HomeProjects />
      <Line />
      <HomeBrands />
    </>
  );
}
