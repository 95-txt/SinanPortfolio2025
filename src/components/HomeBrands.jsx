import { motion } from "framer-motion";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCplusplus,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaFigma, FaJava, FaJsSquare, FaNodeJs } from "react-icons/fa";
import Line from "./Line";

function HomeBrands() {
  const tools = [
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobepremierepro,
    SiAdobeaftereffects,
    FaFigma,
    FaJsSquare,

    SiMongodb,
    SiExpress,
    SiReact,
    FaNodeJs,

    SiTailwindcss,
    SiFramer,
    SiCplusplus,
    FaJava,
    SiPython,
  ];
  const brands = [
    "/assets/logos/roohilogo.svg",
    "/assets/logos/accumedlogo.svg",
    "/assets/logos/rahalogo.png",
    "/assets/logos/roobaroologo.png",
    "/assets/logos/cclogo.png",
    "/assets/logos/icebaelogo.svg",
    "/assets/logos/C23logo.svg",
    "/assets/logos/ibizzlogo.svg",
    "/assets/logos/frlogo.png",
    "/assets/logos/gdsclogo.png",
    "/assets/logos/h24logo.png",
    "/assets/logos/deeplogo.png",
    "/assets/logos/igclogo.png",
    "/assets/logos/cslogo.png",
    // "/assets/logos/tmlogo.png",
    "/assets/logos/ieeelogo.svg",
  ];
  return (
    <>
      <div id="brands" className="sm:px-8 md:px-50">
        <motion.div
          className="text-5xl md:text-[6rem] pb-15 pl-8 md:pl-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          Brands
        </motion.div>
        <div className="dark:bg-zinc-50/95 rounded-2xl mb-30 grid grid-cols-3 m-6 md:m-0 p-10 gap-8 md:gap-0 sm:grid-cols-4 lg:grid-cols-5 items-center">
          {brands.map((brand, i) => (
            <motion.div
              className="md:px-20 md:py-15"
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                className="hover:scale-110 duration-300"
                src={brand}
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Line />

      <div className="sm:px-8 md:px-50 md:mb-30">
        <motion.div
          className="text-5xl md:text-[4rem] mt-15 md:mb-15 pb-5 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Tools
        </motion.div>
        <div className="grid grid-cols-4 md:grid-cols-5 items-center text-zinc-500 mb-20 px-12 md:px-0">
          {tools.map((Icon, i) => {
            return (
              <motion.div
                key={i}
                // className="md:px-20 py-15"
                className="flex justify-center py-6 md:py-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className=" hover:scale-110 transition-transform duration-300">
                  <Icon className="w-12 h-12 md:w-24 md:h-24" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeBrands;
