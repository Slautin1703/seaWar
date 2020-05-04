import React, {useEffect, useState} from "react";
import Cube from "./Cube";
import {getRandomInt} from "../helpers";
import {useSelector} from "react-redux";


const Table = ({warMap,onClick,onClickOnRivalMap,isYour,canMoveShip,dropShip}) => {
    // const warMap = useSelector(state => state.warMap.coordinates)
    // console.log(warMap)
    const [field, setField ] = useState([]);


    useEffect(() => {
        if (warMap && isYour){
            setField(warMap.coordinates.map( e =>  <Cube  isHorizontal ={e.isHorizontal}
                                                         canMoveShip = {canMoveShip ? canMoveShip : () => false}
                                                         dropShip = {dropShip}
                                                         tag = {getRandomInt(100)}
                                                         nextCubeIsShip = {e.nextCubeIsShip}
                                                         canTransfer = {e.canTransfer}
                                                         isShip = {e.isShip} x = {e.x} y = {e.y}
                                                         onClick = {onClick}> </Cube> ))
        } else if (warMap && !isYour) {
            setField(warMap.coordinates.map( e =>  <Cube  tag = {getRandomInt(100)}
                                                          nextCubeIsShip = {e.nextCubeIsShip}
                                                          isShip = {e.isShip} x = {e.x} y = {e.y}
                                                          onClick = {onClickOnRivalMap}> </Cube> ))
        }
    },[warMap]);

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
