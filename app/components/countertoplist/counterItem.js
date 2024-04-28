import DeleteBtn from "../buttons/delete";
import SideInput from "./parts/sideInput";
import LetteredImage from "./parts/letteredImage";
import { MyFunctions } from "@/app/MyFunctions";
import TotalSqFeet from "./parts/totalSqFeet";
import { useEffect, useState } from "react";

export default function CounterItem({ type, letters, postid }) {
  const [newList, setNewList] = useState(letters);
  // console.log(letters);

  const handleValueChange = (i, num) => {
    const objectIndex = newList.findIndex((obj) => obj.name === i);

    const updatedList = newList.map((item, index) => {
      if (index === objectIndex) {
        // console.log("changed");
        return {
          name: item.name,
          value: Number(num),
        };
      } else {
        // console.log("unchanged");
        return item;
      }
    });
    setNewList(updatedList);
  };

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
                            measurment={value[2]}
                            side={item.name}
                            key={index}
                            postid={postid}
                            value={item.value}
                            handleValueChange={handleValueChange}
                            stand={item.stand}
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
