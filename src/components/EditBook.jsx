import React from "react";

const EditBook = ({ editItem, setEditItem, putBooks }) => {
  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={editItem.title}
                onChange={(e) =>
                  setEditItem({ ...editItem, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Yazar Adı
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Enter your author"
                value={editItem.author}
                onChange={(e) =>
                  setEditItem({ ...editItem, author: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="ISBN"
                placeholder="Enter ISBN"
                value={editItem.ISBN}
                onChange={(e) =>
                  setEditItem({ ...editItem, ISBN: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Kapak Resmi
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                placeholder="Enter image url"
                value={editItem.image}
                onChange={(e) =>
                  setEditItem({ ...editItem, image: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Tür
              </label>
              <input
                type="text"
                className="form-control"
                id="genre"
                placeholder="Enter genre"
                value={editItem.genre}
                onChange={(e) =>
                  setEditItem({ ...editItem, genre: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Tür
              </label>
              <input
                type="text"
                className="form-control"
                id="publicationYear"
                placeholder="Enter publication year"
                value={editItem.publicationYear}
                onChange={(e) =>
                  setEditItem({ ...editItem, publicationYear: e.target.value })
                }
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => putBooks(editItem)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
