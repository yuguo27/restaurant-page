
import restaurantImage from "../../image/restaurant_page.jpg";

export default function loadHome() {
    const container = document.querySelector("#container");

    container.replaceChildren();

    // Première card : présentation du restaurant
    const firstCard = document.createElement("div");
    firstCard.classList.add("card");

    const biography = document.createElement("div");
    biography.classList.add("biography");

    const title = document.createElement("h1");
    title.textContent =
        "Best restaurant in the world. Our speciality? French Gastronomy best of the world.";

    biography.appendChild(title);

    const image = document.createElement("img");
    image.classList.add("restaurant_image");
    image.src = restaurantImage;
    image.alt = "Façade restaurant";

    firstCard.append(biography, image);

    // Deuxième card : horaires d'ouverture
    const secondCard = document.createElement("div");
    secondCard.classList.add("card");

    const hoursTitle = document.createElement("h1");
    hoursTitle.textContent = "Hours";

    const hours = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm",
    ];

    secondCard.appendChild(hoursTitle);

    hours.forEach((hour) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = hour;
        secondCard.appendChild(paragraph);
    });

    // Ajouter les deux cards au container
    container.append(firstCard, secondCard);
}