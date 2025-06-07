let add = document.querySelector("#add");
let startgame = document.querySelector('#begin');
let inputDiv = document.querySelector("#input");
let round = document.querySelector("#addRound");
let count = 0;

add.addEventListener("click", () => {
    count++; //increase player count by 1
    startgame.setAttribute("style", "display: block"); //show start game button
    let textfield = document.createElement("input"); //create input field for player
    textfield.setAttribute('type', "text");
    let string = "Player " + count;
    textfield.setAttribute('placeholder', string); //set placeholder as Player #
    inputDiv.append(textfield); //add to inputDiv
});

function updateTotal() {
    let table = document.querySelector("table");
    let colcount = table.rows[0].cells.length;
    let rowcount = table.rows.length;
    for(let i = 0; i < colcount; i++) {
        if(rowcount == 2){
            break;
        }
        //iterate through each column, adding up the values in each row
        let tally = 0;
        for(let j = 1; j < rowcount-1; j++){
            let num = Number(table.rows[j].cells[i].firstElementChild.value);
            tally += num;
        }
        //set cell value for player to the tally count from the inner for loop
        document.querySelector(".total").cells[i].innerHTML = tally;
    }
}

function createRound() {
    let newRow = document.createElement("tr"); //create new row
    let colcount = document.querySelector("table").rows[0].cells.length;
    for(let i = 0; i < colcount; i++){ 
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("value", 0);
        input.addEventListener("input", updateTotal);
        let cell = document.createElement("td");
        cell.append(input);
        newRow.append(cell);
    }
    return newRow;
}

startgame.addEventListener("click", () => {
    let table = document.querySelector("table"); //get table element
    add.setAttribute("style", "display:none"); //hide add player button
    startgame.setAttribute("style", "display:none"); // hide start game button
    round.setAttribute("style", "display: block"); //show add round button
    let inputNodes = document.querySelectorAll("input"); //get all input elements
    let namerow = document.createElement("tr"); //create row for player names
    let totalrow = document.createElement("tr"); //create row for total score
    totalrow.setAttribute("class", "total");
    for(let i = 0; i < inputNodes.length; i++){
        let input = inputNodes[i]; //get current input element
        let name = !(input.value) ? input.placeholder : input.value; //take value if it exists, otherwise use placeholder text
        let cell = document.createElement("td");
        cell.textContent = name;
        cell.setAttribute("class", "header");
        namerow.append(cell); //add player's name to the name row
        let totalcell = document.createElement("td"); //create cell to hold total score
        totalcell.textContent = "0"; // set value to 0
        totalrow.append(totalcell); // add total cell to total row
    }
    inputDiv.innerHTML = ""; //clear out input elements
    table.append(namerow); //add name row to the table
    table.append(totalrow); //add total row to table
    let newrow = createRound(); //create first round input fields
    table.insertBefore(newrow,totalrow); //add input fields to table
});

round.addEventListener("click", () => {
    let table = document.querySelector("table");
    let row = createRound();
    let totalrow = document.querySelector(".total");
    table.insertBefore(row, totalrow);
});

