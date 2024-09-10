import React, { useState } from "react";

const AddBook = ({ postBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postBooks({
      title: title,
      author: author,
      ISBN: ISBN,
      image: image,
      genre: genre,
      publicationYear: year,
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">My Library</h1>
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Book Name
              </label>
              <input
                type="text"
                placeholder="Book Name"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Writer
              </label>
              <input
                type="text"
                placeholder="Author"
                className="form-control"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                placeholder="ISBN"
                className="form-control"
                onChange={(e) => setISBN(e.target.value)}
                value={ISBN}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Kapak Resmi
              </label>
              <input
                type="text"
                placeholder="Kapak Resmi"
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Tür
              </label>
              <input
                type="text"
                placeholder="Tür"
                className="form-control"
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
              />
              <p className="">
                Birden fazla seçenek varsa slash ile ayırabilirsiniz.
              </p>
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Yayınlanm Tarihi
              </label>
              <input
                type="text"
                placeholder="Yayınlanma Tarihi"
                className="form-control"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
