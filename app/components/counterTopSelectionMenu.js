import CounterTopShapeBtn from "./buttons/counterTopShapeBtn";

export default function CounterTopSelectionMenu({ onClick }) {
  return (
    <div className="bg-slate-200 p-2 my-2 rounded text-lg md:text-xl">
      <h3 className="pb-2 font-bold text-2xl">Add Counter Top Shape</h3>
      <div className="flex flex-wrap gap-2">
        <CounterTopShapeBtn title="L-Shape" onClick={onClick} />
        <CounterTopShapeBtn title="Rectangle" onClick={onClick} />
        <CounterTopShapeBtn title="U-Shape" onClick={onClick} />
      </div>
    </div>
  );
}
