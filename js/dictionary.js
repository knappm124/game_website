const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const form = document.querySelector("form");
const text_field = document.querySelector("input");
const title = document.querySelector("h2");
const definition = document.querySelector(".definitions");

function call_api() {
    let word = text_field.value;
    definition.innerHTML = "";
    let valid = true;
    if (!word) {
        title.innerHTML = "Please enter a word to look up";
    } else {
        let key = API + word; //create API url by adding base and word together
        fetch(key)
            .then(response => {
                if (response.status == 404) {
                    title.innerHTML = "Sorry, " + word + " is not a valid word";
                    valid = false;
                } else {
                    return response.json();
                }
            })
            .then(body => {
                if (valid) {
                    let capWord = word.charAt(0).toUpperCase() + word.slice(1);
                    title.innerHTML = capWord;
                    for (let i = 0; i < body[0].meanings.length; i++) {
                        let partOfSpeech = document.createElement("h3");
                        let capSpeech = body[0].meanings[i].partOfSpeech.charAt(0).toUpperCase() + body[0].meanings[i].partOfSpeech.slice(1);
                        partOfSpeech.innerHTML = capSpeech + ":";
                        definition.append(partOfSpeech);
                        let list = document.createElement("ol");
                        for (let j = 0; j < body[0].meanings[i].definitions.length; j++) {
                            let defineText = body[0].meanings[i].definitions[j].definition;
                            let define = document.createElement("li");
                            define.innerHTML = defineText;
                            list.append(define);
                        }
                        definition.append(list);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return false;
}