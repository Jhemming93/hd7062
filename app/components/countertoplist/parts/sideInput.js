import { MyFunctions } from "@/app/MyContext";
import { useEffect, useState } from "react";

export default function SideInput({ side, postid, handleValueChange, value }) {
  const sideId = postid + "-" + side;
  const [myValue, setMyValue] = useState(value);
  const [error, setError] = useState();

  useEffect(() => {
    if (isNaN(myValue)) {
      setError("bg-red-200 p-1 mt-1");
    } else {
      setError("hidden");
      handleValueChange(side, myValue);
    }
  }, [myValue]);
  useEffect(() => {
    setMyValue(value);
  }, [value]);

  return (
    <div className="flex items-center">
      <label className="font-bold px-2 whitespace-nowrap">{side} side</label>

      <div className="flex flex-col py-2 my-3">
        <input
          type="text"
          pattern="[0-9]"
          className="form-input h-4 rounded w-full"
          id={sideId}
          value={myValue}
          onChange={(event) => setMyValue(event.target.value)}
        />

        <div className={error}>
          <p>Only use numbers.</p>
        </div>
      </div>
    </div>
  );
}
