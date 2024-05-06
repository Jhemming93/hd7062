import LetteredImage from "./letteredImage";
import SideInput from "./sideInput";
import TotalSqFeet from "./totalSqFeet";

export default function CounterItemBody(props) {
  const type = props.type;
  const newList = props.newList;
  const handleValueChange = props.handleValueChange;
  const postid = props.postid;

  return (
    <div className="md:flex p-2">
      <div className="self-center mb-2 mx-auto w-full">
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
      <LetteredImage type={type} />
    </div>
  );
}
