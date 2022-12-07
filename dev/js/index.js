import humMenu from "./modules/humMenu";
import faqAccordion from "./modules/faqAccordion";

// ハンバーガーメニュー
const hum_menu = new humMenu();
hum_menu.init ();

// FAQのアコーディオン
const faq_accordion = new faqAccordion();
faq_accordion.init();
