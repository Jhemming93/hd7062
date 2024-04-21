// import LShapeCounterItem from "./lshape/lShapeCounterItem";
// import RectangleCounterItem from "./counterItem";
// import UShapeCounterItem from "./ushape/uShapeCounterItem";
import CounterItem from "./counterItem";

export default function CounterTopSelector({ type, id }) {
  const rectangleL = ["B", "C"];
  const uShapeL = ["A", "B", "C", "D", "E"];
  const lShapeL = ["A", "B", "C", "D"];

  switch (type) {
    case "Rectangle":
      return <CounterItem letters={rectangleL} type={type} postid={id} />;
    case "U-Shape":
      return <CounterItem letters={uShapeL} type={type} postid={id} />;
    case "L-Shape":
      return <CounterItem letters={lShapeL} type={type} postid={id} />;
  }
}
