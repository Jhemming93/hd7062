import { MyFunctions } from "@/app/MyContext";

import { useContext } from "react";
import Title from "./parts/title";
export default function CostSelection() {
  const functions = useContext(MyFunctions);
  const [cost, setCost] = functions.cost;

  return (
    <>
      <div className="pt-2">
        <Title title="Cost per Sqr. Ft." />
        <div className="flex p-2 ">
          <p className="pr-1 text-sky-200">$</p>{" "}
          <form>
            <input
              className="form-input h-8 rounded w-2/4 text-lrg border-0 focus:border-white focus:ring-0 bg-blue-200"
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
