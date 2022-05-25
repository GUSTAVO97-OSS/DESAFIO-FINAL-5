export function pageImgComp(){
    class ImgComponent extends HTMLElement{
        constructor(){
            super()
            this.render();
        }
        render(){
            
            const shadow = this.attachShadow({mode: 'open'});
            const tijeraImg = require("url:../../images/tijera.png");
            const piedraImg = require("url:../../images/piedra.png");
            const papelImg = require("url:../../images/papel.png");
            const div = document.createElement("div");
            const style = document.createElement("style")
            
            style.innerHTML=`
            .img-container{
               display: flex;
               margin-top: 86px;
               gap: 46px;
            }
            `
            
            div.innerHTML = `
            <div class="img-container">
            <img src=${tijeraImg}>
            <img src=${piedraImg}>
            <img src=${papelImg}>
            </div>
            `;

            shadow.appendChild(div);
            shadow.appendChild(style);
            
         }
        }
        customElements.define('custom-img', ImgComponent);
    }