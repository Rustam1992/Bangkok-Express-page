import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  elem = null;

  constructor() {
    this.#render();

    const closeBtn = this.elem.querySelector(".modal__close");
    closeBtn.addEventListener("click", this.close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close(), { once: true };
      }
    });
  }

  #render() {
    this.elem = createElement(this.#template());
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add("is-modal-open");
  }

  setTitle(title) {
    this.elem.querySelector(".modal__title").textContent = title;
  }

  setBody(node) {
    const modalBody = this.elem.querySelector(".modal__body");
    modalBody.innerHTML = "";
    modalBody.append(node);
  }

  close = () => {
    document.body.classList.remove("is-modal-open");
    this.elem.remove();
  };

  #template() {
    return `

 <div class="modal">
   <div class="modal__overlay"></div>
   <div class="modal__inner">
     <div class="modal__header"> 
      <button type="button" class="modal__close">
        <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
      </button>
      <h3 class="modal__title">    
      </h3>
     </div>
     <div class="modal__body">
     </div>
   </div>
 </div>
    `;
  }
}
