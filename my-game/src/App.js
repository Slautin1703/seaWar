import React from 'react';
import './App.css';
import TableContainer from "./WarMap/TableContainer";
import Provider from "react-redux/lib/components/Provider";
import {store} from "./redux/store";
import ShipItem from "./WarMap/components/ShipItems/ShipItem.js";


const App  = (props) => {
  return (
          <div className="App">
              <header className="App-header">
                  <TableContainer onClick = {props.onClick}/>

              </header>
          </div>
  );
}

export default App;
