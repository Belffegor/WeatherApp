
import React, { useState} from "react";
import '../App.css';






export const Input = ({setCitiesList}) => {
    const [inputValue, setInputValue ] = useState('empty');

    const handelOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])
        
    };

    const handelOnChange = (event) => {
        setInputValue( event.target.value);
    }
 
    return(
    <div className="InputWrap">
        
        <input className = 'Input' onChange={handelOnChange} value = {inputValue}/>
        <button className = 'Button' onClick = {handelOnClick} >+</button>

    </div>
) 
    };


