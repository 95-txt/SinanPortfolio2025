import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Projects() {
  const tabs = [
    { label: "Devfolio", path: "dev" },
    { label: "Design Folio", path: "design" },
    { label: "Logofolio", path: "logo" },
    { label: "UI/UX Folio", path: "uiux" },
    { label: "Artfolio", path: "art" },
  ];

  const location = useLocation();
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState({ left: 0, width: 0 });
  const refs = useRef([]);
  const navigate = useNavigate();

  const goto = (i) => {
    navigate(tabs[i].path);
  };

  useEffect(() => {
    setActive(
      tabs.findIndex((tab) => tab.path === location.pathname.split("/")[2])
    );
  }, [location]);

  // measure underline position — short + stable
  useEffect(() => {
    const el = refs.current[active];
    if (!el) return;
    const { offsetLeft, offsetWidth } = el;
    setPos({ left: offsetLeft, width: offsetWidth });
  }, [active]);

  useEffect(() => {
    const handler = () => {
      const el = refs.current[active];
      if (!el) return;
      const { offsetLeft, offsetWidth } = el;
      setPos({ left: offsetLeft, width: offsetWidth });
    };
    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler);
    };
  }, [active]);

  return (
    <>
      <nav className="z-10 hidden fixed top-16 w-full md:flex justify-center border-b border-zinc-500/20 bg-zinc-200/20 dark:bg-zinc-900/10 backdrop-blur-xl shadow-lg">
        <div className="relative flex">
          {tabs.map((tab, i) => (
            <button
              key={i}
              ref={(el) => (refs.current[i] = el)}
              onClick={() => goto(i)}
              className={`relative px-8 py-4 text-sm md:text-base font-medium transition-colors ${
                active === i
                  ? "text-zinc-900 dark:text-zinc-50"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <motion.div
            className="absolute bottom-0 h-[2px] bg-zinc-900 dark:bg-zinc-50"
            animate={{ left: pos.left, width: pos.width }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </nav>
      <div className="z-10 md:hidden fixed top-16 w-full flex border-b-2 border-zinc-500/20 bg-zinc-500/8 backdrop-blur-xl shadow-lg/5">
        {tabs.map((tab, i) => (
          <motion.button
            key={i}
            onClick={() => goto(i)}
            className={`relative py-4 text-sm md:text-base font-medium transition-colors border border-b-0 border-zinc-500/20
            ${
              active === i
                ? "px-8"
                : "flex-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            } ${i === 0 ? "border-l-0" : ""} ${i === 4 ? "border-r-0" : ""}`}
          >
            {active === i ? tab.label : tab.label.charAt(0)}
          </motion.button>
        ))}
      </div>
      {/* Spacer + outlet */}
      <div className="h-16" />
      <Outlet />
    </>
  );
}
