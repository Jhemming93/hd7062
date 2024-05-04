import DeleteBtn from "../../../buttons/delete";
import { MyFunctions } from "@/app/MyContext";
import { useContext } from "react";

export default function CounterItemHead(props) {
  const type = props.type;
  const postid = props.postid;
  const functions = useContext(MyFunctions);
  const [measurment, setMeasurment] = functions.measurment;

  return (
    <div className="flex justify-between sm:justify-normal">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:w-full">
        <h3 className="text-lrg md:text-2xl font-bold">{type} Countertop</h3>
        <p className="pr-4 self-center capitalize">
          <span className="font-bold">Measurment in</span> {measurment}
        </p>
      </div>

      <div className="flex">
        <DeleteBtn postid={postid} />
      </div>
    </div>
  );
}
