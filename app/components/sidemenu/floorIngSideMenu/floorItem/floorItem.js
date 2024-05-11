import { useEffect, useState } from "react";
import Image from "next/image";

const FloorItem = () => {
  const [aSide, setASide] = useState(0);
  const [bSide, setBSide] = useState(0);
  const [totalSquare, setTotalSquare] = useState(0);
  const [boxPrice, setBoxPrice] = useState(0);
  const [boxCoverage, setBoxCoverage] = useState(0);

  const caculateSquare = () => {
    if (isNaN(aSide) || isNaN(bSide)) {
      return;
    } else {
      setTotalSquare(Number(aSide * bSide));
    }
  };
  useEffect(() => {
    caculateSquare();
  }, [aSide, bSide]);

  return (
    <div>
      <div className="p-2 bg-red-200 rounded">
        <h3 className="text-2xl">Floor Space Calculator</h3>
        <div className="bg-sky-800">
          <div>
            <form>
              <div>
                <label>A Side</label>
                <div>
                  <input
                    className="rounded-xl"
                    name="A_Side"
                    type="text"
                    value={aSide}
                    onChange={(e) => setASide(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label>B Side</label>
                <div>
                  <input
                    className="rounded-xl"
                    name="B_Side"
                    type="text"
                    value={bSide}
                    onChange={(e) => setBSide(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-64">
            <Image
              src={"/icons/Rectangle-Lettered.png"}
              alt="Rectangle Lettered"
              width={350}
              height={350}
            />
          </div>
          <div className="bg-white p-2 w-fit rounded">
            <p className="text-6xl">{totalSquare}&sup2; Feet</p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <h3 className="text-2xl"># of Box Calculator</h3>
        <div>
          <form>
            <div>
              <label
                htmlFor="box_price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price per Box
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="box_price"
                  id="box_price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  aria-describedby="price-currency"
                  value={boxPrice}
                  onChange={(e) => setBoxPrice(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span
                    className="text-gray-500 sm:text-sm"
                    id="price-currency"
                  >
                    CAD
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="box_coverage"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Box Sqr. Footage Coverage
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="box_coverage"
                  id="box_coverage"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  aria-describedby="price-currency"
                  value={boxCoverage}
                  onChange={(e) => setBoxCoverage(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span
                    className="text-gray-500 sm:text-sm"
                    id="price-currency"
                  >
                    ft&sup2;
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FloorItem;
