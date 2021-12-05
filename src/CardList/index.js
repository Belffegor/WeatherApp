import React, {useEffect} from "react";
import {Card} from '../Card';
import "../App.css";

export const CardList = ({ citiesList }) => {
    useEffect(() => {
      console.log('mount');
      const func =() =>{
        console.log('resize');
      }
      window.addEventListener('resize',func);
      
      return () => {
        console.log('unmount');
        window.removeEventListener('resize', func);
      }
    }, []);
    console.log('render');
  
    return (
        <div className="CardList">
          {
            citiesList.map(city => <Card key = {city} city = {city}/>)
          }
        </div>
      );
};