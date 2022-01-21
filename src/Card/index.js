import React, { useEffect, useState, memo, useContext, useReducer } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useWeather } from '../hooks/useWeather';
import { useCitiesList } from '../hooks/useCitiesList';
import "../App.css";
// import "..images/";

import { API_KEY } from "../apisettings";
import { GlobalContext } from "../App";

import { index } from '../Input/index';
import picWeatherStore from '../Utils/imgWeathe';



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


    const handleOnDelete = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: "DELETE_CITY",
            payload: city,
        });
        // dispatch({
        //     type: "EDIT_CITY_DONE",
        //     payload: city,
        // });
    };

    const handleOnEdit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: "EDIT_CITY",
            payload: city,
        });
        history.push('/home');
    };

    const handleOnLinkClick = () => {

        dispatch({
            type: "EDIT_CITY_DONE",

        });

    };

    if (data === null) {
        return (
            <div className="Card">
                <div className="Wrap_button_del">
                    <button className="EditCitiCard" onClick={handleOnEdit}> Edit   </button>
                    <button className="DeleteCitiCard" onClick={handleOnDelete}>  ✖    </button>
                </div>

                <div className="MainInfo">


                    <div className="Title">{city}</div>
                    <div className="Description">Not found</div>

                </div>


            </div>
        )
    }


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

    const picOnCards = picWeatherStore.get(`${icon}`);






    if (isHome) {

        return (
            <Link to={`/city/${city.toLowerCase()}`} onClick={handleOnLinkClick} className="Card">

                <div className="Wrap_button_del">
                    <button className="EditCitiCard" onClick={handleOnEdit}> Edit   </button>
                    <button className="DeleteCitiCard" onClick={handleOnDelete}>  ✖    </button>
                </div>

                <div className="MainInfo">
                    <img
                        className="Icon"
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}



                        // src={picOnCards}
                        alt="icon"


                    />
                    {console.log('icon >', icon)}
                    <div className="Title">{name}</div>
                    <div className="Description">{description}</div>
                    <div className="Temperature">{temp.toFixed()}</div>
                </div>
                <div className="Informaciton">
                    <div> Влажность: {humidity} % </div>
                    <div> Ощущается как : {feels_like.toFixed()} </div>
                </div>

            </Link>
        )


    }
    return (
        <div className="Card">

            <div className="Wrap_button_del">
                {/* <button className="EditCitiCard" onClick={handleOnEdit}> Edit   </button>
                <button className="DeleteCitiCard" onClick={handleOnDelete}>  ✖    </button> */}
            </div>

            <div className="MainInfo">
                <img
                    className="Icon"
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}

                    // src={picOnCards}
                    alt="icon"
                />

                <div className="Title">{name}</div>
                <div className="Description">{description}</div>
                <div className="Temperature">{temp.toFixed()}</div>
            </div>
            <div className="Informaciton">
                <div> Влажность: {humidity} % </div>
                <div> Ощущается как : {feels_like.toFixed()} </div>
            </div>

        </div>
    );

});



