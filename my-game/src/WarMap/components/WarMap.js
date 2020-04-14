import React, {useEffect, useState} from "react";
import Cube from "./Cube";
import {getRandomInt} from "../helpers";
import ShipItem from "./ShipItems/ShipItem";

const Table = ({warMap,shipPosition: [shipX,shipY],onClick,isYour,canMoveShip,dropShip}) => {


    const [field, setField ] = useState([]);

    const renderShip = (x , y) => {

        if ((x && y) !== null) {
            const isShipHere = (x === shipX && y === shipY) || (x === shipX && y === shipY);
            return isShipHere ? <ShipItem shipCubes = {[{},{}]} /> : null;
        } else {
            return null
        }
    }

    useEffect(() => {
        if (warMap){
            setField(warMap.coordinates.map( e =>  <Cube canMoveShip = {canMoveShip} dropShip = {dropShip} tag = {getRandomInt(100)}
                                                         nextCubeIsShip = {e.nextCubeIsShip}
                                                         isShip = {e.isShip} x = {e.x} y = {e.y}
                                                         onClick = {onClick}> {renderShip(e.x, e.y)} </Cube> ))
        }
    },[warMap,shipX,shipY]);

        return (
                <div className="sex">
                    {field}
                    <div style={{margin:"auto",marginTop:"10px"}}>
                        {
                            isYour ? 'Ваше поле' : 'Поле соперника'
                        }
                    </div>
                </div>
        );

}
export default Table;
