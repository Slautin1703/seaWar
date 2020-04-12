import React from "react";
import Cube from "./Cube";
import {Droppable} from "react-drag-and-drop";

const Table = ({onDrop,warMap,onClick,isYour}) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let field = warMap?.coordinates .map( e =>  <Cube tag = {getRandomInt(100)} x = {e.x} y = {e.y}
                                                      onClick = {onClick} onDrop = {onDrop} /> )
        return (
                <div className="sex">
                    {field}
                    <div style={{margin:"auto",marginTop:"10px"}}>
                        {
                            isYour ? 'Ваше поле' : 'Поле соперника'
                        }
                    </div>
                </div>
        );

}
export default Table;
