import { useState } from "react";

export default function ToggleBtn(props) {
  const left = props.left;
  const right = props.right;

  const [active, setActive] = useState(left);

  const changeActive = (button) => {
    if (button === left) {
      setActive(left);
      props.setFunction(left);
    } else if (button === right) {
      setActive(right);
      props.setFunction(right);
    }
  };

  return (
    <div className="grid grid-cols-2 p-2">
      <button
        className={
          active === left
            ? "bg-sky-200 text-blue-700 rounded-l-full p-2 border-black border-2"
            : "rounded-l-full p-2 border-black border-2"
        }
        onClick={() => changeActive(left)}
      >
        {left}
      </button>
      <button
        className={
          active === right
            ? "bg-sky-200 text-blue-700 rounded-r-full p-2 border-black border-2"
            : "rounded-r-full p-2 border-black border-2"
        }
        onClick={() => changeActive(right)}
      >
        {right}
      </button>
    </div>
  );
}
