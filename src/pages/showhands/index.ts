import { state } from "../../state";

export function initShowHands(param)  {
    const div = document.createElement("div");
    div.className = "showhands-page"

    const tijeraImagen = require("url:../../images/tijera.jpg");
    const piedraImagen = require("url:../../images/piedra.jpg");
    const papelImagen = require("url:../../images/papel.jpg");

    div.innerHTML=`
    <div class="img-container">
    <img class="img-machine">
    <img class="img-you">
    </div>
    `
    const style = document.createElement("style");
    style.innerHTML=`
    .img-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        gap: 310px; 
        
    }
    @media (min-width: 768px){
        .img-container{
            gap: 470px;
        }
    }
    .img-machine{
        -moz-transform:scaleY(-1);
        -webkit-transform:scaleY(-1);
        -o-transform:scaleY(-1);
        transform:scaleY(-1);
        filter:FlipV
    }
    .img-you{
    }
    `
    const computer = state.data.currentGame.computerPlay;
    const my = state.data.currentGame.myPlay;

  
    const imgElMachine = div.querySelector("img");

    if (computer == "tijera") {
        imgElMachine.src = tijeraImagen;
    } else if (computer == "piedra") {
        imgElMachine.src = piedraImagen;
    } else if (computer == "papel") {
        imgElMachine.src = papelImagen;
    }

     
    const imgElYou = (div.querySelector(".img-you")) as HTMLImageElement;    

    if (my == "tijera" ) {
        imgElYou.src = tijeraImagen;
    } else if ( my == "piedra") {
         imgElYou.src = piedraImagen;
    } else if ( my == "papel") {
         imgElYou.src = papelImagen;
    }

    setTimeout(() => {
        param.goTo("/results");
    }, 3000);


    div.appendChild(style);
    return div;


}