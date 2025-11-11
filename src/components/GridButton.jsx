import React from "react";

function GridButton({ text, handleClick }) {
  return (
    <div
      className="w-full py-4 outline-1 md:p-10 hover:bg-zinc-500/30 transition duration-300 cursor-pointer outline-zinc-500 md:text-xl"
      onClick={handleClick}
    >
      {text}
    </div>
  );
}

export default GridButton;
