import picture from "./assets/restaurant.jpg";

export default function () {
    const title = document.createElement("h1");
    title.innerText = "My Amazing Restaurant!";

    const tagline = document.createElement("p");
    tagline.innerText = "Quality is our recipie!";

    const image = document.createElement("img");
    image.width = 300;
    image.src = picture;

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aliquid, sapiente odio, excepturi ratione quas autem molestiae eveniet cum consectetur voluptatem rem dicta, consequuntur provident temporibus laudantium dolores soluta earum.";

    document.body.append(title);
    document.body.append(tagline);
    document.body.append(image);
    document.body.append(description);
}