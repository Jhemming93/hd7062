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
    <div className="grid grid-cols-2">
      <button
        className={
          active === left
            ? "bg-blue-500 text-white rounded-l-lg p-2 border-black border-2"
            : "rounded-l-lg p-2 border-black border-2"
        }
        onClick={() => changeActive(left)}
      >
        {left}
      </button>
      <button
        className={
          active === right
            ? "bg-blue-500 text-white rounded-r-lg p-2 border-black border-2"
            : "rounded-r-lg p-2 border-black border-2"
        }
        onClick={() => changeActive(right)}
      >
        {right}
      </button>
    </div>
  );
}
