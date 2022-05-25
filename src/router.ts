import {initPageWelcome} from "./pages/welcome"
import { initPageInstructions } from "./pages/instructions";
import { initPageGame } from "./pages/game";
import { initShowHands } from "./pages/showhands"
import { initResults } from "./pages/results"




export function initRouter(container) {
    const routes = [{
        path: /\/DESAFIO-FINAL-5\/welcome/,
        component: initPageWelcome
    },
    {
            path: /\/DESAFIO-FINAL-5\/instructions/,
        component: initPageInstructions
    
    },
    {
            path: /\/DESAFIO-FINAL-5\/game/,
        component: initPageGame
    
    },
    {
            path: /\/DESAFIO-FINAL-5\/showhands/,
        component: initShowHands
    
    },
    {
            path: /\/DESAFIO-FINAL-5\/results/,
        component: initResults
    
    }
    ];
    
    function goTo(path) {
        
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta", route);
        
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
        goTo("DESAFIO-FINAL-5/welcome")
    }
    else { handleRoute(location.pathname); }

    window.onpopstate = function () {
        handleRoute(location.pathname);
    }
      };