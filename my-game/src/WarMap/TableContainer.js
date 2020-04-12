import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";



const TableContainer = (props) => {
    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch();
    const ships = [
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


    ]
    const warMap = CreateMapMas()
    const onDrop = () => {
        console.log('hui')
    }

    const onClick = (event) => {
        console.log(event)
    };
    const startGame = () => {
        fetch('http://localhost:5000/')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        setWarMap({coordinates:warMap})
        dispatch(warMapAction(warMap))
    },[])
        return (
            <div>
                <button className={"btn"} onClick={startGame}> Играть </button>
                <div className= "TableContainer">
                    <Table  onDrop = {onDrop} warMap = {warMaps} onClick ={onClick} isYour = {true} />
                    <Table  onDrop = {onDrop} warMap = {warMaps} onClick ={onClick} />
                </div>
                <ShipBox ships={ships} />
            </div>
            )
}



export default TableContainer
