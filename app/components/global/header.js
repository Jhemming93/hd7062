import Image from "next/image";
import MainNav from "./nav/mainNav";

export default function Header() {
  return (
    <>
      <header className="bg-gray-100">
        <div
          className="flex sm:container mx-auto justify-between"
          style={{ maxWidth: 1024 }}
        >
          <div className="flex p-2">
            <Image
              src={"/img/toolsLogo.png"}
              alt={"justtools logo"}
              width={50}
              height={50}
              className=" p-1 bg-white"
            />
            <h1 className="pl-1 self-center text-3xl font-bold font-stencil tracking-wider text-blue-900">
              Just Tools
            </h1>
          </div>
          <div className="flex">
            <MainNav />
          </div>
        </div>
      </header>
    </>
  );
}
