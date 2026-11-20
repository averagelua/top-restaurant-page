import picture from "../assets/restaurant.jpg";

export default function (contentContainer) {
    const title = document.createElement("h1");
    title.innerText = "Our Menu:";

    const tagline = document.createElement("p");
    tagline.innerText = "What we offer!";

    const list = document.createElement("ul");

    const listItem1 = document.createElement("li");
    listItem1.textContent = "Burger";
    list.append(listItem1);

    const listItem2 = document.createElement("li");
    listItem2.textContent = "Pizza";
    list.append(listItem2);

    contentContainer.append(title);
    contentContainer.append(tagline);
    contentContainer.append(list);
}