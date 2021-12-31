import React from 'react';

const ListArticle = () => {
    return (
       <>
        <div className="container-article">
            <h3>Create Article</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <input type="text" className="form-control" id="heading" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <input type="text" className="form-control" id="heading" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Article Heading</label>
                    <input type="text" className="form-control" id="heading" />
                </div>
                <button type="submit" className="btn btn-primary">Save Article</button>
                <button type="button" className="btn">Cancel</button>
            </form>
        </div>
       </>
    )
}

export default ListArticle;
