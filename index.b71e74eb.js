// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"17ZdQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _text = require("./components/text");
var _button = require("./components/button");
var _router = require("./router");
var _img = require("./components/img");
(function() {
    (0, _text.pageTextComp)();
    (0, _button.pageButtonComp)();
    (0, _img.pageImgComp)();
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
})();

},{"./components/text":"6Xncd","./components/button":"dZaQH","./router":"4QFWt","./components/img":"10fqM"}],"6Xncd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageTextComp", ()=>pageTextComp);
function pageTextComp() {
    class TextComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
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
           @media (min-width: 768px){
             .title{
              margin-top: 220px;
              padding: 0px 500px;
             }
           }
           .text{
             font-size: 40px;
             font-weigth: 600;
             color: #000000;
             font-family: 'Special Elite', cursive;
             text-align: center;
             margin-top: 70px;
           }
           
           `;
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-text", TextComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dZaQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageButtonComp", ()=>pageButtonComp);
function pageButtonComp() {
    customElements.define("custom-button", class extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const button = document.createElement("button");
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
        
           `;
            button.textContent = this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _game = require("./pages/game");
var _showhands = require("./pages/showhands");
var _results = require("./pages/results");
function initRouter(container) {
    const routes = [
        {
            path: /\/DESAFIO-FINAL-5\/welcome/,
            component: (0, _welcome.initPageWelcome)
        },
        {
            path: /\/DESAFIO-FINAL-5\/instructions/,
            component: (0, _instructions.initPageInstructions)
        },
        {
            path: /\/DESAFIO-FINAL-5\/game/,
            component: (0, _game.initPageGame)
        },
        {
            path: /\/DESAFIO-FINAL-5\/showhands/,
            component: (0, _showhands.initShowHands)
        },
        {
            path: /\/DESAFIO-FINAL-5\/results/,
            component: (0, _results.initResults)
        }
    ];
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibi\xf3 una nueva ruta", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    location.host.includes("github.io");
    goTo("/DESAFIO-FINAL-5/welcome");
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"fNSF3","./pages/instructions":"c8fMJ","./pages/game":"c5SNR","./pages/showhands":"gjyJw","./pages/results":"4Cdh4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageWelcome", ()=>initPageWelcome);
function initPageWelcome(params) {
    const div = document.createElement("div");
    div.className = "welcome-page";
    div.innerHTML = `
    <custom-text variant="title">Piedra Papel ó Tijera</custom-text>
    <custom-button class="elbutton">Empezar</custom-button>
    <custom-img>
    `;
    const next = div.querySelector(".elbutton");
    next.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8fMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageInstructions", ()=>initPageInstructions);
function initPageInstructions(params) {
    const div = document.createElement("div");
    div.className = "instructions-page";
    div.innerHTML = `
    <custom-text variant="text">Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 10 segundos.</custom-text>
    <custom-button class="next">¡Jugar!</custom-button>
    <custom-img class="hands">
    `;
    const nextPage = div.querySelector(".next");
    nextPage.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c5SNR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageGame", ()=>initPageGame);
var _state = require("../../state");
function initPageGame(params) {
    const div = document.createElement("div");
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
    
    `;
    let counter = 10;
    const intervalId = setInterval(()=>{
        if (counter <= 0) {
            clearInterval(intervalId);
            window.location.reload();
        } else document.getElementById("countdown").innerHTML = counter + "";
        counter--;
    }, 1000);
    const imgContainer = div.querySelector(".imagen-container").children;
    for (const hand of imgContainer)hand.addEventListener("click", ()=>{
        const type = hand.getAttribute("play");
        setTimeout(()=>{
            clearInterval(intervalId);
            params.goTo("/showhands");
        }, 1300);
        console.log(type);
        if (type === "tijera") {
            (0, _state.state).setMove("tijera");
            console.log(type);
        } else if (type === "piedra") (0, _state.state).setMove("piedra");
        else if (type === "papel") (0, _state.state).setMove("papel");
    });
    return div;
}

},{"../../state":"1Yeju","url:../../images/tijera.jpg":"9HZ85","url:../../images/piedra.jpg":"6RlSI","url:../../images/papel.jpg":"03ZVJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: {
            myScore: 0,
            computerScore: 0
        }
    },
    listeners: [],
    getStorage () {
        const local = JSON.parse(localStorage.getItem("data"));
        if (localStorage.getItem("data")) return this.data.history = local;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        this.savedData();
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    setScore () {
        const currentState = this.getState();
        const myPlay = this.getState().currentGame.myPlay;
        const computerPlay = this.getState().currentGame.computerPlay;
        const currentWhoWins = this.whoWins(myPlay, computerPlay);
        const myScore = currentState.history.myScore;
        const computerScore = currentState.history.computerScore;
        if (currentWhoWins === "wins") return this.setState({
            ...currentState,
            history: {
                myScore: myScore + 1,
                computerScore: computerScore
            }
        });
        else if (currentWhoWins === "loss") return this.setState({
            ...currentState,
            history: {
                myScore: myScore,
                computerScore: computerScore + 1
            }
        });
    },
    whoWins (myPlay, computerPlay) {
        const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const gane = [
            ganeConPapel,
            ganeConTijera,
            ganeConPiedra
        ].includes(true);
        if (gane) return "wins";
        const tieS = myPlay == "tijera" && computerPlay == "tijera";
        const tieR = myPlay == "piedra" && computerPlay == "piedra";
        const tieP = myPlay == "papel" && computerPlay == "papel";
        const tie = [
            tieP,
            tieR,
            tieS
        ].includes(true);
        if (tie) return "tie";
        const looseS = myPlay == "tijera" && computerPlay == "piedra";
        const looseR = myPlay == "piedra" && computerPlay == "papel";
        const looseP = myPlay == "papel" && computerPlay == "tijera";
        const youLoose = [
            looseS,
            looseR,
            looseP
        ].includes(true);
        if (youLoose) return "loss";
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        const machineMove = ()=>{
            const hands = [
                "tijera",
                "piedra",
                "papel"
            ];
            return hands[Math.floor(Math.random() * 3)];
        };
        currentState.currentGame.computerPlay = machineMove();
        this.setScore();
        return machineMove();
    },
    savedData () {
        const currentHistory = this.getState().history;
        localStorage.setItem("data", JSON.stringify(currentHistory));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9HZ85":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "tijera.f33043d9.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6RlSI":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "piedra.1b4d58b9.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"03ZVJ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "papel.6b6bddab.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gjyJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initShowHands", ()=>initShowHands);
var _state = require("../../state");
function initShowHands(param) {
    const div = document.createElement("div");
    div.className = "showhands-page";
    const tijeraImagen = require("url:../../images/tijera.jpg");
    const piedraImagen = require("url:../../images/piedra.jpg");
    const papelImagen = require("url:../../images/papel.jpg");
    div.innerHTML = `
    <div class="img-container">
    <img class="img-machine">
    <img class="img-you">
    </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
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
    `;
    const computer = (0, _state.state).data.currentGame.computerPlay;
    const my = (0, _state.state).data.currentGame.myPlay;
    const imgElMachine = div.querySelector("img");
    if (computer == "tijera") imgElMachine.src = tijeraImagen;
    else if (computer == "piedra") imgElMachine.src = piedraImagen;
    else if (computer == "papel") imgElMachine.src = papelImagen;
    const imgElYou = div.querySelector(".img-you");
    if (my == "tijera") imgElYou.src = tijeraImagen;
    else if (my == "piedra") imgElYou.src = piedraImagen;
    else if (my == "papel") imgElYou.src = papelImagen;
    setTimeout(()=>{
        param.goTo("/results");
    }, 3000);
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","url:../../images/tijera.jpg":"9HZ85","url:../../images/piedra.jpg":"6RlSI","url:../../images/papel.jpg":"03ZVJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cdh4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResults", ()=>initResults);
var _state = require("../../state");
const resultImages = {
    win: require("url:../../images/resultado.png"),
    loss: require("url:../../images/resultado (1).jpg"),
    tie: require("url:../../images/empate-_2_.jpg")
};
function initResults(param) {
    const div = document.createElement("div");
    div.className = "container__results";
    const currentState = (0, _state.state).getState();
    const currentGame = currentState.currentGame;
    const myPlay = currentGame.myPlay;
    const computerPlay = currentGame.computerPlay;
    const whoWins = (0, _state.state).whoWins(myPlay, computerPlay);
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
    const button = require("url:../../images/bot\xf3n.png");
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
    div.querySelector(".home-button").addEventListener("click", ()=>{
        param.goTo("./game");
    });
    style.innerHTML = `
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
  `;
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","url:../../images/resultado.png":"jDLYq","url:../../images/resultado (1).jpg":"tWXoG","url:../../images/empate-_2_.jpg":"6zgJh","url:../../images/botón.png":"c0AXb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDLYq":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "resultado.ecbec708.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"tWXoG":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "resultado (1).423bcf59.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6zgJh":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "empate-_2_.a403aa59.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"c0AXb":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "bot\xf3n.673442da.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"10fqM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageImgComp", ()=>pageImgComp);
function pageImgComp() {
    class ImgComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const tijeraImg = require("url:../../images/tijera.png");
            const piedraImg = require("url:../../images/piedra.png");
            const papelImg = require("url:../../images/papel.png");
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
            .img-container{
               display: flex;
               margin-top: 86px;
               gap: 46px;
            }
            `;
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
    customElements.define("custom-img", ImgComponent);
}

},{"url:../../images/tijera.png":"7OXhs","url:../../images/piedra.png":"6quCX","url:../../images/papel.png":"cQV8M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OXhs":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "tijera.83a46abc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6quCX":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "piedra.91ac5abc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cQV8M":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "papel.c30302da.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["17ZdQ","h7u1C"], "h7u1C", "parcelRequireb4ba")

//# sourceMappingURL=index.b71e74eb.js.map
