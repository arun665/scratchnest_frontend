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
import EducationSec from "./components/Sector/Education/Education";

import BeaconSec from "./components/Sector/Beacon/Beacon";

import RfidSec from './components/Sector/RFID/Rfid';


import Dataloggern from "./components/Products/Dataloggern/Dataloggern";
import OnePort_Rfid from "./components/Products/Rfid/oneport/Rfidproduct2";








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
              
              <Route component={EducationSec} path="/sector/Education" />
              
              <Route component={Dataloggern} path="/products/logger" />
              <Route component={OnePort_Rfid} path="/products/Rfid/oneport" />
              
              <Route component={BeaconSec} path="/sector/Beacon" />
              
            </Switch>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
