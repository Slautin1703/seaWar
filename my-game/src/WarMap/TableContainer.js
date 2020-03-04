import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";


const ships = [
    [{}, {}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}],
    [{}, {}],
    [{}, {}],
    [{}],
    [{}],
    [{}],
    [{}],
]







const TableContainer = (props) => {
    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch()

    const warMap = CreateMapMas()


    fetch('http://localhost:3030/warMap')
        .then(response => response.json())
        .then(data => console.log(data));
    useEffect(() => {
        setWarMap({coordinates:warMap})
        dispatch(warMapAction(warMap))
    },[])
        return (
            <div>
                <Table warMap = {warMaps} c onClick = {props.onClick}/>
                <ShipBox ships = {ships} />
            </div>
            )
}



export default TableContainer
