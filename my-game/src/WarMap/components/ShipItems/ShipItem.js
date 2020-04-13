import React, {useEffect} from 'react';
import '../../../ShipItem.css';
import {ShipCoordinates} from "./ShipCoordiantes";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../constants";


const ShipItem = ({shipCubes}) => {
    const [{ isDragging,length }, drag] = useDrag({
        item: { type: ItemTypes.SHIP, length: shipCubes.length },
        collect: monitor => {
            return ({
            isDragging: !!monitor.isDragging(),
        })},
    });



    const shipCube = shipCubes.map(e => <ShipCoordinates />);
    return (
        <div className='ShipContainer'
             ref = {drag}
             style={{
                 zIndex:1000,
                 opacity: isDragging ? 0.5 : 1,
                 fontSize: 24,
                 fontWeight: 'bold',
                 cursor: 'move',
             }}
        >
           {shipCube}
        </div>
    )
    }




export default ShipItem
