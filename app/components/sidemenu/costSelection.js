import { MyFunctions } from "@/app/MyContext";

import { useContext } from "react";
import Title from "./parts/title";
export default function CostSelection({ setCost }) {
  const functions = useContext(MyFunctions);
  const cost = functions[4];

  return (
    <>
      <div>
        <Title title="Cost" />
        <div className="flex">
          <p className="pr-2">$</p>{" "}
          <input
            className="form-input h-8 rounded w-2/4"
            value={cost}
            onChange={() => setCost(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}
