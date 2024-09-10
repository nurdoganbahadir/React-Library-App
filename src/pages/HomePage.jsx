import React, { useEffect, useState } from "react";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const url = "https://clarus-library-api.vercel.app/books";

  //!GET-READ
  const getBooks = async () => {
    const response = await axios.get(url);
    setBooks(response.data);
  };
  //! POST
  const postBooks = async (newData) => {
    await axios.post(url, newData);
    getBooks();
  };
  //! DELETE
  const deleteBooks = async (id) => {
    await axios.delete(`${url}/${id}/`);
    getBooks();
  };

  //!PUT
  const putBooks = async (editItem) => {
    await axios.put(`${url}/${editItem.id}/`, editItem);
    getBooks();
  };

  useEffect(() => {
    getBooks();
  }, []);


  return (
    <>
      <AddBook postBooks={postBooks} />
      <BookList books={books} deleteBooks={deleteBooks} putBooks={putBooks} />
    </>
  );
};

export default HomePage;
