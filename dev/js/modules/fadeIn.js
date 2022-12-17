export default class fadeIn {
    constructor() {
        this.targets = document.querySelectorAll('.js-fadeInTarget');
        this.mv = document.querySelector('.mv');

        this.options = {
            rootMargin: '0px',
            threshold: 0.2
        }
    }

    init (){
        this.mvFadeIn();
        this.observer();
    }

    mvFadeIn() {
        if (sessionStorage.getItem('flg') === null) {
            sessionStorage.setItem('flg','true');
            window.setTimeout(this.loadingNone, 5500);

        } else {
            this.mv.classList.remove("js-fadeInTarget");
        }
    }

    observer () {
        const observer = new IntersectionObserver(this.fadeInAni, this.options);

        for (const target of this.targets) {
            observer.observe(target);
        }
    }

    fadeInAni(entries) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("js-fadeInTarget__active");
            }
        }
    }
};