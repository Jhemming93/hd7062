import { useState } from "react";
import CounterTopSelector from "./counterTopSelector";
import { MyTotalCost } from "@/app/MyContext";

export default function CounterTopList(props) {
  const list = props.counterTopList;

  return (
    <>
      <div className="px-2" id="counterTopList">
        <ul>
          {list.map((item) => (
            <CounterTopSelector type={item.type} key={item.id} id={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
