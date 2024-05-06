import PageUnderDev from "../../components/global/pageUnderDev";

// export const metadata = {
//   title: "Just Tools Watering",
//   description:
//     "This will help you track your current watering schedule at your store",
// };
export default function SeasonalCal() {
  const title = "Seasonal Calculator";

  return (
    <div className="mx-auto container p-2" style={{ maxWidth: 1024 }}>
      <PageUnderDev title={title} />
    </div>
  );
}
