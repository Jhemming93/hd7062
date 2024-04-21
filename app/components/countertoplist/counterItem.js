import Image from "next/image";
import DeleteBtn from "../buttons/delete";
import SideInput from "./parts/sideInput";
import LetteredImage from "./parts/letteredImage";
import { MyFunctions } from "@/app/MyFunctions";

export default function CounterItem({ type, letters, postid }) {
  const measurment = "inches";

  return (
    <>
      <div className="bg-slate-200 p-3 my-2 rounded" id={postid}>
        <div className="flex justify-between">
          <h3 className="text-lrg md:text-2xl font-bold">{type} Countertop</h3>
          <MyFunctions.Consumer>
            {(value) => <DeleteBtn onClick={value.removeCounterTop} />}
          </MyFunctions.Consumer>
        </div>
        <div className="md:flex">
          <LetteredImage type={type} />
          <div className="self-center">
            <form className="">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {letters.map((item, index) => (
                  <SideInput side={item} key={index} measurment={measurment} />
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
