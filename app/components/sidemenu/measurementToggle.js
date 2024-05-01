import { MyFunctions } from "@/app/MyContext";
import ToggleBtn from "../buttons/toggleBtn";
import { useContext } from "react";
import Title from "./parts/title";

export default function MeasurementToggle() {
  const functions = useContext(MyFunctions);

  const setMeasurment = functions[1];

  return (
    <div className=" mt-3 ">
      <Title title="Measurement Units" />
      <div className="">
        <ToggleBtn left="Inches" right="Feet" setFunction={setMeasurment} />
      </div>
    </div>
  );
}
