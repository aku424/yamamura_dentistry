import humMenu from "./modules/humMenu";
import faqAccordion from "./modules/faqAccordion";
import smoothScroll from "./modules/smoothScroll";

// ハンバーガーメニュー
const hum_menu = new humMenu();
hum_menu.init ();

// FAQのアコーディオン
const faq_accordion = new faqAccordion();
faq_accordion.init();

// スムーススクロール
const smooth_scroll = new smoothScroll();
smooth_scroll.init();
