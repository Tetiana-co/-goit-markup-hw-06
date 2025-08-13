(() => {
  константні посилання = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[відкриття-модальних-даних]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[закриття-модальних-даних]"),
    // Додати атрибут data-modal на бекдроп модалки
    модальний: document.querySelector("[модальні дані]"),
  };

  refs.openModalBtn.addEventListener("клік", toggleModal);
  refs.closeModalBtn.addEventListener("клік", toggleModal);

  функція перемиканняМодальних() {
    // is-open це клас, який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("відкрито");
  }
})();