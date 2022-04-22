import React, {useState} from "react";
import {Link} from "react-router-dom";

const Book = (props) => {

    //React Hook (UseState)
    const [availableCopies, setAvailableCopies] = useState(props.book.availableCopies);

    //React Hook (UseEffect)
    React.useEffect(() => {
        setAvailableCopies(props.book.availableCopies);
        }, [props.book.availableCopies]
    )

    function markAsTakenState() {
        setAvailableCopies(availableCopies - 1);
    }

    function markAsTakenDataBase() {
        props.onMark(props.book.id);
    }

    return (
        <tr key={props.book.id}>
            <td>{props.book.id}</td>
            <td>{props.book.name}</td>
            <td>{props.book.category}</td>
            <td>{props.book.author.name} {props.book.author.surname}</td>
            <td>{props.book.author.country.name}</td>
            <td>{availableCopies}</td>
            <td>
                <a title={"Mark as taken"} className={"btn btn-success"} onClick={() => {
                    markAsTakenState();
                    markAsTakenDataBase();
                }}>Mark as taken</a>
            </td>
            <td>
                <Link className={"btn btn-warning"} onClick={() => props.onEdit(props.book.id)}
                      to={`/books/edit/${props.book.id}`}>Edit</Link>
            </td>
            <td>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.book.id)}>Delete</a>
            </td>
        </tr>
    )
}

export default Book;