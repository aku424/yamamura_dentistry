export default class smoothScroll{
    constructor() {
        this.smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
        this.href
        this.targetElement
    }

    init (){
        this.scrollFunc();
    }

    scrollFunc() {
        for (const smoothScrollTrigger of this.smoothScrollTriggers) {
            smoothScrollTrigger.addEventListener('click', function (e) {
                e.preventDefault();
                
                this.href = smoothScrollTrigger.getAttribute('href');
                this.targetElement = document.getElementById(this.href.replace(this.href.substring(0, this.href.indexOf('#') + 1), ''));
                const rect = this.targetElement.getBoundingClientRect().top;
                const offset = window.pageYOffset;
                const gap = 150;
                const target = rect + offset - gap;
    
                window.scrollTo({
                    top: target,
                    behavior: 'smooth',
                });
            })

        };
    }
};
