import { useState, useEffect, use } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LuMoon, LuSun } from "react-icons/lu";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Map route to page title
  const pageTitles = [
    { "/": "HOME" },
    { "/about": "ABOUT" },
    { "/projects": "PROJECTS" },
    { "/contact": "CONTACT" },
  ];

  const handleToggle = () => {
    // setIsOpen(!isOpen);
    setTheme(!theme);
    props.onToggle();
  };

  return (
    <nav className="sticky top-0 z-50 border-b dark:border-zinc-500/10 border-zinc-100/10  bg-zinc-200/3 dark:bg-zinc-900/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-16">
        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex space-x-8 text-xl">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
        <button
          className="hidden md:flex absolute right-6 lg:right-15 text-2xl cursor-pointer"
          onClick={handleToggle}
        >
          {theme ? <LuMoon /> : <LuSun />}
        </button>

        {/* Mobile Menu Button (absolute right) */}
        <div className="w-full p-2 md:hidden text-right ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-500 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`p-2 text-right md:hidden absolute right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col space-y-2">
          {pageTitles.map((title, i) => (
            <NavLink key={i} to={Object.keys(title)[0]}>
              {Object.values(title)[0]}
            </NavLink>
          ))}
          <p onClick={handleToggle}>{theme ? "DARK" : "LIGHT"}</p>
        </div>
      </div>
    </nav>
  );
}
