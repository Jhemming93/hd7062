import { MyFunctions } from "@/app/MyContext";

import { useContext, useEffect, useState } from "react";
import CounterItemHead from "./parts/counterItemHead";
import CounterItemBody from "./parts/counterItemBody";

export default function CounterItem({ type, letters, postid }) {
  const [newList, setNewList] = useState(letters);
  const [currentMearsurment, setCurrentMeasurement] = useState("Inches");
  const functions = useContext(MyFunctions);
  const [measurment, setMeasurment] = functions.measurment;
  const handleValueChange = (i, num, myvalue) => {
    const objectIndex = newList.findIndex((obj) => obj.name === i);

    const updatedList = newList.map((item, index) => {
      if (index === objectIndex) {
        return {
          ...item,
          [myvalue]: Number(num),
        };
      } else {
        return item;
      }
    });
    setNewList(updatedList);
  };

  useEffect(() => {
    const valueConversion = () => {
      const convert = newList.map((item) => {
        let value = item.value;
        let convertNumber = 0;
        if (currentMearsurment === "Inches") {
          convertNumber = value / 12;
        } else {
          convertNumber = value * 12;
        }

        let trimNumber = (Math.round(convertNumber * 100) / 100).toFixed(2);

        return {
          ...item,
          value: Number(trimNumber),
        };
      });
      if (currentMearsurment != measurment) {
        setCurrentMeasurement(measurment);
        setNewList(convert);
      } else {
        return;
      }
    };

    valueConversion();
  }, [measurment]);

  return (
    <>
      <div className="bg-slate-200 p-3 my-2 rounded" id={postid}>
        <CounterItemHead type={type} postid={postid} />
        <CounterItemBody
          type={type}
          newList={newList}
          handleValueChange={handleValueChange}
          postid={postid}
        />
      </div>
    </>
  );
}
