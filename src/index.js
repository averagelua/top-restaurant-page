import "./styles.css";
import load_home from "./pages/home.js";
import load_about from "./pages/about.js";
import load_menu from "./pages/menu.js";

const contentContainer = document.querySelector("#content");
const navContainer = document.querySelector("nav");

function clearPage() {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
}

navContainer.addEventListener("click", (event) => {
    if (event.target == event.currentTarget) {
        return;
    }

    clearPage();

    switch (event.target.id) {
        case "home":
            load_home(contentContainer);
            break;
        case "menu":
            load_menu(contentContainer);
            break;
        case "about":
            load_about(contentContainer);
            break;
    }
});

load_home(contentContainer);
clearPage();