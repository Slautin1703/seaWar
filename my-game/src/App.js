import React from 'react';
import './App.css';
import Cube from "./WarMap/components/Cube";
import TableContainer from "./WarMap/TableContainer";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <TableContainer/>
    </header>
    </div>
  );
}

export default App;
