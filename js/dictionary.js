const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const form = document.querySelector("form");
const text_field = document.querySelector("input");
const title = document.querySelector("h2");
const definition = document.querySelector("p");

form.addEventListener("submit", () => {
    getDefinition();
});

async function getDefinition (){
    let word = text_field.value;
    let key = API + word; //create API url by adding base and word together
    const response = await fetch(key);
    if (response.status = 404) {
        title.innerHTML = "Sorry, word is not a valid word";
    } else {
        format(response.body);
    }
}

function format(json) {
    title.innerText = "" //Clear error message if it exists
    const obj = JSON.parse(json);
}