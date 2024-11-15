import React from "react";

function SkillList({ src, skill }) {
  return (
    <span className=" flex items-center gap-2 p-2 rounded">
      {/* Check if src is a valid React element (like an icon) */}
      {React.isValidElement(src) ? (
        <span className="text-xl text-white">{src}</span> // Render the icon directly
      ) : (
        <img src={src} alt={`${skill} icon`} className="w-6 h-6" /> // Render the image if src is a string
      )}
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;