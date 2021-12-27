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
          <div className="row">
            <div className="col-md-8">
              <h3>Library</h3>
            </div>
            <div className="col-md-4 text-right">
              {book.length >= 1 ? (
                <Link to="/create">
                  <button type="button" className="btn btn-primary">
                    Create New Book
                  </button>
                </Link>
              ) : (
              <p></p>
              )}
            </div>
          </div>
          <div>
            <div className="listing">
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
                            <div className="col-md-4 actionIcons text-right">
                              <Link to={`/edit/${book.id}`}>
                                <div
                                  onClick={() => editBook(book.id)}
                                  className="roundIcon"
                                >
                                <BsFillPencilFill />
                                </div>
                              </Link>
                              <div className="roundIcon">
                                <button className="noBg" onClick={() => deleteBook(book.id)} >
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