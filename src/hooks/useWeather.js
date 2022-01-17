import { useEffect, useState, memo, useContext, useReducer } from "react";
import { API_KEY } from "../apisettings";
import { GlobalContext } from "../App";

export const useWeather = (city) => {
    const [data, setData] = useState(null);
    const { dispatch } = useContext(GlobalContext);
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
        )
            .then((result) => result.json())
            .then((json) => setData(json))
            .catch(error => alert(error.message));
    }, []);


    return data;
};