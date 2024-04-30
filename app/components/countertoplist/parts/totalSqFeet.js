import { MyFunctions } from "@/app/MyContext";
import { useContext, useEffect, useState } from "react";

export default function TotalSqFeet(props) {
  const sideList = props.theInches;
  const [feet, setFeet] = useState("0");
  const [cost, setCost] = useState("0.00");
  const measurment = props.measurment;
  const functions = useContext(MyFunctions);

  const costSet = functions[4];

  const caculateCost = (feet, cost) => {
    const total = Math.ceil(feet * cost);
    if (isNaN(total)) {
      setCost(0);
    } else {
      setCost(total);
    }
  };

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
        let sum = B * C;
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

  const convertToFeet = (sum) => {
    const decimal = sum / 144;
    const rounded = Math.ceil(decimal);
    if (rounded < 0) {
      return 0;
    }
    return rounded;
  };

  useEffect(() => {
    setFeet(calcShape());
  }, [sideList]);
  useEffect(() => {
    caculateCost(feet, costSet);
  }, [costSet, sideList]);

  return (
    <div className="flex">
      <p>
        <span className="border-1 bg-white p-1">{feet}</span>{" "}
        <span className="font-bold">Sq. Feet Total</span>
      </p>
      <p className="pl-2">
        <span className="border-1 bg-white p-1">${cost}</span>{" "}
        <span className="font-bold">Estimate Cost for Counter Top</span>
      </p>
    </div>
  );
}
