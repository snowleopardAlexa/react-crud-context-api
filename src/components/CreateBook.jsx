import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');

    const {createBook, book} = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit= e =>{
        e.preventDefault();
        const bookNew ={
            id: book.length+1,
            title,
            subTitle,
            description,
            category,
            author
        }
        createBook(bookNew);
        history.push("/");
    }
    return (
        <Fragment>
            <div className="container Articleedit">
                <h3>Create Book</h3>
                <br />
                <br />
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Book Title</label>
                  <input type="text" className="form-control" id="heading" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Book Subtitle</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" value={subTitle} onChange={(e) => setSubTitle(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Book Description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Book Category</label>
                  <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Author Name</label>
                  <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success mt-2">Save Book</button>
                <Link to='/'><button type="button" className="btn btn-danger mt-2">Cancel</button></Link>
              </form>
            </div>
        </Fragment>
    )
}

export default CreateBook;