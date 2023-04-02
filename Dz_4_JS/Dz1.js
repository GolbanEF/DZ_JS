function getPasswordChecker(password) {
    return function (guest) {
        return guest === password;
    }
}

// true
c = getPasswordChecker("123")
console.log(c("123"))

// false
c = getPasswordChecker("123")
console.log(c("321"))

// true
c = getPasswordChecker("Vasay")
console.log(c("Vasay"))

// false

c = getPasswordChecker("Petay")
console.log(c("Mary"))

