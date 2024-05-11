import Image from "next/image";

export default function CounterTopShapeBtnTest({ title, onClick }) {
  //   const item = props.data;
  const imgSrc = "/icons/" + title + ".png";

  return (
    <>
      <button onClick={onClick} className="relative w-1/2">
        <Image
          width={250}
          height={250}
          src={imgSrc}
          alt={title}
          className="w-full h-auto opacity-100 block transition ease-in-out duration-500 hover:opacity-30"
        />
        <div className="transition ease-in-out duration-500 opacity-0 absolute top-1/4 left-1/4 translate-x-1/2 translate-y-1/2 text-center hover:opacity-100 ">
          <div className="bg-everGreen text-white p-2">Hello World!</div>
        </div>
      </button>
    </>
  );
}
