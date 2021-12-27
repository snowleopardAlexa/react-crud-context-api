import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill, BsFillXCircleFill } from 'react-icons/bs';
import { GlobalContext } from "../context/GlobalState";

const ListBook = () => {
  const { book, editBook, deleteBook } = useContext(GlobalContext);
  // console.log(article);
  return (
    <Fragment>
      <div className="Articlelist">
        <div className="container">
          <div className="row mx-auto d-block">
            <div className="col-md-4">
              {book.length >= 1 ? (
                <Link to="/create">
                  <button type="button" className="btn btn-create-new-book">
                    Create New Book
                  </button>
                </Link>
              ) : (
              <p></p>
              )}
            </div>
          </div>
          <div>
            <div className="book">
              <div className="row">
                {book.length > 0 ? (
                  <div className="col-md-12">
                    {book.map(book => (
                      <div key={book.id}>
                        <div className="listBox">
                          <div className="row">
                            <div className="col-md-8">
                              <Link to={`/detail/${book.id}`}>
                                <span>{book.category}</span>
                                <h4>{book.title}</h4>
                                <p>{book.subTitle}</p>
                                <span>{book.author}</span>
                              </Link>
                            </div>
                            <div className="col-md-4">
                              <Link to={`/edit/${book.id}`}>
                                <div
                                  onClick={() => editBook(book.id)}
                                  className="edit-book"
                                >
                                <BsFillPencilFill />
                                </div>
                              </Link>
                              <div>
                                <button className="btn-delete" onClick={() => deleteBook(book.id)} >
                                <BsFillXCircleFill />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="noList">
                    <p>It seems you don't have any books</p>
                    <Link to="/create">
                      <button type="button" className="btn btn-primary">
                        Create New Book
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListBook;