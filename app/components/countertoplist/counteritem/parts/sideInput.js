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
      handleValueChange(side, myValue, "value");
    }
  }, [myValue]);
  useEffect(() => {
    setMyValue(value);
  }, [value]);

  return (
    <div className=" items-center  my-2 rounded ">
      <label className="font-bold px-2 whitespace-nowrap">{side} side</label>

      <div className="flex flex-col w-1/2">
        <input
          type="text"
          pattern="[0-9]"
          className="form-input h-8 rounded w-full border-0 focus:border-white focus:ring-0 bg-blue-200"
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
