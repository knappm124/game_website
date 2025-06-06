const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const button = document.querySelector("#submit");
const text_field = document.querySelector("#define_word");
const title = document.querySelector("#title");
const definition = document.querySelector("#definition");

button.addEventListener("submit", getDefinition());

async function getDefinition (){
    let word = text_field.value;
    let key = API + word; //create API url by adding base and word together
    const response = await fetch(key);
    if (response.message() == "Sorry pal, we couldn't find definitions for the word you were looking for.") {
        definition.value = "Sorry, word is not a valid word";
    } else {
        format(response.body);
    }
}

function format(json) {
    definition.value = "" //Clear error message if it exists
}