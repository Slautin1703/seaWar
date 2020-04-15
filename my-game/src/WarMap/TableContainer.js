import React, {useEffect, useState} from 'react';
import '../Cube.css';
import Table from "./components/WarMap";
import {CreateMapMas, drawNotValidPoint, getCubeAround} from "./helpers";
import {useDispatch} from "react-redux";
import {warMapAction} from "./warMapActions";
import ShipBox from "./components/ShipItems/ShipBox";




const TableContainer = (props) => {

    const [warMaps,setWarMap] = useState(null)
    const dispatch = useDispatch();

    const [shipPos,setShipPos] = useState([null,null]);
    const [ships,setShips] = useState([]);

    const [wasDropped,setWasDropped] = useState(false)
    const [dropItemLength,setDropItemLength] = useState(null)


    const onClick = (e) => {

        warMaps.coordinates.forEach(el => {
            el.nextCubeIsShip = false
        });
        setWarMap({coordinates: warMaps.coordinates})

        if (e.canTransfer) {
            //Получили длину корабля, по которому нажали
            let itemLength = 0;
            for (let i = 0; i <= 3; i++) {
                const transShipElement = warMaps.coordinates.find(el => (el.x === e.x && el.y - i === e.y) && el.isShip);
                if (transShipElement) {
                    itemLength++
                }
            }
            const { dropEl,nextEl,topEl,botEl,prevEl,rightBottom,leftBottom,rightTop,leftTop } = getCubeAround({warMaps,x: e.x , y :e.y});

            nextEl.isShip = true;
            botEl.isShip = false



            drawNotValidPoint({warMaps})
            console.log(dropEl)

            setWarMap({coordinates: warMaps.coordinates});


        }
    };

    const startGame = () => {
        fetch('http://localhost:5000/')
            .then(response => response.json())
            .then(data => console.log(data));
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
            ships[elIndex] = []
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
                    <Table canMoveShip = {canMoveShip} shipPosition={shipPos} dropShip = {dropShip} warMap = {warMaps} onClick ={onClick} isYour = {true} />
                    {/*<Table dropShip = {dropShip} warMap = {warMaps} onClick ={onClick} />*/}
                </div>
                <ShipBox ships={ships} />
            </div>
            )
}



export default TableContainer
