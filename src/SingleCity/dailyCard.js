import React from "react";

import "../App.css";


export const DailyCard = ({ dailyCard }) => {
    const { dt, weather, temp: { day } } = dailyCard;
    const { description, main, icon } = weather[0];
    const currentDate = new Date(dt * 1000);


    return (
        <div className="DailyCard">
            <div>{currentDate.toString().split(' ')[0]}</div>
            <div>{currentDate.toString().split(' ')[2]}</div>
            <img
                className="Icon"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
            />
            <div className="DailyDay"> {day.toFixed()} </div>
            <div className="DailyDescript"> {description} </div>
        </div>
    )
};
