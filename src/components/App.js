// create your App component here
import React, { useEffect, useState } from "react"

function App () {

    const [isRendered, setRendered] = useState(false);
    const [dogData, setDogData] = useState("");


    const API_URL = "https://dog.ceo/api/breeds/image/random"
  

    useEffect(() => {
            fetch (API_URL)
            .then(resp => resp.json())
            .then(data => {
                setRendered(true);
                setDogData(data);
                
            })
    }, []);

    

    return (
        <div className="App">
            <p>some text</p>
            {isRendered ? <img src={dogData.message} alt="A Random Dog" /> : <p>Loading...</p> }
        </div>
    )

}
export default App;