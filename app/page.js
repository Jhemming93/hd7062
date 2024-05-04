"use client";

import { useEffect, useState } from "react";
import CounterTopList from "./components/countertoplist/counterTopList";
import CounterTopSelectionMenu from "./components/sidemenu/counterTopSelectionMenu";
import { MyFunctions } from "./MyContext";
import getData from "./api/data";
import PageHeader from "./components/page/pageHeader";

const counterTopList = [];

// const context = useContext(counterTopList);

const Home = () => {
  const [currentTotalCost, setCurrentTotalCost] = useState(0);
  const [list, setList] = useState(counterTopList);
  const [measurment, setMeasurment] = useState("Inches");
  const [cost, setCost] = useState(0);
  const [postId, setPostId] = useState(0);
  getData();
  const disclaimer =
    "*The estimates provided by this tool are intended for informational purposes only and should not be considered as guarantees. We always recommend reaching out to a professional who can give you a more accurate estimate.";

  const addCounterTopToList = (event) => {
    event.preventDefault();
    const type = event.target.alt;
    postNewCountertop({ type });
  };

  const createPostId = () => {
    let newId;
    if (postId === 0) {
      newId = postId + 1;
      setPostId(newId);
      return 0;
    } else if (postId != 0) {
      newId = postId + 1;
      setPostId(newId);
      return postId;
    }
  };

  const changeListItemCost = (id, myvalue, num) => {
    const objectIndex = list.findIndex((item) => item.id === id);

    const updatedList = list.map((item, index) => {
      if (index === objectIndex) {
        return {
          ...item,
          [myvalue]: Number(num),
        };
      } else {
        return item;
      }
    });

    setList(updatedList);
  };

  const postNewCountertop = ({ type }) => {
    let postid = createPostId();

    let newCounterTop = new Object({
      type: type,
      id: postid,
      cost: 0,
    });
    setList([newCounterTop, ...list]);
  };

  const removeCounterTop = (id) => {
    const findIndex = list.findIndex((item) => item.id === id);
    list.splice(findIndex, 1);
    setList([...list]);
  };

  const totalTotals = () => {
    let setTotal = 0;
    list.forEach((item) => {
      setTotal = item.cost + setTotal;
    });
    setCurrentTotalCost(Number(setTotal));
  };

  useEffect(() => {
    totalTotals();
  }, [list]);

  const myFunctionValues = {
    removeCounterTop: removeCounterTop,
    changeListItemCost: changeListItemCost,
    measurment: [measurment, setMeasurment],
    cost: [cost, setCost],
    currentTotalCost: [currentTotalCost, setCurrentTotalCost],
  };

  return (
    <main>
      <MyFunctions.Provider value={myFunctionValues}>
        <div className="lg:mx-auto mx-2" style={{ maxWidth: 1024 }}>
          <PageHeader
            title={"Counter Top Estimator"}
            imgsrc={"/icons/measuringTape.png"}
            imgalt={"Measuring Tape"}
            disclaimer={disclaimer}
          />
          <div className=" md:grid-cols-12 md:grid md:gap-4 ">
            <div className="md:col-span-3 ">
              <CounterTopSelectionMenu onClick={addCounterTopToList} />
            </div>
            <div className="md:col-span-9 container">
              <div className="p-2 my-2 rounded text-lg md:text-xl">
                <h3>Current Counter Tops</h3>
                <span className="w-full bg-black h-px block"></span>
              </div>
              <CounterTopList counterTopList={list} />
            </div>
          </div>

          {/* end of grid */}
        </div>
      </MyFunctions.Provider>
    </main>
  );
};

export default Home;
