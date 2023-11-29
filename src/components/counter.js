import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    function add(){
        if(count >= 0){
            setCount(count + 1);
        }
        
    }
    function subtract (){
        if (count > 0){
            setCount(count - 1);
        }
        
    }
    return (
        <main>
            <div className="flex">
            <div>
                <button className="border p-8 rounded-full" onClick={add}>Add</button>
            </div>
            <div className="border p-8 rounded-full">Count</div>
            <div>
                <button className="border p-8 rounded-full" onClick={subtract}>Subtract</button>
            </div>
             </div>
             <div>
                Counter: {count}
             </div>
        </main>
        
    )
}

export default Counter;