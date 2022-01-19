import { useState, useEffect, useReducer } from "react";
// import { useRef } from "react/cjs/react.development";

export const initialState = {
    inputValue: '',
    editingCity: '',
    citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
};
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CITY": {
            const newState = {
                ...state,
                citiesList: [...state.citiesList, action.payload],
            };

            console.log("payload > ", action.payload);
            return newState;
        }
        case "DELETE_CITY": {
            const oldArray = state.citiesList;
            const newArray = oldArray.filter((el) => el !== action.payload);

            return {
                ...state,
                citiesList: newArray,
                editingCity: initialState.editingCity,
                inputValue: initialState.inputValue,
            };
        }
        case "EDIT_CITY": {
            // const oldArray = state.citiesList;
            // const newArray = oldArray.filter((el) => el !== action.payload);

            return {
                ...state,
                inputValue: action.payload,
                editingCity: action.payload
            };
        }
        case "EDIT_CITY_DONE": {
            if (!action.payload) {
                return {
                    ...state,

                    inputValue: initialState.inputValue,
                    editingCity: initialState.editingCity
                };

            }
            const { editingCity } = state;
            const oldArray = state.citiesList;
            const filteredArray = oldArray.filter(el => el !== editingCity);
            const newArray = [...filteredArray, action.payload];
            return {
                ...state,
                citiesList: newArray,
                inputValue: initialState.inputValue,
                editingCity: initialState.editingCity
            };
        }
        case "CHANGE_INPUT_VALUE": {
            // const oldArray = state.citiesList;
            // const newArray = oldArray.filter((el) => el !== action.payload);

            return { ...state, inputValue: action.payload };
        }
        case "RESET_INPUT_VALUE": {
            // const oldArray = state.citiesList;
            // const newArray = oldArray.filter((el) => el !== action.payload);

            return { ...state, inputValue: initialState.inputValue };
        }
        default:
            return initialState;
    }
};