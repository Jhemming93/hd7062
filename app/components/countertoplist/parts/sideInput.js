export default function SideInput({ side, measurment }) {
  return (
    <div className="flex items-center">
      <label className="font-bold px-2 whitespace-nowrap">{side} side</label>
      <input
        type="text"
        className="form-input h-4 rounded w-full"
        placeholder={measurment}
      />
    </div>
  );
}
