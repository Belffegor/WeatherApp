import React from "react";
import { Card } from "../Card";
import "../App.css";

export const CardList = ({ citiesList, dispatch }) => (
  <div className="CardList">
    {citiesList.map((city) => (
      <Card key={city} city={city} dispatch={dispatch} />
    ))}
  </div>
);
