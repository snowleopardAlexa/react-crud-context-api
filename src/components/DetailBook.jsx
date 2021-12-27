import React, { Fragment, useContext, useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const DetailBook = (route) => {
  const [data, setData] = useState('');
  const {book} = useContext(GlobalContext);
  const currentBookId = route.match.params.id;

  useEffect(() => {
    const bookId = currentBookId;
    const selectedBook = book.find(x => x.id === parseInt(bookId));
    setData(selectedBook)
    // eslint-disable-next-line
  },[])

  return (
		<Fragment>
			<div className="Articledetail">
				<div className="container">
					<div>
						<div className="row">
							<div className="col-md-12">
								<Link to="/">
									<small>
										<BsFillArrowLeftCircleFill />
										Go back
									</small>
								</Link>
							</div>
						</div>
						<div className="listing">
							<div className="row">
								<div className="col-md-12">
									<span>{data && data.category}</span>
									<h4>
                                       {data && data.title}
									</h4>
									<p>
                                       {data && data.subTitle}
									</p>
									<br /> <br />
									<p>
                                       {data && data.description}
									</p>
									<span>
									   <b>{data && data.author}</b>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default DetailBook;