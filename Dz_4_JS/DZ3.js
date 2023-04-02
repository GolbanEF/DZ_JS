const rl = require('readline').createInterface(process.stdin, process.stdout);

let num = Math.floor(Math.random() * 1000);
let count = 0;

console.log(num);

function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function gameNumber() {
    while(true) {
        count = count + 1;
        console.log(`Номер текущей попытки: ${count}`);

        const userGuess = await question('Я загадал число в диапазоне от 0 до 999, попробуйте угадать: ');

        if (userGuess == 'q') {
            console.log('До свидания!');
            rl.close();
            break;
        }
        else if (isNaN(userGuess)) {
            console.log('Вы ввели некорректное значение');
        }
        else if (+userGuess === num) {
            console.log(`Вы угадали за ${count} попыток!`);
            rl.close();
            break;
        } 
        else if (+userGuess < num) {
            console.log('Больше');
        } 
        else if (+userGuess > num) {
            console.log('Меньше');
        }
    }
}

gameNumber();