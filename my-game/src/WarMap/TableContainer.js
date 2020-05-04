import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {clearPointValid, CreateMapMas, drawNotValidPoint, getCubeAround, getShipLength, revertShip} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";
import openSocket from 'socket.io-client';
//Бой бэк
// const socket = openSocket('https://sleepy-meadow-54515.herokuapp.com/');
const socket = openSocket('http://localhost:5000');



const TableContainer = (props) => {

    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch();

    const [shipPos,setShipPos] = useState([null,null]);
    const [ships,setShips] = useState([]);

    const [wasDropped,setWasDropped] = useState(false)
    const [dropItemLength,setDropItemLength] = useState(null)

    const [rivalData, setRivalData] = useState(null)


    const onClick = (e) => {
        const { dropEl } = getCubeAround({warMaps,x: e.x , y : e.y });
        if (e.canTransfer) {
            clearPointValid({warMaps});
            dropEl.isHorizontal = !dropEl.isHorizontal;
            const warMapWithRevertShip = revertShip({warMaps,isHorizontal: dropEl.isHorizontal,x : e.x, y: e.y});
            drawNotValidPoint({warMaps});
            setWarMap({coordinates: warMapWithRevertShip.coordinates});
        }
    };

    const onClickOnRivalMap = (e) => {
        console.log(e)
    }

    const startGame = () => {
        if (warMaps) {
            socket.emit('FIND_RIVAL',warMaps);
            socket.on('send warMap',data => {
                setRivalData(data)
            })
        }
    };

    const canMoveShip = (x , y, itemLength) => {
        const isShipValidate = warMaps.coordinates.find(el => el.x === x && el.y === y && el.isShip)
        if (isShipValidate) return false
        const topItemValidate = warMaps.coordinates.find(el => el.x === x && el.y - itemLength + 1 === y && (el.nextCubeIsShip));
        const middleItemValidate = warMaps.coordinates.find(el => el.x === x && el.y - itemLength === y && el.isShip);
        if (topItemValidate || middleItemValidate ) return false
        if (y + itemLength - 1 > 10) return false
        const dropEl = warMaps.coordinates.find(el => el.x === x && el.y === y && el.nextCubeIsShip);
        const canDrop = dropEl ? false : true
        return canDrop
    };

    useEffect(() =>{
        if (wasDropped) {
            const elIndex = ships.findIndex(el => el.length === dropItemLength);
            ships.splice(elIndex,1)
            setShips(ships)
            if (warMaps) setWarMap({coordinates: warMaps.coordinates})
        }
    },[wasDropped]);


//Да, тут пиздец
    const dropShip = ( {x, y, itemLength} ) => {
        // setShipPos ([x,y]);
        setWasDropped(false)
        setDropItemLength(itemLength)
        for (let i = 0; i <= itemLength - 1; i++) {
            const { dropEl } = getCubeAround({warMaps,x, y})
            if (i === 0 ) {
                if (itemLength === 1) {
                    dropEl.isShip = true;
                    setWasDropped(true)
                } else {
                    dropEl.canTransfer = true
                    dropEl.isShip = true;
                }
            } else if (i !== itemLength - 1) {
                dropEl.isShip = true;
            } else {
                setWasDropped(true)
                dropEl.isShip = true;
            }
            y++;
        }
        drawNotValidPoint({warMaps})
    };


    useEffect(() => {
        socket.on('connection', socket => {
        })
        setShips([
            [{},{},{},{}],
            [{},{},{}],
            [{},{},{}],
            [{},{}],
            [{},{}],
            [{},{}],
            [{}],
            [{}],
            [{}],
            [{}],
        ]);
        const warMap = CreateMapMas()
        setWarMap({coordinates:warMap})
        dispatch(warMapAction(warMap))
    },[]);


        return (
            <div>
                <button className={"btn"} onClick={startGame}> Играть </button>
                <div className= "TableContainer">
                    <Table  canMoveShip = {canMoveShip} shipPosition={shipPos} dropShip = {dropShip} warMap = {warMaps} onClick ={onClick} isYour = {true} />
                    { rivalData ?
                        <Table onClickOnRivalMap = {onClickOnRivalMap}  dropShip = {dropShip} warMap = {rivalData} onClick ={onClick} /> : 'Соперник пока не найден'
                    }
                </div>
                <ShipBox ships={ships} />
            </div>
            )
}



export default TableContainer
