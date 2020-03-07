import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import {warMapReducer} from "./WarMapReducer";
import {getWarMap} from "./wapMapAPI";



const TableContainer = (props) => {
    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch()

    const warMap = CreateMapMas()

    const onClick = (event) => {
        console.log(event)
    }
    useEffect(() => {
        getWarMap()
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
