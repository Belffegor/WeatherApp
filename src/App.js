import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import { Input } from "./Input";
import { CardList } from "./CardList";
import { SingleCity } from "./SingleCity";
// import { useEffect } from "react/cjs/react.development";
import { useCitiesList } from "./hooks/useCitiesList";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();

  // const citiesList = ['New York', 'London', 'Minsk'  ];
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div className="Main">
          <Route path="/home">
            <Input />
            <CardList />
          </Route>
          <Route path="/city/:city" render={SingleCity} />
          {/* <SingleCity />
        </Route> */}
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
