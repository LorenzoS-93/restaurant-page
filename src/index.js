import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./styles.css";

function screenManager() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");
    function screenUpdate(e) {
        const contentDiv = document.querySelector("#content");
        /* Clean all child */
        while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
        }
        switch (e.target.getAttribute("class")) {
            case 'home':
                home();
                break;
            case 'menu':
                menu();
                break;
            case 'about':
                about();
                break;
        }
    }
    homeBtn.addEventListener("click", screenUpdate);
    menuBtn.addEventListener("click", screenUpdate);
    aboutBtn.addEventListener("click", screenUpdate);
    /* Initial rendering */
    home();
}

screenManager();