import React, { createContext,  useState } from "react";
import { toast } from "react-toastify";
// import { data } from 'react-router';

export let Context = createContext();

const BookProvider = ({ children }) => {
  let [storeBook, setStoreBook] = useState([]);
  let [wishList, setWishList] = useState([]);

  const handleWisList = (currentBook) => {
    // step1:store book id
    //step2:where to store
    //step3:array or collection
    //step4:if the book is already exist then show a alert or toast
    //step5:if the

    const isExistReadList = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistReadList) {
      toast.error("this book is already in read list");
      return;
    }
    console.log(currentBook, "book");
    let isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("Mark is already exjist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };

  const handleMark = (currentBook) => {
    // step1:store book id
    //step2:where to store
    //step3:array or collection
    //step4:if the book is already exist then show a alert or toast
    //step5:if the

    console.log(currentBook, "book");
    let isExistBook = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("Mark is already exjist");
    } else {
      setStoreBook([...storeBook, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };

  let data = {
    storeBook,
    wishList,
    setWishList,
    setStoreBook,
    handleMark,
    handleWisList,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default BookProvider;
