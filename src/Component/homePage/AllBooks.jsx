import React, { use } from "react";
import AllBooksDetails from "./AllBooksDetails";

let AllBookData = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  let data = use(AllBookData);
  console.log(data);
  return (
    <div>
      <h2 className="text-center text-2xl underline">All Books</h2>
      <div className="container mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 space-y-2">
        {data.map((books,id) => (
          <AllBooksDetails key={id} books={books}></AllBooksDetails>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
