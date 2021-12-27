import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditBook = route => {
  let history = useHistory();
  const { book, editBook } = useContext(GlobalContext);
  const [selectedBook, setSelectedBook] = useState({
    id: null,
    category: "",
    title: "",
    description: "",
    subTitle: "",
    author: ""
  });
  const currentBookId = route.match.params.id;

  useEffect(() => {
    const bookId = currentBookId;
    const selectedBook = book.find(x => x.id === parseInt(bookId));
    setSelectedBook(selectedBook);
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (bookKey, val) =>
    setSelectedBook({ ...selectedBook, [bookKey]: val });

  const onSubmit = e => {
    e.preventDefault();
    editBook(selectedBook);
    history.push("/");
  };

  
  return (
    <Fragment>
      <div className="container">
        <h3>Edit Books</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Book Title</label>
            <input
              type="text"
              className="form-control"
              value={selectedBook.title}
              onChange={e => handleOnChange("title", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Subtitle</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              value={selectedBook.subTitle}
              onChange={e => handleOnChange("subTitle", e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={selectedBook.description}
              onChange={e => handleOnChange("description", e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Article Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={selectedBook.category}
              onChange={e => handleOnChange("category", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Author Name</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={selectedBook.author}
              onChange={e => handleOnChange("author", e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-save-book mt-4">
            Save Book
          </button>
          <Link to="/">
            {" "}
            <button type="button" className="btn btn-cancel-book mt-4">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

export default EditBook;
