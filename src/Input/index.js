import React, { useState, useRef } from "react";
import "../App.css";

export const Input = ({ dispatch, inputValue, editingCity }) => {
  // const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handelOnClick = () => {
    // setCitiesList((currentArray) => [...currentArray, inputValue]);
    dispatch({
      type: "ADD_CITY",
      payload: inputValue,
    });
    dispatch({
      type: "RESET_INPUT_VALUE"
    })
    // setInputValue("");
    inputRef.current.focus();
  };

  const handelOnDone = () => {

    dispatch({
      type: "EDIT_CITY_DONE",
      payload: inputValue,
    });
    dispatch({
      type: "RESET_INPUT_VALUE"
    })

    inputRef.current.focus();
  };

  const handelOnChange = (event) => {
    dispatch({
      type: 'CHANGE_INPUT_VALUE',
      payload: event.target.value
    })
    // setInputValue(event.target.value);
  };

  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handelOnChange}
        value={inputValue}
        ref={inputRef}
      />
      {
        editingCity ?
          <button className="Button" onClick={handelOnDone}> Done </button>
          :
          <button className="Button" onClick={handelOnClick}> + </button>
      }
    </div>
  );
};
