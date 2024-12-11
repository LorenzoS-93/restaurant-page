/* menu.js */

export function home() {
    /* get the div */
    const contentDiv = document.querySelector("#content");
    const homeDiv = document.createElement("div");
    homeDiv.innerHTML = `<p><b>Eat</b></p><p><b>Drink</b></p><p>and</p><p>Have <b>Fun</b>!</p>`
    contentDiv.appendChild(homeDiv);
}