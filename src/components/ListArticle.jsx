import React, { useState, useContext } from 'react';

const ListArticle = () => {

const [heading, setHeading] = useState('');
const [subheading, setsubHeading] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [author, setAuthor] = useState('');

    return (
       <>
        <div className="container-article">
            <h3>Create Article</h3>
            <form>
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
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <textarea 
                      className="form-control" 
                      id="exampleFormControlTextarea1" 
                      rows="2" 
                      onChange={(e) => setsubHeading(e.target.value)} 
                      value={subheading}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="heading" 
                     onChange={(e) => setDescription(e.target.value)}
                     value={description}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="heading" 
                     onChange={(e) => setAuthor(e.target.value)}
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
