import React from "react";
import picWeatherStore from '../Utils/imgWeathe';


import "../App.css";

const daysOfWeek = new Map([
    ['0', 'Вс'],
    ['1', 'Пн'],
    ['2', 'Вт'],
    ['3', 'Ср'],
    ['4', 'Чт'],
    ['5', 'Пт'],
    ['6', 'Сб']

]);





export const DailyCard = ({ dailyCard }) => {
    const { dt, weather, temp: { day } } = dailyCard;
    const { description, main, icon } = weather[0];
    const currentDate = new Date(dt * 1000);
    const dayWeek = currentDate.getDay();
    const numberDays = currentDate.getDate();
    const dayOfWeek = daysOfWeek.get(`${dayWeek}`)
    console.log('icon> ', icon)
    // const picOnCards = picWeatherStore.get(`${icon}`);
    console.log('icon>>>>> ', icon)
    console.log('icon>>>>> ', icon)
    return (
        <div className="DailyCard">
            {/* <div>{currentDate.toString().split(' ')[0]}</div> */}
            <div>{dayOfWeek}</div>
            {/* <div>{currentDate.toString().split(' ')[2]}</div> */}
            <div>{numberDays}</div>
            <img
                className="Icon"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                // src={picOnCards}
                alt="icon"
            />

            <div className="DailyDay"> {day.toFixed()} </div>
            <div className="DailyDescript"> {description} </div>
        </div>
    )
};
