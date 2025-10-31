import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      className={` ${
        theme ? "" : "dark"
      } bg-zinc-100/0 dark:bg-zinc-900/0 text-zinc-900 dark:text-zinc-100`}
    >
      <ParticlesBackground theme={theme} />
      <Navbar onToggle={handleTheme} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
