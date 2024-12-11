import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./styles.css";

function screenManager() {
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const aboutBtn = document.querySelector("#about");
    function screenUpdate(e) {
        const contentDiv = document.querySelector("#content");
        /* Clean all child */
        while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
        }
        switch (e.target.getAttribute("id")) {
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

/*
Image by 
<a href="https://pixabay.com/users/lazarosv-24347528/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8913592">Laz Georgoulas</a> 
from 
<a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8913592">Pixabay</a>
*/