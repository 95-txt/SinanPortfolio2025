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
    <div className="mx-8 md:mr-50 md:ml-25 mt-20 md:mt-0">
      <div className="text-5xl mb-10">Brands</div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:max-w-2xl mx-auto">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="hover:bg-zinc-100 aspect-square duration-300 flex justify-center items-center outline-2 outline-zinc-500/50 rounded-xl p-4 "
          >
            <img src={brand} alt={i} className="w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBrands;
