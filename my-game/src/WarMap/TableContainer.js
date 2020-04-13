import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";
import ShipItem from "./components/ShipItems/ShipItem";




const TableContainer = (props) => {
    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch();

    const [shipPos,setShipPos] = useState([null,null]);


    const [ships,setShips] = useState([]);


    const onClick = (event) => {
        console.log(event)
    };

    const startGame = () => {
        fetch('http://localhost:5000/')
            .then(response => response.json())
            .then(data => console.log(data));
    };


    const dropShip = ( {x, y, itemLength} ) => {
        console.log(itemLength)
        console.log(shipPos)
        console.log([x,y])
         setShipPos ([x,y]);
        // const elIndex = ships.findIndex(el => el.length === itemLength);
        // ships[elIndex] = [];
        // setShips(ships)
        for (let i = 0; i <= itemLength - 1; i++) {
            if (y < 11){
                const dropEl = warMaps.coordinates.find(el => el.x === x && el.y === y);
                dropEl.isShip = true
                y++;
            } else {
                console.log('sdfgdf')
            }
        }
        setWarMap({coordinates: warMaps.coordinates})
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
                    <Table shipPosition={shipPos} dropShip = {dropShip} warMap = {warMaps} onClick ={onClick} isYour = {true} />
                    {/*<Table dropShip = {dropShip} warMap = {warMaps} onClick ={onClick} />*/}
                </div>
                <ShipBox ships={ships} />
            </div>
            )
}



export default TableContainer
