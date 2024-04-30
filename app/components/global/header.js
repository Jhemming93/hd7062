import Image from "next/image";
import MainNav from "./nav/mainNav";

export default function Header() {
  return (
    <>
      <header className="bg-gray-100 py-2 sticky top-0 sm:static">
        <div
          className="mx-auto justify-between md:flex sm:container"
          style={{ maxWidth: 1024 }}
        >
          <div className="sm:flex p-2 sm:justify-center">
            <Image
              src={"/img/toolsLogo.png"}
              alt={"justtools logo"}
              width={50}
              height={50}
              className="mx-auto sm:mx-0 p-1 bg-white"
            />
            <h1 className="pl-1 self-center text-3xl font-bold font-stencil tracking-wider text-blue-900 text-center">
              Just Tools
            </h1>
          </div>
          <div className="flex justify-center">
            <MainNav />
          </div>
        </div>
      </header>
    </>
  );
}
