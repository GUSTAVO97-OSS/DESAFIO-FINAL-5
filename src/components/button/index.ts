export function pageButtonComp(){
    customElements.define(
      "custom-button",
      class extends HTMLElement {
          constructor() {
            super();
            this.render()
          }
          render(){

           const shadow = this.attachShadow({mode: 'open'});
           const button = document.createElement("button")
           const style = document.createElement("style");
           button.className = "root";
           style.innerHTML = `
  
           .root{
            background-color: #006CFC;
            border: 10px solid #001997;
            box-sizing: border-box;
            border-radius: 10px;
            width: 322px;
            height: 87px;
            font-family: font-family: 'Odibee Sans', cursive;
            font-size: 45px;
            color: white;
            margin-top: 74px;
          }
        
           `
       
           button.textContent = this.textContent;
           shadow.appendChild(button);
           shadow.appendChild(style);
          }
        }
    )
  }