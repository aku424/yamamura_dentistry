export default class humMenu {
    constructor() {
        this.btn = document.querySelector('.js-humBtn');
        this.header = document.querySelector('#header');
        this.header_items = document.querySelectorAll('.js-header-item');
    }

    init (){
        this.btn.addEventListener("click", this.toggleFunc.bind(this));
    }

    toggleFunc() {
        if (this.header.classList.contains('is-open')) {
            this.addClass();
        }
        else {
            this.header.classList.add('is-open');
            this.closeFunc();
        }
    }

    addClass() {
        this.header.classList.remove('is-open');
    }

    removeClass() {
        this.header.classList.remove('is-open');
    }

    closeFunc() {
        for (const header_item of this.header_items) {
            header_item.addEventListener('click',this.removeClass.bind(this))
        }
    }
}
