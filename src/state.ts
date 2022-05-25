type Move = "piedra" | "papel" | "tijera";
type Game = {
 computerPlay: Move,
 myPlay: Move,
}
export const state = {
   data: {
       currentGame: {
           computerPlay: "",
           myPlay: ""
        },
        history: {
           myScore: 0,
           computerScore: 0,
      },
   },
   listeners: [],
   getStorage() {
      const local = JSON.parse(localStorage.getItem("data"));
      if (localStorage.getItem("data")) {
        return (this.data.history = local);
      }
    },
  
    getState() {
      return this.data;
    },
  
    setState(newState) {
      this.data = newState;
      for (const cb of this.listeners) {
        cb();
      }
      this.savedData();
    },
  
    suscribe(callback: (any) => any) {
      this.listeners.push(callback);
    },
    setScore() {
      const currentState = this.getState();
  
      const myPlay = this.getState().currentGame.myPlay;
      const computerPlay = this.getState().currentGame.computerPlay;
      const currentWhoWins = this.whoWins(myPlay, computerPlay);
  
      const myScore = currentState.history.myScore;
      const computerScore = currentState.history.computerScore;
  
      if (currentWhoWins === "wins") {
        return this.setState({
          ...currentState,
          history: {
            myScore: myScore + 1,
            computerScore: computerScore,
          },
        });
      } else if (currentWhoWins === "loss") {
        return this.setState({
          ...currentState,
          history: {
            myScore: myScore,
            computerScore: computerScore + 1,
          },
        });
      }
    },
  
    
   whoWins(myPlay: Move, computerPlay: Move){
     const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
     const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
     const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
     const gane  = [ganeConPapel, ganeConTijera, ganeConPiedra].includes(true);

     if (gane) {
        return "wins";
      }
      
      const tieS: boolean = myPlay == "tijera" && computerPlay == "tijera";
      const tieR: boolean = myPlay == "piedra" && computerPlay == "piedra";
      const tieP: boolean = myPlay == "papel" && computerPlay == "papel";
      const tie = [tieP, tieR, tieS].includes(true);
  
      if (tie) {
        return "tie";
      }
   
   const looseS: boolean = myPlay == "tijera" && computerPlay == "piedra";
   const looseR: boolean = myPlay == "piedra" && computerPlay == "papel";
   const looseP: boolean = myPlay == "papel" && computerPlay == "tijera";
   const youLoose = [looseS, looseR, looseP].includes(true);
   
   if (youLoose) {
      return "loss"
   }
},
setMove(move: Move) {
  const currentState = this.getState();
  currentState.currentGame.myPlay = move;
  const machineMove = () => {
    const hands = ["tijera", "piedra", "papel"];
    return hands[Math.floor(Math.random() * 3)];
  };
  currentState.currentGame.computerPlay = machineMove();
  this.setScore();
  return machineMove();
},

savedData() {
  const currentHistory = this.getState().history;
  localStorage.setItem("data", JSON.stringify(currentHistory));
},
};