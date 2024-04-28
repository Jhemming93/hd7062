// import LShapeCounterItem from "./lshape/lShapeCounterItem";
// import RectangleCounterItem from "./counterItem";
// import UShapeCounterItem from "./ushape/uShapeCounterItem";
import CounterItem from "./counterItem";

export default function CounterTopSelector({ type, id }) {
  const rectangleL = [
    { name: "B", value: 0, stand: false },
    { name: "C", value: 25.5, stand: true },
  ];
  const uShapeL = [
    { name: "A", value: 0, stand: false },
    { name: "B", value: 0, stand: false },
    { name: "C", value: 0, stand: false },
    { name: "D", value: 25.5, stand: true },
    { name: "E", value: 25.5, stand: true },
    { name: "F", value: 25.5, stand: true },
  ];
  const lShapeL = [
    { name: "A", value: 0, stand: false },
    { name: "B", value: 0, stand: false },
    { name: "C", value: 25.5, stand: true },
    { name: "D", value: 25.5, stand: true },
  ];

  switch (type) {
    case "Rectangle":
      return <CounterItem letters={rectangleL} type={type} postid={id} />;
    case "U-Shape":
      return <CounterItem letters={uShapeL} type={type} postid={id} />;
    case "L-Shape":
      return <CounterItem letters={lShapeL} type={type} postid={id} />;
  }
}
