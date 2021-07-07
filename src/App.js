import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import HomeSector from "./components/HomeSectors/HomeSector.tsx";

import React, { useEffect, useState } from "react";
import Topheader from "./components/top_header";

import Splashscreen from "./components/Splash Screen/Splashscreen";

import DataLoggerSec from "./components/Sector/Logger/DataLogger_sec";
import RfidSec from './components/Sector/RFID/Rfid';

import Dataloggern from "./components/Products/Dataloggern/Dataloggern";








function App() {
  
  const [loading, setLoading] = useState(true);
  const reload = () => window.location.reload();
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

/*  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    console.log("USER IS>>", user);

    return () => {
      //cleanup once logout
      unsubscribe();
    };
  }, []);

*/

  return (
    <>
      <div className="App" >
        {loading == true ? (
          <Splashscreen />
        ) : (
          <Router>
        
            <Switch>
              <Route component={HomeSector} exact path="/" />
              <Route component={DataLoggerSec} path="/sector/datalogger" />
              <Route component={RfidSec} path="/sector/RFID" />
              
              <Route component={Dataloggern} path="/products/logger" />
              
            </Switch>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
