export default class humMenu {
    constructor() {
        this.btn = document.querySelector('.js-humBtn');
        this.header = document.querySelector('#header');
    }

    init (){
        this.btn.addEventListener("click", this.toggleFunc.bind(this));
    }

    toggleFunc() {
        if (this.header.classList.contains('is-open')) {
            this.header.classList.remove('is-open');
        }
        else {
            this.header.classList.add('is-open');
        }
    }
}
