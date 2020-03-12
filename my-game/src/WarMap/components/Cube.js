import React from 'react';
import '../../Cube.css';
import {Droppable} from "react-drag-and-drop";



const Cube = (props) => {
    let CurrentCoordinate = () => {
        let text = props.onClick({key: props.tag, x: props.x, y: props.y})
    }

    return <Droppable
        className='item'
        onDrop = {props.onDrop}
        onClick={CurrentCoordinate} >
    </Droppable>
}

export default Cube
