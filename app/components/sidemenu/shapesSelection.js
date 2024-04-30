import CounterTopShapeBtn from "../buttons/counterTopShapeBtn";
import Title from "./parts/title";
export default function ShapesSelection({ onClick }) {
  return (
    <div>
      <Title title="Add Counter Top Shape" />
      <div className="flex flex-wrap gap-2">
        <CounterTopShapeBtn title="L-Shape" onClick={onClick} />
        <CounterTopShapeBtn title="Rectangle" onClick={onClick} />
        <CounterTopShapeBtn title="U-Shape" onClick={onClick} />
      </div>
    </div>
  );
}
