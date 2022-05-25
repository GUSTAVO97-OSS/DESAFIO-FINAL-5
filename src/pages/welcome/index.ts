export function initPageWelcome(params){
    const div = document.createElement("div")
    div.className = "welcome-page";
    div.innerHTML = `
    <custom-text variant="title">Piedra Papel ó Tijera</custom-text>
    <custom-button class="elbutton">Empezar</custom-button>
    <custom-img>
    `
    const next = div.querySelector(".elbutton")
    next.addEventListener("click", () => {
        params.goTo("/instructions")
    })

    return div;
}