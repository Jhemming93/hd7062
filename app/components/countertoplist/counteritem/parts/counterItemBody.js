import LetteredImage from "./letteredImage";
import SideInput from "./sideInput";
import TotalSqFeet from "./totalSqFeet";

export default function CounterItemBody(props) {
  const type = props.type;
  const newList = props.newList;
  const handleValueChange = props.handleValueChange;
  const postid = props.postid;

  return (
    <div className="md:flex">
      <LetteredImage type={type} />
      <div className="self-center">
        <form className="">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {newList.map((item, index) => (
              <SideInput
                side={item.name}
                key={index}
                value={item.value}
                handleValueChange={handleValueChange}
              />
            ))}
          </div>
        </form>

        <TotalSqFeet theInches={newList} type={type} postid={postid} />
      </div>
    </div>
  );
}
