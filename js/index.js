let elOutBtn = document.querySelector(".outBtn");

elOutBtn.addEventListener("click", function() {
    window.location.replace("login.html");
})

let elUL = document.querySelector(".ul2");
let newFilms = films.slice(1,50);
let elBody = document.querySelector("index_body");

for (const films of newFilms) {
    let elLI = document.createElement("li");
    elLI.style.border = "1px solid #fff";
    elLI.style.background = "#3B3B3B";
    elLI.style.marginRight = "10px";
    elLI.style.marginBottom = "30px"
    elLI.style.width = "300px"
    elUL.appendChild(elLI);

    let elImg = document.createElement("img");
    elImg.style.height = "400px";
    elImg.style.width = "300px"
    elLI.appendChild(elImg);

    let elTitle = document.createElement("h3");
    elTitle.style.color = "#fff";
    elTitle.style.marginBottom = "10px";
    elLI.appendChild(elTitle);

    let elStrong = document.createElement("strong");
    elStrong.style.color = "#fff";
    elLI.appendChild(elStrong);

    let elPi = document.createElement("p");
    elPi.style.color = "#fff";
    elPi.style.marginTop = "10px"
    elLI.appendChild(elPi);

    elImg.setAttribute("src", films.poster);

    elTitle.textContent = `TITLE: 
    ${films.title}`;

    elStrong.textContent = `GENRES: 
    ${films.genres}`;

    elPi.textContent = `OVERVIEW:
    ${films.overview}`
}