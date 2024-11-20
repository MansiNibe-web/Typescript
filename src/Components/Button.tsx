
import React, { useState } from "react"

interface Mybuttonprops {
    text: String;
    onClick: () => void;
}


const Button: React.FC<Mybuttonprops> = (props) => {
    const [value, setValue] = useState<number>(1);  //generic type is number
    const [charcter, setCharacter] = useState<String>("n");  //generic type is String 
    return (

        <>
            {/* // <button onClick={props.onClick}>{props.text} </button> */}
            {/* <h3>{value}</h3>
            <button onClick={() => setValue(value + 1)}>{props.text}</button> */}


            {/* use State  */}

            <h1>{charcter}</h1>
            <button onClick={() => (setCharacter("m"))}>{props.text}</button>
        </>
    )
}
export default Button;