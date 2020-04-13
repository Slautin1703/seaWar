import React, {useEffect} from 'react';
import '../../Cube.css';
import {useDrop} from "react-dnd";
import {ItemTypes} from "../constants";




const Cube = ({tag, x, y, onClick,dropShip,isShip,children}) => {

    const [{ isOver,item }, drop] = useDrop({
        accept: ItemTypes.SHIP,
        drop: () => {
            dropShip( {x,y,itemLength: item.length})
        },
        collect: monitor => {
            return ({
            isOver: !!monitor.isOver(),
            item: monitor.getItem()!== null
                ?   monitor.getItem() : ''
        })},
    });
    useEffect(() => {

    },[children])

    return <div
        className= {y === 10 ? "itemBottom" : "item"}
        ref = {drop}
        style = {
            isShip ? {
                    backgroundColor: 'rgba(0,0,255,.05)',
                }:
            x === 1 ?{
            borderLeft:"1px solid #aabdff"
        }: {borderLeft: "0px"}
        }
        onClick={() => {
            onClick({key: tag, x, y,isShip})}
        }>
        {children}
    </div>
}

export default Cube
