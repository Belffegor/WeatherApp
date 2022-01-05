import React, { useState, useRef } from "react";
import "../App.css";

export const Input = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handelOnClick = () => {
    // setCitiesList((currentArray) => [...currentArray, inputValue]);
    dispatch({
      type: "ADD_CITY",
      payload: inputValue,
    });
    setInputValue("");
    inputRef.current.focus();
  };

  const handelOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handelOnChange}
        value={inputValue}
        ref={inputRef}
      />
      <button className="Button" onClick={handelOnClick}>
        +
      </button>
    </div>
  );
};
