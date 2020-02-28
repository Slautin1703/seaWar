import React from 'react';
import Cube from "./Cube";
import './Cube.css';


let coordinates = []

let position = {
    x: 0,
    y: 0
}

function CreateMas () {
    let mas = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let pushObj = {}
            Object.assign(pushObj, position)
            mas.push(pushObj)
            position.x = position.x + 1
        }
        position.y = position.y + 1
        position.x = 0
    }
    coordinates = mas
}

CreateMas()
console.log(coordinates)


let field = coordinates.map( e =>  <Cube x = {e.x} y = {e.y} /> )

const Table = (props) => {
    return (
        <div className="sex">
            {field}
        </div>
)
}


export default Table