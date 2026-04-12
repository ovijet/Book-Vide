import React, { useContext } from "react";
import { Context } from "../../BookContext/BookContext";
import AllBooksDetails from "../homePage/AllBooksDetails";

const WisthList = () => {
  let { storeBook, wishList } = useContext(Context);
  console.log(storeBook, wishList, "cccccccc");

  if(wishList.length===0){
    return(
        <div className="bg-gray-300 h-[50vh] text-center flex items-center justify-center capitalize">
            <p className="text-3xl">no wish list data</p>
        </div>
    )
}
  return (
    <div className="grid md:grid-cols-3 gap-2 mt-10">
      {/* <h2>wish list:{wishList.length}</h2> */}
      {wishList.map((ovi, ind) => (
        <AllBooksDetails books={ovi} key={ind}></AllBooksDetails>
      ))}
    </div>
  );
};

export default WisthList;
