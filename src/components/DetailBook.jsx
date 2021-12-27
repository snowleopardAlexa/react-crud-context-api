import React, { Fragment, useContext, useEffect, useState } from "react";
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
										<svg
											width="19"
											height="19"
											viewBox="0 0 19 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.0416 9.5H3.95831"
												stroke="#2F7EF7"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M9.49998 15.0416L3.95831 9.49992L9.49998 3.95825"
												stroke="#2F7EF7"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
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