import React, {useEffect} from 'react';
import Cube from "./components/Cube";
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas} from "./helpers";



const TableContainer = () => {
    const warMap = CreateMapMas()
        return (
            <div>
                <Table warMap ={warMap}/>
            </div>
            )
}



export default TableContainer
