import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
    const [catUrl, setCatUrl] = useState([]);
    const [dogUrl, setDogUrl] = useState([]);
    const history = useHistory();
    const redirectToCat = () => history.push(`/cat`);
    const redirectToDog = () => history.push(`/dog`);

    useEffect(() => {
        const catFetch = async () => {
            try {
                let cats = await axios.get("https://api.thecatapi.com/v1/images/search");
                setCatUrl(cats.data[0].url);
            } catch (error) {
                console.log(error)
            }
        }

        const dogFetch = async () => {
            try {
                let dogs = await axios.get("https://dog.ceo/api/breeds/image/random");
                setDogUrl(dogs.data.message);
            } catch (error) {
                console.log(error)
            }
        }
        catFetch();
        dogFetch();
    }, []);
    
    return (
        <div>
            <header>Welcome to the Cat & Dog image randomizer</header>
            <div className="catsHome">
                <button onClick={redirectToCat}>Click here or the cat(s) for Cats!</button>
                <img src={catUrl} onClick={redirectToCat}/>
            </div>
            <div className="dogsHome">
                <button onClick={redirectToDog}>Click here or the dog(s) for Dogs!</button>
                <img src={dogUrl} onClick={redirectToDog}/>
            </div>
        </div>
    )
}

export default Homepage;