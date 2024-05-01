export default function PageUnderDev(props) {
  const title = props.title;

  return (
    <div className="max-h-80 bg-blue-100 flex justify-center align-middle">
      <div className="border-4 rounded border-red-500 p-2 m-2 w-full flex justify-center flex-col">
        <h3 className="text-lg sm:text-3xl font-bold underline">{title}</h3>
        <p>
          This page is currenttly under development and will host a future app
          here please come back and check it out.
        </p>
      </div>
    </div>
  );
}
