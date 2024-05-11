import FloorItem from "@/app/components/sidemenu/floorIngSideMenu/floorItem/floorItem";
import PageHeader from "../../components/page/pageHeader";

const FlooringCal = () => {
  return (
    <>
      <PageHeader
        title={"Flooring Estimator"}
        imgsrc={"/icons/measuringTape.png"}
        imgalt={"Measuring Tape"}
        disclaimer={disclaimer}
      />
      <div>
        <FloorItem />
      </div>
    </>
  );
};

export default FlooringCal;
