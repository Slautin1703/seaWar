export const CreateMapMas = () => {
    let position = {
        x: 1,
        y: 1,
        isShip: false,
        nextCubeIsShip: false,
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

export const drawNotValidPoint = (elements) => {
    elements.forEach(el => {
        if (el) {
            el.nextCubeIsShip = true
        }
    })
};

