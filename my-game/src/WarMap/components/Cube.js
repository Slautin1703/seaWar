import React from 'react';
import '../../Cube.css';



const Cube = (props) => {
    let CurrentCoordinate = () => {
        let text = props.onClick({key: props.tag, x: props.x, y: props.y})
    }

    return <div className='item' onClick={CurrentCoordinate} ></div>
}

export default Cube