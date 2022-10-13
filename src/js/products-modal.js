(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-products-modal-open]'),
    closeModalBtn: document.querySelector('[data-products-modal-close]'),
    modal: document.querySelector('[data-products-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
     refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('overflow');
  }
})();
