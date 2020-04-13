import React, {useEffect} from 'react';
import '../../Cube.css';
import {useDrop} from "react-dnd";
import {ItemTypes} from "../constants";




const Cube = ({tag, x, y, onClick,dropShip,isShip,nextCubeIsShip,canMoveShip,children}) => {


    const [{ isOver,item,canDrop }, drop] = useDrop({
        accept: ItemTypes.SHIP,
        canDrop: () => canMoveShip(x,y,item.length),
        drop: () => {
            dropShip( {x,y,itemLength: item.length})
        },
        collect: monitor => {
            return ({
            isOver: !!monitor.isOver(),
            item: monitor.getItem()!== null
                ?   monitor.getItem() : '',
            canDrop: monitor.canDrop()
        })},
    });


    useEffect(() => {

    },[children])

    return <div
        className= {y === 10 ? "itemBottom" : "item"}
        ref = {drop}
        style = {
            canDrop && isOver ? {
                background: 'green'
                } :
                isOver && !canDrop ? {
                background: 'red'
                    } :
            isShip && x === 1 ? {
                    borderLeft:"1px solid #aabdff",
                    backgroundColor: 'rgba(0,0,255,.05)',
                } :
                isShip ? {
                        backgroundColor: 'rgba(0,0,255,.05)',
                    } :
            x === 1 ? {
            borderLeft:"1px solid #aabdff"
        }: {borderLeft: "0px"}
        }
        onClick={() => {
            onClick({key: tag, x, y,isShip})}
        }>
        {nextCubeIsShip ? <span class = "z"></span> : ''}
    </div>
}

export default Cube
