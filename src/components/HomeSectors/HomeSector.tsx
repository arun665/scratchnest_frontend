import React from "react";

import Topheader from "../top_header/index";

import "./homesector.css";
import Header from "../Header/index";
import Education from "../HomeSectors/Education/education2";

import Beacon from "../HomeSectors/Beacon/beacon2";

import DataLogger from "../HomeSectors/DataLogger/datalogger2";

import Rfid from "../HomeSectors/RFID/rfid2";
import OurSectors  from "./oursectors/OurSectors";
import Footer from "../Footer/footer2";
import { useEffect  } from "react";

function HomeSector() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="home">
   <Topheader/>
 <Header/>
 <OurSectors/>
 <Rfid/> 

   <Beacon/>
   <DataLogger/>
   <Education/>
            
            
      
    </div>
  );
}

export default HomeSector;
