import axios from "axios";

async function getData() {
  const apikey =
    "0080b5ae6ad4e6a39944030b789860dca94bed9c99fcf6d96283567aabd2b9700c2acd1927766d2e13c347f1fa50a16a0494d1d25a0fee14752cdcb504fb6a842a4c3c5d1bea38fc92d624623e25b57e396360f2ff9b6efee8fe20bf02bd76e23810a950979dd356dd9053e2e73b883b7d8f4be93e9450c6299febe1c80c114a";
  const fetchUrl = "http://localhost:3001/api/counter-tops?populate=letters";
  let data = await axios.get(fetchUrl).then((response) => {
    return response.data;
  });
  console.log(data);
}

export default getData;
