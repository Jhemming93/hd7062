import Image from "next/image";

export default function Home() {
  const isCounterTops = false;
  return (
    <main>
      <div className="lg:mx-auto mx-2" style={{ maxWidth: 1024 }}>
        <h2 className="py-8 text-4xl font-bold">Counter Top Calculator</h2>
        <div className=" md:grid-cols-12 md:grid md:gap-4 ">
          <div className="md:col-span-3">
            <div className="bg-slate-200 p-2 my-2 rounded text-lg md:text-xl">
              <h3>Add Counter Top Shape</h3>
            </div>

            <div></div>
          </div>
          <div className="md:col-span-9 container">
            <div className="p-2 my-2 rounded text-lg md:text-xl">
              <h3>Current Counter Tops</h3>
              <span className="w-full bg-black h-px block"></span>
            </div>
            <div className="px-2">
              {isCounterTops ? "" : <p>No Counter Tops Added</p>}
            </div>
          </div>
        </div>
        {/* end of grid */}
      </div>
    </main>
  );
}
