import React from "react";
import Cube from "./Cube";
import {Droppable} from "react-drag-and-drop";

const Table = (props) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let field = props.warMap?.coordinates .map( e =>  <Cube tag = {getRandomInt(100)} x = {e.x} y = {e.y} onClick = {props.onClick} onDrop = {props.onDrop} /> )
        return (
                <div className="sex">
                    {field}
                </div>
        );

}
export default Table;
