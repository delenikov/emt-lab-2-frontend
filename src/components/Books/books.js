import React from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import Book from "./Book";

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render(){

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (

            <div className={"container mb-4"}>
                <div className="col mt-5 mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-info"} to={"/books/add"}>Add new book</Link>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped text-center"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>ID</th>
                                <th scope={"col"}>Book Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Country</th>
                                <th scope={"col"}>Available Copies</th>
                                <th scope={"col"}>Mark as Taken</th>
                                <th scope={"col"}>Edit</th>
                                <th scope={"col"}>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ReactPaginate color="primary"
                               previousLabel={"Prev"}
                               previousClassName={"page-item"}
                               previousLinkClassName={"page-link"}
                               nextLabel={"Next"}
                               nextClassName={"page-item"}
                               nextLinkClassName={"page-link"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"page-item"}
                               pageLinkClassName={"page-link"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((book) => {
            return (
                <Book key={book.id} book={book} onMark={this.props.onMark} onDelete={this.props.onDelete} onEdit={this.props.onEdit}></Book>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}

export default Books;