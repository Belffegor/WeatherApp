import React, { useEffect, useState, memo, useContext, useReducer } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Card } from '../Card';
import { DailyCard } from './dailyCard';
import { useForecast } from '../hooks/useForecast';
import '../App.css';



export const SingleCity = (props) => {
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord);
    const { city } = props.match.params;

    return (
        <div className="SingleCityWrap">
            <Link to="/home" className="GoBack">Назад  </Link>
            <Card city={city} setCityCoord={setCityCoord} />
            {data &&
                <div className="DailyCards">
                    {data.daily.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
                </div>

            }
        </div>
    )
};





