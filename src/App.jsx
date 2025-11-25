import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import Devfolio from "./components/Devfolio";
import Designfolio from "./components/Designfolio";
import Logofolio from "./components/Logofolio";
import Uiuxfolio from "./components/Uiuxfolio";
import Artfolio from "./components/Artfolio";
import { Helmet } from "react-helmet";

function App() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <Helmet>
        <title>Muhammed Sinan | Portfolio</title>
        <meta
          name="description"
          content="Developer and Designer, Computer Science and engineering graduate. Explore my portfolio website."
        />
        <meta
          name="keywords"
          content="Muhammed Sinan, portfolio, developer, graphic, designer, Calicut, UI, UX, React, full stack, web developer, spiking neural networks, MERN, sinan, TKM, TKMCE, sinan, React developer"
        />

        <meta name="author" content="Muhammed Sinan" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Muhammed Sinan | Portfolio" />
        <meta property="og:site_name" content="Sinan Portfolio" />
        <meta
          property="og:description"
          content="Developer and Designer, Computer Science and engineering graduate. Explore my portfolio website."
        />
        <meta
          property="og:url"
          content="https://sinanportfolio2025.onrender.com/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://sinanportfolio2025.onrender.com/logo.svg"
        />
      </Helmet>
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
          <Route path="/projects" element={<Projects />}>
            <Route index element={<Navigate to="dev" replace />} />
            <Route path="dev" element={<Devfolio />} />
            <Route path="design" element={<Designfolio />} />
            <Route path="logo" element={<Logofolio />} />
            <Route path="uiux" element={<Uiuxfolio />} />
            <Route path="art" element={<Artfolio />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
