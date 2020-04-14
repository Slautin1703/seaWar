import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas, drawNotValidPoint, getCubeAround} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";




const TableContainer = (props) => {
    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch();

    const [shipPos,setShipPos] = useState([null,null]);
    const [ships,setShips] = useState([]);


    const onClick = (event) => {
        const lol = warMaps.coordinates.find(el => el.x === event.x && el.y === event.y+1);
        const dropEl = warMaps.coordinates.find(el => el.x === event.x+1 && el.y === event.y);
        dropEl.isShip = true
        lol.isShip = false
        console.log(event)
        setWarMap({coordinates: warMaps.coordinates})
    };

    const startGame = () => {
        fetch('http://localhost:5000/')
            .then(response => response.json())
            .then(data => console.log(data));
    };

    const canMoveShip = (x , y, itemLength) => {
        if (y + itemLength - 1 > 10) {
            return false
        }
        const dropEl = warMaps.coordinates.find(el => el.x === x && el.y === y && el.nextCubeIsShip);
        const canDrop = dropEl ? false : true
        return canDrop
    };



    const dropShip = ( {x, y, itemLength} ) => {
        // setShipPos ([x,y]);
        let wasDropped = false;
        for (let i = 0; i <= itemLength - 1; i++) {
            const { dropEl,nextEl,topEl,botEl,prevEl,rightBottom,leftBottom,rightTop,leftTop } = getCubeAround({warMaps,x, y})
            if (i === 0 ) {
                if (itemLength === 1) {
                    drawNotValidPoint([nextEl,topEl,prevEl,rightTop,leftTop,botEl,rightBottom,leftBottom])
                    dropEl.isShip = true;
                    wasDropped = true

                } else {
                    drawNotValidPoint([nextEl,topEl,prevEl,rightTop,leftTop])
                    dropEl.isShip = true;
                }
            } else if (i !== 0 && i !== itemLength - 1) {
                drawNotValidPoint([nextEl,prevEl])
                dropEl.isShip = true;
            } else {
                wasDropped = true
                drawNotValidPoint([nextEl,prevEl,botEl,rightBottom,leftBottom])
                dropEl.isShip = true;
            }
                y++;
        }
        if (wasDropped) {
            const elIndex = ships.findIndex(el => el.length === itemLength);
            ships[elIndex] = []
            setShips(ships)
            setWarMap({coordinates: warMaps.coordinates})
        } else {
            alert(1)
        }




    };

    useEffect(() => {
        setShips([
            [{},{},{},{}],
            [{},{},{}],
            [{},{},{}],
            [{},{}],
            [{},{}],
            [{},{}],
            [{}],
            [{}],
            [{}],
            [{}],
        ]);

        const warMap = CreateMapMas()
        setWarMap({coordinates:warMap})
        dispatch(warMapAction(warMap))
    },[]);


        return (
            <div>
                <button className={"btn"} onClick={startGame}> Играть </button>
                <div className= "TableContainer">
                    <Table canMoveShip = {canMoveShip} shipPosition={shipPos} dropShip = {dropShip} warMap = {warMaps} onClick ={onClick} isYour = {true} />
                    {/*<Table dropShip = {dropShip} warMap = {warMaps} onClick ={onClick} />*/}
                </div>
                <ShipBox ships={ships} />
            </div>
            )
}



export default TableContainer
