import React from 'react';
import './App.css';
import TableContainer from "./WarMap/TableContainer";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const App  = (props) => {
    return <DndProvider  backend={Backend}>
        <div className = "App">
            <TableContainer onClick = {props.onClick}/>
        </div>
    </DndProvider>
}

export default App;
