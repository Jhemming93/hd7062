import { MyFunctions } from "@/app/MyContext";

import { useContext } from "react";
import Title from "./parts/title";
export default function CostSelection({ setCost }) {
  const functions = useContext(MyFunctions);
  const cost = functions[4];

  return (
    <>
      <div className="pt-2">
        <Title title="Cost per Sqr. Ft." />
        <div className="flex">
          <p className="pr-2">$</p>{" "}
          <form>
            <input
              className="form-input h-8 rounded w-2/4"
              value={cost}
              name="costInput"
              onChange={() => setCost(event.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
}
