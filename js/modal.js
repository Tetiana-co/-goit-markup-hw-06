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


(() => {
  const backdrop = document.querySelector('[data-modal]');
  const openBtn = document.querySelector('[data-modal-open]');
  const closeBtn = document.querySelector('[data-modal-close]');

  const open = () => {
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && backdrop.classList.contains('is-open')) close(); });
})();