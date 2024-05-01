import { useContext } from "react";
import Title from "./parts/title";
import { MyTotalCost } from "@/app/MyContext";

export default function TotalCost() {
  const totalCost = useContext(MyTotalCost);

  const currentcost = totalCost[1];
  return (
    <div className="pt-2">
      <Title title="Total Estimate Cost" />
      <p>${currentcost}</p>
    </div>
  );
}
