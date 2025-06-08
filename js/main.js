function closeNav() {
    document.querySelector("aside").style.width = "0px";
    document.querySelector("aside").setAttribute("aria-hidden","true");
}

function openNav() {
    document.querySelector("aside").style.width = "250px";
    document.querySelector("aside").setAttribute("aria-hidden", "false");
}