import React from "react";

const CatPage = () => {
    return (
        <div className="catContainer">
        <h1>Cats Page</h1>
        <label for="cats">Select number of cats</label>
        <select id="cats">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        </div>
    )
}

export default CatPage;