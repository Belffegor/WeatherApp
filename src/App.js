
import React, { useState} from "react";

import './App.css';

import { Input } from './Input/index';
import { Card } from './Card';

function App() {
  const [citiesList, setCitiesList ] = useState([ ]);
  // const citiesList = ['New York', 'London', 'Minsk'  ];
  return (
    <div className="Main">
        <Input setCitiesList = {setCitiesList}/>
        <div className = 'CardList'>
          {
            citiesList.map(city => <Card key = {city} city = {city}/>)
          }
                           
        </div>
          
    </div>
  );
}

export default App;
