import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/books">E-Book Library</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/books"}>Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/authors"}>Authors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/categories"}>Categories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header