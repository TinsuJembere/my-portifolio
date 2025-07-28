import React from "react";

function TechItem({ name, icon }) {
  return (
    <button
      type="button"
      className="group border border-[#a0a0a0]/50 bg-transparent gap-1.5 h-24 text-[#a0a0a0] rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-200 hover:bg-[#a0a0a0]/10 hover:text-white cursor-pointer"
    >
      <img
        alt={`icon-${name}`}
        loading="lazy"
        width="32"
        height="32"
        src={icon}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
      <p>{name}</p>
    </button>
  );
}

export default TechItem;