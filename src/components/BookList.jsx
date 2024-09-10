import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBook from "./EditBook";

const BookList = ({ books, deleteBooks, putBooks }) => {
  const [editItem, setEditItem] = useState("");
console.log(editItem);
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Kapak Resmi</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazar Adı</th>
            <th scope="col">Tür</th>
            <th scope="col">Yayınlanma Tarihi</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map(
            ({ title, author, ISBN, image, genre, publicationYear, id }) => (
              <tr key={id}>
                <td>{ISBN}</td>
                <td>
                  <img src={image} alt={title} width={50} />
                </td>
                <td>{title}</td>
                <td>{author}</td>
                <td>{genre}</td>
                <td>{publicationYear}</td>
                <td className="text-center ">
                  <AiFillDelete
                    type="button"
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteBooks(id)}
                  />

                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    size={20}
                    type="button"
                    className="me-2 text-warning cursor-pointer"
                    onClick={() => {
                      setEditItem({
                        title,
                        author,
                        ISBN,
                        image,
                        genre,
                        publicationYear,
                        id,
                      });
                    }}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <EditBook
        editItem={editItem}
        setEditItem={setEditItem}
        putBooks={putBooks}
      />
    </div>
  );
};

export default BookList;
