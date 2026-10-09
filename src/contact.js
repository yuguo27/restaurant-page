export default function loadContact() {
    const container = document.querySelector("#container");
    container.replaceChildren();

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const card = document.createElement("div");
    card.classList.add("card");

    const biography = document.createElement("div");
    biography.classList.add("biography");

    const title = document.createElement("h1");
    title.textContent =
        "Pour nous contacter venez place de la république ou notre tel 06 XX XX XX XX ";

    biography.appendChild(title);
    card.appendChild(biography);
    contact.appendChild(card);
    container.appendChild(contact);
}
