import React from "react";
import Cube from "./Cube";

const Table = (props) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let field = props.warMap?.coordinates .map( e =>  <Cube tag = {getRandomInt(100)} x = {e.x} y = {e.y} onClick = {props.onClick}  /> )
        return (
            <div className="sex">
                {field}
            </div>
        );

}
export default Table;
