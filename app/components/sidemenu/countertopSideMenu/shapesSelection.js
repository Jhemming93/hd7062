import CounterTopShapeBtn from "../../buttons/counterTopShapeBtn";
import CounterTopShapeBtnTest from "../../buttons/counterTopShapeBtnTest";
import Title from "./parts/title";
export default function ShapesSelection({ onClick }) {
  return (
    <div className="rounded">
      <Title title="Add Counter Top Shape" />
      <div className="flex flex-wrap gap-2 p-2 static">
        <CounterTopShapeBtnTest title="L-Shape" onClick={onClick} />
        <CounterTopShapeBtn title="Rectangle" onClick={onClick} />
        <CounterTopShapeBtn title="U-Shape" onClick={onClick} />
      </div>
    </div>
  );
}
