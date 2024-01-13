import { useState } from "react";

const Square = () => {
    const [value,setValue] =useState(null);
    function handleClick(){
        setValue('X');
        
    }
    return (
        <div>
            <button onClick={handleClick} className="bg-white border border-gray-400 h-10 w-10 m-1 leading-9 text-lg">{value}</button>
        </div>
    );
};

export default Square;