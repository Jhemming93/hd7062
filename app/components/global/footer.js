export default function Footer() {
  const disclaimer =
    "*Please note that the estimates provided are based on available information and assumptions at the time of calculation. Actual figures may vary due to unforeseen circumstances, changes in market conditions, or other factors beyond our control. We recommend using these estimates as a general guideline and consulting with a qualified professional for accurate and tailored advice.";
  const checkPage = () => {};
  return (
    <footer className="bg-gray-100">
      <div className="flex sm:container mx-auto" style={{ maxWidth: 1024 }}>
        <div className="flex p-2">
          <p className="pl-1 self-center text-lrg font-bold" id="disclaimer">
            {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
