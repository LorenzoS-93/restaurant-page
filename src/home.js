/* menu.js */

export function home() {
    /* get the div */
    const contentDiv = document.querySelector("#content");
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("class", "home");
    homeDiv.innerHTML = `<p>Drink</p><p>Chat</p><p>Have Fun!</p>`
    contentDiv.appendChild(homeDiv);
}