import React, { useState, useContext } from 'react';

const ListArticle = () => {

const [heading, setHeading] = useState('');
const [subheading, setsubHeading] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [author, setAuthor] = useState('');

const onSubmit = e => {
    e.preventDefault();
    const articleNew = {
        id: article.length+1,
        heading,
        subheading,
        description,
        category,
        author
    }
}

    return (
       <>
        <div className="container-article">
            <h3>Create Article</h3>
            <form> onSubmit={onSubmit}
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <input type="text" 
                      className="form-control" 
                      id="heading" 
                      onChange={(e) => setHeading(e.target.value)}
                      value={heading}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Subheading</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="heading" 
                      onChange={(e) => setsubHeading(e.target.value)}
                      value={subheading}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Category</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="category" 
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Description</label>
                    <textarea 
                      className="form-control" 
                      id="exampleFormControlTextarea1" 
                      rows="2" 
                      onChange={(e) => setDescription(e.target.value)} 
                      value={description}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Author</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="heading" 
                      onChange={(e) => setAuthor(e.target.value)}
                      value={author}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Article</button>
                <button type="button" className="btn">Cancel</button>
            </form>
        </div>
        </>
    )
}

export default ListArticle;
