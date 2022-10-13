(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-products-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-products-modal-close]'),
    modal: document.querySelector('[data-products-modal]'),
    body: document.body,
  };
  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('overflow');
  }
})();
