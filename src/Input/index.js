import React, { useState, useRef, useContext } from "react";
import { GlobalContext } from "../App";
import "../App.css";

export const Input = () => {

  const inputRef = useRef(null);
  const { dispatch, state: { inputValue, editingCity } } = useContext(GlobalContext);


  const handelOnAdd = () => {



    dispatch({
      type: "ADD_CITY",
      payload: inputValue,
    });
    dispatch({
      type: "RESET_INPUT_VALUE"
    });
    // setInputValue("");
    inputRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      editingCity ?
        handelOnDone() :
        handelOnAdd()
    }
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

  };

  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handelOnChange}
        value={inputValue}
        ref={inputRef}
        onKeyPress={handleKeyPress}
      />
      {
        editingCity ?
          <button className="Button" onClick={handelOnDone} > Изменить </button>
          :
          <button className="Button" onClick={handelOnAdd}  > Добавить </button>
      }
    </div >
  );
};
