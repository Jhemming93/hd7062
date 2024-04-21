import deleteX from "../../../public/icons/x-cancel.svg";
import Image from "next/image";

export default function DeleteBtn({ onClick }) {
  return (
    <button className="max-w-8" onClick={onClick}>
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
