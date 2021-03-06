import { useEffect, useReducer } from "react";
import { reducer, initialState } from "../Reducer/reducer";


export const useCitiesList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { citiesList } = state;

    useEffect(() => {
        localStorage.setItem("citiesList", JSON.stringify(citiesList));
    }, [citiesList]);

    return [state, dispatch];
};
