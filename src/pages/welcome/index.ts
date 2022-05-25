export function initPageWelcome(params){
    const div = document.createElement("div")
    div.className = "welcome-page";
    div.innerHTML = `
    <custom-text variant="title">Piedra Papel ó Tijera</custom-text>
    <custom-button role="link" onclick="window.location='http://localhost:1234/instructions'">Empezar</custom-button>
    <custom-img>
    `
    return div;
}