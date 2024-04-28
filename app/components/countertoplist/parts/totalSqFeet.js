import { useEffect, useState } from "react";

export default function TotalSqFeet(props) {
  const sideList = props.theInches;
  const [feet, setFeet] = useState("0");
  const measurment = props.measurment;

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

    console.log(sum);
    if (measurment === "Inches") {
      let feet = convertToFeet(sum);
      return feet;
    } else {
      return Math.ceil(sum);
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

  return (
    <div>
      <p>
        <span className="border-1 bg-white p-1">{feet}</span>{" "}
        <span className="font-bold">Sq. Feet Total</span>
      </p>
    </div>
  );
}
