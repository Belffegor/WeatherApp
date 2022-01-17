import React, { useEffect, useState, memo, useContext, useReducer } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useWeather } from '../hooks/useWeather';
import { useCitiesList } from '../hooks/useCitiesList';
import "../App.css";
import "../images";
import { API_KEY } from "../apisettings";
import { GlobalContext } from "../App";

import { inex } from '../Input/index';



export const Card = memo(({ city, setCityCoord }) => {
    const data = useWeather(city);
    const history = useHistory();
    const isHome = Boolean(useRouteMatch('/home'));
    const { dispatch } = useContext(GlobalContext);
    useEffect(() => {
        if (data && data.coord.lat && data.coord.lon && setCityCoord) {
            setCityCoord({
                lat: data.coord.lat,
                lon: data.coord.lon
            });

        };
    }, [data, setCityCoord]);
    if (!data) return null;

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
    //     )
    //         .then((result) => result.json())
    //         .then((json) => setData(json));
    // }, []);

    console.log("data >", data);

    // if (!data) return null;

    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;

    const handleOnDelete = () => {
        dispatch({
            type: "DELETE_CITY",
            payload: city,
        });
    };

    const handleOnEdit = () => {
        dispatch({
            type: "EDIT_CITY",
            payload: city,
        });
        history.push('/home');
    };

    if (isHome) {
        return (
            <Link to={`/city/${city.toLowerCase()}`} className="Card">

                <div className="Wrap_button_del">
                    <button className="EditCitiCard" onClick={handleOnEdit}> Edit   </button>
                    <button className="DeleteCitiCard" onClick={handleOnDelete}>  ✖    </button>
                </div>

                <div className="MainInfo">
                    <img
                        className="Icon"
                        // src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        src={`../images/${icon}.png`}
                        alt="icon"


                    />
                    {console.log('icon >', icon)}
                    <div className="Title">{name}</div>
                    <div className="Description">{description}</div>
                    <div className="Temperature">{temp.toFixed()}</div>
                </div>
                <div className="Informaciton">
                    <div> Humidity: {humidity} </div>
                    <div> Feels like: {feels_like} </div>
                </div>

            </Link>
        )


    }
    return (
        <div className="Card">

            <div className="Wrap_button_del">
                <button className="EditCitiCard" onClick={handleOnEdit}> Edit   </button>
                <button className="DeleteCitiCard" onClick={handleOnDelete}>  ✖    </button>
            </div>

            <div className="MainInfo">
                <img
                    className="Icon"
                    // src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    src={`../images/${icon}.png`}
                    alt="icon"
                />
                <div className="Title">{name}</div>
                <div className="Description">{description}</div>
                <div className="Temperature">{temp.toFixed()}</div>
            </div>
            <div className="Informaciton">
                <div> Humidity: {humidity} </div>
                <div> Feels like: {feels_like} </div>
            </div>

        </div>
    );

});



