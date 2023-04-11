const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnClose = document.getElementsByClassName('modal__close_times');
const btnDanger = document.getElementsByClassName('btn_danger');

modalMain.classList.add('modal_active');

const arrbtnClose = Array.from(btnClose);

arrbtnClose.forEach((element) => {
    element.onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
})

btnDanger[0].onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}
