import { useState } from "react";

const ToolSelector = ({ setActive, active }) => {
  const isActive = "bg-sky-700 text-sky-200";
  const basicStyle =
    " border p-2 sm:text-xl md:text-2xl hover:bg-sky-200 hover:text-sky-700";

  return (
    <div>
      <button
        onClick={() => setActive("counter")}
        className={
          active != "counter"
            ? basicStyle + " rounded-l-2xl "
            : isActive + basicStyle + " rounded-l-2xl "
        }
      >
        Counter Top
      </button>
      <button
        onClick={() => {
          setActive("floor");
        }}
        className={active != "floor" ? basicStyle : isActive + basicStyle}
      >
        Flooring
      </button>
      <button
        onClick={() => setActive("landscape")}
        className={
          active != "landscape"
            ? basicStyle + " rounded-r-2xl "
            : isActive + basicStyle + " rounded-r-2xl "
        }
      >
        Landscape
      </button>
    </div>
  );
};

export default ToolSelector;
