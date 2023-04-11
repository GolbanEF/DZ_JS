const link = document.getElementsByClassName('menu__link');
const menuArr = document.getElementsByClassName('menu');


for (let index = 0; index < link.length; index++) {
    const currentLink = link[index];
    const parent = currentLink.closest('.menu__item');

    if (currentLink.closest('.menu_sub')) {
        continue;
    }

    if (parent.querySelector('.menu')) {
        currentLink.addEventListener('click', (event) => {
            const menu = parent.querySelector('.menu');
            menu.classList.toggle('menu_active');
            event.preventDefault();
        })
    }
}