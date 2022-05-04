import Slider from './Slider';
import ReservationForm from './ReservationForm'
const imageWelcome_1 = require("../assets/welcome1.png")
const imageWelcome_2 = require("../assets/welcome2.jpeg")

export function Home() {
    const section = document.createElement('section');
    section.innerHTML += ReservationForm()
    section.innerHTML += `
        <h1 class="name">CYBER SPA</h1>
    `;

    section.innerHTML += Slider();


    const article = document.createElement("article")
    const h2 = document.createElement("h2")
    h2.innerText = "WITAJ W IT SPA"
    h2.style.textAlign ="center"
    h2.style.paddingTop = "210px"
    h2.style.paddingBottom = "50px"
    article.appendChild(h2)
    section.appendChild(article)
    section.appendChild(article)

    const imagesContainer = document.createElement("div")
    imagesContainer.className = "images-container"

    const img = document.createElement("img")
    img.src = imageWelcome_1
    imagesContainer.appendChild(img)

    const img2 = document.createElement("img")
    img2.src = imageWelcome_2
    imagesContainer.appendChild(img2)

    article.appendChild(imagesContainer)
    
    article.innerHTML += `
        <p class="welcome_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="welcome_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    `

    
     
    return section;
}
export default Home