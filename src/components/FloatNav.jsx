import React from "react";

function FloatNav({
  className,
  aboutRef,
  projectsRef,
  designsRef,
  toolsRef,
  connectRef,
}) {
  return (
    <div
      className={`z-50 sticky top-50 h-2 pointer-events-none relative ${className}`}
    >
      <div className="flex gap-4 absolute bottom-20 left-20 lg:left-50 px-6 py-2 rounded-xl shadow-lg pointer-events-auto  border border-zinc-500/40 bg-linear-170 from-zinc-100/10 via-zinc-100/0 to-zinc-100/5 backdrop-blur text-sm">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Top↑
        </button>
        <button
          onClick={() =>
            aboutRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          about
        </button>
        <button
          onClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          projects
        </button>
        <button
          onClick={() =>
            designsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          designs
        </button>
        <button
          onClick={() =>
            toolsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          tools
        </button>
        <button
          onClick={() =>
            connectRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          connect
        </button>
      </div>
    </div>
  );
}

export default FloatNav;
