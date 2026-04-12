import React, { useContext } from "react";
import { Context } from "../../BookContext/BookContext";

;
import AllBooksDetails from "../homePage/AllBooksDetails";

const ReadList = () => {
  let { storeBook, wishList } = useContext(Context);
  console.log(storeBook, wishList, "cccccccc");

if(storeBook.length===0){
    return(
        <div className="bg-gray-400 h-[50vh] text-center flex items-center justify-center capitalize">
            <p className="text-3xl">no Read list data</p>
        </div>
    )
}

  return (
    <div className="grid md:grid-cols-3 gap-2">
      {/* <h2>read list:{storeBook.length}</h2> */}
      {storeBook.map((ovi, ind) => (
        <AllBooksDetails books={ovi}  key={ind}></AllBooksDetails>
      ))}
    </div>
  );
};

export default ReadList;
