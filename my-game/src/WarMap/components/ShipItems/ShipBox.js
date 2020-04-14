import React from 'react';
import ShipItem from "./ShipItem";



const ShipBox = ({ships}) => {

    const shipsMas = ships.map(e =>  <ShipItem key = {Math.random()} shipCubes = {e} data = "hui" />);
        return (
            <div className='ShipBox'>
              {shipsMas}
            </div>
     )
}

export  default ShipBox
