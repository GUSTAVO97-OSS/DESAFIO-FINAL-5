import {initPageWelcome} from "./pages/welcome"
import { initPageInstructions } from "./pages/instructions";
import { initPageGame } from "./pages/game";
import { initShowHands } from "./pages/showhands"
import { initResults } from "./pages/results"


const BASE_PATH = "/DESAFIO-FINAL-5";

const routes = [{
    path: /\/welcome/,
    component: initPageWelcome
},
{
        path: /\/instructions/,
    component: initPageInstructions

},
{
        path: /\/game/,
    component: initPageGame

},
{
        path: /\/showhands/,
    component: initShowHands

},
{
        path: /\/results/,
    component: initResults

}
];

//? Comprueba si la URL forma parte del host de Github Pages.
function isGithubPages() {
	return location.host.includes("github.io");
}

function goTo(path, containerEl?) {
	//? Si la se cumple, añade el prefijo correspondiente al deploy.
	//? Sino, devuelve el path tomando como directorio la raíz.
	const completePath = isGithubPages() ? BASE_PATH + path : path;

	history.pushState({}, "", completePath);
	handleRoute(completePath, containerEl);
}

function handleRoute(route: string, containerEl?) {
	console.log("La ruta recibida por handleRoute es: ", route);

	//? De esta forma permite quitar el BASE_PATH cuando no sea necesario.
	const newRoute = isGithubPages ? route.replace(BASE_PATH, "") : route;

	for (const r of routes) {
		if (r.path.test(newRoute)) {
			const el: any = r.component({ goTo: goTo });

			if (containerEl.firstChild) {
				containerEl.firstChild.remove();
			}

			containerEl.appendChild(el);
		}
	}
}
function initRouter(containerEl: Element) {
	//? Si la ruta es "/" redirige a la pantalla "/welcome".
	if (isGithubPages() || location.pathname !== "/") {
		goTo("/", containerEl);
	}
	if (isGithubPages() || location.pathname == "/") {
		window.addEventListener("load", () => {
			goTo("/welcome", containerEl);
		});
	}

	handleRoute(location.pathname, containerEl);
}

export { initRouter, goTo };


