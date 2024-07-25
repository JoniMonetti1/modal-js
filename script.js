const modalBtn = document.getElementsByClassName('modal-btn')[0];
const modal = document.getElementsByClassName('modal')[0];
const closeModalBtn = document.getElementsByClassName('close-modal')[0];

modalBtn.addEventListener('click', () => {
    modal.showModal();
})

closeModalBtn.addEventListener('click', () => {
    modal.close();
})