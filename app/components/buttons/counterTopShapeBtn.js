import Image from "next/image";

export default function CounterTopShapeBtn({ title, onClick }) {
  //   const item = props.data;
  const imgSrc = "/icons/" + title + ".png";

  return (
    <>
      <div className="max-w-fit">
        <button onClick={onClick}>
          <div className="bg-slate-50 rounded p-2 ">
            <div className="max-w-24 md:w-full lg:max-w-20">
              <Image
                width={250}
                height={250}
                src={imgSrc}
                alt={title}
                className="w-full h-full"
              />
            </div>
          </div>
        </button>
        <p className="text-center pt-1">{title}</p>
      </div>
    </>
  );
}
