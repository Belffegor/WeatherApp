import { useEffect, useState, memo, useContext, useReducer } from "react";
import { API_KEY } from "../apisettings";
import { GlobalContext } from "../App";
import Card from '../Card/index';
import CardList from "../CardList";



// export const useCitiesList = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     console.log("state > ", state);
//     const { citiesList } = state;
//     //   const [citiesList, setCitiesList] = useState(
//     //     JSON.parse(localStorage.getItem("citiesList")) || []
//     //   );

//     useEffect(() => {
//         localStorage.setItem("citiesList", JSON.stringify(citiesList));
//     }, [citiesList]);

//     return [state, dispatch];
// };

export const useWeather = ({ city }) => {
    const [data, setData] = useState(null);
    const { dispatch } = useContext(GlobalContext);
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
        )
            .then((result) => result.json())
            .then((json) => setData(json));
    }, []);


    console.log("data >", data);
    return data;
};