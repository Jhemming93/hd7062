import CounterTopShapeBtn from "../buttons/counterTopShapeBtn";
export default function ShapesSelection({ onClick }) {
  return (
    <div>
      <h3 className="pb-2 font-bold text-2xl">Add Counter Top Shape</h3>
      <div className="flex flex-wrap gap-2">
        <CounterTopShapeBtn title="L-Shape" onClick={onClick} />
        <CounterTopShapeBtn title="Rectangle" onClick={onClick} />
        <CounterTopShapeBtn title="U-Shape" onClick={onClick} />
      </div>
    </div>
  );
}
