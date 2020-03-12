import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";
import {Droppable} from "react-drag-and-drop";



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
    const onDrop = () => {
        console.log('hui')
    }

    const onClick = (event) => {
        console.log(event)
    }

    useEffect(() => {
        setWarMap({coordinates:warMap})
        dispatch(warMapAction(warMap))
    },[])
        return (
            <div>
                <Table  onDrop = {onDrop} warMap = {warMaps} onClick ={onClick} />
                <ShipBox ships={ships} />
            </div>
            )
}



export default TableContainer
