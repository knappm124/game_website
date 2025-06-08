let custom = document.querySelector(".custom");
let title = document.querySelector("h2");

function dice() {
    title.setAttribute("style", "display: none");
    title.setAttribute("aria-hidden", true);
    let button = document.createElement("button");
    button.setAttribute("class", "tooltip dice");
    button.innerHTML = "1";
    let tooltip = document.createElement("p");
    tooltip.setAttribute("class", "tooltiptext");
    tooltip.setAttribute("aria-label", "tool tip");
    tooltip.innerHTML = "Click to roll";
    button.append(tooltip);
    custom.append(button);
}

function timer() {
    title.setAttribute("style", "display: none");
    title.setAttribute("aria-hidden", true);
    let div = document.createElement("div");
    div.setAttribute("class", "timer tooltip");
    let time = document.createElement("input");
    time.setAttribute("type","number");
    time.setAttribute("step", 1);
    time.setAttribute("min",1);
    let tooltip = document.createElement("p");
    tooltip.setAttribute("class", "tooltiptext");
    tooltip.setAttribute("aria-label","tool tip");
    tooltip.innerHTML = "Set timer duration in seconds and click start";
    let button = document.createElement("button");
    button.innerHTML = "Start";
    button.setAttribute("class","notnav hover");
    div.append(time);
    div.append(tooltip);
    div.append(button);
    custom.append(div);
}

function wheel() {
    title.setAttribute("style", "display: none");
    title.setAttribute("aria-hidden", true);
    let div = document.createElement("div");
    div.setAttribute("class","tooltip");
    let img = document.createElement("img");
    img.setAttribute("src", "img/spinner.png");
    img.setAttribute("alt","Wheel with eight sections and an arrow");
    img.setAttribute("class","wheel");
    div.append(img);
    let tooltip = document.createElement("p");
    tooltip.setAttribute("class","tooltiptext");
    tooltip.innerHTML = "Click to spin wheel";
    div.append(tooltip);
    custom.append(div);
    
}

function tally() {
    title.setAttribute("style", "display: none");
    title.setAttribute("aria-hidden", true);
    let div = document.createElement("div");
    div.setAttribute("class", "tally");
    let button1 = document.createElement("button");
    button1.innerHTML = "-";
    button1.setAttribute("class","hover");
    let button2 = document.createElement("button");
    button2.innerHTML = "+";
    button2.setAttribute("class","hover");
    let tally = document.createElement("h3");
    tally.innerHTML = "0";
    div.append(button1);
    div.append(tally);
    div.append(button2);
    custom.append(div);
}

function checklist() {
    title.setAttribute("style", "display: none");
    title.setAttribute("aria-hidden", true);
    let button = document.createElement("button");
    button.setAttribute("class", "checklist hover");
    button.innerHTML = "Add List Item";
    custom.append(button);
}

function cards() {
    title.setAttribute("style", "display: none");
    title.setAttribute("aria-hidden", true);
    let div = document.createElement("div");
    div.setAttribute("class","tooltip");
    let img = document.createElement("img");
    img.setAttribute("src", "img/cardback.png");
    img.setAttribute("alt","Back of a playing card");
    img.setAttribute("class","card");
    div.append(img);
    let tooltip = document.createElement("p");
    tooltip.setAttribute("class","tooltiptext");
    tooltip.innerHTML = "Click to draw a card";
    div.append(tooltip);
    custom.append(div);
}