import Image from "next/image";
import { useContext } from "react";
import { MyFunctions } from "@/app/MyContext";

export default function DeleteBtn({ postid }) {
  const deleteX = "/icons/x-cancel.svg";
  const functions = useContext(MyFunctions);
  const deleteItem = functions.removeCounterTop;
  return (
    <button className="max-w-8 h-0" onClick={() => deleteItem(postid)}>
      <Image
        src={deleteX}
        alt="cancel x"
        width={50}
        height={50}
        className="w-full"
      />
    </button>
  );
}
