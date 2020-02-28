import React from 'react';
import './App.css';
import TableContainer from "./WarMap/TableContainer";
import Provider from "react-redux/lib/components/Provider";
import {store} from "./redux/store";

const App  = (props) => {
  return (
          <div className="App">
              <header className="App-header">
                  <TableContainer store = {props.store}/>
              </header>
          </div>
  );
}

export default App;
