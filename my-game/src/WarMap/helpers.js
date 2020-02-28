export const CreateMapMas = () => {
    let position = {
        x: 0,
        y: 0
    }
    let mas = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let pushObj = {}
            Object.assign(pushObj, position)
            mas.push(pushObj)
            position.x = position.x + 1
        }
        position.y = position.y + 1
        position.x = 0
    }
    return mas
}
