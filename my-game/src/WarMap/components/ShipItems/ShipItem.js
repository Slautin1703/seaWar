import React from 'react';
import '../../../ShipItem.css';
import {ShipCoordinates} from "./ShipCoordiantes";
import {Draggable} from "react-drag-and-drop";


const ShipItem = ({shipCubes}) => {
    const shipCube = shipCubes.map(e => <ShipCoordinates />)
    return (
        <Draggable className='ShipContainer'>
           {shipCube}
        </Draggable>
    )
    }




export default ShipItem
