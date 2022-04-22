import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "Unknown",
        category: "NOVEL",
        author: 1,
        availableCopies: 1
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, author, availableCopies);
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
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category, index) =>
                                <option key={category} value={category}>{category}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) =>
                                <option key={author.id} value={author.id}>{author.name} {author.surname}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="price">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available Copies"
                               required
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

export default BookAdd;
