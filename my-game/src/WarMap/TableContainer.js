import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";



const TableContainer = (props) => {
    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch()

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
            </div>
            )
}



export default TableContainer
