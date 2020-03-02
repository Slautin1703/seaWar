import React from 'react';
import '../../Cube.css';

import onClickEvent from "./CubeClick";
import Table from "./WarMap";

function sex () {
    console.log(Cube.props)
}

const Cube = (props) => {
    return <div className='item' onClick={sex}></div>
}

export default Cube
