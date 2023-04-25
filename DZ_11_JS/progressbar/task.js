const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        const progress = document.getElementById('progress');
        progress.value = event.loaded/event.total;
    };

    xhr.onload = function() {
        alert(`Загрузка завершена.`);
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
});