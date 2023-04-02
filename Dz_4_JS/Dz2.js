const rl = require('readline').createInterface(process.stdin, process.stdout);

let num = Math.floor(Math.random() * 1000);
let count = 0;

console.log(num);

function gameNumber() {
    count = count + 1;
    console.log(`Номер текущей попытки: ${count}`);

    rl.question('Я загадал число в диапазоне от 0 до 999, попробуйте угадать: ', (userGuess) => {
        if (userGuess == 'q') {
            console.log('До свидания!');
            rl.close();
            return;
        }
        else if (isNaN(userGuess)) {
            console.log('Вы ввели некорректное значение');
        }
        else if (+userGuess === num) {
            console.log(`Вы угадали за ${count} попыток!`);
            rl.close();
            return;
        } 
        else if (+userGuess < num) {
            console.log('Больше');
        } 
        else if (+userGuess > num) {
            console.log('Меньше');
        }
        gameNumber();
    });
}
    
gameNumber();