import React from 'react';
import '../../Cube.css';
import {Droppable} from "react-drag-and-drop";



const Cube = ({tag, x, y, onClick, onDrop}) => {

    let CurrentCoordinate = () => {
        let text = onClick({key: tag, x, y})
    }

    return <Droppable
        className= {y === 10 ? "itemBottom" : "item"}
        onDrop = {onDrop}
        style = {
            x === 1 ?{
            borderLeft:"1px solid #aabdff"
        }: {borderLeft: "0px"}
        }
        onClick={CurrentCoordinate} >
    </Droppable>
}

export default Cube
