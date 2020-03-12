import React from 'react';
import ShipItem from "./ShipItem";



const ShipBox = ({ships}) => {
    const shipsMas = ships.map(e =>  <ShipItem shipCubes = {e} data = "hui" />);
        return (
            <div style={{display: "flex", marginTop: 100}}>
              {shipsMas}
            </div>
     )
}

export  default ShipBox
