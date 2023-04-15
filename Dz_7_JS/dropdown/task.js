const dropDownValue = document.querySelectorAll('.dropdown__value');
const dropDownList = document.querySelectorAll('.dropdown__list');
const dropDownLink = document.querySelectorAll('.dropdown__link');
const dropDownItem = document.querySelectorAll('.dropdown__item');


for(let index = 0; index < dropDownLink.length; index++) {
    const currentLink = dropDownLink[index];
    currentLink.addEventListener('click', (event) => {
        const parentDropDownItem = currentLink.closest('.dropdown__list');
        const dropDown = parentDropDownItem.closest('.dropdown');
        const childDropDown = dropDown.querySelector('.dropdown__value');
        childDropDown.textContent = currentLink.textContent;
        parentDropDownItem.classList.toggle('dropdown__list_active');
        event.preventDefault();
    });
};

for(let index = 0; index < dropDownValue.length; index++) {
    const currentDropDownValue = dropDownValue[index];
    currentDropDownValue.addEventListener('click', (event) => {
        dropDownList[index].classList.toggle('dropdown__list_active');
        event.preventDefault();
    });
}