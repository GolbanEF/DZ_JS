function primeNumber(n) {
    let arr = [];
    let cursorNumber = 2;
    while(n != 0) {
        if(isPrime(cursorNumber)) {
            arr.push(cursorNumber);
            n--;
        } 
        cursorNumber++;
    }
    return arr;
}


function isPrime(number) {
    var i = 2;
    while(i <= number/2) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}


console.log(primeNumber(process.argv[2]));

