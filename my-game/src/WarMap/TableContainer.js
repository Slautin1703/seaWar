import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";



const TableContainer = (props) => {
    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch()
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

    const onClick = (event) => {
        console.log(event)
    }

    fetch('http://localhost:3030/warMap')
        .then(response => response.json())
        .then(data => console.log(data));
    useEffect(() => {
        setWarMap({coordinates:warMap})
        dispatch(warMapAction(warMap))
    },[])
        return (
            <div>
                <Table warMap = {warMaps} onClick ={onClick} />
                <ShipBox ships={ships} />
            </div>
            )
}



export default TableContainer
