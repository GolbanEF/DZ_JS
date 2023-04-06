let interval = setInterval(() => {
    const timer = document.getElementById('timer');
    timer.textContent = Number (timer.textContent) - 1;
    if (timer.textContent == 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
        window.location.reload();
    }
}, 1000);