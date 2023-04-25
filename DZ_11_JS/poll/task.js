let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    let responseObj = xhr.response;
    let poolTitle = document.querySelector('#poll__title');
    let poolAnswers = document.querySelector('#poll__answers');

    poolTitle.insertAdjacentHTML('beforeEnd', responseObj['data']['title']);

    for (let i in responseObj['data']['answers']) {
        poolAnswers.insertAdjacentHTML('beforeEnd',
        '<button class="poll__answer">' + responseObj['data']['answers'][i] + '</button>');
    };

    let pollAnswer = document.querySelectorAll('.poll__answer');
    for(let i = 0; i < pollAnswer.length; i++) {
        pollAnswer[i].style.margin = '5px';
        pollAnswer[i].addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    }
};