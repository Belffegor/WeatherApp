import React, { useEffect, useState, memo, useContext, useReducer } from "react";
import { useWeather } from '../hooks/useWeather';
import { useCitiesList } from '../hooks/useCitiesList';
import "../App.css";
import { API_KEY } from "../apisettings";
import { GlobalContext } from "../App";

import { inex } from '../Input/index';



import { Link, useParams } from 'react-router-dom';

import { Card } from '../Card';
// import { DailyCards } from '../DailyCards';
import { DailyCard } from './dailyCard';
import { useForecast } from '../hooks/useForecast';

import '../App.css';

export const SingleCity = (props) => {
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord);
    const { city } = props.match.params;
    console.log('data >', data)
    return (
        <div className="SingleCityWrap">
            <Card city={city} setCityCoord={setCityCoord} />
            {data &&
                <div className="DailyCards">
                    {data.daily.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
                </div>

            }
        </div>
    )
};





