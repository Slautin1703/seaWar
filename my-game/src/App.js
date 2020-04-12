import React from 'react';
import './App.css';
import TableContainer from "./WarMap/TableContainer";


const App  = (props) => {
  return (
          <div className="App">
              <TableContainer onClick = {props.onClick}/>
          </div>
  );
}

export default App;
