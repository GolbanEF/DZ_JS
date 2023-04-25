let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    let responseObj = xhr.response;
    let loader = document.querySelector('.loader');
    let items = document.querySelector('#items');

    loader.classList.remove('loader_active');

    for (let i in responseObj['response']['Valute']) {
        items.insertAdjacentHTML('beforeEnd',
        '<div class="item">' + 
        '<div class="item__code">' + responseObj['response']['Valute'][i]['CharCode'] + '</div>' +
        '<div class="item__value">' + responseObj['response']['Valute'][i]['Value'] + '</div>' +
        '<div class="item__currency"> руб. </div>' +
        '</div>');
    };
};