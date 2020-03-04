import React, {useEffect, useState} from 'react';
import ShipItem from "./ShipItem";



const ShipBox = ({ships}) => {
    const shipsMas = ships.map(e =>  <ShipItem shipCubes = {e} />)
        return (
            <div style={{display: "flex", marginTop: 100}}>
              {shipsMas}
            </div>
     )
}

export  default ShipBox