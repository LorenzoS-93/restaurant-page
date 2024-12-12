/* menu.js */

/*
**  This function is made for future scalability
*/
function cocktails() {
    /* Initialize cocktail array */
    const cocktails = [
        {
            name: `Old fashioned`,
            preparation: `Traditionally made by muddling sugar with bitters and water, adding wiskey.`,
            served: `Served on the rocks, garnish with an orange slice or zest in an old fashioned glass.`,
            price: `$15,00`,
        },
        {
            name: `Sidecar`,
            preparation: `Traditionally made with brandy orange liqueur and lemon juice.`,
            served: `Served chilled without ice in a cocktail glass.`,
            price: `$15,00`,
        },
        {
            name: `France 75`,
            preparation: `Traditionally made with gin, champagne, lemon juice and sugar.`,
            served: `Served chilled without ice in a champagne flute.`,
            price: `$15,00`,
        },
        {
            name: `The Southside`,
            preparation: `Traditionally made with gin, lime juice, simple syrup and mint.`,
            served: `Served chilled without ice in a cocktail glass.`,
            price: `$15,00`,
        },
        {
            name: `Mary Pickford`,
            preparation: `Traditionally made with white rum, pineapple juice, grenadine, and Maraschino liqueur.`,
            served: `Served chilled without ice in a cocktail glass.`,
            price: `$15,00`,
        },
        {
            name: `Rickey`,
            preparation: `Traditionally made from gir or bourbon, lime juice and carbonated water.`,
            served: `Served on the rocks, garnished with lime half shell in a highball glass.`,
            price: `$15,00`,
        },
    ];

    /* getter method */
    const getCocktails = () => cocktails;

    /* method for adding new cocktail to the array */
    const addCockatil = (cocktail) => cocktails.push(cocktail);

    return { getCocktails };
}

export function menu() {
    /* initialize the div */
    const contentDiv = document.querySelector("#content");
    /* this ccontainer is made only for styling reason */
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    contentDiv.appendChild(container);
    /* this is the menu container */
    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    menu.innerHTML = `<h2>Our menu</h2>`
    container.appendChild(menu);
    /* for each cocktail in the list create the relative card */
    const list = cocktails();
    for (const cocktail of list.getCocktails()) {
        const drink = document.createElement("div");
        menu.appendChild(drink);
        const name = document.createElement("h3");
        name.textContent = cocktail.name;
        drink.appendChild(name);
        const preparation = document.createElement("p");
        preparation.textContent = cocktail.preparation;
        drink.appendChild(preparation);
        const served = document.createElement("p");
        served.textContent = cocktail.served;
        drink.appendChild(served);
        const price = document.createElement("p");
        price.textContent = cocktail.price;
        price.setAttribute("class", "price");
        drink.appendChild(price);
    }
}