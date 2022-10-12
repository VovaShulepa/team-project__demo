(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-map-open]"),
    closeModalBtn: document.querySelector("[data-modal-map-close]"),
    modal: document.querySelector("[data-modal-map]"),
    body:document.body,
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.modal.classList.toggle("overflow");
  }
})();