import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="bg-gray-100">
        <div className="flex sm:container mx-auto" style={{ maxWidth: 1024 }}>
          <div className="flex p-2">
            <Image
              src={"/img/THD.png"}
              alt={"hd logo"}
              width={50}
              height={50}
              className=" p-1 bg-white"
            />
            <h1 className="pl-1 self-center text-2xl font-bold">My Tools HD</h1>
          </div>
        </div>
      </header>
    </>
  );
}
