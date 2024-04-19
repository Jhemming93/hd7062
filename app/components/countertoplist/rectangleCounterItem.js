import Image from "next/image";
export default function RectangleCounterItem() {
  const measurment = "inches";
  return (
    <>
      <div className="bg-slate-200 p-3 my-2 rounded">
        <div className="flex justify-between">
          <h3 className="text-lrg md:text-2xl font-bold">
            Rectangle Countertop
          </h3>
          <div className="max-w-8">
            <Image
              src={"/icons/x-cancel.svg"}
              alt="cancel x"
              width={50}
              height={50}
              className="w-full"
            />
          </div>
        </div>
        <div className="md:flex">
          <div>
            <Image
              src={"/icons/r-lettered.png"}
              alt="Rectangled Lettered"
              width={250}
              height={250}
            />
          </div>
          <div>
            <form className="md:grid md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <label className="font-bold">B</label>
                <input
                  type="text"
                  className="form-input h-4 ml-2 rounded"
                  placeholder={measurment}
                ></input>
              </div>
              <div className="flex items-center">
                <label className="font-bold">c</label>
                <input
                  type="text"
                  className="form-input h-4 ml-2 rounded max-w-fit"
                  placeholder={measurment}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
