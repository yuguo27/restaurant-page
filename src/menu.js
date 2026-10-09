
export default function loadMenu() {
    const container = document.querySelector("#container");
    container.replaceChildren();

    const menu = document.createElement("menu");
    menu.classList.add("menu")
    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    menu.appendChild(title)


    const firstCard = document.createElement("div");
    firstCard.classList.add("card");


    const first_menu = [
        "Tartare de Saumon, citron vert",
        "Filet de boeuf jus reduit",
        "Fondant au chocolat"
    ]

    first_menu.forEach(element => {
        const p = document.createElement("p");
        p.textContent = element;
        firstCard.appendChild(p);
    });
    //second menu
    
    const second_card = document.createElement("div");
    second_card.classList.add("card");
    const second_menu = [
        "Oeuf Parfait",
        "Supreme de volaile",
        "Cafe gourmant"
    ]

    second_menu.forEach(element => {
        const p = document.createElement("p");
        p.textContent = element;
        second_card.appendChild(p);
    });

    menu.appendChild(firstCard);
    menu.appendChild(second_card);
    container.appendChild(menu);


}