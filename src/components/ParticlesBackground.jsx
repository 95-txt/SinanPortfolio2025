import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground({ theme }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: theme ? "#f4f4f5" : "#18181b" },
        opacity: 1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["grab"],
          },
          onClick: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: { attract: { distance: 150 }, push: { quantity: 3 } },
      },
      particles: {
        color: { value: theme ? "#000000" : "#ffffff" },
        links: {
          color: theme ? "#000000" : "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: { value: 20 },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
        collisions: { enable: true },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
