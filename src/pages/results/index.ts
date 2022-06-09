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
    <button class="home-button">Volver a jugar</button>
    </div>
    </div>
  `;
  const root = document.querySelector(".root");
  div.querySelector(".home-button").addEventListener("click", () => {
    param.goTo("./game", root);
  });
    

  style.innerHTML =`
  .results-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    align-items: center;
    gap: 20px;
  }
  .img__result{
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
  .home-button{
    background: #006CFC;
    border: 10px solid #001997;
    border-radius: 10px;
    width: 335px;
    height: 87px;
    text-align: center;
    color: #D8FCFC;
    font-size: 45px;
  }
  `
  

  div.appendChild(style);
  return div;
}