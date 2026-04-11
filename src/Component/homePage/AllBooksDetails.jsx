import React from "react";
import { Link } from "react-router";

const AllBooksDetails = ({ books }) => {
  return (
    <Link
      to={`/bookDetails/${books.bookId}`}
      className="card bg-base-100  shadow-sm"
    >
      <figure className="gap-10">
        <img src={books.image} className="h-[250px] w-[250px] rounded-2xl" />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="">
          {books.author}
          <div className="badge text-green-500 ml-5">{books.category} </div>
        </h2>
        <h1 className="text-2xl">{books.bookName}</h1>
        <p>{/* {books.review} */}</p>

        <div className="card-actions flex justify-between border-t border-dashed">
          <div className=" ">{books.publisher}</div>
          <div className="">{books.rating}</div>
        </div>
      </div>
    </Link>
  );
};

export default AllBooksDetails;
