import { useContext } from "react";
import Title from "./parts/title";
import { MyFunctions, MyTotalCost } from "@/app/MyContext";

export default function TotalCost() {
  const functions = useContext(MyFunctions);

  const [currentTotalCost, setCurrentTotalCost] = functions.currentTotalCost;
  return (
    <div className="pt-2">
      <Title title="Total Estimate Cost" />
      <p>${currentTotalCost}</p>
    </div>
  );
}
