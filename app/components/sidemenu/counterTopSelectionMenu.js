import ShapesSelection from "./shapesSelection";
import MeasurementToggle from "./measurementToggle";
import CostSelection from "./costSelection";
import { MyFunctions } from "@/app/MyContext";
import { useContext } from "react";
import TotalCost from "./totalCost";

export default function CounterTopSelectionMenu({ onClick }) {
  const functions = useContext(MyFunctions);

  return (
    <div className="bg-sky-600 my-2 rounded text-lg md:text-xl">
      <ShapesSelection onClick={onClick} />
      <MeasurementToggle />
      <CostSelection />
      {/* <TotalCost /> */}
    </div>
  );
}
