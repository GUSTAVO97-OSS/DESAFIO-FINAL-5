import { goTo } from "../../router";
import { state } from "../../state";
export function initPageInstructions(params){
    const div = document.createElement("div")
    div.className = "instructions-page";
    div.innerHTML = `
    <custom-text variant="text">Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 10 segundos.</custom-text>
    <custom-button class="next" path="/game">¡Jugar!</custom-button>
    <custom-img class="hands">
    `
    const root = document.querySelector(".root");
    const next = div.querySelector(".next")
    next.addEventListener("click", (e) => {
		const target = e.target as any;
		const route = target.getAttribute("path");
		goTo(route, root);
	});

    return div;
}