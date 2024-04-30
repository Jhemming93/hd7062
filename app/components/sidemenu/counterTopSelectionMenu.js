import ShapesSelection from "./shapesSelection";
import MeasurementToggle from "./measurementToggle";

export default function CounterTopSelectionMenu({ onClick }) {
  return (
    <div className="bg-slate-200 p-2 my-2 rounded text-lg md:text-xl">
      <ShapesSelection onClick={onClick} />
      <MeasurementToggle />
    </div>
  );
}
