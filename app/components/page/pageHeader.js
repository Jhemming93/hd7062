import Image from "next/image";

const PageHeader = (props) => {
  const title = props.title;
  const disclaimer = props.disclaimer;
  const src = props.imgsrc;
  const alt = props.imgalt;
  return (
    <div className="py-8">
      <div className="flex">
        <h2 className="md:text-4xl font-bold text-3xl">
          {title}
          <span className="text-2xl text-blue-900">*</span>
        </h2>
        <div className="pl-2 self-center md:w-14">
          <Image
            src={src}
            alt={alt}
            width={50}
            height={50}
            className=" p-1 bg-white w-full"
          />
        </div>
      </div>
      <p>{disclaimer}</p>
    </div>
  );
};

export default PageHeader;
