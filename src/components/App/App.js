import logo from '../../logo.svg';
import './App.css';
import {Component} from "react";
import {Router, Routes, Route, BrowserRouter} from "react-router-dom";
import BookService from "../../Repository/BookRepository";
import Header from "../Header/header";
import Books from "../Books/books";
import Authors from "../Authors/authors";
import Categories from "../Categories/categories";
import BookAdd from "../Books/bookAdd";
import BookEdit from "../Books/bookEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories: [],
            selectedBook: {}
        }
    }

    componentDidMount() {
        this.loadCategories();
        this.loadAuthors();
        this.loadBooks();
    }


    loadBooks = () => {
        BookService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        BookService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }


    loadCategories = () => {
        BookService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    getBook = (id) => {
        BookService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    deleteBook = (id) => {
        BookService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    markAsTaken = (id) => {
        BookService.markAsTaken(id)
    }

    addBook = (name, category, author, availableCopies) => {
        BookService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        BookService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }


    render() {
        return (
            <BrowserRouter>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path="/authors" element={<Authors authors={this.state.authors}/>}/>
                            <Route path="/categories" element={<Categories categories={this.state.categories}/>}/>
                            <Route path="/books/add" element={<BookAdd authors={this.state.authors} categories={this.state.categories} onAddBook={this.addBook}/>}/>
                            <Route path="/books/edit/:id" element={<BookEdit authors={this.state.authors} categories={this.state.categories} onEditBook={this.editBook} book={this.state.selectedBook}/>}/>
                            <Route path={["/books","/"]} element={<Books books={this.state.books} onMark={this.markAsTaken} onDelete={this.deleteBook} onEdit={this.getBook}/>}/>
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
        );
        }
    }

export default App;
