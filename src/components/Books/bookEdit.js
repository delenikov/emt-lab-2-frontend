import React from 'react';
import {useNavigate} from 'react-router-dom';

const BookEdit = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        author: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== 0 ? formData.category : props.book.category;
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, author, availableCopies);
        navigate("/books");
    }

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-6">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category, index) => {
                                    <option key={category} value={category}>{category}</option>
                                    if (props.book.category !== undefined && props.book.category === category)
                                        return <option selected={props.book.category.index} key={category}
                                                       value={category}>{category}</option>
                                    else
                                        return <option key={category}
                                                       value={category}>{category}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) => {
                                if (props.book.author !== undefined && props.book.author.id === author.id)
                                    return <option selected={props.book.author.id} key={author.id}
                                                   value={author.id}>{author.name} {author.surname}</option>
                                else
                                    return <option key={author.id}
                                                   value={author.id}>{author.name} {author.surname}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="price">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default BookEdit;