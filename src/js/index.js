let mainDiv = document.getElementById("main");

populateHeroes();

function createElement(type, src) {
    let element = document.createElement(type);
    type === "img" ? (element.src = src) : (element.textContent = src);
    mainDiv.appendChild(element);
    return element;
}

async function loadHeroes() {
    let loading = createElement("h2", "Loading heroes....");

    await new Promise((resolve, reject) => setTimeout(resolve, 1000));

    let response = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json"
    );
    let heroes = await response.json();

    loading.style.display = "none";

    return heroes.data;
}

async function populateHeroes() {
    let heroes = await loadHeroes();

    Object.values(heroes).forEach(value => {
        createElement(
            "img",
            `http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${value.image.full}`
        );
    });
}
