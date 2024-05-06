import Image from "next/image";

export default function LetteredImage({ type }) {
  const item = (image) => {
    let src = "/icons/" + image + "-Lettered.png";
    return (
      <div>
        <Image
          src={src}
          alt={{ type } + " Lettered"}
          width={350}
          height={350}
          className="mx-auto"
        />
      </div>
    );
  };

  switch (type) {
    case "Rectangle":
      return item("Rectangle");
    case "U-Shape":
      return item("U-Shape");
    case "L-Shape":
      return item("L-Shape");
  }
}
