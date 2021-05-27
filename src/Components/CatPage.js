import React, { useState } from "react";
import axios from "axios";

const CatPage = () => {
    const [catUrls, setCatUrls] = useState([]);
    console.log(catUrls)

    const catFetch = async (num) => {
        try {
            let cats = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`);
            setCatUrls(cats.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        catFetch(e.target.value);
    }

    const showAllImages = catUrls.map((cats, index) => {
        <div key={cats.id}>
            <img src={cats[index].url}/>
        </div>
    })

    return (
        <div className="catContainer">
            <h1>Cats Page</h1>
            <label> Select number of cats</label>
            <select onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {showAllImages}
        </div>
    )
}

export default CatPage;