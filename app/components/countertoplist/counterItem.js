import DeleteBtn from "../buttons/delete";
import SideInput from "./parts/sideInput";
import LetteredImage from "./parts/letteredImage";
import { MyFunctions } from "@/app/MyFunctions";
import TotalSqFeet from "./parts/totalSqFeet";
import { useContext, useEffect, useState } from "react";

export default function CounterItem({ type, letters, postid }) {
  const [newList, setNewList] = useState(letters);
  const [currentMearsurment, setCurrentMeasurement] = useState("Inches");
  const myFunctions = useContext(MyFunctions);
  const measurment = myFunctions[2];

  const handleValueChange = (i, num) => {
    const objectIndex = newList.findIndex((obj) => obj.name === i);

    const updatedList = newList.map((item, index) => {
      if (index === objectIndex) {
        // console.log("changed");
        return {
          ...item,
          value: Number(num),
        };
      } else {
        // console.log("unchanged");
        return item;
      }
    });
    setNewList(updatedList);
  };

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
    console.log(measurment);
    console.log(currentMearsurment);
    if (currentMearsurment != measurment) {
      setCurrentMeasurement(measurment);
      setNewList(convert);
    } else {
      return;
    }
  };
  useEffect(() => {
    valueConversion();
  }, [measurment]);
  console.log(newList);
  return (
    <>
      <MyFunctions.Consumer>
        {(value) => {
          return (
            <>
              <div className="bg-slate-200 p-3 my-2 rounded" id={postid}>
                <div className="flex justify-between">
                  <h3 className="text-lrg md:text-2xl font-bold">
                    {type} Countertop
                  </h3>
                  <div className="flex">
                    <p className="pr-4 self-center capitalize">
                      <span className="font-bold">Measurment in</span>{" "}
                      {value[2]}
                    </p>
                    <DeleteBtn onClick={value[0]} postid={postid} />
                  </div>
                </div>
                <div className="md:flex">
                  <LetteredImage type={type} />
                  <div className="self-center">
                    <form className="">
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {newList.map((item, index) => (
                          <SideInput
                            side={item.name}
                            key={index}
                            postid={postid}
                            value={item.value}
                            handleValueChange={handleValueChange}
                          />
                        ))}
                      </div>
                    </form>

                    <TotalSqFeet
                      theInches={newList}
                      type={type}
                      measurment={value[2]}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </MyFunctions.Consumer>
    </>
  );
}
