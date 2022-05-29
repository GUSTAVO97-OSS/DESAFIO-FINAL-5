import { goTo } from "../../router";
import { state } from "../../state";

export function initPageWelcome(params){
    const div = document.createElement("div")
    div.className = "welcome-page";
    div.innerHTML = `
    <custom-text variant="title">Piedra Papel ó Tijera</custom-text>
    <custom-button class="elbutton" path="/instructions">Empezar</custom-button>
    <custom-img>
    `
    const root = document.querySelector(".root");
    const next = div.querySelector(".elbutton")
    next.addEventListener("click", (e) => {
		const target = e.target as any;
		const route = target.getAttribute("path");
		goTo(route, root);
	});
   

    return div;
}