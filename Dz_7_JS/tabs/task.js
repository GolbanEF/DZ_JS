const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for(let index = 0; index < tab.length; index++) {
    tab[index].addEventListener('click', () => {

        for(let index = 0; index < tab.length; index++) {
            tab[index].classList.remove('tab_active');
            tabContent[index].classList.remove('tab__content_active');
        }
        
        tab[index].classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    })
}