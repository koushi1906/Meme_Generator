import { useEffect, useState } from "react";

const Api = () => {
    const [starWarsData, setStarwarsData] = useState({});
    const [count, setCount] = useState(1);

    function change(){
        setCount(prev => prev + 1);
    }
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarwarsData(data))
    }, [setStarwarsData, count])
    
    return (
        <div>
            <button className="border border-black bg-gray-200 p-2 ml-2 my-2" onClick={change}>Get next Character</button>
            <pre>{JSON.stringify(starWarsData, null,2)}</pre>
        </div>
    )
}

export default Api;
