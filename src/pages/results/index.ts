import { state } from "../../state";

const resultImages = {

    win: require("url:../../images/resultado.png"),
    loss: require("url:../../images/resultado (1).jpg"),
    tie: require("url:../../images/empate-_2_.jpg"),
    
    
};

export function initResults(param){
  const div = document.createElement("div");
  div.className = "container__results";
  
  const currentState = state.getState();
  const currentGame = currentState.currentGame;
  const myPlay = currentGame.myPlay;
  const computerPlay = currentGame.computerPlay;
  const whoWins = state.whoWins(myPlay, computerPlay);
  
  let background;
  let imagen;
  if (whoWins === "wins") {
    imagen = resultImages.win; 
    background = "rgba(136, 137, 73, 0.6)";
  } else if (whoWins === "loss") {
    imagen = resultImages.loss;
    background = "rgba(137, 73, 73, 0.6)";
} else if (whoWins === "tie") {
    imagen = resultImages.tie;
    background = "rgba(106, 112, 101, 0.6)";

  }

    
  const button = require("url:../../images/botón.png");
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="results-container">
    <div>
      <img class="img__result" src="${imagen}">
    </div>
    <div class="board">
      <div>
        <h3 class = score>Score</h3>
      </div>
        <h3 class = you>Vos: ${currentState.history.myScore}</h3>
        <h3 class = machine>Máquina: ${currentState.history.computerScore}</h3>
    </div>
      <img class = home-button src="${button}">
    </div>
    </div>
  `;

  div.querySelector(".home-button").addEventListener("click", () => {
    param.goTo("./game");
  });
    

  style.innerHTML =`
  .results-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  @media (min-width: 768px){
    .results-container{
      display: flex;
      flex-direction: column;
      gap: 60px;
      padding: 0px 0px 80px 0px;
    }
}
  .img__result{
    margin-top: 40px;
    width: 300px;
    height: 300px;
  }
  .board{
    border: 10px solid #000000;
    border-radius: 10px;
    padding: 10px;
  }
  .score, .you, .machine{
    font-size: 40px;
    margin: 0px;  
  }
  .score{
    margin-bottom: 10px;
  }
  `
  

  div.appendChild(style);
  return div;
}