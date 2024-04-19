import LShapeCounterItem from "./lShapeCounterItem";
import RectangleCounterItem from "./rectangleCounterItem";
import UShapeCounterItem from "./uShapeCounterItem";

export default function CounterTopSelector({ type }) {
  switch (type) {
    case "Rectangle":
      return <RectangleCounterItem />;
    case "U-Shape":
      return <UShapeCounterItem />;
    case "L-Shape":
      return <LShapeCounterItem />;
  }
}
