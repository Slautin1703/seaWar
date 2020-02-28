import React from "react";
import Cube from "./Cube";

const Table = (props) => {
    let field = props.warMap?.map( e =>  <Cube key = {Math.random()} x = {e.x} y = {e.y} /> )
        return (
            <div className="sex">
                {field}
            </div>
        );

}
export default Table;
