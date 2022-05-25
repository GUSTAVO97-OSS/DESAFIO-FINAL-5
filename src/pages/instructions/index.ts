export function initPageInstructions(params){
    const div = document.createElement("div")
    div.className = "instructions-page";
    div.innerHTML = `
    <custom-text variant="text">Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 10 segundos.</custom-text>
    <custom-button class="next">¡Jugar!</custom-button>
    <custom-img class="hands">
    `
    const next = div.querySelector(".next")
    next.addEventListener("click", () => {
        params.goTo("/game")
    })

    return div;
}