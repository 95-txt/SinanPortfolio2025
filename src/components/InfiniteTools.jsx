import React, { useState } from "react";
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

function InfiniteTools() {
  const logos = [
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

  return (
    <div className="ml-8 md:ml-20 lg:ml-50 md:mr-18 lg:mr-25">
      <div className="text-5xl mb-10">Tools</div>
      <div className="h-100 md:h-200 lg:h-100 overflow-hidden">
        <div className="flex overflow-hidden">
          <div className="flex flex-col gap-2 animate-loop-scroll">
            {[...logos, ...logos].map((ToolIcon, i) => (
              <div
                className="outline-1 m-2 rounded-xl flex justify-center items-center opacity-50 hover:opacity-100 duration-300 "
                key={i}
              >
                <ToolIcon className="w-20 h-20 p-4" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 animate-loop-scroll r">
            {[...logos, ...logos].map((ToolIcon, i) => (
              <div
                className="outline-1 m-2 rounded-xl flex justify-center items-center opacity-50 hover:opacity-100 duration-300 "
                key={i}
              >
                <ToolIcon className="w-20 h-20 p-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteTools;
