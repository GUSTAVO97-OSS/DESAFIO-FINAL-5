function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequireb148;function i(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),n=document.createElement("div"),r=document.createElement("style");r.innerHTML="\n           .title{\n             font-size: 80px;\n             font-weigth: 700;\n             color: #009048;\n             font-family: 'Special Elite', cursive;\n             text-align: center;\n             margin-top: 70px;\n           }\n           @media (min-width: 768px){\n             .title{\n              margin-top: 220px;\n              padding: 0px 500px;\n             }\n           }\n           .text{\n             font-size: 40px;\n             font-weigth: 600;\n             color: #000000;\n             font-family: 'Special Elite', cursive;\n             text-align: center;\n             margin-top: 70px;\n           }\n           \n           ",n.className=e,n.textContent=this.textContent,t.appendChild(n),t.appendChild(r)}}customElements.define("custom-text",e)}function a(e){const t=document.createElement("div");t.className="welcome-page",t.innerHTML='\n    <custom-text variant="title">Piedra Papel ó Tijera</custom-text>\n    <custom-button class="elbutton">Empezar</custom-button>\n    <custom-img>\n    ';return t.querySelector(".elbutton").addEventListener("click",(()=>{e.goTo("/instructions")})),t}function s(e){const t=document.createElement("div");t.className="instructions-page",t.innerHTML='\n    <custom-text variant="text">Presioná jugar\n    y elegí: piedra, papel o tijera antes de que pasen los 10 segundos.</custom-text>\n    <custom-button class="next">¡Jugar!</custom-button>\n    <custom-img class="hands">\n    ';return t.querySelector(".next").addEventListener("click",(()=>{e.goTo("/game")})),t}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequireb148=o),o.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("jjSag",(function(e,t){e.exports=new URL(o("27Lyk").resolve("biWAi"),import.meta.url).toString()})),o.register("hlnPu",(function(e,t){e.exports=new URL(o("27Lyk").resolve("hm8Nj"),import.meta.url).toString()})),o.register("7tPWC",(function(e,t){e.exports=new URL(o("27Lyk").resolve("590nE"),import.meta.url).toString()})),o.register("abbPO",(function(e,t){e.exports=new URL(o("27Lyk").resolve("fkgxw"),import.meta.url).toString()})),o.register("EM6P9",(function(e,t){e.exports=new URL(o("27Lyk").resolve("jHqhM"),import.meta.url).toString()})),o.register("8OmYw",(function(e,t){e.exports=new URL(o("27Lyk").resolve("5yHvL"),import.meta.url).toString()})),o.register("jQZ8G",(function(e,t){e.exports=new URL(o("27Lyk").resolve("wzQcw"),import.meta.url).toString()})),o.register("ewLBD",(function(e,t){e.exports=new URL(o("27Lyk").resolve("kuZ4t"),import.meta.url).toString()})),o.register("4I1fB",(function(e,t){e.exports=new URL(o("27Lyk").resolve("h5stw"),import.meta.url).toString()})),o.register("iLJZL",(function(e,t){e.exports=new URL(o("27Lyk").resolve("hqVYS"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.33a9127d.js","biWAi":"tijera.1b7be369.jpg","hm8Nj":"piedra.84ca646f.jpg","590nE":"papel.0fc44025.jpg","fkgxw":"resultado.bbfce0b4.png","jHqhM":"resultado (1).3439c0fc.jpg","5yHvL":"empate-_2_.e951b369.jpg","wzQcw":"botón.e35857f2.png","kuZ4t":"tijera.00169574.png","h5stw":"piedra.7de8c9a2.png","hqVYS":"papel.5f334517.png"}'));const c={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},listeners:[],getStorage(){const e=JSON.parse(localStorage.getItem("data"));if(localStorage.getItem("data"))return this.data.history=e},getState(){return this.data},setState(e){this.data=e;for(const e of this.listeners)e();this.savedData()},suscribe(e){this.listeners.push(e)},setScore(){const e=this.getState(),t=this.getState().currentGame.myPlay,n=this.getState().currentGame.computerPlay,r=this.whoWins(t,n),o=e.history.myScore,i=e.history.computerScore;return"wins"===r?this.setState({...e,history:{myScore:o+1,computerScore:i}}):"loss"===r?this.setState({...e,history:{myScore:o,computerScore:i+1}}):void 0},whoWins(e,t){if(["papel"==e&&"piedra"==t,"tijera"==e&&"papel"==t,"piedra"==e&&"tijera"==t].includes(!0))return"wins";if(["papel"==e&&"papel"==t,"piedra"==e&&"piedra"==t,"tijera"==e&&"tijera"==t].includes(!0))return"tie";return["tijera"==e&&"piedra"==t,"piedra"==e&&"papel"==t,"papel"==e&&"tijera"==t].includes(!0)?"loss":void 0},setMove(e){const t=this.getState();t.currentGame.myPlay=e;const n=()=>["tijera","piedra","papel"][Math.floor(3*Math.random())];return t.currentGame.computerPlay=n(),this.setScore(),n()},savedData(){const e=this.getState().history;localStorage.setItem("data",JSON.stringify(e))}};function l(e){const t=document.createElement("div");t.className="game-page";const n=o("jjSag"),r=o("hlnPu"),i=o("7tPWC");t.innerHTML=`\n    \n    <div class="countdown-container">\n    <div class = "countdown" id="countdown"></div>\n    </div>\n    <div class="imagen-container">\n    <div play="tijera">\n    <div class="zoom"><img class="tijera" src=${n}></div>\n    </div>\n    <div play="piedra">\n    <div class="zoom"><img class="piedra" src=${r}></div>\n    </div>\n    <div play="papel">\n    <div class="zoom"><img class="papel" src=${i}></div>\n    </div>\n  \n    </div>\n    \n    `;let a=10;const s=setInterval((()=>{a<=0?(clearInterval(s),window.location.reload()):document.getElementById("countdown").innerHTML=a+"",a--}),1e3),l=t.querySelector(".imagen-container").children;for(const t of l)t.addEventListener("click",(()=>{const n=t.getAttribute("play");setTimeout((()=>{clearInterval(s),e.goTo("/showhands")}),1300),console.log(n),"tijera"===n?(c.setMove("tijera"),console.log(n)):"piedra"===n?c.setMove("piedra"):"papel"===n&&c.setMove("papel")}));return t}function d(e){const t=document.createElement("div");t.className="showhands-page";const n=o("jjSag"),r=o("hlnPu"),i=o("7tPWC");t.innerHTML='\n    <div class="img-container">\n    <img class="img-machine">\n    <img class="img-you">\n    </div>\n    ';const a=document.createElement("style");a.innerHTML="\n    .img-container{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; \n        gap: 310px; \n        \n    }\n    @media (min-width: 768px){\n        .img-container{\n            gap: 470px;\n        }\n    }\n    .img-machine{\n        -moz-transform:scaleY(-1);\n        -webkit-transform:scaleY(-1);\n        -o-transform:scaleY(-1);\n        transform:scaleY(-1);\n        filter:FlipV\n    }\n    .img-you{\n    }\n    ";const s=c.data.currentGame.computerPlay,l=c.data.currentGame.myPlay,d=t.querySelector("img");"tijera"==s?d.src=n:"piedra"==s?d.src=r:"papel"==s&&(d.src=i);const p=t.querySelector(".img-you");return"tijera"==l?p.src=n:"piedra"==l?p.src=r:"papel"==l&&(p.src=i),setTimeout((()=>{e.goTo("/results")}),3e3),t.appendChild(a),t}const p={win:o("abbPO"),loss:o("EM6P9"),tie:o("8OmYw")};import"88cb74afe992d611:url:../../images/botón.png";function m(e){const t=document.createElement("div");t.className="container__results";const n=c.getState(),r=n.currentGame,i=r.myPlay,a=r.computerPlay,s=c.whoWins(i,a);let l,d;"wins"===s?(d=p.win,l="rgba(136, 137, 73, 0.6)"):"loss"===s?(d=p.loss,l="rgba(137, 73, 73, 0.6)"):"tie"===s&&(d=p.tie,l="rgba(106, 112, 101, 0.6)");const m=o("jQZ8G"),u=document.createElement("style");return t.innerHTML=`\n    <div class="results-container">\n    <div>\n      <img class="img__result" src="${d}">\n    </div>\n    <div class="board">\n      <div>\n        <h3 class = score>Score</h3>\n      </div>\n        <h3 class = you>Vos: ${n.history.myScore}</h3>\n        <h3 class = machine>Máquina: ${n.history.computerScore}</h3>\n    </div>\n      <img class = home-button src="${m}">\n    </div>\n    </div>\n  `,t.querySelector(".home-button").addEventListener("click",(()=>{e.goTo("./game")})),u.innerHTML="\n  .results-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n  }\n  @media (min-width: 768px){\n    .results-container{\n      display: flex;\n      flex-direction: column;\n      gap: 60px;\n      padding: 0px 0px 80px 0px;\n    }\n}\n  .img__result{\n    margin-top: 40px;\n    width: 300px;\n    height: 300px;\n  }\n  .board{\n    border: 10px solid #000000;\n    border-radius: 10px;\n    padding: 10px;\n  }\n  .score, .you, .machine{\n    font-size: 40px;\n    margin: 0px;  \n  }\n  .score{\n    margin-bottom: 10px;\n  }\n  ",t.appendChild(u),t}function u(e){const t=[{path:/\/DESAFIO-FINAL-5\/welcome/,component:a},{path:/\/DESAFIO-FINAL-5\/instructions/,component:s},{path:/\/DESAFIO-FINAL-5\/game/,component:l},{path:/\/DESAFIO-FINAL-5\/showhands/,component:d},{path:/\/DESAFIO-FINAL-5\/results/,component:m}];function n(e){history.pushState({},"",e),r(e)}function r(r){console.log("El handleRoute recibió una nueva ruta",r);for(const o of t)if(o.path.test(r)){const t=o.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}location.host.includes("github.io"),n("/DESAFIO-FINAL-5/welcome"),window.onpopstate=function(){r(location.pathname)}}function g(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=o("ewLBD"),n=o("4I1fB"),r=o("iLJZL"),i=document.createElement("div"),a=document.createElement("style");a.innerHTML="\n            .img-container{\n               display: flex;\n               margin-top: 86px;\n               gap: 46px;\n            }\n            ",i.innerHTML=`\n            <div class="img-container">\n            <img src=${t}>\n            <img src=${n}>\n            <img src=${r}>\n            </div>\n            `,e.appendChild(i),e.appendChild(a)}}customElements.define("custom-img",e)}!function(){i(),customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("button"),n=document.createElement("style");t.className="root",n.innerHTML="\n  \n           .root{\n            background-color: #006CFC;\n            border: 10px solid #001997;\n            box-sizing: border-box;\n            border-radius: 10px;\n            width: 322px;\n            height: 87px;\n            font-family: font-family: 'Odibee Sans', cursive;\n            font-size: 45px;\n            color: white;\n            margin-top: 74px;\n          }\n        \n           ",t.textContent=this.textContent,e.appendChild(t),e.appendChild(n)}}),g();u(document.querySelector(".root"))}();
//# sourceMappingURL=index.33a9127d.js.map
