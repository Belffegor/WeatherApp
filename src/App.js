import React, { useState } from "react";
import "./App.css";
import { Input } from "./Input";
import { CardList } from "./CardList";
// import { useEffect } from "react/cjs/react.development";
import { useCitiesList } from "./hooks/useCities.List";

function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editingCity } = state;

  // const citiesList = ['New York', 'London', 'Minsk'  ];
  return (
    <div className="Main">
      <Input dispatch={dispatch} inputValue={inputValue} editingCity={editingCity} />
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
