export default class faqAccordion{
    constructor() {
        this.item = document.querySelectorAll('.js-faqItem');
        this.fucks = document.querySelectorAll('.js-faqFuck');
    }

    init (){
        this.faqFunc();
    }

    faqFunc() {
        for (const fuck of this.fucks) {
            fuck.addEventListener("click", () => {
                const target = fuck.parentNode.parentNode;
                const targetA = target.getElementsByClassName('faq__a')[0];

                if (target.classList.contains("js-faqOpen")) {
                    target.classList.remove("js-faqOpen");
                    target.classList.add("js-faqClose");
                }else {
                    target.classList.remove("js-faqClose");
                    target.classList.add("js-faqOpen");
                }
            });
        };
    }
};
