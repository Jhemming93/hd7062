import { MyFunctions } from "@/app/MyContext";
import ToggleBtn from "../buttons/toggleBtn";
import { useContext } from "react";

export default function MeasurementToggle() {
  const functions = useContext(MyFunctions);

  const setMeasurment = functions[1];

  return (
    <div>
      <h3 className="pb-2 mt-3 font-bold text-2xl">Measurment Units</h3>
      <ToggleBtn left="Inches" right="Feet" setFunction={setMeasurment} />
    </div>
  );
}
