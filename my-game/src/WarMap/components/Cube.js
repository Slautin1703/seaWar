import React from 'react';
import '../../Cube.css';

const Cube = (props) => {
    return <div className='item' onClick={() => props.onClick({lol: props.lol ,x: props.x, y: props.y})} ></div>
}

export default Cube
