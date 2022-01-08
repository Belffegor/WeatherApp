import React, { useState } from "react";
import "./App.css";
import { Input } from "./Input";
import { CardList } from "./CardList";
// import { useEffect } from "react/cjs/react.development";
import { useCitiesList } from "./hooks/useCitiesList";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();


  // const citiesList = ['New York', 'London', 'Minsk'  ];
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="Main">
        <Input />
        <CardList />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
