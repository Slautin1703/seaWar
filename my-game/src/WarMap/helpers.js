export const CreateMapMas = () => {
    let position = {
        x: 1,
        y: 1
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
}
