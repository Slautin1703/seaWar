import React from 'react';
import './App.css';
import TableContainer from "./WarMap/TableContainer";
import Provider from "react-redux/lib/components/Provider";
import ShipItem from "./WarMap/components/ShipItems/ShipItem.js";


const App  = (props) => {
  return (
          <div className="App">
              <TableContainer onClick = {props.onClick}/>
          </div>
  );
}

export default App;
