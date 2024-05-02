import Image from "next/image";
import uLettered from "./icons/u-lettered.png";
import lLettered from "./icons/l-lettered.png";
import rLettered from "./icons/r-lettered.png";

export default function LetteredImage({ type }) {
  const item = (image) => {
    return (
      <div>
        <Image
          src={image}
          alt={{ type } + " Lettered"}
          width={250}
          height={250}
        />
      </div>
    );
  };

  switch (type) {
    case "Rectangle":
      return item(rLettered);
    case "U-Shape":
      return item(uLettered);
    case "L-Shape":
      return item(lLettered);
  }
}
