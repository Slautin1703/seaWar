

export const CreateMapMas = () => {
    let position = {
        x: 1,
        y: 1,
        isShip: false,
        nextCubeIsShip: false,
        canTransfer: false,
        isHorizontal: false
    }
    let mas = []
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            let pushObj = {}
            Object.assign(pushObj, position)
            mas.push(pushObj)
            position.x = position.x + 1
        }
        position.y = position.y + 1
        position.x = 1
    }
    return mas
};

export const getCubeAround = ({warMaps,x, y}) => {
    const dropEl = warMaps.coordinates.find(el => el.x === x && el.y === y);
    const nextEl = warMaps.coordinates.find(el => el.x === x + 1 && el.y === y);
    const topEl = warMaps.coordinates.find(el => el.x === x && el.y === y - 1);
    const botEl = warMaps.coordinates.find(el => el.x === x && el.y === y + 1);
    const prevEl = warMaps.coordinates.find(el => el.x === x - 1  && el.y === y);
    const rightBottom = warMaps.coordinates.find(el => el.x === x + 1  && el.y === y + 1);
    const leftBottom = warMaps.coordinates.find(el => el.x === x - 1  && el.y === y + 1);
    const rightTop = warMaps.coordinates.find(el => el.x === x + 1  && el.y === y - 1);
    const leftTop = warMaps.coordinates.find(el => el.x === x - 1  && el.y === y - 1);

    return { dropEl,nextEl,topEl,botEl,prevEl,rightBottom,leftBottom,rightTop,leftTop }
};


export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const drawNotValidPoint = ({warMaps}) => {
    warMaps.coordinates.forEach(el => {
            const { dropEl,nextEl,topEl,botEl,prevEl,rightBottom,leftBottom,rightTop,leftTop } = getCubeAround({warMaps,x:el.x, y:el.y});
            if (dropEl.isShip) {
                if (nextEl && !nextEl.isShip) nextEl.nextCubeIsShip = true;
                if (botEl && !botEl.isShip) botEl.nextCubeIsShip = true;
                if (topEl && !topEl.isShip) topEl.nextCubeIsShip = true;
                if (prevEl && !prevEl.isShip) prevEl.nextCubeIsShip = true;
                if (rightBottom && !rightBottom.isShip) rightBottom.nextCubeIsShip = true;
                if (leftBottom && !leftBottom.isShip) leftBottom.nextCubeIsShip = true;
                if (rightTop && !rightTop.isShip) rightTop.nextCubeIsShip = true;
                if (leftTop && !leftTop.isShip) leftTop.nextCubeIsShip = true;


            }
        }
    );
};

export const clearPointValid = ({warMaps}) => {
    warMaps.coordinates.forEach(el => {
        el.nextCubeIsShip = false
    });
    return warMaps
};

export const getShipLength = ({warMaps,x,y,isHorizontal}) => {
    let itemLength = 0;
        for (let i = 0; i <= 3; i++) {
            let transShipElement = null;
                if (isHorizontal) {
                    transShipElement = warMaps.coordinates.find(el => (el.x ===  x &&  el.y - i  === y) && el.isShip);
                } else {
                    transShipElement = warMaps.coordinates.find(el => (el.x - i === x && el.y === y) && el.isShip);
                }
            if (transShipElement) {
                itemLength++
            }
        }
    return itemLength
};

export const revertShip = ({warMaps,isHorizontal, x , y }) => {
    const itemLength = getShipLength({warMaps,x, y, isHorizontal});
    for (let i = 0; i < itemLength - 1 ; i++) {
        const { botEl } = getCubeAround({warMaps,x: x , y : y + i});
        const { nextEl } = getCubeAround({warMaps,x: x + i , y : y });
        nextEl.isShip = isHorizontal
        botEl.isShip = !isHorizontal
    }
    return warMaps
};

