import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { Context } from "../../BookContext/BookContext";

const BookDetails = () => {
  let { id } = useParams();
  // console.log(id, "ovi");
  let books = useLoaderData();

  // console.log(books);
  let find = books.find((books) => books.bookId == id);
  // console.log(find);
  let {
    // bookId,
    bookName,
    author,
    image,
    review,
    tags,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
  } = find;

  let { handleMark, handleWisList } = useContext(Context);

  return (
    <div className="card card-side bg-base-100 shadow-sm container mx-auto mt-10">
      <figure>
        <img src={image} className="w-[300px]" />
      </figure>
      <div className="card-body w-[500px] space-y-3">
        <h2 className="card-title">{bookName}</h2>
        <p>{author}</p>
        <div className="border-t border-b space-y-5">
          <p>{category}</p>
        </div>
        <div className="">
          <p className="mt-4"> Review:{review}</p>
        </div>
        <div className="border-b border-double">
          <span>{tags[0]}</span>
          <span className="ml-5">{tags[1]}</span>
        </div>
        <div className="space-y-3">
          <p>Number of Pages:{totalPages}</p>
          <p>Publisher:{publisher}</p>
          <p>Year of Publishing:{yearOfPublishing} </p>
          <p>Rating:{rating}</p>
        </div>

        <div className="card-actions">
          <button className="btn" onClick={() => handleMark(find)}>
            Mark As Read
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleWisList(find)}
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
