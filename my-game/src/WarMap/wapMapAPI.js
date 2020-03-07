// Запрос к нашему УДАЛЕННОМУ серверу, можешь почекать в консоли
export const getWarMap = () => {
    fetch('http://localhost:5000/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',

        },
        body: JSON.stringify({hui:'hio'})
        ,
    })
        .then(response => response.json())
        .then(data => console.log(data));
}


//Не трогай плз, бгхоу
// fetch('https://sleepy-meadow-54515.herokuapp.com/users/delete/2')
//     .then(response => response.json())
//     .then(data => console.log(data));
