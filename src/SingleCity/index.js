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

// import { useForecast } from '../hooks/useForecast';

import '../App.css';

export const SingleCity = (props) => {
    const { city } = props.match.params;
    return (<Card city={city} />)
};





