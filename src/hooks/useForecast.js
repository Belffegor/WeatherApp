import { useEffect, useState } from "react";
import { API_KEY } from "../apisettings";


export const useForecast = (coords) => {

    const [data, setData] = useState(null);
    useEffect(() => {
        if (coords !== null) {
            const { lat, lon } = coords;
            fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,current,minutely,hourly&appid=${API_KEY}&lang=ru&units=metric`
            )
                .then((result) => result.json())
                .then((json) => setData(json))
        }

    }, [coords]);

    return data;
};

