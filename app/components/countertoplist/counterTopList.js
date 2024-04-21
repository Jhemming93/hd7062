import CounterItem from "./counterItem";
import CounterTopSelector from "./counterTopSelector";

export default function CounterTopList(props) {
  const list = props.counterTopList;
  return (
    <>
      <div className="px-2" id="counterTopList">
        <ul>
          {list.map((item, index) => (
            <CounterTopSelector type={item.type} key={index} id={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
