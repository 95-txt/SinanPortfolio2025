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

function App() {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={` ${
        theme ? "" : "dark"
      } bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100`}
    >
      <ScrollToTop />
      <Navbar onToggle={handleTheme} />
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
