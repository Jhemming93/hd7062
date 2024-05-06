import { MyFunctions } from "@/app/MyContext";
import { useContext, useEffect, useState } from "react";

export default function TotalSqFeet(props) {
  const sideList = props.theInches;
  const [feet, setFeet] = useState("0");
  const [currentCost, setCurrentCost] = useState("0.00");

  const functions = useContext(MyFunctions);

  const changeListItemCost = functions.changeListItemCost;
  const postid = props.postid;
  const [measurment, setMeasurment] = functions.measurment;

  const [cost, setCost] = functions.cost;

  const caculateCost = (feet, cost) => {
    const total = Math.ceil(feet * cost);
    if (isNaN(total)) {
      setCurrentCost(0);
    } else {
      setCurrentCost(total);
    }
  };

  const convertToFeet = (sum) => {
    const decimal = sum / 144;
    const rounded = Math.ceil(decimal);
    if (rounded < 0) {
      return 0;
    }
    return rounded;
  };

  useEffect(() => {
    let A = "";
    let B = "";
    let C = "";
    let D = "";
    let E = "";
    let F = "";

    const type = props.type;
    const assignLetters = () => {
      sideList.forEach((item) => {
        const name = item.name;
        if (name === "A") {
          return (A = item.value);
        } else if (name === "B") {
          return (B = item.value);
        } else if (name === "C") {
          return (C = item.value);
        } else if (name === "D") {
          return (D = item.value);
        } else if (name === "E") {
          return (E = item.value);
        } else if (name === "F") {
          return (F = item.value);
        }
      });
    };

    assignLetters();

    const calcShape = () => {
      const findSum = () => {
        if (type === "Rectangle") {
          let sum = A * B;
          return sum;
        } else if (type === "L-Shape") {
          B = B - C;

          let BD = B * D;
          let AC = A * C;
          let sum = AC + BD;
          return sum;
        } else if (type === "U-Shape") {
          let DE = D + E;
          B = B - DE;
          let BF = B * F;
          let AD = A * D;
          let EC = E * C;
          let sum = AD + BF + EC;
          return sum;
        }
      };

      const sum = findSum();

      if (measurment === "Inches") {
        let feet = convertToFeet(sum);
        return feet;
      } else {
        if (Math.ceil(sum) < 0) {
          return 0;
        } else {
          return Math.ceil(sum);
        }
      }
    };
    setFeet(calcShape());
  }, [sideList]);

  useEffect(() => {
    caculateCost(feet, cost);
  }, [cost, feet, sideList]);

  useEffect(() => {
    const value = "cost";
    changeListItemCost(postid, value, currentCost);
  }, [currentCost, postid]);

  return (
    <div className="flex flex-col  bg-white rounded p-1 px-2 w-3/4">
      <p>
        <span className="pr-1">{feet}&sup2;</span>
        <span className="font-bold"> Ft Total</span>
      </p>
      <p className="">
        <span className="border-1 pr-1">${currentCost}</span>{" "}
        <span className="font-bold">Est. Cost for Counter Top</span>
      </p>
    </div>
  );
}
