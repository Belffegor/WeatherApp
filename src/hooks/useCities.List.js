import { useState, useEffect, useReducer } from "react";
// import { useRef } from "react/cjs/react.development";

const initialState = {
  citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
};

const reducer = (state, action) => {
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

      return { ...state, citiesList: newArray };
    }
    default:
      return initialState;
  }
};

export const useCitiesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state > ", state);
  const { citiesList } = state;
  //   const [citiesList, setCitiesList] = useState(
  //     JSON.parse(localStorage.getItem("citiesList")) || []
  //   );

  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);

  return [citiesList, dispatch];
};
