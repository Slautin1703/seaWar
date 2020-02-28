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

    useEffect(() => {
        setWarMap(warMap)
        dispatch(warMapAction(warMap))
    },[])
        return (
            <div>
                <Table warMap = {warMaps} />
            </div>
            )
}



export default TableContainer
