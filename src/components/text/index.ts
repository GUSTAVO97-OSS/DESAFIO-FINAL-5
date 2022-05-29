export function pageTextComp(){
    class TextComponent extends HTMLElement{
        constructor(){
            super()
            this.render();
        }
        render(){
            const variant = this.getAttribute("variant") || "body";
           const shadow = this.attachShadow({mode: 'open'});
           const div = document.createElement("div")
           const style = document.createElement("style");
           
           style.innerHTML = `
           .title{
             font-size: 80px;
             font-weigth: 700;
             color: #009048;
             font-family: 'Special Elite', cursive;
             text-align: center;
             margin-top: 70px;
           }
           
           .text{
             font-size: 40px;
             font-weigth: 600;
             color: #000000;
             font-family: 'Special Elite', cursive;
             text-align: center;
             margin-top: 70px;
           }
           
           `
     
           
    
           div.className = variant;
           div.textContent = this.textContent;
           shadow.appendChild(div);
           shadow.appendChild(style);
          }
        }
        customElements.define('custom-text', TextComponent);
    }