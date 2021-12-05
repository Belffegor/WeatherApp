
import React, { useState} from "react";

import './App.css';

import { Input } from './Input';

import { CardList } from'./CardList';

function App() {
  const [citiesList, setCitiesList ] = useState([]);
  // const citiesList = ['New York', 'London', 'Minsk'  ];
  return (
    <div className="Main">
        <Input setCitiesList = {setCitiesList}/>
        <CardList citiesList = {citiesList}/> 
       
          
    </div>
  );
}

export default App;
