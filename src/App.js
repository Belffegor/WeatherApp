import React, { useState } from "react";
import "./App.css";
import { Input } from "./Input";
import { CardList } from "./CardList";
// import { useEffect } from "react/cjs/react.development";
import { useCitiesList } from "./hooks/useCities.List";

function App() {
  const [citiesList, dispatch] = useCitiesList();

  // const citiesList = ['New York', 'London', 'Minsk'  ];
  return (
    <div className="Main">
      <Input dispatch={dispatch} />
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App;
