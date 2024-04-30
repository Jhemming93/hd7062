import ShapesSelection from "./shapesSelection";
import MeasurementToggle from "./measurementToggle";
import CostSelection from "./costSelection";
import { MyFunctions } from "@/app/MyContext";
import { useContext } from "react";

export default function CounterTopSelectionMenu({ onClick }) {
  const functions = useContext(MyFunctions);
  const setCost = functions[3];

  return (
    <div className="bg-slate-200 p-2 my-2 rounded text-lg md:text-xl">
      <ShapesSelection onClick={onClick} />
      <MeasurementToggle />
      <CostSelection setCost={setCost} />
    </div>
  );
}
