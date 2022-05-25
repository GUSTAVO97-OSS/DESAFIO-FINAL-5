export function initPageInstructions(params){
    const div = document.createElement("div")
    div.className = "instructions-page";
    div.innerHTML = `
    <custom-text variant="text">Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 10 segundos.</custom-text>
    <custom-button role="link" onclick="window.location='http://localhost:1234/game'">¡Jugar!</custom-button>
    <custom-img class="hands">
    `


    div.addEventListener("click",() => {
        params.goTo("/instructions");
    })
    return div;
}