import React from "react";

const categories = (props) => {
    return (
        <div className={"container mb-4"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Categories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((category, index) => {
                            return (
                                <tr key={index}>
                                    <td>{category}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;