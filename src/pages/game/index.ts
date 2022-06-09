import { state } from "../../state";

export function initPageGame(params){
    const div = document.createElement("div")
    div.className = "game-page";
    
    const tijeraImagen = require("url:../../images/tijera.jpg");
    const piedraImagen = require("url:../../images/piedra.jpg");
    const papelImagen = require("url:../../images/papel.jpg");
    
    div.innerHTML = `
    
    <div class="countdown-container">
    <div class = "countdown" id="countdown"></div>
    </div>
    <div class="imagen-container">
    <div play="tijera">
    <div class="zoom"><img class="tijera" src=${tijeraImagen}></div>
    </div>
    <div play="piedra">
    <div class="zoom"><img class="piedra" src=${piedraImagen}></div>
    </div>
    <div play="papel">
    <div class="zoom"><img class="papel" src=${papelImagen}></div>
    </div>
  
    </div>
    
    `
    let counter = 10;
    const intervalId = setInterval(() =>{
            if(counter <= 0){
                clearInterval(intervalId);
                params.goTo("/instructions");
            }else {
                document.getElementById("countdown").innerHTML = counter + "";
            }
            counter --;
        }, 1000)

    const root = document.querySelector(".root");
    const imgContainer = div.querySelector(".imagen-container").children;
    for (const hand of imgContainer) { 
        hand.addEventListener("click", () => {  
            const type = hand.getAttribute("play");

            setTimeout(() => {
                clearInterval(intervalId);
                params.goTo("/showhands", root);
            }, 1300);
            console.log(type);
     
            if (type === "tijera") {
            state.setMove("tijera");
            console.log(type);
            } else if (type === "piedra") {
                state.setMove("piedra");
            } else if (type === "papel") {
                state.setMove("papel");
            }
        });
    }
    

  
    return div;
}