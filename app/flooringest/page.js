import PageHeader from "../components/page/pageHeader";

const Flooring = () => {
  const disclaimer = "";
  return (
    <>
      <PageHeader
        title={"Flooring Estimator"}
        imgsrc={"/icons/measuringTape.png"}
        imgalt={"Measuring Tape"}
        disclaimer={disclaimer}
      />
    </>
  );
};

export default Flooring;
