"use client";

import { useEffect, useState, createContext } from "react";
import CounterTopList from "./components/countertoplist/counterTopList";
import CounterTopSelectionMenu from "./components/counterTopSelectionMenu";
import { MyFunctions } from "./MyFunctions";

const counterTopList = [];

// const context = useContext(counterTopList);

const Home = () => {
  const [list, setList] = useState(counterTopList);
  const [measurment, setMeasurment] = useState("Inches");
  const [id, setId] = useState(0);
  const addCounterTopToList = (event) => {
    event.preventDefault();

    const type = event.target.alt;
    postNewCountertop({ type });
  };

  const createPostId = () => {
    if (id === 0) {
      const postid = id + 1;
      setId(postid);
      return 0;
    } else if (id != 0) {
      const postid = id + 1;
      setId(postid);
      return id;
    }
  };

  const postNewCountertop = ({ type }) => {
    let postid = createPostId();

    let newCounterTop = new Object({
      type: type,
      id: postid,
    });
    setList([...list, newCounterTop]);
  };

  const removeCounterTop = (id) => {
    const findIndex = list.findIndex((item) => item.id === id);
    list.splice(findIndex, 1);
    setList([...list]);
  };

  return (
    <main>
      <MyFunctions.Provider
        value={[removeCounterTop, setMeasurment, measurment]}
      >
        <div className="lg:mx-auto mx-2" style={{ maxWidth: 1024 }}>
          <h2 className="py-8 text-4xl font-bold">Counter Top Calculator</h2>
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
