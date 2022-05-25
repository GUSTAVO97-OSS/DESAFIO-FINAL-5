import {initPageWelcome} from "./pages/welcome"
import { initPageInstructions } from "./pages/instructions";
import { initPageGame } from "./pages/game";
import { initShowHands } from "./pages/showhands"
import { initResults } from "./pages/results"


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
  
const BASE_PATH = "/desafio-m5";

function isGithubPages() {
    return location.host.includes("github.io");
}

export function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

         
           for (const r of routes){
               if(r.path.test(route)){
                   const el= r.component({goTo: goTo});

                if(container.firstChild){
                    container.firstChild.remove();
               };
                container.appendChild(el);
               }
           }
       }
       if (location.host.includes("github.io")) {
        goTo("/welcome")
    } else if (location.pathname == "/") {
        goTo("/welcome")
    }
    else { handleRoute(location.pathname); }

    window.onpopstate = function () {
        handleRoute(location.pathname);
    }
      };