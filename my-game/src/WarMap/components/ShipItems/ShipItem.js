import React from 'react';
import '../../../ShipItem.css';
import {ShipCoordinates} from "./ShipCoordiantes";


const ShipItem = ({shipCubes}) => {
    const shipCube = shipCubes.map(e => <ShipCoordinates />)
    return (
        <div className='ShipContainer'>
           {shipCube}
        </div>
    )
    }




export default ShipItem
