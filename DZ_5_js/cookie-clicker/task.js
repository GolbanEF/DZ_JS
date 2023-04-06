const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let bool = false;
let count = 0;
cookie.onclick = () => {
    clickerCounter.textContent = Number (clickerCounter.textContent) + 1;
    count++;
    if (!bool) {
        cookie.width += 10;
        cookie.height += 10;
        bool = true;
    } else {
        cookie.width -= 10;
        cookie.height -= 10;
        bool = false;
    }
    if (count === 40) {
        count = 0;
        window.location.reload();
    } 
}