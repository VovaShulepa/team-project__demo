(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),d=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",d),t.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.body};function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",(()=>{o()}))})();new Swiper(".swiper_gallery",{loop:!0,spaceBetween:24,grabCursor:!0,speed:3500,effect:"fade",autoplay:{delay:3800,disableOnInteraction:!1}}),new Swiper(".swiper",{loop:!0,spaceBetween:24,grabCursor:!0,speed:3e3,autoplay:{delay:4800,disableOnInteraction:!1},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0}});(()=>{const e={openModalBtn:document.querySelector("[data-modal-contacts-open]"),closeModalBtn:document.querySelector("[data-modal-contacts-close]"),modal:document.querySelector("[data-modal-contacts]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-map-open]"),closeModalBtn:document.querySelector("[data-modal-map-close]"),modal:document.querySelector("[data-modal-map]"),body:document.body};function o(){e.modal.classList.toggle("is-hidden"),e.modal.classList.toggle("overflow")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-products-modal-open]"),closeModalBtn:document.querySelector("[data-products-modal-close]"),modal:document.querySelector("[data-products-modal]")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("overflow")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.76e17536.js.map
