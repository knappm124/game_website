const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const form = document.querySelector("form");
const text_field = document.querySelector("input");
const title = document.querySelector("h2");
const definition = document.querySelector("p");

function call_api() {
    let valid = true;
    let word = text_field.value;
    let key = API + word; //create API url by adding base and word together
    fetch(key)
        .then(response => {
            if(response.status == 404) {
                title.innerHTML = "Sorry, " + word + " is not a valid word";
                valid = false;
            } else {
                return response.json;
            }
        })
        .then(body => {
            if(valid) {

            }
        })
        .catch((error) => {

        })
    if (response.status == 404) {

    } else {
        response = fetch(key);
        format(response.body);
    }
    return false;
}

function format(json) {
    title.innerHTML = "" //Clear error message if it exists
    const obj = JSON.parse(json);
}