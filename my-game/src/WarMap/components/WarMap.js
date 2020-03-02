import React from "react";
import Cube from "./Cube";

const Table = (props) => {
    let field = props.warMap?.coordinates .map( e =>  <Cube key = {Math.random()} x = {e.x} y = {e.y} onClick = {props.onClick}  /> )
        return (
            <div className="sex">
                {field}
            </div>
        );

}
export default Table;
