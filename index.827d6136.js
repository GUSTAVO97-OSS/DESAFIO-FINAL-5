function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequireb4ba;function i(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),n=document.createElement("div"),o=document.createElement("style");o.innerHTML="\n           .title{\n             font-size: 80px;\n             font-weigth: 700;\n             color: #009048;\n             font-family: 'Special Elite', cursive;\n             text-align: center;\n             margin-top: 70px;\n           }\n           @media (min-width: 768px){\n             .title{\n              margin-top: 220px;\n              padding: 0px 500px;\n             }\n           }\n           .text{\n             font-size: 40px;\n             font-weigth: 600;\n             color: #000000;\n             font-family: 'Special Elite', cursive;\n             text-align: center;\n             margin-top: 70px;\n           }\n           \n           ",n.className=e,n.textContent=this.textContent,t.appendChild(n),t.appendChild(o)}}customElements.define("custom-text",e)}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequireb4ba=r),r.register("27Lyk",(function(t,n){var o,r;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("jjSag",(function(e,t){e.exports=new URL(r("27Lyk").resolve("biWAi"),import.meta.url).toString()})),r.register("hlnPu",(function(e,t){e.exports=new URL(r("27Lyk").resolve("hm8Nj"),import.meta.url).toString()})),r.register("7tPWC",(function(e,t){e.exports=new URL(r("27Lyk").resolve("590nE"),import.meta.url).toString()})),r.register("abbPO",(function(e,t){e.exports=new URL(r("27Lyk").resolve("fkgxw"),import.meta.url).toString()})),r.register("EM6P9",(function(e,t){e.exports=new URL(r("27Lyk").resolve("jHqhM"),import.meta.url).toString()})),r.register("8OmYw",(function(e,t){e.exports=new URL(r("27Lyk").resolve("5yHvL"),import.meta.url).toString()})),r.register("ewLBD",(function(e,t){e.exports=new URL(r("27Lyk").resolve("kuZ4t"),import.meta.url).toString()})),r.register("4I1fB",(function(e,t){e.exports=new URL(r("27Lyk").resolve("h5stw"),import.meta.url).toString()})),r.register("iLJZL",(function(e,t){e.exports=new URL(r("27Lyk").resolve("hqVYS"),import.meta.url).toString()})),r("27Lyk").register(JSON.parse('{"dZpbI":"index.827d6136.js","biWAi":"tijera.1b7be369.jpg","hm8Nj":"piedra.84ca646f.jpg","590nE":"papel.0fc44025.jpg","fkgxw":"resultado.bbfce0b4.png","jHqhM":"resultado (1).3439c0fc.jpg","5yHvL":"empate-_2_.e951b369.jpg","kuZ4t":"tijera.00169574.png","h5stw":"piedra.7de8c9a2.png","hqVYS":"papel.5f334517.png"}'));const a={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},listeners:[],getStorage(){const e=JSON.parse(localStorage.getItem("data"));if(localStorage.getItem("data"))return this.data.history=e},getState(){return this.data},setState(e){this.data=e;for(const e of this.listeners)e();this.savedData()},suscribe(e){this.listeners.push(e)},setScore(){const e=this.getState(),t=this.getState().currentGame.myPlay,n=this.getState().currentGame.computerPlay,o=this.whoWins(t,n),r=e.history.myScore,i=e.history.computerScore;return"wins"===o?this.setState({...e,history:{myScore:r+1,computerScore:i}}):"loss"===o?this.setState({...e,history:{myScore:r,computerScore:i+1}}):void 0},whoWins(e,t){if(["papel"==e&&"piedra"==t,"tijera"==e&&"papel"==t,"piedra"==e&&"tijera"==t].includes(!0))return"wins";if(["papel"==e&&"papel"==t,"piedra"==e&&"piedra"==t,"tijera"==e&&"tijera"==t].includes(!0))return"tie";return["tijera"==e&&"piedra"==t,"piedra"==e&&"papel"==t,"papel"==e&&"tijera"==t].includes(!0)?"loss":void 0},setMove(e){const t=this.getState();t.currentGame.myPlay=e;const n=()=>["tijera","piedra","papel"][Math.floor(3*Math.random())];return t.currentGame.computerPlay=n(),this.setScore(),n()},savedData(){const e=this.getState().history;localStorage.setItem("data",JSON.stringify(e))}};const s={win:r("abbPO"),loss:r("EM6P9"),tie:r("8OmYw")};const c=[{path:/\/welcome/,component:function(e){const t=document.createElement("div");return t.className="welcome-page",t.innerHTML='\n    <custom-text variant="title">Piedra Papel ó Tijera</custom-text>\n    <custom-button class="elbutton">Empezar</custom-button>\n    <custom-img>\n    ',t.querySelector(".elbutton").addEventListener("click",(()=>{e.goTo("/instructions")})),t}},{path:/\/instructions/,component:function(e){const t=document.createElement("div");return t.className="instructions-page",t.innerHTML='\n    <custom-text variant="text">Presioná jugar\n    y elegí: piedra, papel o tijera antes de que pasen los 10 segundos.</custom-text>\n    <custom-button class="next">¡Jugar!</custom-button>\n    <custom-img class="hands">\n    ',t.querySelector(".next").addEventListener("click",(()=>{e.goTo("/game")})),t}},{path:/\/game/,component:function(e){const t=document.createElement("div");t.className="game-page";const n=r("jjSag"),o=r("hlnPu"),i=r("7tPWC");t.innerHTML=`\n    \n    <div class="countdown-container">\n    <div class = "countdown" id="countdown"></div>\n    </div>\n    <div class="imagen-container">\n    <div play="tijera">\n    <div class="zoom"><img class="tijera" src=${n}></div>\n    </div>\n    <div play="piedra">\n    <div class="zoom"><img class="piedra" src=${o}></div>\n    </div>\n    <div play="papel">\n    <div class="zoom"><img class="papel" src=${i}></div>\n    </div>\n  \n    </div>\n    \n    `;let s=10;const c=setInterval((()=>{s<=0?(clearInterval(c),window.location.reload()):document.getElementById("countdown").innerHTML=s+"",s--}),1e3),l=t.querySelector(".imagen-container").children;for(const t of l)t.addEventListener("click",(()=>{const n=t.getAttribute("play");setTimeout((()=>{clearInterval(c),e.goTo("/showhands")}),1300),console.log(n),"tijera"===n?(a.setMove("tijera"),console.log(n)):"piedra"===n?a.setMove("piedra"):"papel"===n&&a.setMove("papel")}));return t}},{path:/\/showhands/,component:function(e){const t=document.createElement("div");t.className="showhands-page";const n=r("jjSag"),o=r("hlnPu"),i=r("7tPWC");t.innerHTML='\n    <div class="img-container">\n    <img class="img-machine">\n    <img class="img-you">\n    </div>\n    ';const s=document.createElement("style");s.innerHTML="\n    .img-container{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; \n        gap: 310px; \n        \n    }\n    @media (min-width: 768px){\n        .img-container{\n            gap: 470px;\n        }\n    }\n    .img-machine{\n        -moz-transform:scaleY(-1);\n        -webkit-transform:scaleY(-1);\n        -o-transform:scaleY(-1);\n        transform:scaleY(-1);\n        filter:FlipV\n    }\n    .img-you{\n    }\n    ";const c=a.data.currentGame.computerPlay,l=a.data.currentGame.myPlay,d=t.querySelector("img");"tijera"==c?d.src=n:"piedra"==c?d.src=o:"papel"==c&&(d.src=i);const p=t.querySelector(".img-you");return"tijera"==l?p.src=n:"piedra"==l?p.src=o:"papel"==l&&(p.src=i),setTimeout((()=>{e.goTo("/results")}),3e3),t.appendChild(s),t}},{path:/\/results/,component:function(e){const t=document.createElement("div");t.className="container__results";const n=a.getState(),o=n.currentGame,r=o.myPlay,i=o.computerPlay,c=a.whoWins(r,i);let l,d;"wins"===c?(d=s.win,l="rgba(136, 137, 73, 0.6)"):"loss"===c?(d=s.loss,l="rgba(137, 73, 73, 0.6)"):"tie"===c&&(d=s.tie,l="rgba(106, 112, 101, 0.6)");const p=document.createElement("style");return t.innerHTML=`\n    <div class="results-container">\n    <div>\n      <img class="img__result" src="${d}">\n    </div>\n    <div class="board">\n      <div>\n        <h3 class = score>Score</h3>\n      </div>\n        <h3 class = you>Vos: ${n.history.myScore}</h3>\n        <h3 class = machine>Máquina: ${n.history.computerScore}</h3>\n    </div>\n    <button class="home-button">Volver a jugar</button>\n    </div>\n    </div>\n  `,t.querySelector(".home-button").addEventListener("click",(()=>{e.goTo("./game")})),p.innerHTML="\n  .results-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n  }\n  @media (min-width: 768px){\n    .results-container{\n      display: flex;\n      flex-direction: column;\n      gap: 60px;\n      padding: 0px 0px 80px 0px;\n    }\n}\n  .img__result{\n    margin-top: 40px;\n    width: 300px;\n    height: 300px;\n  }\n  .board{\n    border: 10px solid #000000;\n    border-radius: 10px;\n    padding: 10px;\n  }\n  .score, .you, .machine{\n    font-size: 40px;\n    margin: 0px;  \n  }\n  .score{\n    margin-bottom: 10px;\n  }\n  ",t.appendChild(p),t}}];function l(){return location.host.includes("github.io")}function d(e,t){const n=l()?"/DESAFIO-FINAL-5"+e:e;history.pushState({},"",n),p(n,t)}function p(e,t){console.log("La ruta recibida por handleRoute es: ",e);const n=l?e.replace("/DESAFIO-FINAL-5",""):e;for(const e of c)if(e.path.test(n)){const n=e.component({goTo:d});t.firstChild&&t.firstChild.remove(),t.appendChild(n)}}function m(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=r("ewLBD"),n=r("4I1fB"),o=r("iLJZL"),i=document.createElement("div"),a=document.createElement("style");a.innerHTML="\n            .img-container{\n               display: flex;\n               margin-top: 86px;\n               gap: 46px;\n            }\n            ",i.innerHTML=`\n            <div class="img-container">\n            <img src=${t}>\n            <img src=${n}>\n            <img src=${o}>\n            </div>\n            `,e.appendChild(i),e.appendChild(a)}}customElements.define("custom-img",e)}!function(){i(),customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("button"),n=document.createElement("style");t.className="root",n.innerHTML="\n  \n           .root{\n            background-color: #006CFC;\n            border: 10px solid #001997;\n            box-sizing: border-box;\n            border-radius: 10px;\n            width: 322px;\n            height: 87px;\n            font-family: font-family: 'Odibee Sans', cursive;\n            font-size: 45px;\n            color: white;\n            margin-top: 74px;\n          }\n        \n           ",t.textContent=this.textContent,e.appendChild(t),e.appendChild(n)}}),m();const e=document.querySelector(".root");var t;a.getStorage(),t=e,(l()||"/"!==location.pathname)&&d("/",t),(l()||"/"==location.pathname)&&window.addEventListener("load",(()=>{d("/welcome",t)})),p(location.pathname,t)}();
//# sourceMappingURL=index.827d6136.js.map
