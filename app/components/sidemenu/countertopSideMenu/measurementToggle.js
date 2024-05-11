import { MyFunctions } from "@/app/MyContext";
import ToggleBtn from "../../buttons/toggleBtn";
import { useContext } from "react";
import Title from "./parts/title";

export default function MeasurementToggle() {
  const functions = useContext(MyFunctions);

  const [measurment, setMeasurment] = functions.measurment;

  return (
    <div className="mt-3 sm:w-1/2 md:w-full">
      <Title title="Measurement Units" />
      <div className="">
        <ToggleBtn left="Inches" right="Feet" setFunction={setMeasurment} />
      </div>
    </div>
  );
}
