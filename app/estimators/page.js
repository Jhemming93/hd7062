"use client";

import { useEffect, useState } from "react";

import ToolSelector from "./parts/toolSelector";
import SeasonalCal from "./calculators/seasonalCal";
import FlooringCal from "./calculators/flooringCal";
import CounterTopCal from "./calculators/counterTopCal";

const Estimators = () => {
  const [active, setActive] = useState("counter");
  //   console.log(active);
  const [tool, setTool] = useState("counter");
  //   console.log(tool);
  useEffect(() => {
    const currentTool = () => {
      switch (active) {
        case "counter":
          return <CounterTopCal />;
        case "floor":
          return <FlooringCal />;
        case "landscape":
          return <SeasonalCal />;
      }
    };
    setTool(currentTool);
  }, [active]);

  return (
    <div className="mx-auto" style={{ maxWidth: 1024 }}>
      <div className="my-6 text-center">
        <h2 className="text-3xl font-stencil text-center">Tools</h2>
        <p>
          <span className="font-stencil">JustTools </span>offers a selection of
          different calculators that can help give you an estimate for your next
          project.
        </p>
        <p>
          *The estimates provided by this tool are intended for informational
          purposes only and should not be considered as guarantees. We always
          recommend reaching out to a professional who can give you a more
          accurate estimate.
        </p>
      </div>

      <div className="mx-auto w-fit py-6">
        <ToolSelector setActive={setActive} active={active} />
      </div>

      <div>{tool}</div>
    </div>
  );
};

export default Estimators;
