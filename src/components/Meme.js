import { useState } from "react";
import MemesData from "./memesData";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function getMeme() {
        const data = MemesData.data.memes;
        const randomNumber = Math.floor(Math.random() * data.length);
        const url = data[randomNumber].url;
        setMeme (prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    
    function change(event){
        const {name, value} = event.target;
        setMeme(prev => {
            return{
                ...prev,
                [name] : value
            }
        })
    }
    return (
        <form className="p-16">
            <div className="grid grid-cols-2 grid-rows-2">
                <input type="text" onChange={change} className="border border-black indent-0.5 mr-2" placeholder="top-text" name="topText" value={meme.topText}/>
                <input type="text" onChange={change} placeholder="bottom-text" className="border indent-0 ml-2 border-black" name="bottomText" value={meme.bottomText}/>
                <button type="button" onClick={getMeme} className="bg-gradient-to-r cursor-pointer from-purple-800 via-purple-700 to-purple-600 text-white mt-4 p-2 col-span-2">Get a new meme image 🖼️</button>
            </div>
            <div className="relative">
                {<img className="pt-4 w-full relative" src={meme.randomImage} alt="meme"/>}
                <h2 className="text-white absolute top-7 font-mono text-center font-bold left-0 text-6xl w-full">{meme.topText}</h2>
                <h2 className="text-white absolute w-full font-mono bottom-0 text-center text-6xl">{meme.bottomText}</h2>
            </div>
        </form>
    )
}

export default Meme;