let i = 0;

do {
    let n = Math.floor(Math.random() * 1000);
    console.log('Я загадал', n)

    const numberFromUser = prompt('Введите число от 0 до 999:')
    console.log('Вы ввели', numberFromUser)

    i++;

    if (i > 2) {
        alert('Game over!')
        break;
    } else if (isNaN(+numberFromUser) || (+numberFromUser > 999)) {
        alert('Вы ввели не число или число не в ходящее в диапозон от 0 до 999')
    } else if (numberFromUser == n) { 
        alert('Вы угадали =)')
    } else if (numberFromUser > n) { 
        alert('Число больше, чем я загадал (=')
    } else if (numberFromUser < n) { 
        alert('Число меньше, чем я загадал (=')
    }
} while (i < 3)