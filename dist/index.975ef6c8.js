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
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
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

},{}],"8lqZg":[function(require,module,exports) {
var _refs = require("./js/refs");
var _init = require("./js/init");
var _notiflyOptions = require("./js/notifly-options");
var _firstLoading = require("./js/first-loading");
var _renderMarkup = require("./js/render-markup");
var _modal = require("./js/main-page-only/modal");
var _search = require("./js/search");
var _pagination = require("./js/main-page-only/pagination");
var _spinner = require("./js/spinner");
var _cursor = require("./js/cursor");
var _transitionFix = require("./js/transitionFix");

},{"./js/refs":"2WoF2","./js/init":"l17dj","./js/notifly-options":"eOfB7","./js/first-loading":"aGFut","./js/render-markup":"jCozP","./js/main-page-only/modal":"2KWfc","./js/search":"4TESp","./js/main-page-only/pagination":"cP4Qz","./js/spinner":"e4vVD","./js/cursor":"3v1v0","./js/transitionFix":"iCHnM"}],"2WoF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refs", ()=>refs);
const refs = {
    allCardsSection: document.querySelector(".main-section__allcards"),
    headerFormInput: document.querySelector("form.header__form"),
    modal: document.querySelector(".modal"),
    overflow: document.querySelector(".overflow"),
    closeBtn: document.querySelector(".modal__close-btn"),
    innerModal: document.querySelector(".modal__main"),
    watchedBtn: document.querySelector(".watchedJS"),
    queueBtn: document.querySelector(".queueJS"),
    paginationContainer: document.querySelector(".tui-pagination"),
    spinner: document.querySelector(".sk-chase"),
    trailerOverflow: document.querySelector("#trailerOverflow"),
    trailerModal: document.querySelector("#trailerModal"),
    trailerDiv: document.querySelector("#trailerDiv"),
    trailerCloseBtn: document.querySelector("#trailerClose"),
    noResultsText: document.querySelector(".header__form-warning-text"),
    cursor: document.querySelector(".cursor"),
    cursorinner: document.querySelector(".cursor2"),
    body: document.querySelector("body")
};

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

},{}],"l17dj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moviesApiService", ()=>moviesApiService);
var _apiService = require("./api-service");
var _apiServiceDefault = parcelHelpers.interopDefault(_apiService);
var _firstLoading = require("./first-loading");
const moviesApiService = new (0, _apiServiceDefault.default)();
(0, _firstLoading.onLoadedHomePage)();

},{"./api-service":"RTflJ","./first-loading":"aGFut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"RTflJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinner = require("./spinner");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
class MoviesApiService {
    constructor(){
        this.page = 1;
        this.query = "";
        this.API_KEY = "2d95e97f255e7635245c1980eab541d3";
        this.BASE_URL = "https://api.themoviedb.org/3/";
    }
    async getGenres() {
        try {
            const { data  } = await (0, _axiosDefault.default).get(`${this.BASE_URL}genre/movie/list?api_key=${this.API_KEY}&language=ru`);
            return data.genres;
        } catch (error) {
            console.log(error);
        }
    }
    async fetchTrending() {
        const searchParams = new URLSearchParams({
            page: this.page,
            include_adult: false,
            api_key: this.API_KEY
        });
        try {
            (0, _spinner.showSpinner)();
            const result = await (0, _axiosDefault.default).get(`${this.BASE_URL}trending/movie/week?${searchParams}&language=ru`);
            localStorage.setItem("currentFilmList", JSON.stringify(result.data.results));
            localStorage.setItem("totalResults", JSON.stringify(result.data.total_results));
            (0, _spinner.hideSpinner)();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    async fetchMoviesByKeyword() {
        const searchParams = new URLSearchParams({
            page: this.page,
            include_adult: false,
            api_key: this.API_KEY,
            language: "en-US",
            query: this.query
        });
        try {
            (0, _spinner.showSpinner)();
            const result = await (0, _axiosDefault.default).get(`${this.BASE_URL}search/movie?${searchParams}`);
            localStorage.setItem("currentFilmList", JSON.stringify(result.data.results));
            localStorage.setItem("totalResults", JSON.stringify(result.data.total_results));
            (0, _spinner.hideSpinner)();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    resetPage() {
        this.page = 1;
    }
    set pageNum(newPage) {
        this.page = newPage;
    }
    get pageNum() {
        return this.page;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
exports.default = MoviesApiService;

},{"./spinner":"e4vVD","axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4vVD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideSpinner", ()=>hideSpinner);
parcelHelpers.export(exports, "showSpinner", ()=>showSpinner);
var _refs = require("./refs");
function hideSpinner() {
    return setTimeout(()=>{
        (0, _refs.refs).spinner.classList.add("sk-chase-hidden");
    }, 500);
}
async function showSpinner() {
    (0, _refs.refs).spinner.classList.remove("sk-chase-hidden");
}

},{"./refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios , AxiosError , CanceledError , isCancel , CancelToken , VERSION , all , Cancel , isAxiosError , spread , toFormData , AxiosHeaders , HttpStatusCode , formToJSON , mergeConfig  } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"63MyY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63MyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"5By4s","./helpers/bind.js":"haRQb","./core/Axios.js":"cpqD8","./core/mergeConfig.js":"b85oP","./defaults/index.js":"hXfHM","./helpers/formDataToJSON.js":"01RfH","./cancel/CanceledError.js":"9PwCG","./cancel/CancelToken.js":"45wzn","./cancel/isCancel.js":"a0VmF","./env/data.js":"h29L9","./helpers/toFormData.js":"ajoez","./core/AxiosError.js":"3u8Tl","./helpers/spread.js":"dyQ8N","./helpers/isAxiosError.js":"eyiLq","./core/AxiosHeaders.js":"cgSSx","./helpers/HttpStatusCode.js":"fdR61","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5By4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
"use strict";
var global = arguments[3];
// utils is a library of generic helper functions non-specific to axios
const { toString  } = Object.prototype;
const { getPrototypeOf  } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray  } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    const pattern = "[object FormData]";
    return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys =false  } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless  } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys  } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty1  })=>(obj, prop)=>hasOwnProperty1.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length  } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject
};

},{"./helpers/bind.js":"haRQb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haRQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}
exports.default = bind;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpqD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional , paramsSerializer , headers  } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer !== undefined) (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        contextHeaders && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"5By4s","../helpers/buildURL.js":"3bwC2","./InterceptorManager.js":"1VRIM","./dispatchRequest.js":"6sjJ6","./mergeConfig.js":"b85oP","./buildFullPath.js":"1I5TW","../helpers/validator.js":"9vgkY","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}
exports.default = buildURL;

},{"../utils.js":"5By4s","../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hz84m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"ajoez","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajoez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
"use strict";
var Buffer = require("buffer").Buffer;
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","../platform/node/classes/FormData.js":"aFlee","buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3u8Tl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFlee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-disable-next-line strict
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("base64-js");
const ieee754 = require("ieee754");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 0x100))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength5 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength7 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 0xFF0000) + (uint8[i2 + 1] << 8 & 0xFF00) + (uint8[i2 + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"1VRIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sjJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}
exports.default = dispatchRequest;

},{"./transformData.js":"eRqJY","../cancel/isCancel.js":"a0VmF","../defaults/index.js":"hXfHM","../cancel/CanceledError.js":"9PwCG","../core/AxiosHeaders.js":"cgSSx","../adapters/adapters.js":"d7JxI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}
exports.default = transformData;

},{"./../utils.js":"5By4s","../defaults/index.js":"hXfHM","../core/AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXfHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
const DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = (0, _utilsJsDefault.default).merge(DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","./transitional.js":"lM32f","../helpers/toFormData.js":"ajoez","../helpers/toURLEncodedForm.js":"9hjry","../platform/index.js":"7tDev","../helpers/formDataToJSON.js":"01RfH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lM32f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hjry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}
exports.default = toURLEncodedForm;

},{"../utils.js":"5By4s","./toFormData.js":"ajoez","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tDev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _indexJsDefault.default));
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./node/index.js":"cVeqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVeqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"5cIHE","./classes/FormData.js":"7i1jd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cIHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7i1jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = FormData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01RfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgSSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
function isValidHeaderName(str) {
    return /^[-_a-zA-Z]+$/.test(str.trim());
}
function matchHeaderValue(context, value, header, filter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders.prototype);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"5By4s","../helpers/parseHeaders.js":"kqDd5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqDd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0VmF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
exports.default = isCancel;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PwCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"3u8Tl","../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7JxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length  } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, _utilsJsDefault.default).isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, _axiosErrorJsDefault.default)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, _utilsJsDefault.default).hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, _utilsJsDefault.default).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"5By4s","./http.js":"aFlee","./xhr.js":"ldm57","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldm57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, _utilsJsDefault.default).isFormData(requestData) && ((0, _indexJsDefault.default).isStandardBrowserEnv || (0, _indexJsDefault.default).isStandardBrowserWebWorkerEnv)) requestHeaders.setContentType(false); // Let the browser set it
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, _isURLSameOriginJsDefault.default)(fullPath)) && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"5By4s","./../core/settle.js":"dD9aC","./../helpers/cookies.js":"4WJjt","./../helpers/buildURL.js":"3bwC2","../core/buildFullPath.js":"1I5TW","./../helpers/isURLSameOrigin.js":"lxXtv","../defaults/transitional.js":"lM32f","../core/AxiosError.js":"3u8Tl","../cancel/CanceledError.js":"9PwCG","../helpers/parseProtocol.js":"7NfWU","../platform/index.js":"7tDev","../core/AxiosHeaders.js":"cgSSx","../helpers/speedometer.js":"gQeo1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD9aC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}
exports.default = settle;

},{"./AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WJjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, _utilsJsDefault.default).isString(path)) cookie.push("path=" + path);
            if ((0, _utilsJsDefault.default).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1I5TW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}
exports.default = buildFullPath;

},{"../helpers/isAbsoluteURL.js":"jD6NM","../helpers/combineURLs.js":"brOWK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jD6NM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
exports.default = isAbsoluteURL;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brOWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
exports.default = combineURLs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxXtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NfWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}
exports.default = parseProtocol;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQeo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b85oP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}
exports.default = mergeConfig;

},{"../utils.js":"5By4s","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vgkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"h29L9","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h29L9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.3.2";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45wzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"9PwCG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyQ8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}
exports.default = spread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyiLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}
exports.default = isAxiosError;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdR61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGFut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onLoadedHomePage", ()=>onLoadedHomePage);
var _renderMarkup = require("./render-markup");
var _init = require("./init");
var _refs = require("./refs");
var _pagination = require("./main-page-only/pagination");
async function onLoadedHomePage() {
    const genres = await (0, _init.moviesApiService).getGenres();
    localStorage.setItem("allGenres", JSON.stringify(genres));
    const result = await (0, _init.moviesApiService).fetchTrending();
    const markup = (0, _renderMarkup.renderSearchResult)(result.data.results);
    (0, _pagination.createPagination)("trending");
    (0, _refs.refs).allCardsSection.insertAdjacentHTML("beforeend", markup.join(""));
    const cards = document.querySelectorAll(".main-section__card");
    cards.forEach((item)=>{
        item.addEventListener("mouseover", ()=>{
            (0, _refs.refs).cursor.classList.add("hover");
        });
        item.addEventListener("mouseleave", ()=>{
            (0, _refs.refs).cursor.classList.remove("hover");
        });
    });
}

},{"./render-markup":"jCozP","./init":"l17dj","./refs":"2WoF2","./main-page-only/pagination":"cP4Qz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCozP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSearchResult", ()=>renderSearchResult);
var _emptyPosterJpg = require("../images/empty-photo/empty-poster.jpg");
var _emptyPosterJpgDefault = parcelHelpers.interopDefault(_emptyPosterJpg);
function renderSearchResult(movies) {
    const allMovies = movies.map(({ poster_path , release_date , original_title , title , genre_ids , vote_average ,  }, idx)=>{
        let { poster , releaseYear  } = checkDataBeforeRender(poster_path, release_date);
        return `<div class="main-section__card" id="${idx}" data-id="${idx}" data-rating="${vote_average}">
            <img
              src="${poster}"
              alt="${title || original_title || "poster image"}"
              class="main-section__image"
              loading="lazy"
            />
          <p class="main-section__name">
					${title || original_title || "No Title"} <br />
					<span class="main-section__description">${findGenres(genre_ids) || "No Genre"}
					| ${releaseYear}</span>
				</p>
        </div>`;
    });
    return allMovies;
}
function checkDataBeforeRender(poster_path, releaseDate) {
    let poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    let releaseYear;
    if (!poster_path) poster = `${0, _emptyPosterJpgDefault.default}`;
    if (!releaseDate) releaseYear = "No release year";
    else releaseYear = parseInt(releaseDate);
    return {
        poster,
        releaseYear
    };
}
function findGenres(ids) {
    const genres = JSON.parse(localStorage.getItem("allGenres"));
    let res = [];
    for (const item of ids){
        let h = genres.find((genre)=>genre.id === Number(item));
        h.name !== "Science Fiction" ? res.push(h.name) : res.push("Sci-Fi");
    }
    const formattedGenres = res.length > 2 ? `${res[0]}, ${res[1]}, Other` : res.join(", ");
    return formattedGenres;
}

},{"../images/empty-photo/empty-poster.jpg":"6V9sZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6V9sZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "empty-poster.aacf6643.jpg" + "?" + Date.now();

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

},{}],"cP4Qz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPagination", ()=>createPagination);
var _tuiPagination = require("tui-pagination");
var _tuiPaginationDefault = parcelHelpers.interopDefault(_tuiPagination);
var _init = require("../init");
var _renderMarkup = require("../render-markup");
var _refs = require("../refs");
const { paginationContainer , allCardsSection , body  } = (0, _refs.refs);
function createPagination(fetchType) {
    const totalResults = localStorage.getItem("totalResults");
    if (JSON.parse(totalResults) <= 20) {
        paginationContainer.innerHTML = "";
        return;
    }
    const options = {
        centerAlign: true,
        visiblePages: 5,
        totalItems: JSON.parse(totalResults),
        itemsPerPage: 20,
        template: {
            page: '<a href="#" class="main-section__page-number">{{page}}</a>',
            currentPage: '<a href="#" class="main-section__page-number main-section__page-number--active">{{page}}</a>',
            moveButton: '<a class="main-section__arrows main-section__arrows--{{type}} "></a>',
            disabledMoveButton: '<a style="display: none">'
        }
    };
    const pagination = new (0, _tuiPaginationDefault.default)(paginationContainer, options);
    pagination.on("afterMove", async function(eventData) {
        body.scrollTop = body.scrollHeight;
        const { page  } = eventData;
        (0, _init.moviesApiService).page = page;
        const firstArrow = document.querySelector(".main-section__arrows--first");
        const prevArrow = document.querySelector(".main-section__arrows--prev");
        if (page > 4) {
            firstArrow.innerText = "1";
            firstArrow.style.pointerEvents = "all";
            prevArrow.classList.add("move-left-a-little");
        } else {
            if (firstArrow) {
                firstArrow.innerText = "";
                firstArrow.style.pointerEvents = "none";
            }
            if (prevArrow) prevArrow.classList.remove("move-left-a-little");
        }
        const movies = fetchType === "trending" ? await (0, _init.moviesApiService).fetchTrending() : await (0, _init.moviesApiService).fetchMoviesByKeyword();
        allCardsSection.innerHTML = (0, _renderMarkup.renderSearchResult)(movies.data.results).join("");
        const nextArrow = document.querySelector(".main-section__arrows--next");
        const totalPages = options.totalItems / 20;
        const lastArrow = document.querySelector(".main-section__arrows--last");
        if (totalPages > 5 && totalPages > page + 3 && screen.width > 768) {
            if (lastArrow) {
                lastArrow.innerText = Math.ceil(totalPages);
                lastArrow.style.pointerEvents = "all";
            }
            if (nextArrow) nextArrow.classList.add("move-right-a-little");
        } else if (totalPages < page + 3) {
            if (lastArrow) {
                lastArrow.innerText = "";
                lastArrow.style.pointerEvents = "none";
            }
            if (nextArrow) nextArrow.classList.remove("move-right-a-little");
        }
    });
}

},{"tui-pagination":"b80gR","../init":"l17dj","../render-markup":"jCozP","../refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b80gR":[function(require,module,exports) {
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(window, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != "string") for(var key1 in value)__webpack_require__.d(ns, key1, (function(key) {
                return value[key];
            }).bind(null, key1));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
                return module["default"];
            } : /******/ function getModuleExports() {
                return module;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "dist";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 10);
    /******/ }([
        /* 0 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module object
 */ /**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */ function extend(target, objects) {
                var hasOwnProp = Object.prototype.hasOwnProperty;
                var source, prop, i, len;
                for(i = 1, len = arguments.length; i < len; i += 1){
                    source = arguments[i];
                    for(prop in source)if (hasOwnProp.call(source, prop)) target[prop] = source[prop];
                }
                return target;
            }
            module.exports = extend;
        /***/ },
        /* 1 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */ function isUndefined(obj) {
                return obj === undefined; // eslint-disable-line no-undefined
            }
            module.exports = isUndefined;
        /***/ },
        /* 2 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */ function isArray(obj) {
                return obj instanceof Array;
            }
            module.exports = isArray;
        /***/ },
        /* 3 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var forEachArray = __webpack_require__(17);
            var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module collection
 */ /**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */ function forEach(obj, iteratee, context) {
                if (isArray(obj)) forEachArray(obj, iteratee, context);
                else forEachOwnProperties(obj, iteratee, context);
            }
            module.exports = forEach;
        /***/ },
        /* 4 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */ function isString(obj) {
                return typeof obj === "string" || obj instanceof String;
            }
            module.exports = isString;
        /***/ },
        /* 5 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */ function isFunction(obj) {
                return obj instanceof Function;
            }
            module.exports = isFunction;
        /***/ },
        /* 6 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachOwnProperties(obj, iteratee, context) {
                var key;
                context = context || null;
                for(key in obj)if (obj.hasOwnProperty(key)) {
                    if (iteratee.call(context, obj[key], key, obj) === false) break;
                }
            }
            module.exports = forEachOwnProperties;
        /***/ },
        /* 7 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inherit = __webpack_require__(18);
            var extend = __webpack_require__(0);
            /**
 * @module defineClass
 */ /**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */ function defineClass(parent, props) {
                var obj;
                if (!props) {
                    props = parent;
                    parent = null;
                }
                obj = props.init || function() {};
                if (parent) inherit(obj, parent);
                if (props.hasOwnProperty("static")) {
                    extend(obj, props["static"]);
                    delete props["static"];
                }
                extend(obj.prototype, props);
                return obj;
            }
            module.exports = defineClass;
        /***/ },
        /* 8 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /* eslint-disable complexity */ /**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            /**
 * @module array
 */ /**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */ function inArray(searchElement, array, startIndex) {
                var i;
                var length;
                startIndex = startIndex || 0;
                if (!isArray(array)) return -1;
                if (Array.prototype.indexOf) return Array.prototype.indexOf.call(array, searchElement, startIndex);
                length = array.length;
                for(i = startIndex; startIndex >= 0 && i < length; i += 1){
                    if (array[i] === searchElement) return i;
                }
                return -1;
            }
            module.exports = inArray;
        /***/ },
        /* 9 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var template = __webpack_require__(29);
            var sendHostname = __webpack_require__(30);
            var isFunction = __webpack_require__(5);
            var util = {
                /**
   * Capitalize first letter
   * @param {string} str - String to change
   * @returns {string} Changed string
   */ capitalizeFirstLetter: function(str) {
                    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
                },
                /**
   * Check the element is contained
   * @param {HTMLElement} find - Target element
   * @param {HTMLElement} parent - Wrapper element
   * @returns {boolean} Whether contained or not
   */ isContained: function(find, parent) {
                    if (!parent) return false;
                    return find === parent ? true : parent.contains(find);
                },
                /**
   * Create an new element by template literals.
   * @param {string|function} tmpl - template
   * @param {Object} context - context
   * @returns {HTMLElement}
   */ createElementByTemplate: function(tmpl, context) {
                    var parent = document.createElement("div");
                    var html = isFunction(tmpl) ? tmpl(context) : template(tmpl, context);
                    parent.innerHTML = html;
                    return parent.firstChild;
                },
                /**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */ bind: function(fn, obj) {
                    var slice = Array.prototype.slice;
                    var args;
                    if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
                    args = slice.call(arguments, 2);
                    return function() {
                        return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
                    };
                },
                /**
   * Send hostname for GA
   * @ignore
   */ sendHostName: function() {
                    sendHostname("pagination", "UA-129987462-1");
                }
            };
            module.exports = util;
        /***/ },
        /* 10 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview The entry file of Pagination components
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */ __webpack_require__(11);
            module.exports = __webpack_require__(12);
        /***/ },
        /* 11 */ /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/ },
        /* 12 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var CustomEvents = __webpack_require__(13);
            var defineClass = __webpack_require__(7);
            var extend = __webpack_require__(0);
            var isUndefined = __webpack_require__(1);
            var View = __webpack_require__(20);
            var util = __webpack_require__(9);
            var defaultOption = {
                totalItems: 10,
                itemsPerPage: 10,
                visiblePages: 10,
                page: 1,
                centerAlign: false,
                firstItemClassName: "tui-first-child",
                lastItemClassName: "tui-last-child",
                usageStatistics: true
            };
            /**
 * Pagination class
 * @class Pagination
 * @param {string|HTMLElement|jQueryObject} container - Container element or selector.
 * In case of a string, it is considered as an id selector and find the element by id.
 * If there is no element, it is considered as a selector and find the element by querySelector().
 * Passing jQueryObject and considering an id selector at first will be deprecated in v4.0.0.
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element. Refer to {@link https://github.com/nhn/tui.pagination/blob/master/docs/getting-started.md#how-to-use-template Getting Started: How to use template}.
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 *     @param {boolean} [options.usageStatistics=true] Send the hostname to google analytics.
 *         If you do not want to send the hostname, this option set to false.
 * @example
 * // ES6
 * import Pagination from 'tui-pagination';
 *
 * // CommonJS
 * const Pagination = require('tui-pagination');
 *
 * // Browser
 * const Pagination = tui.Pagination;
 *
 * const container = document.getElementById('pagination');
 * const options = { // below default value of options
 *      totalItems: 10,
 *      itemsPerPage: 10,
 *      visiblePages: 10,
 *      page: 1,
 *      centerAlign: false,
 *      firstItemClassName: 'tui-first-child',
 *      lastItemClassName: 'tui-last-child',
 *      template: {
 *          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
 *          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
 *          moveButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</a>',
 *          disabledMoveButton:
 *              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</span>',
 *          moreButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
 *                  '<span class="tui-ico-ellip">...</span>' +
 *              '</a>'
 *      }
 * };
 * const pagination = new Pagination(container, options);
 */ var Pagination = defineClass(/** @lends Pagination.prototype */ {
                init: function(container, options) {
                    /**
       * Option object
       * @type {object}
       * @private
       */ this._options = extend({}, defaultOption, options);
                    /**
       * Current page number
       * @type {number}
       * @private
       */ this._currentPage = 0;
                    /**
       * View instance
       * @type {View}
       * @private
       */ this._view = new View(container, this._options, util.bind(this._onClickHandler, this));
                    this._paginate();
                    if (this._options.usageStatistics) util.sendHostName();
                },
                /**
     * Set current page
     * @param {number} page - Current page
     * @private
     */ _setCurrentPage: function(page) {
                    this._currentPage = page || this._options.page;
                },
                /**
     * Get last page number
     * @returns {number} Last page number
     * @private
     */ _getLastPage: function() {
                    var lastPage = Math.ceil(this._options.totalItems / this._options.itemsPerPage);
                    return !lastPage ? 1 : lastPage;
                },
                /**
     * Index of list in total lists
     * @param {number} pageNumber - Page number
     * @returns {number} Page index or number
     * @private
     */ _getPageIndex: function(pageNumber) {
                    var left, pageIndex;
                    if (this._options.centerAlign) {
                        left = Math.floor(this._options.visiblePages / 2);
                        pageIndex = pageNumber - left;
                        pageIndex = Math.max(pageIndex, 1);
                        pageIndex = Math.min(pageIndex, this._getLastPage() - this._options.visiblePages + 1);
                        return pageIndex;
                    }
                    return Math.ceil(pageNumber / this._options.visiblePages);
                },
                /**
     * Get relative page
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Relative page number
     * @private
     */ _getRelativePage: function(moveType) {
                    var isPrevMove = moveType === "prev";
                    var currentPage = this.getCurrentPage();
                    return isPrevMove ? currentPage - 1 : currentPage + 1;
                },
                /**
     * Get more page index
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Page index
     * @private
     */ _getMorePageIndex: function(moveType) {
                    var currentPageIndex = this._getPageIndex(this.getCurrentPage());
                    var pageCount = this._options.visiblePages;
                    var isPrevMove = moveType === "prev";
                    var pageIndex;
                    if (this._options.centerAlign) pageIndex = isPrevMove ? currentPageIndex - 1 : currentPageIndex + pageCount;
                    else pageIndex = isPrevMove ? (currentPageIndex - 1) * pageCount : currentPageIndex * pageCount + 1;
                    return pageIndex;
                },
                /* eslint-enable complexity */ /**
     * Get available page number from over number
     * If total page is 23, but input number is 30 => return 23
     * @param {number} page - Page number
     * @returns {number} Replaced pgae number
     * @private
     */ _convertToValidPage: function(page) {
                    var lastPageNumber = this._getLastPage();
                    page = Math.max(page, 1);
                    page = Math.min(page, lastPageNumber);
                    return page;
                },
                /**
     * Create require view set, notify view to update
     * @param {number} page - Page number
     * @private
     */ _paginate: function(page) {
                    var viewData = this._makeViewData(page || this._options.page);
                    this._setCurrentPage(page);
                    this._view.update(viewData);
                },
                /**
     * Create and get view data
     * @param {number} page - Page number
     * @returns {object} view data
     * @private
     */ _makeViewData: function(page) {
                    var viewData = {};
                    var lastPage = this._getLastPage();
                    var currentPageIndex = this._getPageIndex(page);
                    var lastPageListIndex = this._getPageIndex(lastPage);
                    var edges = this._getEdge(page);
                    viewData.leftPageNumber = edges.left;
                    viewData.rightPageNumber = edges.right;
                    viewData.prevMore = currentPageIndex > 1;
                    viewData.nextMore = currentPageIndex < lastPageListIndex;
                    viewData.page = page;
                    viewData.currentPageIndex = page;
                    viewData.lastPage = lastPage;
                    viewData.lastPageListIndex = lastPage;
                    return viewData;
                },
                /**
     * Get each edge page
     * @param {object} page - Page number
     * @returns {{left: number, right: number}} Edge page numbers
     * @private
     */ _getEdge: function(page) {
                    var leftPageNumber, rightPageNumber, left;
                    var lastPage = this._getLastPage();
                    var visiblePages = this._options.visiblePages;
                    var currentPageIndex = this._getPageIndex(page);
                    if (this._options.centerAlign) {
                        left = Math.floor(visiblePages / 2);
                        leftPageNumber = Math.max(page - left, 1);
                        rightPageNumber = leftPageNumber + visiblePages - 1;
                        if (rightPageNumber > lastPage) {
                            leftPageNumber = Math.max(lastPage - visiblePages + 1, 1);
                            rightPageNumber = lastPage;
                        }
                    } else {
                        leftPageNumber = (currentPageIndex - 1) * visiblePages + 1;
                        rightPageNumber = currentPageIndex * visiblePages;
                        rightPageNumber = Math.min(rightPageNumber, lastPage);
                    }
                    return {
                        left: leftPageNumber,
                        right: rightPageNumber
                    };
                },
                /**
     * Pagelist click event hadnler
     * @param {?string} buttonType - Button type
     * @param {?number} page - Page number
     * @private
     */ /* eslint-disable complexity */ _onClickHandler: function(buttonType, page) {
                    switch(buttonType){
                        case "first":
                            page = 1;
                            break;
                        case "prev":
                            page = this._getRelativePage("prev");
                            break;
                        case "next":
                            page = this._getRelativePage("next");
                            break;
                        case "prevMore":
                            page = this._getMorePageIndex("prev");
                            break;
                        case "nextMore":
                            page = this._getMorePageIndex("next");
                            break;
                        case "last":
                            page = this._getLastPage();
                            break;
                        default:
                            if (!page) return;
                    }
                    this.movePageTo(page);
                },
                /* eslint-enable complexity */ /**
     * Reset pagination
     * @param {*} totalItems - Redraw page item count
     * @example
     * pagination.reset();
     * pagination.reset(100);
     */ reset: function(totalItems) {
                    if (isUndefined(totalItems)) totalItems = this._options.totalItems;
                    this._options.totalItems = totalItems;
                    this._paginate(1);
                },
                /**
     * Move to specific page, redraw list.
     * Before move fire beforeMove event, After move fire afterMove event.
     * @param {Number} targetPage - Target page
     * @example
     * pagination.movePageTo(10);
     */ movePageTo: function(targetPage) {
                    targetPage = this._convertToValidPage(targetPage);
                    /**
       * @event Pagination#beforeMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('beforeMove', (event) => {
       *     const currentPage = event.page;
       *
       *     if (currentPage === 10) {
       *         return false;
       *         // return true;
       *     }
       * });
       */ if (!this.invoke("beforeMove", {
                        page: targetPage
                    })) return;
                    this._paginate(targetPage);
                    /**
       * @event Pagination#afterMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('afterMove', (event) => {
       *      const currentPage = event.page;
       *      console.log(currentPage);
       * });
       */ this.fire("afterMove", {
                        page: targetPage
                    });
                },
                /**
     * Set total count of items
     * @param {number} itemCount - Total item count
     */ setTotalItems: function(itemCount) {
                    this._options.totalItems = itemCount;
                },
                /**
     * Set count of items per page
     * @param {number} itemCount - Item count
     */ setItemsPerPage: function(itemCount) {
                    this._options.itemsPerPage = itemCount;
                },
                /**
     * Get current page
     * @returns {number} Current page
     */ getCurrentPage: function() {
                    return this._currentPage || this._options.page;
                }
            });
            CustomEvents.mixin(Pagination);
            module.exports = Pagination;
        /***/ },
        /* 13 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var extend = __webpack_require__(0);
            var isExisty = __webpack_require__(14);
            var isString = __webpack_require__(4);
            var isObject = __webpack_require__(16);
            var isArray = __webpack_require__(2);
            var isFunction = __webpack_require__(5);
            var forEach = __webpack_require__(3);
            var R_EVENTNAME_SPLIT = /\s+/g;
            /**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */ function CustomEvents() {
                /**
     * @type {HandlerItem[]}
     */ this.events = null;
                /**
     * only for checking specific context event was binded
     * @type {object[]}
     */ this.contexts = null;
            }
            /**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */ CustomEvents.mixin = function(func) {
                extend(func.prototype, CustomEvents.prototype);
            };
            /**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */ CustomEvents.prototype._getHandlerItem = function(handler, context) {
                var item = {
                    handler: handler
                };
                if (context) item.context = context;
                return item;
            };
            /**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */ CustomEvents.prototype._safeEvent = function(eventName) {
                var events = this.events;
                var byName;
                if (!events) events = this.events = {};
                if (eventName) {
                    byName = events[eventName];
                    if (!byName) {
                        byName = [];
                        events[eventName] = byName;
                    }
                    events = byName;
                }
                return events;
            };
            /**
 * Get context array safely
 * @returns {array} context array
 * @private
 */ CustomEvents.prototype._safeContext = function() {
                var context = this.contexts;
                if (!context) context = this.contexts = [];
                return context;
            };
            /**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */ CustomEvents.prototype._indexOfContext = function(ctx) {
                var context = this._safeContext();
                var index = 0;
                while(context[index]){
                    if (ctx === context[index][0]) return index;
                    index += 1;
                }
                return -1;
            };
            /**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */ CustomEvents.prototype._memorizeContext = function(ctx) {
                var context, index;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                index = this._indexOfContext(ctx);
                if (index > -1) context[index][1] += 1;
                else context.push([
                    ctx,
                    1
                ]);
            };
            /**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */ CustomEvents.prototype._forgetContext = function(ctx) {
                var context, contextIndex;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                contextIndex = this._indexOfContext(ctx);
                if (contextIndex > -1) {
                    context[contextIndex][1] -= 1;
                    if (context[contextIndex][1] <= 0) context.splice(contextIndex, 1);
                }
            };
            /**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */ CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
                var events = this._safeEvent(eventName);
                this._memorizeContext(context);
                events.push(this._getHandlerItem(handler, context));
            };
            /**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */ CustomEvents.prototype.on = function(eventName, handler, context) {
                var self = this;
                if (isString(eventName)) {
                    // [syntax 1, 2]
                    eventName = eventName.split(R_EVENTNAME_SPLIT);
                    forEach(eventName, function(name) {
                        self._bindEvent(name, handler, context);
                    });
                } else if (isObject(eventName)) {
                    // [syntax 3, 4]
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.on(name, func, context);
                    });
                }
            };
            /**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */ CustomEvents.prototype.once = function(eventName, handler, context) {
                var self = this;
                if (isObject(eventName)) {
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.once(name, func, context);
                    });
                    return;
                }
                function onceHandler() {
                    handler.apply(context, arguments);
                    self.off(eventName, onceHandler, context);
                }
                this.on(eventName, onceHandler, context);
            };
            /**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */ CustomEvents.prototype._spliceMatches = function(arr, predicate) {
                var i = 0;
                var len;
                if (!isArray(arr)) return;
                for(len = arr.length; i < len; i += 1)if (predicate(arr[i]) === true) {
                    arr.splice(i, 1);
                    len -= 1;
                    i -= 1;
                }
            };
            /**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */ CustomEvents.prototype._matchHandler = function(handler) {
                var self = this;
                return function(item) {
                    var needRemove = handler === item.handler;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */ CustomEvents.prototype._matchContext = function(context) {
                var self = this;
                return function(item) {
                    var needRemove = context === item.context;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */ CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
                var self = this;
                return function(item) {
                    var matchHandler = handler === item.handler;
                    var matchContext = context === item.context;
                    var needRemove = matchHandler && matchContext;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */ CustomEvents.prototype._offByEventName = function(eventName, handler) {
                var self = this;
                var andByHandler = isFunction(handler);
                var matchHandler = self._matchHandler(handler);
                eventName = eventName.split(R_EVENTNAME_SPLIT);
                forEach(eventName, function(name) {
                    var handlerItems = self._safeEvent(name);
                    if (andByHandler) self._spliceMatches(handlerItems, matchHandler);
                    else {
                        forEach(handlerItems, function(item) {
                            self._forgetContext(item.context);
                        });
                        self.events[name] = [];
                    }
                });
            };
            /**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByHandler = function(handler) {
                var self = this;
                var matchHandler = this._matchHandler(handler);
                forEach(this._safeEvent(), function(handlerItems) {
                    self._spliceMatches(handlerItems, matchHandler);
                });
            };
            /**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByObject = function(obj, handler) {
                var self = this;
                var matchFunc;
                if (this._indexOfContext(obj) < 0) forEach(obj, function(func, name) {
                    self.off(name, func);
                });
                else if (isString(handler)) {
                    matchFunc = this._matchContext(obj);
                    self._spliceMatches(this._safeEvent(handler), matchFunc);
                } else if (isFunction(handler)) {
                    matchFunc = this._matchHandlerAndContext(handler, obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                } else {
                    matchFunc = this._matchContext(obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                }
            };
            /**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */ CustomEvents.prototype.off = function(eventName, handler) {
                if (isString(eventName)) // [syntax 1, 2]
                this._offByEventName(eventName, handler);
                else if (!arguments.length) {
                    // [syntax 8]
                    this.events = {};
                    this.contexts = [];
                } else if (isFunction(eventName)) // [syntax 3]
                this._offByHandler(eventName);
                else if (isObject(eventName)) // [syntax 4, 5, 6]
                this._offByObject(eventName, handler);
            };
            /**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */ CustomEvents.prototype.fire = function(eventName) {
                this.invoke.apply(this, arguments);
            };
            /**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */ CustomEvents.prototype.invoke = function(eventName) {
                var events, args, index, item;
                if (!this.hasListener(eventName)) return true;
                events = this._safeEvent(eventName);
                args = Array.prototype.slice.call(arguments, 1);
                index = 0;
                while(events[index]){
                    item = events[index];
                    if (item.handler.apply(item.context, args) === false) return false;
                    index += 1;
                }
                return true;
            };
            /**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */ CustomEvents.prototype.hasListener = function(eventName) {
                return this.getListenerLength(eventName) > 0;
            };
            /**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */ CustomEvents.prototype.getListenerLength = function(eventName) {
                var events = this._safeEvent(eventName);
                return events.length;
            };
            module.exports = CustomEvents;
        /***/ },
        /* 14 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var isNull = __webpack_require__(15);
            /**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/ function isExisty(param) {
                return !isUndefined(param) && !isNull(param);
            }
            module.exports = isExisty;
        /***/ },
        /* 15 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */ function isNull(obj) {
                return obj === null;
            }
            module.exports = isNull;
        /***/ },
        /* 16 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */ function isObject(obj) {
                return obj === Object(obj);
            }
            module.exports = isObject;
        /***/ },
        /* 17 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachArray(arr, iteratee, context) {
                var index = 0;
                var len = arr.length;
                context = context || null;
                for(; index < len; index += 1){
                    if (iteratee.call(context, arr[index], index, arr) === false) break;
                }
            }
            module.exports = forEachArray;
        /***/ },
        /* 18 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var createObject = __webpack_require__(19);
            /**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */ function inherit(subType, superType) {
                var prototype = createObject(superType.prototype);
                prototype.constructor = subType;
                subType.prototype = prototype;
            }
            module.exports = inherit;
        /***/ },
        /* 19 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module inheritance
 */ /**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */ function createObject(obj) {
                function F() {} // eslint-disable-line require-jsdoc
                F.prototype = obj;
                return new F();
            }
            module.exports = createObject;
        /***/ },
        /* 20 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var forEach = __webpack_require__(3);
            var defineClass = __webpack_require__(7);
            var getTarget = __webpack_require__(21);
            var on = __webpack_require__(22);
            var preventDefault = __webpack_require__(24);
            var addClass = __webpack_require__(25);
            var extend = __webpack_require__(0);
            var isString = __webpack_require__(4);
            var isHTMLNode = __webpack_require__(28);
            var util = __webpack_require__(9);
            var defaultTemplate = {
                page: '<a href="#" class="tui-page-btn">{{page}}</a>',
                currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
                moveButton: '<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',
                disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',
                moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'
            };
            var moveButtons = [
                "first",
                "prev",
                "next",
                "last"
            ];
            var moreButtons = [
                "prev",
                "next"
            ];
            var INVALID_CONTAINER_ELEMENT = "The container element is invalid.";
            /**
 * Pagination view class
 * @class View
 * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 * @param {function} handler - Event handler
 * @ignore
 */ var View = defineClass(/** @lends View.prototype */ {
                init: function(container, options, handler) {
                    /**
       * Root element
       * @type {HTMLElement}
       * @private
       */ this._containerElement = null;
                    /**
       * First item's class name
       * @type {string}
       * @private
       */ this._firstItemClassName = options.firstItemClassName;
                    /**
       * Last item's class name
       * @type {string}
       * @private
       */ this._lastItemClassName = options.lastItemClassName;
                    /**
       * Default template
       * @type {object.<string, string|function>}
       * @private
       */ this._template = extend({}, defaultTemplate, options.template);
                    /**
       * Map of buttons
       * @type {object.<string, HTMLElement>}
       * @private
       */ this._buttons = {};
                    /**
       * Enabled page elements list
       * @type {array}
       * @private
       */ this._enabledPageElements = [];
                    this._setRootElement(container);
                    this._setMoveButtons();
                    this._setDisabledMoveButtons();
                    this._setMoreButtons();
                    this._attachClickEvent(handler);
                },
                /* eslint-enable complexity */ /**
     * Set root element
     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
     * @private
     */ _setRootElement: function(container) {
                    if (isString(container)) container = document.getElementById(container) || document.querySelector(container);
                    else if (container.jquery) container = container[0];
                    if (!isHTMLNode(container)) throw new Error(INVALID_CONTAINER_ELEMENT);
                    this._containerElement = container;
                },
                /**
     * Assign move buttons to option
     * @private
     */ _setMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        this._buttons[type] = util.createElementByTemplate(this._template.moveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign disabled move buttons to option
     * @private
     */ _setDisabledMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        var key = "disabled" + util.capitalizeFirstLetter(type);
                        this._buttons[key] = util.createElementByTemplate(this._template.disabledMoveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign more buttons to option
     * @private
     */ _setMoreButtons: function() {
                    forEach(moreButtons, function(type) {
                        var key = type + "More";
                        this._buttons[key] = util.createElementByTemplate(this._template.moreButton, {
                            type: type
                        });
                    }, this);
                },
                /* eslint-enable camelcase */ /**
     * Get container element
     * @returns {HTMLElement} Container element
     * @private
     */ _getContainerElement: function() {
                    return this._containerElement;
                },
                /**
     * Append first button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendFirstButton: function(viewData) {
                    var button;
                    if (viewData.page > 1) button = this._buttons.first;
                    else button = this._buttons.disabledFirst;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex > 1) button = this._buttons.prev;
                    else button = this._buttons.disabledPrev;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append next button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex < viewData.lastPageListIndex) button = this._buttons.next;
                    else button = this._buttons.disabledNext;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append last button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendLastButton: function(viewData) {
                    var button;
                    if (viewData.page < viewData.lastPage) button = this._buttons.last;
                    else button = this._buttons.disabledLast;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevMoreButton: function(viewData) {
                    var button;
                    if (viewData.prevMore) {
                        button = this._buttons.prevMore;
                        addClass(button, this._firstItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append next more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextMoreButton: function(viewData) {
                    var button;
                    if (viewData.nextMore) {
                        button = this._buttons.nextMore;
                        addClass(button, this._lastItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append page number elements on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ // eslint-disable-next-line complexity
                _appendPages: function(viewData) {
                    var firstPage = viewData.leftPageNumber;
                    var lastPage = viewData.rightPageNumber;
                    var pageItem, i;
                    for(i = firstPage; i <= lastPage; i += 1){
                        if (i === viewData.page) pageItem = util.createElementByTemplate(this._template.currentPage, {
                            page: i
                        });
                        else {
                            pageItem = util.createElementByTemplate(this._template.page, {
                                page: i
                            });
                            this._enabledPageElements.push(pageItem);
                        }
                        if (i === firstPage && !viewData.prevMore) addClass(pageItem, this._firstItemClassName);
                        if (i === lastPage && !viewData.nextMore) addClass(pageItem, this._lastItemClassName);
                        this._getContainerElement().appendChild(pageItem);
                    }
                },
                /**
     * Attach click event
     * @param {function} callback - Callback function
     * @private
     */ _attachClickEvent: function(callback) {
                    var rootElement = this._getContainerElement();
                    on(rootElement, "click", function(ev) {
                        var target = getTarget(ev);
                        var page, buttonType;
                        preventDefault(ev);
                        buttonType = this._getButtonType(target);
                        if (!buttonType) page = this._getPageNumber(target);
                        callback(buttonType, page);
                    }, this);
                },
                /**
     * Get button type to move button elements
     * @param {HTMLElement} targetElement - Each move button element
     * @returns {?string} Button type
     * @private
     */ _getButtonType: function(targetElement) {
                    var buttonType;
                    var buttons = this._buttons;
                    forEach(buttons, function(button, type) {
                        if (util.isContained(targetElement, button)) {
                            buttonType = type;
                            return false;
                        }
                        return true;
                    }, this);
                    return buttonType;
                },
                /* eslint-enable no-lonely-if */ /**
     * Get number to page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {?number} Page number
     * @private
     */ _getPageNumber: function(targetElement) {
                    var targetPage = this._findPageElement(targetElement);
                    var page;
                    if (targetPage) page = parseInt(targetPage.innerText, 10);
                    return page;
                },
                /**
     * Find target element from page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {HTMLElement} Found element
     * @ignore
     */ _findPageElement: function(targetElement) {
                    var i = 0;
                    var length = this._enabledPageElements.length;
                    var pickedItem;
                    for(; i < length; i += 1){
                        pickedItem = this._enabledPageElements[i];
                        if (util.isContained(targetElement, pickedItem)) return pickedItem;
                    }
                    return null;
                },
                /**
     * Reset container element
     * @private
     */ _empty: function() {
                    this._enabledPageElements = [];
                    forEach(this._buttons, function(buttonElement, type) {
                        this._buttons[type] = buttonElement.cloneNode(true);
                    }, this);
                    this._getContainerElement().innerHTML = "";
                },
                /**
     * Update view
     * @param {object} viewData - View data to render pagination
     * @ignore
     */ update: function(viewData) {
                    this._empty();
                    this._appendFirstButton(viewData);
                    this._appendPrevButton(viewData);
                    this._appendPrevMoreButton(viewData);
                    this._appendPages(viewData);
                    this._appendNextMoreButton(viewData);
                    this._appendNextButton(viewData);
                    this._appendLastButton(viewData);
                }
            });
            module.exports = View;
        /***/ },
        /* 21 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */ function getTarget(e) {
                return e.target || e.srcElement;
            }
            module.exports = getTarget;
        /***/ },
        /* 22 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isString = __webpack_require__(4);
            var forEach = __webpack_require__(3);
            var safeEvent = __webpack_require__(23);
            /**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */ function on(element, types, handler, context) {
                if (isString(types)) {
                    forEach(types.split(/\s+/g), function(type) {
                        bindEvent(element, type, handler, context);
                    });
                    return;
                }
                forEach(types, function(func, type) {
                    bindEvent(element, type, func, handler);
                });
            }
            /**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */ function bindEvent(element, type, handler, context) {
                /**
     * Event handler
     * @param {Event} e - event object
     */ function eventHandler(e) {
                    handler.call(context || element, e || window.event);
                }
                if ("addEventListener" in element) element.addEventListener(type, eventHandler);
                else if ("attachEvent" in element) element.attachEvent("on" + type, eventHandler);
                memorizeHandler(element, type, handler, eventHandler);
            }
            /**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */ function memorizeHandler(element, type, handler, wrappedHandler) {
                var events = safeEvent(element, type);
                var existInEvents = false;
                forEach(events, function(obj) {
                    if (obj.handler === handler) {
                        existInEvents = true;
                        return false;
                    }
                    return true;
                });
                if (!existInEvents) events.push({
                    handler: handler,
                    wrappedHandler: wrappedHandler
                });
            }
            module.exports = on;
        /***/ },
        /* 23 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var EVENT_KEY = "_feEventKey";
            /**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */ function safeEvent(element, type) {
                var events = element[EVENT_KEY];
                var handlers;
                if (!events) events = element[EVENT_KEY] = {};
                handlers = events[type];
                if (!handlers) handlers = events[type] = [];
                return handlers;
            }
            module.exports = safeEvent;
        /***/ },
        /* 24 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */ function preventDefault(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                    return;
                }
                e.returnValue = false;
            }
            module.exports = preventDefault;
        /***/ },
        /* 25 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEach = __webpack_require__(3);
            var inArray = __webpack_require__(8);
            var getClass = __webpack_require__(26);
            var setClassName = __webpack_require__(27);
            /**
 * domUtil module
 * @module domUtil
 */ /**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */ function addClass(element) {
                var cssClass = Array.prototype.slice.call(arguments, 1);
                var classList = element.classList;
                var newClass = [];
                var origin;
                if (classList) {
                    forEach(cssClass, function(name) {
                        element.classList.add(name);
                    });
                    return;
                }
                origin = getClass(element);
                if (origin) cssClass = [].concat(origin.split(/\s+/), cssClass);
                forEach(cssClass, function(cls) {
                    if (inArray(cls, newClass) < 0) newClass.push(cls);
                });
                setClassName(element, newClass);
            }
            module.exports = addClass;
        /***/ },
        /* 26 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            /**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */ function getClass(element) {
                if (!element || !element.className) return "";
                if (isUndefined(element.className.baseVal)) return element.className;
                return element.className.baseVal;
            }
            module.exports = getClass;
        /***/ },
        /* 27 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var isUndefined = __webpack_require__(1);
            /**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */ function setClassName(element, cssClass) {
                cssClass = isArray(cssClass) ? cssClass.join(" ") : cssClass;
                cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                if (isUndefined(element.className.baseVal)) {
                    element.className = cssClass;
                    return;
                }
                element.className.baseVal = cssClass;
            }
            module.exports = setClassName;
        /***/ },
        /* 28 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */ function isHTMLNode(html) {
                if (typeof HTMLElement === "object") return html && (html instanceof HTMLElement || !!html.nodeType);
                return !!(html && html.nodeType);
            }
            module.exports = isHTMLNode;
        /***/ },
        /* 29 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inArray = __webpack_require__(8);
            var forEach = __webpack_require__(3);
            var isArray = __webpack_require__(2);
            var isString = __webpack_require__(4);
            var extend = __webpack_require__(0);
            // IE8 does not support capture groups.
            var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
            var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
            var BRACKET_REGEXP = /\[\s?|\s?\]/;
            var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
            var DOT_REGEXP = /\./;
            var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
            var STRING_REGEXP = /"|'/g;
            var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
            var EXPRESSION_INTERVAL = 2;
            var BLOCK_HELPERS = {
                "if": handleIf,
                "each": handleEach,
                "with": handleWith
            };
            var isValidSplit = "a".split(/a/).length === 3;
            /**
 * Split by RegExp. (Polyfill for IE8)
 * @param {string} text - text to be splitted\
 * @param {RegExp} regexp - regular expression
 * @returns {Array.<string>}
 */ var splitByRegExp = function() {
                if (isValidSplit) return function(text, regexp) {
                    return text.split(regexp);
                };
                return function(text, regexp) {
                    var result = [];
                    var prevIndex = 0;
                    var match, index;
                    if (!regexp.global) regexp = new RegExp(regexp, "g");
                    match = regexp.exec(text);
                    while(match !== null){
                        index = match.index;
                        result.push(text.slice(prevIndex, index));
                        prevIndex = index + match[0].length;
                        match = regexp.exec(text);
                    }
                    result.push(text.slice(prevIndex));
                    return result;
                };
            }();
            /**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */ // eslint-disable-next-line complexity
            function getValueFromContext(exp, context) {
                var splitedExps;
                var value = context[exp];
                if (exp === "true") value = true;
                else if (exp === "false") value = false;
                else if (STRING_NOTATION_REGEXP.test(exp)) value = exp.replace(STRING_REGEXP, "");
                else if (BRACKET_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(BRACKET_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
                } else if (DOT_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(DOT_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
                } else if (NUMBER_REGEXP.test(exp)) value = parseFloat(exp);
                return value;
            }
            /**
 * Extract elseif and else expressions.
 * @param {Array.<string>} ifExps - args of if expression
 * @param {Array.<string>} sourcesInsideBlock - sources inside if block
 * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
 * @private
 */ function extractElseif(ifExps, sourcesInsideBlock) {
                var exps = [
                    ifExps
                ];
                var sourcesInsideIf = [];
                var otherIfCount = 0;
                var start = 0;
                // eslint-disable-next-line complexity
                forEach(sourcesInsideBlock, function(source, index) {
                    if (source.indexOf("if") === 0) otherIfCount += 1;
                    else if (source === "/if") otherIfCount -= 1;
                    else if (!otherIfCount && (source.indexOf("elseif") === 0 || source === "else")) {
                        exps.push(source === "else" ? [
                            "true"
                        ] : source.split(" ").slice(1));
                        sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
                        start = index + 1;
                    }
                });
                sourcesInsideIf.push(sourcesInsideBlock.slice(start));
                return {
                    exps: exps,
                    sourcesInsideIf: sourcesInsideIf
                };
            }
            /**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleIf(exps, sourcesInsideBlock, context) {
                var analyzed = extractElseif(exps, sourcesInsideBlock);
                var result = false;
                var compiledSource = "";
                forEach(analyzed.exps, function(exp, index) {
                    result = handleExpression(exp, context);
                    if (result) compiledSource = compile(analyzed.sourcesInsideIf[index], context);
                    return !result;
                });
                return compiledSource;
            }
            /**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleEach(exps, sourcesInsideBlock, context) {
                var collection = handleExpression(exps, context);
                var additionalKey = isArray(collection) ? "@index" : "@key";
                var additionalContext = {};
                var result = "";
                forEach(collection, function(item, key) {
                    additionalContext[additionalKey] = key;
                    additionalContext["@this"] = item;
                    extend(context, additionalContext);
                    result += compile(sourcesInsideBlock.slice(), context);
                });
                return result;
            }
            /**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleWith(exps, sourcesInsideBlock, context) {
                var asIndex = inArray("as", exps);
                var alias = exps[asIndex + 1];
                var result = handleExpression(exps.slice(0, asIndex), context);
                var additionalContext = {};
                additionalContext[alias] = result;
                return compile(sourcesInsideBlock, extend(context, additionalContext)) || "";
            }
            /**
 * Extract sources inside block in place.
 * @param {Array.<string>} sources - array of sources
 * @param {number} start - index of start block
 * @param {number} end - index of end block
 * @returns {Array.<string>}
 * @private
 */ function extractSourcesInsideBlock(sources, start, end) {
                var sourcesInsideBlock = sources.splice(start + 1, end - start);
                sourcesInsideBlock.pop();
                return sourcesInsideBlock;
            }
            /**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */ function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
                var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
                var helperCount = 1;
                var startBlockIndex = 0;
                var endBlockIndex;
                var index = startBlockIndex + EXPRESSION_INTERVAL;
                var expression = sourcesToEnd[index];
                while(helperCount && isString(expression)){
                    if (expression.indexOf(helperKeyword) === 0) helperCount += 1;
                    else if (expression.indexOf("/" + helperKeyword) === 0) {
                        helperCount -= 1;
                        endBlockIndex = index;
                    }
                    index += EXPRESSION_INTERVAL;
                    expression = sourcesToEnd[index];
                }
                if (helperCount) throw Error(helperKeyword + " needs {{/" + helperKeyword + "}} expression.");
                sourcesToEnd[startBlockIndex] = executeBlockHelper(sourcesToEnd[startBlockIndex].split(" ").slice(1), extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex), context);
                return sourcesToEnd;
            }
            /**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleExpression(exps, context) {
                var result = getValueFromContext(exps[0], context);
                if (result instanceof Function) return executeFunction(result, exps.slice(1), context);
                return result;
            }
            /**
 * Execute a helper function.
 * @param {Function} helper - helper function
 * @param {Array.<string>} argExps - expressions of arguments
 * @param {object} context - context
 * @returns {string} - result of executing the function with arguments
 * @private
 */ function executeFunction(helper, argExps, context) {
                var args = [];
                forEach(argExps, function(exp) {
                    args.push(getValueFromContext(exp, context));
                });
                return helper.apply(null, args);
            }
            /**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */ function compile(sources, context) {
                var index = 1;
                var expression = sources[index];
                var exps, firstExp, result;
                while(isString(expression)){
                    exps = expression.split(" ");
                    firstExp = exps[0];
                    if (BLOCK_HELPERS[firstExp]) {
                        result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
                        sources = sources.concat(result);
                    } else sources[index] = handleExpression(exps, context);
                    index += EXPRESSION_INTERVAL;
                    expression = sources[index];
                }
                return sources.join("");
            }
            /**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * An array or object can be accessed using bracket and dot notation.
 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */ function template(text, context) {
                return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
            }
            module.exports = template;
        /***/ },
        /* 30 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var imagePing = __webpack_require__(31);
            var ms7days = 604800000;
            /**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */ function isExpired(date) {
                var now = new Date().getTime();
                return now - date > ms7days;
            }
            /**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */ function sendHostname(appName, trackingId) {
                var url = "https://www.google-analytics.com/collect";
                var hostname = location.hostname;
                var hitType = "event";
                var eventCategory = "use";
                var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
                var date = window.localStorage.getItem(applicationKeyForStorage);
                // skip if the flag is defined and is set to false explicitly
                if (!isUndefined(window.tui) && window.tui.usageStatistics === false) return;
                // skip if not pass seven days old
                if (date && !isExpired(date)) return;
                window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
                setTimeout(function() {
                    if (document.readyState === "interactive" || document.readyState === "complete") imagePing(url, {
                        v: 1,
                        t: hitType,
                        tid: trackingId,
                        cid: hostname,
                        dp: hostname,
                        dh: appName,
                        el: appName,
                        ec: eventCategory
                    });
                }, 1000);
            }
            module.exports = sendHostname;
        /***/ },
        /* 31 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module request
 */ /**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */ function imagePing(url, trackingInfo) {
                var trackingElement = document.createElement("img");
                var queryString = "";
                forEachOwnProperties(trackingInfo, function(value, key) {
                    queryString += "&" + key + "=" + value;
                });
                queryString = queryString.substring(1);
                trackingElement.src = url + "?" + queryString;
                trackingElement.style.display = "none";
                document.body.appendChild(trackingElement);
                document.body.removeChild(trackingElement);
                return trackingElement;
            }
            module.exports = imagePing;
        /***/ }
    ]);
});

},{}],"eOfB7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _notiflix = require("notiflix");
var _notiflixDefault = parcelHelpers.interopDefault(_notiflix);
(0, _notiflixDefault.default).Notify.init({
    position: "center-top",
    clickToClose: true,
    pauseOnHover: false,
    cssAnimationStyle: "from-top"
});

},{"notiflix":"5z0Oc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5z0Oc":[function(require,module,exports) {
var global = arguments[3];
/* Notiflix AIO (https://notiflix.github.io) - Version: 3.2.6 - Author: Furkan (https://github.com/furcan) - Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT) */ (function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return e(t);
    }) : "object" == typeof module.exports ? module.exports = e(t) : t.Notiflix = e(t);
})("undefined" == typeof global ? "undefined" == typeof window ? this : window : global, function(t1) {
    "use strict";
    if ("undefined" == typeof t1 && "undefined" == typeof t1.document) return !1;
    var e1, i1, a1, n1, o1, r1 = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", s1 = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, m1 = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: !1,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: !1,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: !0,
        showOnlyTheLastOne: !1,
        clickToClose: !1,
        pauseOnHover: !0,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: !1,
        useIcon: !0,
        useFontAwesome: !1,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "notiflix-notify-success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "notiflix-notify-failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "notiflix-notify-warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "notiflix-notify-info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, c1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, p1 = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: !1,
        zindex: 4002,
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        backOverlayClickToClose: !1,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: !0,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: !0,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
            svgColor: "#32c682",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#32c682",
            buttonColor: "#fff",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            svgColor: "#ff5549",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#ff5549",
            buttonColor: "#fff",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            svgColor: "#eebf31",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#eebf31",
            buttonColor: "#fff",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            svgColor: "#26c0d3",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#26c0d3",
            buttonColor: "#fff",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, f1 = {
        Show: "Show",
        Ask: "Ask",
        Prompt: "Prompt"
    }, d1 = {
        ID: "NotiflixConfirmWrap",
        className: "notiflix-confirm",
        width: "300px",
        zindex: 4003,
        position: "center",
        distance: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        cssAnimationStyle: "fade",
        plainText: !0,
        titleColor: "#32c682",
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageColor: "#1e1e1e",
        messageFontSize: "14px",
        messageMaxLength: 110,
        buttonsFontSize: "15px",
        buttonsMaxLength: 34,
        okButtonColor: "#f8f8f8",
        okButtonBackground: "#32c682",
        cancelButtonColor: "#f8f8f8",
        cancelButtonBackground: "#a9a9a9"
    }, x1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse",
        Custom: "Custom",
        Notiflix: "Notiflix"
    }, g1 = {
        ID: "NotiflixLoadingWrap",
        className: "notiflix-loading",
        zindex: 4e3,
        backgroundColor: "rgba(0,0,0,0.8)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        clickToClose: !1,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: "80px",
        svgColor: "#32c682",
        messageID: "NotiflixLoadingMessage",
        messageFontSize: "15px",
        messageMaxLength: 34,
        messageColor: "#dcdcdc"
    }, b1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse"
    }, u1 = {
        ID: "NotiflixBlockWrap",
        querySelectorLimit: 200,
        className: "notiflix-block",
        position: "absolute",
        zindex: 1e3,
        backgroundColor: "rgba(255,255,255,0.9)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        svgSize: "45px",
        svgColor: "#383838",
        messageFontSize: "14px",
        messageMaxLength: 34,
        messageColor: "#383838"
    }, y1 = function(t) {
        return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + t + r1);
    }, k1 = function(t) {
        return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + t + r1);
    }, w = function(e) {
        return e || (e = "head"), null !== t1.document[e] || (y1('\nNotiflix needs to be appended to the "<' + e + '>" element, but you called it before the "<' + e + '>" element has been created.'), !1);
    }, h1 = function(e, i) {
        if (!w("head")) return !1;
        if (null !== e() && !t1.document.getElementById(i)) {
            var a = t1.document.createElement("style");
            a.id = i, a.innerHTML = e(), t1.document.head.appendChild(a);
        }
    }, v = function() {
        var t = {}, e = !1, a2 = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], a2++);
        for(var n = function(i) {
            for(var a in i)Object.prototype.hasOwnProperty.call(i, a) && (t[a] = e && "[object Object]" === Object.prototype.toString.call(i[a]) ? v(t[a], i[a]) : i[a]);
        }; a2 < arguments.length; a2++)n(arguments[a2]);
        return t;
    }, N = function(e) {
        var i = t1.document.createElement("div");
        return i.innerHTML = e, i.textContent || i.innerText || "";
    }, C1 = function(t, e) {
        t || (t = "110px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, z1 = function(t, e) {
        t || (t = "110px"), e || (e = "#ff5549");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, S1 = function(t, e) {
        t || (t = "110px"), e || (e = "#eebf31");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, L1 = function(t, e) {
        t || (t = "110px"), e || (e = "#26c0d3");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, W1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
        return i;
    }, I1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
        return i;
    }, R1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + t + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + t + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + e + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
        return i;
    }, A1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
        return i;
    }, M = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
        return i;
    }, B = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
        return i;
    }, X1 = function(t, e, i) {
        t || (t = "60px"), e || (e = "#f8f8f8"), i || (i = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + e + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + i + '" stroke="' + i + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
        return a;
    }, D1 = function() {
        return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
    }, T1 = 0, F1 = function(a, n, o, r) {
        if (!w("body")) return !1;
        e1 || G.Notify.init({});
        var c = v(!0, e1, {});
        if ("object" == typeof o && !Array.isArray(o) || "object" == typeof r && !Array.isArray(r)) {
            var p = {};
            "object" == typeof o ? p = o : "object" == typeof r && (p = r), e1 = v(!0, e1, p);
        }
        var f = e1[a.toLocaleLowerCase("en")];
        T1++, "string" != typeof n && (n = "Notiflix " + a), e1.plainText && (n = N(n)), !e1.plainText && n.length > e1.messageMaxLength && (e1 = v(!0, e1, {
            closeButton: !0,
            messageMaxLength: 150
        }), n = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'), n.length > e1.messageMaxLength && (n = n.substring(0, e1.messageMaxLength) + "..."), "shadow" === e1.fontAwesomeIconStyle && (f.fontAwesomeIconColor = f.background), e1.cssAnimation || (e1.cssAnimationDuration = 0);
        var d = t1.document.getElementById(m1.wrapID) || t1.document.createElement("div");
        if (d.id = m1.wrapID, d.style.width = e1.width, d.style.zIndex = e1.zindex, d.style.opacity = e1.opacity, "center-center" === e1.position ? (d.style.left = e1.distance, d.style.top = e1.distance, d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.margin = "auto", d.classList.add("nx-flex-center-center"), d.style.maxHeight = "calc((100vh - " + e1.distance + ") - " + e1.distance + ")", d.style.display = "flex", d.style.flexWrap = "wrap", d.style.flexDirection = "column", d.style.justifyContent = "center", d.style.alignItems = "center", d.style.pointerEvents = "none") : "center-top" === e1.position ? (d.style.left = e1.distance, d.style.right = e1.distance, d.style.top = e1.distance, d.style.bottom = "auto", d.style.margin = "auto") : "center-bottom" === e1.position ? (d.style.left = e1.distance, d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.margin = "auto") : "right-bottom" === e1.position ? (d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.left = "auto") : "left-top" === e1.position ? (d.style.left = e1.distance, d.style.top = e1.distance, d.style.right = "auto", d.style.bottom = "auto") : "left-bottom" === e1.position ? (d.style.left = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.right = "auto") : (d.style.right = e1.distance, d.style.top = e1.distance, d.style.left = "auto", d.style.bottom = "auto"), e1.backOverlay) {
            var x = t1.document.getElementById(m1.overlayID) || t1.document.createElement("div");
            x.id = m1.overlayID, x.style.width = "100%", x.style.height = "100%", x.style.position = "fixed", x.style.zIndex = e1.zindex - 1, x.style.left = 0, x.style.top = 0, x.style.right = 0, x.style.bottom = 0, x.style.background = f.backOverlayColor || e1.backOverlayColor, x.className = e1.cssAnimation ? "nx-with-animation" : "", x.style.animationDuration = e1.cssAnimation ? e1.cssAnimationDuration + "ms" : "", t1.document.getElementById(m1.overlayID) || t1.document.body.appendChild(x);
        }
        t1.document.getElementById(m1.wrapID) || t1.document.body.appendChild(d);
        var g = t1.document.createElement("div");
        g.id = e1.ID + "-" + T1, g.className = e1.className + " " + f.childClassName + " " + (e1.cssAnimation ? "nx-with-animation" : "") + " " + (e1.useIcon ? "nx-with-icon" : "") + " nx-" + e1.cssAnimationStyle + " " + (e1.closeButton && "function" != typeof o ? "nx-with-close-button" : "") + " " + ("function" == typeof o ? "nx-with-callback" : "") + " " + (e1.clickToClose ? "nx-notify-click-to-close" : ""), g.style.fontSize = e1.fontSize, g.style.color = f.textColor, g.style.background = f.background, g.style.borderRadius = e1.borderRadius, g.style.pointerEvents = "all", e1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on")), g.style.fontFamily = '"' + e1.fontFamily + '", ' + s1, e1.cssAnimation && (g.style.animationDuration = e1.cssAnimationDuration + "ms");
        var b = "";
        if (e1.closeButton && "function" != typeof o && (b = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + f.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'), !e1.useIcon) g.innerHTML = '<span class="nx-message">' + n + "</span>" + (e1.closeButton ? b : "");
        else if (e1.useFontAwesome) g.innerHTML = '<i style="color:' + f.fontAwesomeIconColor + "; font-size:" + e1.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + f.fontAwesomeClassName + " " + ("shadow" === e1.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? b : "");
        else {
            var u = "";
            a === l1.Success ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : a === l1.Failure ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : a === l1.Warning ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : a === l1.Info && (u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'), g.innerHTML = u + '<span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? b : "");
        }
        if ("left-bottom" === e1.position || "right-bottom" === e1.position) {
            var y = t1.document.getElementById(m1.wrapID);
            y.insertBefore(g, y.firstChild);
        } else t1.document.getElementById(m1.wrapID).appendChild(g);
        var k = t1.document.getElementById(g.id);
        if (k) {
            var h, C, z = function() {
                k.classList.add("nx-remove");
                var e = t1.document.getElementById(m1.overlayID);
                e && 0 >= d.childElementCount && e.classList.add("nx-remove"), clearTimeout(h);
            }, S = function() {
                if (k && null !== k.parentNode && k.parentNode.removeChild(k), 0 >= d.childElementCount && null !== d.parentNode) {
                    d.parentNode.removeChild(d);
                    var e = t1.document.getElementById(m1.overlayID);
                    e && null !== e.parentNode && e.parentNode.removeChild(e);
                }
                clearTimeout(C);
            };
            if (e1.closeButton && "function" != typeof o) {
                var L = t1.document.getElementById(g.id).querySelector("span.nx-close-button");
                L.addEventListener("click", function() {
                    z();
                    var t = setTimeout(function() {
                        S(), clearTimeout(t);
                    }, e1.cssAnimationDuration);
                });
            }
            if (("function" == typeof o || e1.clickToClose) && k.addEventListener("click", function() {
                "function" == typeof o && o(), z();
                var t = setTimeout(function() {
                    S(), clearTimeout(t);
                }, e1.cssAnimationDuration);
            }), !e1.closeButton && "function" != typeof o) {
                var W = function() {
                    h = setTimeout(function() {
                        z();
                    }, e1.timeout), C = setTimeout(function() {
                        S();
                    }, e1.timeout + e1.cssAnimationDuration);
                };
                W(), e1.pauseOnHover && (k.addEventListener("mouseenter", function() {
                    k.classList.add("nx-paused"), clearTimeout(h), clearTimeout(C);
                }), k.addEventListener("mouseleave", function() {
                    k.classList.remove("nx-paused"), W();
                }));
            }
        }
        if (e1.showOnlyTheLastOne && 0 < T1) for(var I, R = t1.document.querySelectorAll("[id^=" + e1.ID + "-]:not([id=" + e1.ID + "-" + T1 + "])"), A = 0; A < R.length; A++)I = R[A], null !== I.parentNode && I.parentNode.removeChild(I);
        e1 = v(!0, e1, c);
    }, E1 = function() {
        return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    }, j1 = function(e2, a3, n, o, r, l) {
        if (!w("body")) return !1;
        i1 || G.Report.init({});
        var m = {};
        if ("object" == typeof r && !Array.isArray(r) || "object" == typeof l && !Array.isArray(l)) {
            var f = {};
            "object" == typeof r ? f = r : "object" == typeof l && (f = l), m = v(!0, i1, {}), i1 = v(!0, i1, f);
        }
        var d = i1[e2.toLocaleLowerCase("en")];
        "string" != typeof a3 && (a3 = "Notiflix " + e2), "string" != typeof n && (e2 === c1.Success ? n = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : e2 === c1.Failure ? n = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : e2 === c1.Warning ? n = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : e2 === c1.Info && (n = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')), "string" != typeof o && (o = "Okay"), i1.plainText && (a3 = N(a3), n = N(n), o = N(o)), i1.plainText || (a3.length > i1.titleMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.', o = "Okay"), n.length > i1.messageMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.', o = "Okay"), o.length > i1.buttonMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.', o = "Okay")), a3.length > i1.titleMaxLength && (a3 = a3.substring(0, i1.titleMaxLength) + "..."), n.length > i1.messageMaxLength && (n = n.substring(0, i1.messageMaxLength) + "..."), o.length > i1.buttonMaxLength && (o = o.substring(0, i1.buttonMaxLength) + "..."), i1.cssAnimation || (i1.cssAnimationDuration = 0);
        var x = t1.document.createElement("div");
        x.id = p1.ID, x.className = i1.className, x.style.zIndex = i1.zindex, x.style.borderRadius = i1.borderRadius, x.style.fontFamily = '"' + i1.fontFamily + '", ' + s1, i1.rtl && (x.setAttribute("dir", "rtl"), x.classList.add("nx-rtl-on")), x.style.display = "flex", x.style.flexWrap = "wrap", x.style.flexDirection = "column", x.style.alignItems = "center", x.style.justifyContent = "center";
        var g = "", b = !0 === i1.backOverlayClickToClose;
        i1.backOverlay && (g = '<div class="' + i1.className + "-overlay" + (i1.cssAnimation ? " nx-with-animation" : "") + (b ? " nx-report-click-to-close" : "") + '" style="background:' + (d.backOverlayColor || i1.backOverlayColor) + ";animation-duration:" + i1.cssAnimationDuration + 'ms;"></div>');
        var u = "";
        if (e2 === c1.Success ? u = C1(i1.svgSize, d.svgColor) : e2 === c1.Failure ? u = z1(i1.svgSize, d.svgColor) : e2 === c1.Warning ? u = S1(i1.svgSize, d.svgColor) : e2 === c1.Info && (u = L1(i1.svgSize, d.svgColor)), x.innerHTML = g + '<div class="' + i1.className + "-content" + (i1.cssAnimation ? " nx-with-animation " : "") + " nx-" + i1.cssAnimationStyle + '" style="width:' + i1.width + "; background:" + i1.backgroundColor + "; animation-duration:" + i1.cssAnimationDuration + 'ms;"><div style="width:' + i1.svgSize + "; height:" + i1.svgSize + ';" class="' + i1.className + '-icon">' + u + '</div><h5 class="' + i1.className + '-title" style="font-weight:500; font-size:' + i1.titleFontSize + "; color:" + d.titleColor + ';">' + a3 + '</h5><p class="' + i1.className + '-message" style="font-size:' + i1.messageFontSize + "; color:" + d.messageColor + ';">' + n + '</p><a id="NXReportButton" class="' + i1.className + '-button" style="font-weight:500; font-size:' + i1.buttonFontSize + "; background:" + d.buttonBackground + "; color:" + d.buttonColor + ';">' + o + "</a></div>", !t1.document.getElementById(x.id)) {
            t1.document.body.appendChild(x);
            var y = function() {
                var e = t1.document.getElementById(x.id);
                e.classList.add("nx-remove");
                var a = setTimeout(function() {
                    null !== e.parentNode && e.parentNode.removeChild(e), clearTimeout(a);
                }, i1.cssAnimationDuration);
            }, k = t1.document.getElementById("NXReportButton");
            if (k.addEventListener("click", function() {
                "function" == typeof r && r(), y();
            }), g && b) {
                var h = t1.document.querySelector(".nx-report-click-to-close");
                h.addEventListener("click", function() {
                    y();
                });
            }
        }
        i1 = v(!0, i1, m);
    }, O1 = function() {
        return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    }, H1 = function(e, i2, n2, o, r, l, m, c, p) {
        if (!w("body")) return !1;
        a1 || G.Confirm.init({});
        var x = v(!0, a1, {});
        "object" != typeof p || Array.isArray(p) || (a1 = v(!0, a1, p)), "string" != typeof i2 && (i2 = "Notiflix Confirm"), "string" != typeof n2 && (n2 = "Do you agree with me?"), "string" != typeof r && (r = "Yes"), "string" != typeof l && (l = "No"), "function" != typeof m && (m = void 0), "function" != typeof c && (c = void 0), a1.plainText && (i2 = N(i2), n2 = N(n2), r = N(r), l = N(l)), a1.plainText || (i2.length > a1.titleMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.', r = "Okay", l = "..."), n2.length > a1.messageMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.', r = "Okay", l = "..."), (r.length || l.length) > a1.buttonsMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.', r = "Okay", l = "...")), i2.length > a1.titleMaxLength && (i2 = i2.substring(0, a1.titleMaxLength) + "..."), n2.length > a1.messageMaxLength && (n2 = n2.substring(0, a1.messageMaxLength) + "..."), r.length > a1.buttonsMaxLength && (r = r.substring(0, a1.buttonsMaxLength) + "..."), l.length > a1.buttonsMaxLength && (l = l.substring(0, a1.buttonsMaxLength) + "..."), a1.cssAnimation || (a1.cssAnimationDuration = 0);
        var g = t1.document.createElement("div");
        g.id = d1.ID, g.className = a1.className + (a1.cssAnimation ? " nx-with-animation nx-" + a1.cssAnimationStyle : ""), g.style.zIndex = a1.zindex, g.style.padding = a1.distance, a1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on"));
        var b = "string" == typeof a1.position ? a1.position.trim() : "center";
        g.classList.add("nx-position-" + b), g.style.fontFamily = '"' + a1.fontFamily + '", ' + s1;
        var u = "";
        a1.backOverlay && (u = '<div class="' + a1.className + "-overlay" + (a1.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + a1.backOverlayColor + ";animation-duration:" + a1.cssAnimationDuration + 'ms;"></div>');
        var y = "";
        "function" == typeof m && (y = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + a1.cancelButtonColor + ";background:" + a1.cancelButtonBackground + ";font-size:" + a1.buttonsFontSize + ';">' + l + "</a>");
        var k = "", h = null, C = void 0;
        if (e === f1.Ask || e === f1.Prompt) {
            h = o || "";
            var z = e === f1.Ask ? Math.ceil(1.5 * h.length) : 200 < h.length ? Math.ceil(1.5 * h.length) : 250, S = e === f1.Prompt ? 'value="' + h + '"' : "";
            k = '<div><input id="NXConfirmValidationInput" type="text" ' + S + ' maxlength="' + z + '" style="font-size:' + a1.messageFontSize + ";border-radius: " + a1.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
        }
        if (g.innerHTML = u + '<div class="' + a1.className + '-content" style="width:' + a1.width + "; background:" + a1.backgroundColor + "; animation-duration:" + a1.cssAnimationDuration + "ms; border-radius: " + a1.borderRadius + ';"><div class="' + a1.className + '-head"><h5 style="color:' + a1.titleColor + ";font-size:" + a1.titleFontSize + ';">' + i2 + '</h5><div style="color:' + a1.messageColor + ";font-size:" + a1.messageFontSize + ';">' + n2 + k + '</div></div><div class="' + a1.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof m ? "" : " nx-full") + '" style="color:' + a1.okButtonColor + ";background:" + a1.okButtonBackground + ";font-size:" + a1.buttonsFontSize + ';">' + r + "</a>" + y + "</div></div>", !t1.document.getElementById(g.id)) {
            t1.document.body.appendChild(g);
            var L = t1.document.getElementById(g.id), W = t1.document.getElementById("NXConfirmButtonOk"), I = t1.document.getElementById("NXConfirmValidationInput");
            if (I && (I.focus(), I.setSelectionRange(0, (I.value || "").length), I.addEventListener("keyup", function(t) {
                var i = t.target.value;
                if (e === f1.Ask && i !== h) t.preventDefault(), I.classList.add("nx-validation-failure"), I.classList.remove("nx-validation-success");
                else {
                    e === f1.Ask && (I.classList.remove("nx-validation-failure"), I.classList.add("nx-validation-success"));
                    var a = "enter" === (t.key || "").toLocaleLowerCase("en") || 13 === t.keyCode;
                    a && W.dispatchEvent(new Event("click"));
                }
            })), W.addEventListener("click", function(t) {
                if (e === f1.Ask && h && I) {
                    var i = (I.value || "").toString();
                    if (i !== h) return I.focus(), I.classList.add("nx-validation-failure"), t.stopPropagation(), t.preventDefault(), t.returnValue = !1, t.cancelBubble = !0, !1;
                    I.classList.remove("nx-validation-failure");
                }
                "function" == typeof m && (e === f1.Prompt && I && (C = I.value || ""), m(C)), L.classList.add("nx-remove");
                var n = setTimeout(function() {
                    null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(n));
                }, a1.cssAnimationDuration);
            }), "function" == typeof m) {
                var R = t1.document.getElementById("NXConfirmButtonCancel");
                R.addEventListener("click", function() {
                    "function" == typeof c && (e === f1.Prompt && I && (C = I.value || ""), c(C)), L.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(t));
                    }, a1.cssAnimationDuration);
                });
            }
        }
        a1 = v(!0, a1, x);
    }, P1 = function() {
        return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
    }, U1 = function(e, i, a, o, r) {
        if (!w("body")) return !1;
        n1 || G.Loading.init({});
        var l = v(!0, n1, {});
        if ("object" == typeof i && !Array.isArray(i) || "object" == typeof a && !Array.isArray(a)) {
            var m = {};
            "object" == typeof i ? m = i : "object" == typeof a && (m = a), n1 = v(!0, n1, m);
        }
        var c = "";
        if ("string" == typeof i && 0 < i.length && (c = i), o) {
            c = c.length > n1.messageMaxLength ? N(c).toString().substring(0, n1.messageMaxLength) + "..." : N(c).toString();
            var p = "";
            0 < c.length && (p = '<p id="' + n1.messageID + '" class="nx-loading-message" style="color:' + n1.messageColor + ";font-size:" + n1.messageFontSize + ';">' + c + "</p>"), n1.cssAnimation || (n1.cssAnimationDuration = 0);
            var f = "";
            if (e === x1.Standard) f = W1(n1.svgSize, n1.svgColor);
            else if (e === x1.Hourglass) f = I1(n1.svgSize, n1.svgColor);
            else if (e === x1.Circle) f = R1(n1.svgSize, n1.svgColor);
            else if (e === x1.Arrows) f = A1(n1.svgSize, n1.svgColor);
            else if (e === x1.Dots) f = M(n1.svgSize, n1.svgColor);
            else if (e === x1.Pulse) f = B(n1.svgSize, n1.svgColor);
            else if (e === x1.Custom && null !== n1.customSvgCode && null === n1.customSvgUrl) f = n1.customSvgCode || "";
            else if (e === x1.Custom && null !== n1.customSvgUrl && null === n1.customSvgCode) f = '<img class="nx-custom-loading-icon" width="' + n1.svgSize + '" height="' + n1.svgSize + '" src="' + n1.customSvgUrl + '" alt="Notiflix">';
            else {
                if (e === x1.Custom && (null === n1.customSvgUrl || null === n1.customSvgCode)) return y1('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), !1;
                f = X1(n1.svgSize, "#f8f8f8", "#32c682");
            }
            var d = parseInt((n1.svgSize || "").replace(/[^0-9]/g, "")), b = t1.innerWidth, u = d >= b ? b - 40 + "px" : d + "px", k = '<div style="width:' + u + "; height:" + u + ';" class="' + n1.className + "-icon" + (0 < c.length ? " nx-with-message" : "") + '">' + f + "</div>", h = t1.document.createElement("div");
            if (h.id = g1.ID, h.className = n1.className + (n1.cssAnimation ? " nx-with-animation" : "") + (n1.clickToClose ? " nx-loading-click-to-close" : ""), h.style.zIndex = n1.zindex, h.style.background = n1.backgroundColor, h.style.animationDuration = n1.cssAnimationDuration + "ms", h.style.fontFamily = '"' + n1.fontFamily + '", ' + s1, h.style.display = "flex", h.style.flexWrap = "wrap", h.style.flexDirection = "column", h.style.alignItems = "center", h.style.justifyContent = "center", n1.rtl && (h.setAttribute("dir", "rtl"), h.classList.add("nx-rtl-on")), h.innerHTML = k + p, !t1.document.getElementById(h.id) && (t1.document.body.appendChild(h), n1.clickToClose)) {
                var C = t1.document.getElementById(h.id);
                C.addEventListener("click", function() {
                    h.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== h.parentNode && (h.parentNode.removeChild(h), clearTimeout(t));
                    }, n1.cssAnimationDuration);
                });
            }
        } else if (t1.document.getElementById(g1.ID)) var z = t1.document.getElementById(g1.ID), S = setTimeout(function() {
            z.classList.add("nx-remove");
            var t = setTimeout(function() {
                null !== z.parentNode && (z.parentNode.removeChild(z), clearTimeout(t));
            }, n1.cssAnimationDuration);
            clearTimeout(S);
        }, r);
        n1 = v(!0, n1, l);
    }, V1 = function(e) {
        "string" != typeof e && (e = "");
        var i = t1.document.getElementById(g1.ID);
        if (i) {
            if (0 < e.length) {
                e = e.length > n1.messageMaxLength ? N(e).substring(0, n1.messageMaxLength) + "..." : N(e);
                var a = i.getElementsByTagName("p")[0];
                if (a) a.innerHTML = e;
                else {
                    var o = t1.document.createElement("p");
                    o.id = n1.messageID, o.className = "nx-loading-message nx-loading-message-new", o.style.color = n1.messageColor, o.style.fontSize = n1.messageFontSize, o.innerHTML = e, i.appendChild(o);
                }
            } else y1("Where is the new message?");
        }
    }, q1 = function() {
        return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
    }, Q = 0, Y1 = function(e3, i3, a4, n3, r, l) {
        var m;
        if (Array.isArray(a4)) {
            if (1 > a4.length) return y1("Array of HTMLElements should contains at least one HTMLElement."), !1;
            m = a4;
        } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, a4)) {
            if (1 > a4.length) return y1("NodeListOf<HTMLElement> should contains at least one HTMLElement."), !1;
            m = Array.prototype.slice.call(a4);
        } else {
            var c = "string" != typeof a4 || 1 > (a4 || "").length || 1 === (a4 || "").length && ("#" === (a4 || "")[0] || "." === (a4 || "")[0]);
            if (c) return y1("The selector parameter must be a string and matches a specified CSS selector(s)."), !1;
            var p = t1.document.querySelectorAll(a4);
            if (1 > p.length) return y1('You called the "Notiflix.Block..." function with "' + a4 + '" selector, but there is no such element(s) in the document.'), !1;
            m = p;
        }
        o1 || G.Block.init({});
        var f = v(!0, o1, {});
        if ("object" == typeof n3 && !Array.isArray(n3) || "object" == typeof r && !Array.isArray(r)) {
            var d = {};
            "object" == typeof n3 ? d = n3 : "object" == typeof r && (d = r), o1 = v(!0, o1, d);
        }
        var x = "";
        "string" == typeof n3 && 0 < n3.length && (x = n3), o1.cssAnimation || (o1.cssAnimationDuration = 0);
        var g = u1.className;
        "string" == typeof o1.className && (g = o1.className.trim());
        var h = "number" == typeof o1.querySelectorLimit ? o1.querySelectorLimit : 200, C = (m || []).length >= h ? h : m.length, z = "nx-block-temporary-position";
        if (e3) {
            for(var S, L = [
                "area",
                "base",
                "br",
                "col",
                "command",
                "embed",
                "hr",
                "img",
                "input",
                "keygen",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
                "html",
                "head",
                "title",
                "script",
                "style",
                "iframe"
            ], X = 0; X < C; X++)if (S = m[X], S) {
                if (-1 < L.indexOf(S.tagName.toLocaleLowerCase("en"))) break;
                var D = S.querySelectorAll("[id^=" + u1.ID + "]");
                if (1 > D.length) {
                    var T = "";
                    i3 && (i3 === b1.Hourglass ? T = I1(o1.svgSize, o1.svgColor) : i3 === b1.Circle ? T = R1(o1.svgSize, o1.svgColor) : i3 === b1.Arrows ? T = A1(o1.svgSize, o1.svgColor) : i3 === b1.Dots ? T = M(o1.svgSize, o1.svgColor) : i3 === b1.Pulse ? T = B(o1.svgSize, o1.svgColor) : T = W1(o1.svgSize, o1.svgColor));
                    var F = '<span class="' + g + '-icon" style="width:' + o1.svgSize + ";height:" + o1.svgSize + ';">' + T + "</span>", E = "";
                    0 < x.length && (x = x.length > o1.messageMaxLength ? N(x).substring(0, o1.messageMaxLength) + "..." : N(x), E = '<span style="font-size:' + o1.messageFontSize + ";color:" + o1.messageColor + ';" class="' + g + '-message">' + x + "</span>"), Q++;
                    var j = t1.document.createElement("div");
                    j.id = u1.ID + "-" + Q, j.className = g + (o1.cssAnimation ? " nx-with-animation" : ""), j.style.position = o1.position, j.style.zIndex = o1.zindex, j.style.background = o1.backgroundColor, j.style.animationDuration = o1.cssAnimationDuration + "ms", j.style.fontFamily = '"' + o1.fontFamily + '", ' + s1, j.style.display = "flex", j.style.flexWrap = "wrap", j.style.flexDirection = "column", j.style.alignItems = "center", j.style.justifyContent = "center", o1.rtl && (j.setAttribute("dir", "rtl"), j.classList.add("nx-rtl-on")), j.innerHTML = F + E;
                    var O = t1.getComputedStyle(S).getPropertyValue("position"), H = "string" == typeof O ? O.toLocaleLowerCase("en") : "relative", P = Math.round(1.25 * parseInt(o1.svgSize)) + 40, U = S.offsetHeight || 0, V = "";
                    P > U && (V = "min-height:" + P + "px;");
                    var q = "";
                    q = S.getAttribute("id") ? "#" + S.getAttribute("id") : S.classList[0] ? "." + S.classList[0] : (S.tagName || "").toLocaleLowerCase("en");
                    var Y = "", K = -1 >= [
                        "absolute",
                        "relative",
                        "fixed",
                        "sticky"
                    ].indexOf(H);
                    if (K || 0 < V.length) {
                        if (!w("head")) return !1;
                        K && (Y = "position:relative!important;");
                        var $ = '<style id="Style-' + u1.ID + "-" + Q + '">' + q + "." + z + "{" + Y + V + "}</style>", J = t1.document.createRange();
                        J.selectNode(t1.document.head);
                        var Z = J.createContextualFragment($);
                        t1.document.head.appendChild(Z), S.classList.add(z);
                    }
                    S.appendChild(j);
                }
            }
        } else var _ = function(e) {
            var i = setTimeout(function() {
                null !== e.parentNode && e.parentNode.removeChild(e);
                var a = e.getAttribute("id"), n = t1.document.getElementById("Style-" + a);
                n && null !== n.parentNode && n.parentNode.removeChild(n), clearTimeout(i);
            }, o1.cssAnimationDuration);
        }, tt = function(t) {
            if (t && 0 < t.length) for(var e, n = 0; n < t.length; n++)e = t[n], e && (e.classList.add("nx-remove"), _(e));
            else "string" == typeof a4 ? k1('"Notiflix.Block.remove();" function called with "' + a4 + '" selector, but this selector does not have a "Block" element to remove.') : k1('"Notiflix.Block.remove();" function called with "' + a4 + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
        }, et = function(t) {
            var e = setTimeout(function() {
                t.classList.remove(z), clearTimeout(e);
            }, o1.cssAnimationDuration + 300);
        }, it = setTimeout(function() {
            for(var t, e = 0; e < C; e++)t = m[e], t && (et(t), D = t.querySelectorAll("[id^=" + u1.ID + "]"), tt(D));
            clearTimeout(it);
        }, l);
        o1 = v(!0, o1, f);
    }, G = {
        Notify: {
            init: function(t) {
                e1 = v(!0, m1, t), h1(D1, "NotiflixNotifyInternalCSS");
            },
            merge: function(t) {
                return e1 ? void (e1 = v(!0, e1, t)) : (y1("You have to initialize the Notify module before call Merge function."), !1);
            },
            success: function(t, e, i) {
                F1(l1.Success, t, e, i);
            },
            failure: function(t, e, i) {
                F1(l1.Failure, t, e, i);
            },
            warning: function(t, e, i) {
                F1(l1.Warning, t, e, i);
            },
            info: function(t, e, i) {
                F1(l1.Info, t, e, i);
            }
        },
        Report: {
            init: function(t) {
                i1 = v(!0, p1, t), h1(E1, "NotiflixReportInternalCSS");
            },
            merge: function(t) {
                return i1 ? void (i1 = v(!0, i1, t)) : (y1("You have to initialize the Report module before call Merge function."), !1);
            },
            success: function(t, e, i, a, n) {
                j1(c1.Success, t, e, i, a, n);
            },
            failure: function(t, e, i, a, n) {
                j1(c1.Failure, t, e, i, a, n);
            },
            warning: function(t, e, i, a, n) {
                j1(c1.Warning, t, e, i, a, n);
            },
            info: function(t, e, i, a, n) {
                j1(c1.Info, t, e, i, a, n);
            }
        },
        Confirm: {
            init: function(t) {
                a1 = v(!0, d1, t), h1(O1, "NotiflixConfirmInternalCSS");
            },
            merge: function(t) {
                return a1 ? void (a1 = v(!0, a1, t)) : (y1("You have to initialize the Confirm module before call Merge function."), !1);
            },
            show: function(t, e, i, a, n, o, r) {
                H1(f1.Show, t, e, null, i, a, n, o, r);
            },
            ask: function(t, e, i, a, n, o, r, s) {
                H1(f1.Ask, t, e, i, a, n, o, r, s);
            },
            prompt: function(t, e, i, a, n, o, r, s) {
                H1(f1.Prompt, t, e, i, a, n, o, r, s);
            }
        },
        Loading: {
            init: function(t) {
                n1 = v(!0, g1, t), h1(P1, "NotiflixLoadingInternalCSS");
            },
            merge: function(t) {
                return n1 ? void (n1 = v(!0, n1, t)) : (y1("You have to initialize the Loading module before call Merge function."), !1);
            },
            standard: function(t, e) {
                U1(x1.Standard, t, e, !0, 0);
            },
            hourglass: function(t, e) {
                U1(x1.Hourglass, t, e, !0, 0);
            },
            circle: function(t, e) {
                U1(x1.Circle, t, e, !0, 0);
            },
            arrows: function(t, e) {
                U1(x1.Arrows, t, e, !0, 0);
            },
            dots: function(t, e) {
                U1(x1.Dots, t, e, !0, 0);
            },
            pulse: function(t, e) {
                U1(x1.Pulse, t, e, !0, 0);
            },
            custom: function(t, e) {
                U1(x1.Custom, t, e, !0, 0);
            },
            notiflix: function(t, e) {
                U1(x1.Notiflix, t, e, !0, 0);
            },
            remove: function(t) {
                "number" != typeof t && (t = 0), U1(null, null, null, !1, t);
            },
            change: function(t) {
                V1(t);
            }
        },
        Block: {
            init: function(t) {
                o1 = v(!0, u1, t), h1(q1, "NotiflixBlockInternalCSS");
            },
            merge: function(t) {
                return o1 ? void (o1 = v(!0, o1, t)) : (y1('You have to initialize the "Notiflix.Block" module before call Merge function.'), !1);
            },
            standard: function(t, e, i) {
                Y1(!0, b1.Standard, t, e, i);
            },
            hourglass: function(t, e, i) {
                Y1(!0, b1.Hourglass, t, e, i);
            },
            circle: function(t, e, i) {
                Y1(!0, b1.Circle, t, e, i);
            },
            arrows: function(t, e, i) {
                Y1(!0, b1.Arrows, t, e, i);
            },
            dots: function(t, e, i) {
                Y1(!0, b1.Dots, t, e, i);
            },
            pulse: function(t, e, i) {
                Y1(!0, b1.Pulse, t, e, i);
            },
            remove: function(t, e) {
                "number" != typeof e && (e = 0), Y1(!1, null, t, null, null, e);
            }
        }
    };
    return "object" == typeof t1.Notiflix ? v(!0, t1.Notiflix, {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
    }) : {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
    };
});

},{}],"2KWfc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showModal", ()=>showModal);
var _trailer = require("../trailer");
var _refs = require("../refs");
var _notiflix = require("notiflix");
var _notiflixDefault = parcelHelpers.interopDefault(_notiflix);
var _renderModal = require("../render-modal");
const { allCardsSection , modal , overflow , closeBtn , innerModal , cursor , body  } = (0, _refs.refs);
const queueJSON = localStorage.getItem("queue");
const watchedJSON = localStorage.getItem("watched");
let queue = JSON.parse(queueJSON) || [];
let watched = JSON.parse(watchedJSON) || [];
allCardsSection.addEventListener("click", showModal);
function updateMoviesList() {
    const allMoviesListFromStorage = localStorage.getItem("currentFilmList");
    const allMoviesList = JSON.parse(allMoviesListFromStorage);
    return allMoviesList;
}
function addToWatched(e) {
    e.target.innerText = "remove from watched";
    const currentList = updateMoviesList();
    const clickedFilm = currentList[e.target.dataset.id];
    watched.push(clickedFilm);
    localStorage.setItem("watched", JSON.stringify(watched));
    e.target.addEventListener("click", removeFromWatched);
    e.target.removeEventListener("click", addToWatched);
    (0, _notiflixDefault.default).Notify.success("Added to watched!");
}
function removeFromWatched(e) {
    e.target.innerText = "add to watched";
    const currentList = updateMoviesList();
    const clickedFilm = currentList[e.target.dataset.id];
    watched = watched.filter((film)=>film.id !== clickedFilm.id);
    localStorage.setItem("watched", JSON.stringify(watched));
    e.target.removeEventListener("click", removeFromWatched);
    e.target.addEventListener("click", addToWatched);
    (0, _notiflixDefault.default).Notify.success("Removed from watched!");
}
function addToQueue(e) {
    e.target.innerText = "remove from queue";
    const currentList = updateMoviesList();
    const clickedFilm = currentList[e.target.dataset.id];
    queue.push(clickedFilm);
    localStorage.setItem("queue", JSON.stringify(queue));
    e.target.addEventListener("click", removeFromQueue);
    e.target.removeEventListener("click", addToQueue);
    (0, _notiflixDefault.default).Notify.success("Added to queue!");
}
function removeFromQueue(e) {
    e.target.innerText = "add to queue";
    const currentList = updateMoviesList();
    const clickedFilm = currentList[e.target.dataset.id];
    queue = queue.filter((film)=>film.id !== clickedFilm.id);
    localStorage.setItem("queue", JSON.stringify(queue));
    e.target.removeEventListener("click", removeFromQueue);
    e.target.addEventListener("click", addToQueue);
    (0, _notiflixDefault.default).Notify.success("Removed from queue!");
}
function showModal(e) {
    if (e.currentTarget !== e.target) {
        modal.classList.remove("hidden-modal");
        overflow.classList.remove("hidden-modal");
        allCardsSection.removeEventListener("click", showModal);
        document.addEventListener("keydown", closeModalOnEsc);
        closeBtn.addEventListener("click", closeModal);
        overflow.addEventListener("click", closeModalOverflow);
        const id = e.target.nodeName === "DIV" ? e.target.dataset.id : e.target.closest("div").dataset.id;
        createModal(id);
        const top = window.scrollY;
        body.style.position = "fixed";
        body.style.top = `-${top}px`;
    }
}
function closeModalOverflow(e) {
    if (e.currentTarget === e.target) closeModal();
}
function closeModalOnEsc(e) {
    if (e.code === "Escape") closeModal();
}
function closeModal() {
    modal.classList.add("hidden-modal");
    overflow.classList.add("hidden-modal");
    allCardsSection.addEventListener("click", showModal);
    document.removeEventListener("keydown", closeModal);
    closeBtn.removeEventListener("click", closeModal);
    overflow.removeEventListener("click", closeModalOverflow);
    const top = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(top || "0") * -1);
}
function createModal(id) {
    const currentList = updateMoviesList();
    const rendered = (0, _renderModal.renderModal)(currentList, id, watched, queue);
    innerModal.innerHTML = rendered[0];
    addListeners(rendered[1], rendered[2]);
}
function addListeners(isInQueue, isInWatched) {
    const watchedBtn = document.querySelector(".modal__btn-watched");
    const queueBtn = document.querySelector(".modal__btn-queue");
    const watchTrailerBtn = document.querySelector(".modal__btn-watch-trailer");
    isInQueue ? queueBtn.addEventListener("click", removeFromQueue) : queueBtn.addEventListener("click", addToQueue);
    isInWatched ? watchedBtn.addEventListener("click", removeFromWatched) : watchedBtn.addEventListener("click", addToWatched);
    watchTrailerBtn.addEventListener("click", (0, _trailer.watchTrailer));
    [
        watchTrailerBtn,
        queueBtn,
        watchedBtn,
        closeBtn
    ].forEach((btn)=>{
        btn.addEventListener("mouseover", ()=>{
            cursor.classList.add("hover");
        });
        btn.addEventListener("mouseleave", ()=>{
            cursor.classList.remove("hover");
        });
    });
}

},{"../trailer":"boCse","../refs":"2WoF2","notiflix":"5z0Oc","../render-modal":"7JSdB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"boCse":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watchTrailer", ()=>watchTrailer);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _refs = require("./refs");
const { trailerOverflow , trailerModal , trailerDiv , trailerCloseBtn , modal , overflow ,  } = (0, _refs.refs);
async function watchTrailer(e) {
    const trailers = await fetchTrailer(e.target.dataset.id);
    modal.classList.add("move-left");
    overflow.classList.add("move-left");
    trailerModal.classList.remove("move-right");
    trailerOverflow.classList.remove("move-right");
    document.addEventListener("keydown", closeTrailerOnEsc);
    overflow.addEventListener("click", closeTrailerOverflow);
    trailerCloseBtn.addEventListener("click", closeTrailer);
    renderTrailer(trailers);
}
function renderTrailer(results) {
    trailerDiv.innerHTML = `
  <iframe src="http://2221407734375553.svetacdn.in/h9Ggt3pCGbiS?imdb_id=${results}"  width="840" height="560" frameborder="0" allowfullscreen></iframe>
  `;
}
function closeTrailerOverflow(e) {
    if (e.currentTarget === e.target) closeTrailer();
}
function closeTrailerOnEsc(e) {
    if (e.code === "Escape") closeTrailer();
}
function closeTrailer() {
    trailerModal.classList.add("move-right");
    trailerOverflow.classList.add("move-right");
    modal.classList.remove("move-left");
    overflow.classList.remove("move-left");
    document.removeEventListener("keydown", closeTrailerOnEsc);
    overflow.removeEventListener("click", closeTrailerOverflow);
    trailerCloseBtn.removeEventListener("click", closeTrailer);
    trailerModal.addEventListener("transitionend", stopVideo);
}
function stopVideo() {
    trailerDiv.innerHTML = "";
    trailerModal.removeEventListener("transitionend", stopVideo);
}
async function fetchTrailer(id) {
    try {
        const result = await (0, _axiosDefault.default).get(`https://api.themoviedb.org/3/movie/${id}?api_key=2d95e97f255e7635245c1980eab541d3`);
        return result.data.imdb_id;
    } catch (error) {
        console.log(error);
    }
}

},{"axios":"jo6P5","./refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JSdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderModal", ()=>renderModal);
var _emptyPosterJpg = require("../images/empty-photo/empty-poster.jpg");
var _emptyPosterJpgDefault = parcelHelpers.interopDefault(_emptyPosterJpg);
function renderModal(list, id, watched, queue) {
    const { poster_path , original_title , title , genre_ids , vote_average , vote_count , popularity , overview , id: film_id ,  } = list[id];
    const genres = JSON.parse(localStorage.getItem("allGenres"));
    const finalGenres = [];
    genre_ids.forEach((idx)=>{
        finalGenres.push(genres.find((genre)=>genre.id === idx).name);
    });
    const foundInWatched = watched.find((film)=>film.id === film_id);
    const foundInQueue = queue.find((film)=>film.id === film_id);
    const isInQueue = !!foundInQueue;
    const isInWatched = !!foundInWatched;
    const queueBtnMarkup = isInQueue ? `<button class="modal__btn-queue interactive-button" data-id=${id}>remove from queue</button>` : `<button class="modal__btn-queue interactive-button" data-id=${id}>add to queue</button>`;
    const watchedBtnMarkup = isInWatched ? `<button class="modal__btn-watched interactive-button" data-id=${id}>
        remove from watched
      </button>` : `<button class="modal__btn-watched interactive-button" data-id=${id}>
       add to watched
      </button>`;
    const voteCount = vote_count && vote_average ? `<li class="modal__item">
          <div class="modal__item-first">Vote / Votes</div>
          <div class="modal__item-votes">
            <span class="modal__item-bg modal__item--accent">${vote_average.toFixed(1)}</span> /
            <span class="modal__item-bg modal__item--grey">${vote_count}</span>
          </div>
        </li>` : "";
    const popularityMarkup = popularity ? `<li class="modal__item">
          <div class="modal__item-first">Popularity</div>
          <div>${popularity.toFixed(1)}</div>
        </li>` : "";
    const genresMarkup = finalGenres.length ? `<li class="modal__item">
          <div class="modal__item-first">Genre</div>
          <div>${finalGenres.join(", ")}</div>
        </li>` : "";
    const originalTitleMarkup = original_title ? `<li class="modal__item">
          <div class="modal__item-first">Original Title</div>
          <div class="modal__item-title">${original_title}</div>
        </li>` : "";
    const overviewMarkup = overview ? `<div class="modal__about-info">
        <p class="modal__about-headline">About</p>
        <p class="modal__about-text">
          ${overview}
        </p>
      </div>` : "";
    const photoMarkup = poster_path ? `<div class="modal__img">
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
    </div>` : `<div class="modal__img">
      <img src="${0, _emptyPosterJpgDefault.default}" alt="photo coming soon" />
    </div>`;
    return [
        `${photoMarkup}
    <div class="modal__about">
      <div class="modal__headline">${title}</div>
      <ul class="modal__list">
        ${voteCount}
        ${popularityMarkup}
        ${originalTitleMarkup}
        ${genresMarkup}
      </ul> 
      ${overviewMarkup}
          <div class="modal__buttons">
      <div class="modal__add-btns">
        ${watchedBtnMarkup}
        ${queueBtnMarkup}
      </div>
      <button class='modal_btn-watched interactive-button modal__btn-watch-trailer' data-id=${film_id}>watch movie</button>
    </div>
    </div>
    `,
        isInQueue,
        isInWatched, 
    ];
}

},{"../images/empty-photo/empty-poster.jpg":"6V9sZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TESp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _notiflix = require("notiflix");
var _notiflixDefault = parcelHelpers.interopDefault(_notiflix);
var _refs = require("./refs");
var _renderMarkup = require("./render-markup");
var _init = require("./init");
var _pagination = require("./main-page-only/pagination");
(0, _refs.refs).headerFormInput.addEventListener("submit", onSubmitSearchForm);
(0, _refs.refs).headerFormInput.addEventListener("mouseover", ()=>{
    (0, _refs.refs).cursor.classList.add("hover");
});
(0, _refs.refs).headerFormInput.addEventListener("mouseleave", ()=>{
    (0, _refs.refs).cursor.classList.remove("hover");
});
async function onSubmitSearchForm(event) {
    event.preventDefault();
    try {
        (0, _init.moviesApiService).query = event.target.elements.searchQuery.value.trim().toLowerCase();
        if (!(0, _init.moviesApiService).searchQuery) {
            (0, _refs.refs).noResultsText.classList.remove("visually-hidden");
            return;
        } else (0, _refs.refs).noResultsText.classList.add("visually-hidden");
        (0, _init.moviesApiService).resetPage();
        const films = await (0, _init.moviesApiService).fetchMoviesByKeyword();
        if (!films.data.total_results) {
            (0, _refs.refs).noResultsText.classList.remove("visually-hidden");
            (0, _refs.refs).headerFormInput.reset();
            return;
        }
        (0, _refs.refs).allCardsSection.innerHTML = "";
        (0, _refs.refs).allCardsSection.insertAdjacentHTML("beforeend", (0, _renderMarkup.renderSearchResult)(films.data.results).join(""));
        (0, _refs.refs).headerFormInput.reset();
        setTimeout((0, _pagination.createPagination)("search"), 0);
    } catch (error) {
        (0, _notiflixDefault.default).Notify.failure(error);
    }
}

},{"notiflix":"5z0Oc","./refs":"2WoF2","./render-markup":"jCozP","./init":"l17dj","./main-page-only/pagination":"cP4Qz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3v1v0":[function(require,module,exports) {
var _refs = require("./refs");
var _deviceDetection = require("./device-detection");
(function createCursor() {
    const { cursor , cursorinner  } = (0, _refs.refs);
    const a = document.querySelectorAll("a");
    if ((0, _deviceDetection.device).device.type !== "desktop") return;
    else {
        document.addEventListener("mousemove", function(e) {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        });
        document.addEventListener("mousemove", function(e) {
            const x = e.clientX;
            const y = e.clientY;
            cursorinner.style.left = x + "px";
            cursorinner.style.top = y + "px";
        });
        document.addEventListener("mousedown", function() {
            cursor.classList.add("click");
            cursorinner.classList.add("cursorinnerhover");
        });
        document.addEventListener("mouseup", function() {
            cursor.classList.remove("click");
            cursorinner.classList.remove("cursorinnerhover");
        });
        a.forEach((item)=>{
            item.addEventListener("mouseover", ()=>{
                cursor.classList.add("hover");
            });
            item.addEventListener("mouseleave", ()=>{
                cursor.classList.remove("hover");
            });
        });
    }
})();

},{"./refs":"2WoF2","./device-detection":"gOa4x"}],"gOa4x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "device", ()=>device);
var _deviceDetectorJs = require("device-detector-js");
var _deviceDetectorJsDefault = parcelHelpers.interopDefault(_deviceDetectorJs);
const deviceDetector = new (0, _deviceDetectorJsDefault.default)();
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
const device = deviceDetector.parse(userAgent);

},{"device-detector-js":"7LGnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7LGnM":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const client_1 = __importDefault(require("./parsers/client"));
const device_1 = __importDefault(require("./parsers/device"));
const operating_system_1 = __importDefault(require("./parsers/operating-system"));
const vendor_fragment_1 = __importDefault(require("./parsers/vendor-fragment"));
const browser_1 = __importDefault(require("./parsers/client/browser"));
const BotParser = require("./parsers/bot");
const user_agent_1 = require("./utils/user-agent");
const version_compare_1 = require("./utils/version-compare");
class DeviceDetector {
    constructor(options){
        // Default options
        this.options = {
            skipBotDetection: false,
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            const result = {
                client: this.clientParser.parse(userAgent),
                os: this.operatingSystemParser.parse(userAgent),
                device: this.deviceParser.parse(userAgent),
                bot: this.options.skipBotDetection ? null : this.botParser.parse(userAgent)
            };
            const osName = (_a = result.os) === null || _a === void 0 ? void 0 : _a.name;
            const osVersion = (_b = result.os) === null || _b === void 0 ? void 0 : _b.version;
            const osFamily = operating_system_1.default.getOsFamily(osName || "");
            if (!((_c = result.device) === null || _c === void 0 ? void 0 : _c.brand)) {
                const brand = this.vendorFragmentParser.parse(userAgent);
                if (brand) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.brand = brand;
                }
            }
            /**
             * Assume all devices running iOS / Mac OS are from Apple
             */ if (!((_d = result.device) === null || _d === void 0 ? void 0 : _d.brand) && [
                "Apple TV",
                "watchOS",
                "iOS",
                "Mac"
            ].includes(osName || "")) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.brand = "Apple";
            }
            /**
             * Chrome on Android passes the device type based on the keyword 'Mobile'
             * If it is present the device should be a smartphone, otherwise it's a tablet
             * See https://developer.chrome.com/multidevice/user-agent#chrome_for_android_user_agent
             * Note: We do not check for browser (family) here, as there might be mobile apps using Chrome, that won't have
             *       a detected browser, but can still be detected. So we check the useragent for Chrome instead.
             */ if (!((_e = result.device) === null || _e === void 0 ? void 0 : _e.type) && osFamily === "Android" && user_agent_1.userAgentParser("Chrome/[\\.0-9]*", userAgent)) {
                if (user_agent_1.userAgentParser("Chrome/[.0-9]* (?:Mobile|eliboM)", userAgent)) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "smartphone";
                } else if (user_agent_1.userAgentParser("Chrome/[.0-9]* (?!Mobile)", userAgent)) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "tablet";
                }
            }
            /**
             * Some user agents simply contain the fragment 'Android; Tablet;' or 'Opera Tablet', so we assume those devices are tablets
             */ if (!((_f = result.device) === null || _f === void 0 ? void 0 : _f.type) && this.hasAndroidTabletFragment(userAgent) || user_agent_1.userAgentParser("Opera Tablet", userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "tablet";
            }
            /**
             * Some user agents simply contain the fragment 'Android; Mobile;', so we assume those devices are smartphones
             */ if (!((_g = result.device) === null || _g === void 0 ? void 0 : _g.type) && this.hasAndroidMobileFragment(userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "smartphone";
            }
            /**
             * Android up to 3.0 was designed for smartphones only. But as 3.0, which was tablet only, was published
             * too late, there were a bunch of tablets running with 2.x
             * With 4.0 the two trees were merged and it is for smartphones and tablets
             *
             * So were are expecting that all devices running Android < 2 are smartphones
             * Devices running Android 3.X are tablets. Device type of Android 2.X and 4.X+ are unknown
             */ if (!((_h = result.device) === null || _h === void 0 ? void 0 : _h.type) && osName === "Android" && osVersion !== "") {
                if (version_compare_1.versionCompare(osVersion, "2.0") === -1) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "smartphone";
                } else if (version_compare_1.versionCompare(osVersion, "3.0") >= 0 && version_compare_1.versionCompare(osVersion, "4.0") === -1) {
                    if (!result.device) result.device = this.createDeviceObject();
                    result.device.type = "tablet";
                }
            }
            /**
             * All detected feature phones running android are more likely smartphones
             */ if (((_j = result.device) === null || _j === void 0 ? void 0 : _j.type) === "feature phone" && osFamily === "Android") result.device.type = "smartphone";
            /**
             * According to http://msdn.microsoft.com/en-us/library/ie/hh920767(v=vs.85).aspx
             * Internet Explorer 10 introduces the "Touch" UA string token. If this token is present at the end of the
             * UA string, the computer has touch capability, and is running Windows 8 (or later).
             * This UA string will be transmitted on a touch-enabled system running Windows 8 (RT)
             *
             * As most touch enabled devices are tablets and only a smaller part are desktops/notebooks we assume that
             * all Windows 8 touch devices are tablets.
             */ if (!((_k = result.device) === null || _k === void 0 ? void 0 : _k.type) && this.isToucheEnabled(userAgent) && (osName === "Windows RT" || osName === "Windows" && version_compare_1.versionCompare(osVersion, "8.0") >= 0)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "tablet";
            }
            /**
             * All devices running Opera TV Store are assumed to be televisions
             */ if (user_agent_1.userAgentParser("Opera TV Store", userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "television";
            }
            /**
             * All devices running Tizen TV or SmartTV are assumed to be televisions
             */ if (user_agent_1.userAgentParser("SmartTV|Tizen.+ TV .+$", userAgent)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "television";
            }
            /**
             * Devices running Kylo or Espital TV Browsers are assumed to be televisions
             */ if (!((_l = result.device) === null || _l === void 0 ? void 0 : _l.type) && [
                "Kylo",
                "Espial TV Browser"
            ].includes(((_m = result.client) === null || _m === void 0 ? void 0 : _m.name) || "")) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "television";
            }
            /**
             * Set device type to desktop if string ua contains desktop
             */ const hasDesktop = "desktop" !== ((_o = result.device) === null || _o === void 0 ? void 0 : _o.type) && null !== user_agent_1.userAgentParser("Desktop", userAgent) && this.hasDesktopFragment(userAgent);
            if (hasDesktop) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "desktop";
            }
            // set device type to desktop for all devices running a desktop os that were not detected as an other device type
            if (!((_p = result.device) === null || _p === void 0 ? void 0 : _p.type) && this.isDesktop(result, osFamily)) {
                if (!result.device) result.device = this.createDeviceObject();
                result.device.type = "desktop";
            }
            return result;
        };
        this.hasAndroidMobileFragment = (userAgent)=>{
            return user_agent_1.userAgentParser("Android( [.0-9]+)?; Mobile;", userAgent);
        };
        this.hasAndroidTabletFragment = (userAgent)=>{
            return user_agent_1.userAgentParser("Android( [.0-9]+)?; Tablet;", userAgent);
        };
        this.hasDesktopFragment = (userAgent)=>{
            return user_agent_1.userAgentParser("Desktop (x(?:32|64)|WOW64);", userAgent);
        };
        this.isDesktop = (result, osFamily)=>{
            if (!result.os) return false;
            // Check for browsers available for mobile devices only
            if (this.usesMobileBrowser(result.client)) return false;
            return operating_system_1.default.getDesktopOsArray().includes(osFamily);
        };
        this.usesMobileBrowser = (client)=>{
            var _a, _b;
            if (!client) return false;
            return ((_a = client) === null || _a === void 0 ? void 0 : _a.type) === "browser" && browser_1.default.isMobileOnlyBrowser((_b = client) === null || _b === void 0 ? void 0 : _b.name);
        };
        this.isToucheEnabled = (userAgent)=>{
            return user_agent_1.userAgentParser("Touch", userAgent);
        };
        this.createDeviceObject = ()=>({
                type: "",
                brand: "",
                model: ""
            });
        this.options = Object.assign(Object.assign({}, this.options), options);
        this.clientParser = new client_1.default(this.options);
        this.deviceParser = new device_1.default();
        this.operatingSystemParser = new operating_system_1.default(this.options);
        this.vendorFragmentParser = new vendor_fragment_1.default();
        this.botParser = new BotParser();
    }
}
module.exports = DeviceDetector;

},{"./parsers/client":"1BZy1","./parsers/device":"nlCs9","./parsers/operating-system":"gSgGA","./parsers/vendor-fragment":"9mXz9","./parsers/client/browser":"fiq9P","./parsers/bot":"gL7by","./utils/user-agent":"5QvTF","./utils/version-compare":"glMh9"}],"1BZy1":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const browser_1 = __importDefault(require("./browser"));
const mobile_apps_1 = __importDefault(require("./mobile-apps"));
const feed_readers_1 = __importDefault(require("./feed-readers"));
const libraries_1 = __importDefault(require("./libraries"));
const media_players_1 = __importDefault(require("./media-players"));
const personal_information_managers_1 = __importDefault(require("./personal-information-managers"));
const clientParsers = [
    feed_readers_1.default,
    mobile_apps_1.default,
    media_players_1.default,
    personal_information_managers_1.default,
    browser_1.default,
    libraries_1.default
];
class ClientParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            for (const Parser of clientParsers){
                const parser = new Parser(this.options);
                const client = parser.parse(userAgent);
                if (client.type !== "") return client;
            }
            return null;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = ClientParser;

},{"./browser":"fiq9P","./mobile-apps":"4mk08","./feed-readers":"7Ci9m","./libraries":"dWoue","./media-players":"lvhXV","./personal-information-managers":"d7jwn"}],"fiq9P":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const browsers_json_1 = __importDefault(require("../../fixtures/regexes/client/browsers.json"));
const browser_engine_json_1 = __importDefault(require("../../fixtures/regexes/client/browser_engine.json"));
const available_browsers_json_1 = __importDefault(require("./fixtures/available-browsers.json"));
const mobile_only_browsers_json_1 = __importDefault(require("./fixtures/mobile-only-browsers.json"));
class BrowserParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: "",
                engine: "",
                engineVersion: ""
            };
            for (const browser of browsers_json_1.default){
                const match = user_agent_1.userAgentParser(browser.regex, userAgent);
                if (!match) continue;
                const vrpVersion = variable_replacement_1.variableReplacement(browser.version, match);
                const version = version_1.formatVersion(vrpVersion, this.options.versionTruncation);
                const shortVersion = version && parseFloat(version_1.formatVersion(vrpVersion, 1)) || "";
                if (browser.engine) {
                    result.engine = browser.engine.default;
                    if (browser.engine && browser.engine.versions && shortVersion) {
                        const sortedEngineVersions = Object.entries(browser.engine.versions).sort((a, b)=>{
                            return parseFloat(a[0]) > parseFloat(b[0]) ? 1 : -1;
                        });
                        for (const [versionThreshold, engineByVersion] of sortedEngineVersions)if (parseFloat(versionThreshold) <= shortVersion) result.engine = engineByVersion || "";
                    }
                }
                result.type = "browser";
                result.name = variable_replacement_1.variableReplacement(browser.name, match);
                result.version = version;
                break;
            }
            if (!result.engine) for (const browserEngine of browser_engine_json_1.default){
                let match = null;
                try {
                    match = RegExp(browserEngine.regex, "i").exec(userAgent);
                } catch (_a) {
                // TODO: find out why it fails in some browsers
                }
                if (!match) continue;
                result.engine = browserEngine.name;
                break;
            }
            result.engineVersion = version_1.formatVersion(version_1.parseBrowserEngineVersion(userAgent, result.engine), this.options.versionTruncation);
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = BrowserParser;
BrowserParser.getBrowserShortName = (browserName)=>{
    for (const [shortName, name] of Object.entries(available_browsers_json_1.default)){
        if (name === browserName) return shortName;
    }
    return "";
};
BrowserParser.isMobileOnlyBrowser = (browserName)=>{
    return mobile_only_browsers_json_1.default.includes(BrowserParser.getBrowserShortName(browserName));
};

},{"../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../fixtures/regexes/client/browsers.json":"aW9hq","../../fixtures/regexes/client/browser_engine.json":"4z5BI","./fixtures/available-browsers.json":"aW94u","./fixtures/mobile-only-browsers.json":"4iVdb"}],"5QJ7z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const trim_1 = require("./trim");
exports.formatVersion = (version, versionTruncation)=>{
    if (version === undefined) return "";
    const versionString = trim_1.trim(version, ". ").replace(new RegExp("_", "g"), ".");
    const versionParts = versionString.split(".");
    // Return if the string is not only digits once we removed the dots
    if (!/^\d+$/.test(versionParts.join(""))) return versionString;
    if (versionTruncation !== 0) {
        if (Number.isInteger(parseFloat(versionString))) return parseInt(versionString, 10).toFixed(1);
    }
    if (versionParts.length > 1) {
        if (versionTruncation !== null) return versionParts.slice(0, versionTruncation + 1).join(".");
    }
    return versionString;
};
exports.parseBrowserEngineVersion = (userAgent, engine)=>{
    if (!engine) return "";
    if (engine === "Gecko") {
        const geckoVersionRegex = /[ ](?:rv[: ]([0-9\.]+)).*gecko\/[0-9]{8,10}/i;
        const match = userAgent.match(geckoVersionRegex);
        if (match) return match.pop();
    }
    const regex = new RegExp(`${engine}\\s*\\/?\\s*((?:(?=\\d+\\.\\d)\\d+[.\\d]*|\\d{1,7}(?=(?:\\D|$))))`, "i");
    const match = userAgent.match(regex);
    if (!match) return "";
    return match.pop();
};

},{"./trim":"7qLcu"}],"7qLcu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = (str, char)=>{
    return str.replace(new RegExp("^[" + char + "]+|[" + char + "]+$", "g"), "");
};

},{}],"ixNsu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.variableReplacement = (template, variables)=>{
    const regex = new RegExp(`\\$\\d`, "g");
    if (template === null || template === undefined) return "";
    return template.replace(regex, (match)=>{
        const index = parseInt(match.substr(1), 10);
        const variable = variables[index - 1];
        return variable || "";
    });
};

},{}],"5QvTF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const memory_cache_1 = require("./memory-cache");
const cache = memory_cache_1.memoryCache();
const getRegexInstance = (rawRegex)=>{
    const cachedRegexInstance = cache.get(rawRegex);
    if (cachedRegexInstance) return cachedRegexInstance.value;
    const regexInstance = RegExp(`(?:^|[^A-Z0-9\-_]|[^A-Z0-9\-]_|sprd-)(?:${rawRegex})`, "i");
    cache.set(rawRegex, {
        value: regexInstance
    });
    return regexInstance;
};
exports.userAgentParser = (rawRegex, userAgent)=>{
    // TODO: find out why it fails in some browsers
    try {
        const regexInstance = getRegexInstance(rawRegex);
        const match = regexInstance.exec(userAgent);
        return match ? match.slice(1) : null;
    } catch (_a) {
        return null;
    }
};

},{"./memory-cache":"6BYEI"}],"6BYEI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.memoryCache = ()=>{
    const memoryCacheBucket = {};
    const set = (key, value)=>{
        memoryCacheBucket[key] = value;
    };
    const get = (key)=>{
        if (memoryCacheBucket.hasOwnProperty(key)) return memoryCacheBucket[key];
    };
    return {
        set,
        get
    };
};

},{}],"aW9hq":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"Helio/(\\\\d+[\\\\.\\\\d]+)","name":"Helio","version":"$1","engine":{"default":"Blink"}},{"regex":"7654Browser/(\\\\d+[\\\\.\\\\d]+)","name":"7654 Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Qazweb/(\\\\d+[\\\\.\\\\d]+)","name":"Qazweb","version":"$1","engine":{"default":"Gecko"}},{"regex":"Degdegan/(\\\\d+[\\\\.\\\\d]+)","name":"deg-degan","version":"$1","engine":{"default":"Blink"}},{"regex":"JavaFX/(\\\\d+[\\\\.\\\\d]+)","name":"JavaFX","version":"$1","engine":{"default":"WebKit"}},{"regex":"Chedot/(\\\\d+[\\\\.\\\\d]+)","name":"Chedot","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome/(\\\\d+[\\\\.\\\\d]+) \\\\(Chromium GOST\\\\)","name":"Chromium GOST","version":"$1","engine":{"default":"Blink"}},{"regex":"(?:DeledaoPersonal|DeledaoFamily)/(\\\\d+[\\\\.\\\\d]+)","name":"Deledao","version":"$1","engine":{"default":"Blink"}},{"regex":"HasBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"HasBrowser","version":"$1","engine":{"default":"Blink"}},{"regex":"Byffox/(\\\\d+[\\\\.\\\\d]+)","name":"Byffox","version":"$1","engine":{"default":"Gecko"}},{"regex":"Chrome/(\\\\d+[\\\\.\\\\d]+).+AgentWeb.+UCBrowser","name":"CoolBrowser","version":"$1","engine":{"default":"Blink"}},{"regex":"DotBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"Dot Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"CravingExplorer/(\\\\d+[\\\\.\\\\d]+)","name":"Craving Explorer","version":"$1","engine":{"default":"Blink"}},{"regex":"DeskBrowse/(\\\\d+[\\\\.\\\\d]+)","name":"DeskBrowse","version":"$1"},{"regex":"Lolifox/(\\\\d+[\\\\.\\\\d]+)","name":"Lolifox","version":"$1"},{"regex":"qutebrowser/(\\\\d+[\\\\.\\\\d]+).+Chrome","name":"Qutebrowser","version":"$1","engine":{"default":"Blink"}},{"regex":"qutebrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Qutebrowser","version":"$1"},{"regex":"flast/(\\\\d+[\\\\.\\\\d]+)","name":"Flast","version":"$1","engine":{"default":"Blink"}},{"regex":"PolyBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"PolyBrowser","version":"$1","engine":{"default":"Gecko"}},{"regex":"Chrome.+BriskBard/(\\\\d+[\\\\.\\\\d]+)","name":"BriskBard","version":"$1","engine":{"default":"Blink"}},{"regex":"BriskBard(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"BriskBard","version":"$1"},{"regex":"GinxDroidBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"GinxDroid Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"AviraScout/(\\\\d+[\\\\.\\\\d]+)","name":"Avira Scout","version":"$1","engine":{"default":"Blink"}},{"regex":"VenusBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"Venus Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome.+Otter(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Otter Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Otter(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Otter Browser","version":"$1"},{"regex":"Chrome.+Smooz/(\\\\d+[\\\\.\\\\d]+)","name":"Smooz","version":"$1","engine":{"default":"Blink"}},{"regex":"Smooz/(\\\\d+[\\\\.\\\\d]+)","name":"Smooz","version":"$1"},{"regex":"Cornowser/(\\\\d+[\\\\.\\\\d]+)","name":"Cornowser","version":"$1","engine":{"default":"Blink"}},{"regex":"Orca/(\\\\d+[\\\\.\\\\d]+)","name":"Orca","version":"$1"},{"regex":"Flow/(?:(\\\\d+[\\\\.\\\\d]+))","name":"Flow","version":"$1","engine":{"default":"EkiohFlow"}},{"regex":"Ekioh/(?:(\\\\d+[\\\\.\\\\d]+))","name":"Flow","version":"$1","engine":{"default":"EkiohFlow"}},{"regex":"xStand/(\\\\d+[\\\\.\\\\d]+)","name":"xStand","version":"$1","engine":{"default":"WebKit"}},{"regex":"Biyubi/(\\\\d+[\\\\.\\\\d]+)","name":"Biyubi","version":"$1"},{"regex":"(?:Perfect%20Browser(?:-iPad)?|Perfect(?:BrowserPro)?)/(\\\\d+[\\\\.\\\\d]+)","name":"Perfect Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"Browser/Phantom/V(\\\\d+[\\\\.\\\\d]+)","name":"Phantom Browser","version":"$1"},{"regex":"AwoX(?:/(\\\\d+[\\\\.\\\\d]+))? Browser","name":"AwoX","version":"$1"},{"regex":"Zetakey/(\\\\d+[\\\\.\\\\d]+)","name":"Zetakey","version":"$1","engine":{"default":"WebKit"}},{"regex":"PlayFreeBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"PlayFree Browser","version":"$1"},{"regex":"(?:chimlac_browser|chimlac)/(?:(\\\\d+[\\\\.\\\\d]+))","name":"Chim Lac","version":"$1","engine":{"default":"Blink"}},{"regex":"Odin/(?:(\\\\d+[\\\\.\\\\d]+))","name":"Odin","version":"$1","engine":{"default":"Blink"}},{"regex":"Tbrowser/(\\\\d+[\\\\.\\\\d]+)","name":"T-Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"SFive(?:_Android)?/.+ Chrome/(\\\\d+[\\\\.\\\\d]+)","name":"SFive","version":"$1","engine":{"default":"Blink"}},{"regex":"SFive_IOS/(\\\\d+[\\\\.\\\\d]+)","name":"SFive","version":"$1"},{"regex":"Navigateur web/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Navigateur Web","version":"$1"},{"regex":"Sraf(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Seraphic Sraf","version":"$1","engine":{"default":"Blink"}},{"regex":"SeewoBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Seewo Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"(?:Kode(?:iOS)?/(?:(\\\\d+[\\\\.\\\\d]+))?|TansoDL)","name":"Kode Browser","version":"$1"},{"regex":"UR/(?:(\\\\d+[\\\\.\\\\d]+))","name":"UR Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"OceanHero/([\\\\.\\\\d]+)","name":"OceanHero","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome/.+ SLBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Smart Lenovo Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"SLBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Smart Lenovo Browser","version":"$1"},{"regex":"Browzar","name":"Browzar","version":""},{"regex":"Stargon/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Stargon","version":"$1","engine":{"default":"Blink"}},{"regex":"NFSBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"NFS Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Borealis/(\\\\d+[\\\\.\\\\d]+)","name":"Borealis Navigator","version":"$1"},{"regex":"YoloBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Yolo Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"PHX/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Phoenix Browser","version":"$1"},{"regex":"PrivacyWall/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"PrivacyWall","version":"$1"},{"regex":"Ghostery:?(\\\\d+[\\\\.\\\\d]+)?","name":"Ghostery Privacy Browser","version":"$1"},{"regex":"Firefox/.*(?:Turkcell-)?YaaniBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Yaani Browser","version":"$1","engine":{"default":"Gecko"}},{"regex":"(?:Turkcell-)?YaaniBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Yaani Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"SEB/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Safe Exam Browser","version":"$1"},{"regex":"Colibri/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Colibri","version":"$1"},{"regex":"Xvast/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Xvast","version":"$1"},{"regex":"TungstenBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Tungsten","version":"$1"},{"regex":"Lulumi-browser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Lulumi","version":"$1"},{"regex":"ybrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Yahoo! Japan Browser","version":"$1"},{"regex":"iLunascapeLite/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Lunascape Lite","version":"$1"},{"regex":"Polypane/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Polypane","version":"$1"},{"regex":"OhHaiBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"OhHai Browser","version":"$1"},{"regex":"Sizzy/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Sizzy","version":"$1"},{"regex":"GlassBrowser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Glass Browser","version":"$1"},{"regex":"ToGate/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"ToGate","version":"$1"},{"regex":"AirWatch Browser v(?:(\\\\d+[\\\\.\\\\d]+))?","name":"VMware AirWatch","version":"$1"},{"regex":"ADG/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"AOL Desktop","version":"$1"},{"regex":"Elements Browser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Elements Browser","version":"$1"},{"regex":"Light/(\\\\d+[\\\\.\\\\d]+)","name":"Light","version":"$1"},{"regex":"Valve Steam GameOverlay/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Steam In-Game Overlay","version":"$1"},{"regex":"115Browser/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"115 Browser","version":"$1"},{"regex":"Atom/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Atom","version":"$1"},{"regex":"Mobile VR.+Firefox","name":"Firefox Reality","version":""},{"regex":"AVG(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"AVG Secure Browser","version":"$1"},{"regex":"Start/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"START Internet Browser","version":"$1"},{"regex":"Lovense(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Lovense Browser","version":"$1"},{"regex":"com.airfind.deltabrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Delta Browser","version":"$1"},{"regex":"(?:Ordissimo|webissimo3)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Ordissimo","version":"$1"},{"regex":"CCleaner(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"CCleaner","version":"$1"},{"regex":"AlohaLite(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Aloha Browser Lite","version":"$1","engine":{"default":"Blink"}},{"regex":"TaoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Tao Browser","version":"$1"},{"regex":"Falkon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Falkon","version":"$1"},{"regex":"mCent(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"mCent","version":"$1"},{"regex":"SalamWeb(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"SalamWeb","version":"$1"},{"regex":"BlackHawk(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"BlackHawk","version":"$1"},{"regex":"Minimo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Minimo","version":"$1"},{"regex":"WIB(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Wear Internet Browser","version":"$1"},{"regex":"Origyn Web Browser","name":"Origyn Web Browser","version":""},{"regex":"Kinza(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kinza","version":"$1"},{"regex":"Beamrise(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Beamrise","version":"$1"},{"regex":"Faux(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Faux Browser","version":"$1"},{"regex":"splash Version(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Splash","version":"$1"},{"regex":"MZBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Meizu Browser","version":"$1"},{"regex":"COSBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"COS Browser","version":"$1"},{"regex":"Crusta(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Crusta","version":"$1"},{"regex":"Hawk/TurboBrowser(?:/v?(\\\\d+[\\\\.\\\\d]+))?","name":"Hawk Turbo Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"FreeU(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"FreeU","version":"$1","engine":{"default":"Blink"}},{"regex":"NoxBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Nox Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Basilisk(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Basilisk","version":"$1","engine":{"default":"Goanna"}},{"regex":"SputnikBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Sputnik Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"TNSBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"K.Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"OculusBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Oculus Browser","version":"$1"},{"regex":"Jio(?:Browser|Pages)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Jio Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome/.+ Hola(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"hola! Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Slimjet/(?:(\\\\d+[\\\\.\\\\d]+))","name":"Slimjet","version":"$1","engine":{"default":"Blink"}},{"regex":"7Star/(?:(\\\\d+[\\\\.\\\\d]+))","name":"7Star","version":"$1","engine":{"default":"Blink"}},{"regex":"MxNitro/(?:(\\\\d+[\\\\.\\\\d]+))","name":"MxNitro","version":"$1","engine":{"default":"Blink"}},{"regex":"HuaweiBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Huawei Browser","version":"$1"},{"regex":"VivoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"vivo Browser","version":"$1"},{"regex":"RealmeBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Realme Browser","version":"$1"},{"regex":"Beaker ?Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Beaker Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"QwantiOS/(\\\\d+[\\\\.\\\\d]+)","name":"Qwant Mobile","version":"$1","engine":{"default":"WebKit"}},{"regex":"QwantMobile(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Qwant Mobile","version":"$1","engine":{"default":"Gecko"}},{"regex":"Qwant/(\\\\d+[\\\\.\\\\d]+)","name":"Qwant Mobile","version":"$1","engine":{"default":"Gecko"}},{"regex":"TenFourFox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"TenFourFox","version":"$1","engine":{"default":"Gecko"}},{"regex":"AOLShield(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"AOL Shield","version":"$1","engine":{"default":"Gecko"}},{"regex":"Edge[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"Edge"}},{"regex":"EdgiOS[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"WebKit"}},{"regex":"EdgA[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"Blink"}},{"regex":"Edg[ /](\\\\d+[\\\\.\\\\d]+)","name":"Microsoft Edge","version":"$1","engine":{"default":"Blink"}},{"regex":"QIHU 360[ES]E","name":"360 Browser","version":""},{"regex":"360 Aphone Browser(?: \\\\((\\\\d+[\\\\.\\\\d]+)(?:beta)?\\\\))?","name":"360 Phone Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"SailfishBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Sailfish Browser","version":"$1","engine":{"default":"Gecko"}},{"regex":"IceCat(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"IceCat","version":"$1","engine":{"default":"Gecko"}},{"regex":"Mobicip","name":"Mobicip","version":"","engine":{"default":"Gecko"}},{"regex":"Camino(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Camino","version":"$1","engine":{"default":"Gecko"}},{"regex":"Waterfox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Waterfox","version":"$1","engine":{"default":"Gecko"}},{"regex":"Chrome/.+ AlohaBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Aloha Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"AlohaBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Aloha Browser","version":"$1"},{"regex":"(?:Avast|ASW|Safer)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Avast Secure Browser","version":"$1"},{"regex":"Epic(?:/(\\\\d+[\\\\.\\\\d]+))","name":"Epic","version":"$1","engine":{"default":"Gecko"}},{"regex":"Fennec(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fennec","version":"$1","engine":{"default":"Gecko"}},{"regex":"Firefox.*Tablet browser (\\\\d+[\\\\.\\\\d]+)","name":"MicroB","version":"$1","engine":{"default":"Gecko"}},{"regex":"Maemo Browser(?: (\\\\d+[\\\\.\\\\d]+))?","name":"MicroB","version":"$1","engine":{"default":"Gecko"}},{"regex":"Deepnet Explorer (\\\\d+[\\\\.\\\\d]+)?","name":"Deepnet Explorer","version":"$1"},{"regex":"Avant ?Browser","name":"Avant Browser","version":"","engine":{"default":""}},{"regex":"OppoBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Oppo Browser","version":"$1"},{"regex":"Chrome/(\\\\d+[\\\\.\\\\d]+).*MRCHROME","name":"Amigo","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"AtomicBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Atomic Web Browser","version":"$1"},{"regex":"Bunjalloo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Bunjalloo","version":"$1"},{"regex":"Brave(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Brave","version":"$1","engine":{"default":"Blink"}},{"regex":"Iridium(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iridium","version":"$1"},{"regex":"Iceweasel(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iceweasel","version":"$1","engine":{"default":"Gecko"}},{"regex":"WebPositive","name":"WebPositive","version":"","engine":{"default":"WebKit"}},{"regex":".*Goanna.*PaleMoon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Pale Moon","version":"$1","engine":{"default":"Goanna"}},{"regex":"PaleMoon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Pale Moon","version":"$1","engine":{"default":"Gecko"}},{"regex":"CometBird(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"CometBird","version":"$1","engine":{"default":"Gecko"}},{"regex":"IceDragon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"IceDragon","version":"$1","engine":{"default":"Gecko"}},{"regex":"Flock(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Flock","version":"$1","engine":{"default":"Gecko","versions":{"3":"WebKit"}}},{"regex":"JigBrowserPlus/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Jig Browser Plus","version":"$1"},{"regex":"jig browser(?: web;|9i?)?(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Jig Browser","version":"$1"},{"regex":"Kapiko(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kapiko","version":"$1","engine":{"default":"Gecko"}},{"regex":"Kylo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kylo","version":"$1","engine":{"default":"Gecko"}},{"regex":"Origin/(?:(\\\\d+[\\\\.\\\\d]+))?","name":"Origin In-Game Overlay","version":"$1"},{"regex":"Cunaguaro(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Cunaguaro","version":"$1"},{"regex":"(?:TO-Browser/TOB|DT-Browser/DTB)(\\\\d+[\\\\.\\\\d]+)","name":"t-online.de Browser","version":"$1"},{"regex":"Kazehakase(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Kazehakase","version":"$1","engine":{"default":""}},{"regex":"ArcticFox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Arctic Fox","version":"$1","engine":{"default":"Goanna"}},{"regex":"Mypal(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Mypal","version":"$1","engine":{"default":"Goanna"}},{"regex":"Centaury(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Centaury","version":"$1","engine":{"default":"Goanna"}},{"regex":"(?:Focus|Klar)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox Focus","version":"$1"},{"regex":"Cyberfox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Cyberfox","version":"$1","engine":{"default":"Gecko"}},{"regex":"Firefox/(\\\\d+[\\\\.\\\\d]+).*\\\\(Swiftfox\\\\)","name":"Swiftfox","version":"$1","engine":{"default":"Gecko"}},{"regex":"(?:Mobile|Tablet).*Servo.*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox Mobile","version":"$1","engine":{"default":"Servo"}},{"regex":"(?:Mobile|Tablet).*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox Mobile","version":"$1","engine":{"default":"Gecko"}},{"regex":"FxiOS/(\\\\d+[\\\\.\\\\d]+)","name":"Firefox Mobile iOS","version":"$1","engine":{"default":"WebKit"}},{"regex":".*Servo.*Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox","version":"$1","engine":{"default":"Servo"}},{"regex":"(?!.*Opera[ /])Firefox(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firefox","version":"$1","engine":{"default":"Gecko"}},{"regex":"(?:BonEcho|GranParadiso|Lorentz|Minefield|Namoroka|Shiretoko)/(\\\\d+[\\\\.\\\\d]+)","name":"Firefox","version":"$1","engine":{"default":"Gecko"}},{"regex":"ANTFresco(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"ANT Fresco","version":"$1"},{"regex":"ANTGalio(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"ANTGalio","version":"$1"},{"regex":"(?:Espial|Escape)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Espial TV Browser","version":"$1"},{"regex":"RockMelt(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"RockMelt","version":"$1","engine":{"default":"WebKit"}},{"regex":"Fireweb Navigator(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fireweb Navigator","version":"$1"},{"regex":"Fireweb(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fireweb","version":"$1"},{"regex":"(?:Navigator|Netscape6?)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Netscape","version":"$1","engine":{"default":""}},{"regex":"(?:Polarity)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Polarity","version":"$1"},{"regex":"(?:QupZilla)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"QupZilla","version":"$1"},{"regex":"(?:Dooble)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Dooble","version":"$1"},{"regex":"Whale/(\\\\d+[\\\\.\\\\d]+)","name":"Whale Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Obigo[ ]?(?:InternetBrowser|Browser)?(?:[ /]([a-z0-9]*))?","name":"Obigo","version":"$1"},{"regex":"Obigo|Teleca","name":"Obigo","version":""},{"regex":"UCBrowserHD/(\\\\d[\\\\d\\\\.]+)","name":"UC Browser HD","version":"$1"},{"regex":"UCMini(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser Mini","version":"$1"},{"regex":"UC[ ]?Browser.* \\\\(UCMini\\\\)","name":"UC Browser Mini","version":""},{"regex":"UCTurbo(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser Turbo","version":"$1"},{"regex":"UC[ ]?Browser.* \\\\(UCTurbo\\\\)","name":"UC Browser Turbo","version":""},{"regex":"OPRGX(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Opera GX","version":"$1","engine":{"default":"Blink"}},{"regex":"(?:Opera Tablet.*Version|Opera/.+Opera Mobi.+Version|Mobile.+OPR)/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mobile","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"MMS/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Neon","version":"$1","engine":{"default":"Blink"}},{"regex":"OMI/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Devices","version":"$1","engine":{"default":"Blink"}},{"regex":"Opera%20Touch/(\\\\d+[\\\\.\\\\d]+)? CFNetwork/.+Darwin/.+(?!.*x86_64)","name":"Opera Touch","version":"$1","engine":{"default":"WebKit"}},{"regex":"OPT/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Touch","version":"$1","engine":{"default":"Blink"}},{"regex":"Opera/(\\\\d+[\\\\.\\\\d]+).+Opera Mobi","name":"Opera Mobile","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"Opera ?Mini/(?:att/)?(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mini","version":"$1","engine":{"default":"Presto"}},{"regex":"Opera ?Mini.+Version/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mini","version":"$1","engine":{"default":"Presto"}},{"regex":"OPiOS/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Mini iOS","version":"$1","engine":{"default":"WebKit"}},{"regex":"Opera%20Mini/(\\\\d+[\\\\.\\\\d]+) CFNetwork","name":"Opera Mini iOS","version":"$1","engine":{"default":"WebKit"}},{"regex":"Opera.+Edition Next.+Version/(\\\\d+[\\\\.\\\\d]+)","name":"Opera Next","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"(?:Opera|OPR)[/ ](?:9.80.*Version/)?(\\\\d+[\\\\.\\\\d]+).+Edition Next","name":"Opera Next","version":"$1","engine":{"default":"Presto","versions":{"15":"Blink"}}},{"regex":"(?:Opera[/ ]?|OPR[/ ])(?:9.80.*Version/)?(\\\\d+[\\\\.\\\\d]+)","name":"Opera","version":"$1","engine":{"default":"","versions":{"7":"Presto","15":"Blink","3.5":"Elektra"}}},{"regex":"rekonq(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Rekonq","version":"$1","engine":{"default":"WebKit"}},{"regex":"CoolNovo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"CoolNovo","version":"$1","engine":{"default":""}},{"regex":"(?:Comodo[ _])?Dragon(?!fruit)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Comodo Dragon","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"ChromePlus(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"ChromePlus","version":"$1","engine":{"default":""}},{"regex":"Conkeror(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Conkeror","version":"$1","engine":{"default":"Gecko"}},{"regex":"Konqueror(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Konqueror","version":"$1","engine":{"default":"KHTML","versions":{"4":""}}},{"regex":"(?:baidubrowser|bdbrowser(?:(?:hd)?_i18n)?|FlyFlow|BaiduHD)(?:[/ ](\\\\d+[\\\\.\\\\d]*))?","name":"Baidu Browser","version":"$1"},{"regex":"(?:(?:BD)?Spark(?:Safe)?|BIDUBrowser)[/ ](\\\\d+[\\\\.\\\\d]*)","name":"Baidu Spark","version":"$1"},{"regex":"YaBrowser(?:/(\\\\d+[\\\\.\\\\d]*)) \\\\(lite\\\\)?","name":"Yandex Browser Lite","version":"$1","engine":{"default":"Blink"}},{"regex":"YaBrowser(?:/(\\\\d+[\\\\.\\\\d]*))(?: \\\\((alpha|beta)\\\\))?","name":"Yandex Browser","version":"$1 $2","engine":{"default":"Blink"}},{"regex":"Ya(?:ndex)?SearchBrowser(?:/(\\\\d+[\\\\.\\\\d]*))","name":"Yandex Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Vivaldi(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Vivaldi","version":"$1","engine":{"default":"Blink"}},{"regex":"TweakStyle(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"TweakStyle","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome.+Midori Browser/(\\\\d+[\\\\.\\\\d]+)","name":"Midori","version":"$1","engine":{"default":"Blink"}},{"regex":"Midori(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Midori","version":"$1","engine":{"default":"WebKit"}},{"regex":"Mercury(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Mercury","version":"$1"},{"regex":"Chrome.+Maxthon(?:.+\\\\(portable\\\\))?/(\\\\d+[\\\\.\\\\d]+)","name":"Maxthon","version":"$1","engine":{"default":"WebKit","versions":{"5.2":"Blink"}}},{"regex":"(?:Maxthon(?:%20Browser)?|MxBrowser(?:-inhouse|-iPhone)?)[ /](\\\\d+[\\\\.\\\\d]+)","name":"Maxthon","version":"$1","engine":{"default":"","versions":{"3":"WebKit"}}},{"regex":"(?:Maxthon|MyIE2)","name":"Maxthon","version":"","engine":{"default":""}},{"regex":"Puffin(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Puffin","version":"$1"},{"regex":"MobileIron(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iron Mobile","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome(?:/(\\\\d+[\\\\.\\\\d]+))?.*Iron","name":"Iron","version":"$1","engine":{"default":"WebKit"}},{"regex":"Iron(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Iron","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"Epiphany(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"GNOME Web","version":"$1","engine":{"default":"Gecko","versions":{"2.9.16":"","2.28":"WebKit"}}},{"regex":"LieBaoFast(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"LieBaoFast","version":"$1"},{"regex":"LBBrowser(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Cheetah Browser","version":"$1"},{"regex":"SE (\\\\d+[\\\\.\\\\d]+)","name":"Sogou Explorer","version":"$1"},{"regex":"QQBrowserLite/([\\\\d\\\\.]+)","name":"QQ Browser Lite","version":"$1"},{"regex":"M?QQBrowser/Mini([\\\\.\\\\d]+)?","name":"QQ Browser Mini","version":"$1","engine":{"default":""}},{"regex":"M?QQBrowser(?:/([\\\\.\\\\d]+))?","name":"QQ Browser","version":"$1","engine":{"default":""}},{"regex":"(?:MIUIBrowser|MiuiBrowser)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"MIUI Browser","version":"$1","engine":{"default":""}},{"regex":"(?:coc_coc_browser|coccocbrowser|CocCoc)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Coc Coc","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"DuckDuckGo/(\\\\d+[\\\\.\\\\d]*)","name":"DuckDuckGo Privacy Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"Samsung ?Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Samsung Browser","version":"$1"},{"regex":"(?:SFB(?:rowser)?)/(\\\\d+[\\\\.\\\\d]+)","name":"Super Fast Browser","version":"$1"},{"regex":"com.browser.tssomas(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Super Fast Browser","version":"$1"},{"regex":"EUI Browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"EUI Browser","version":"$1"},{"regex":"UBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"UBrowser","version":"$1"},{"regex":"Streamy(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Streamy","version":"$1","engine":{"default":"WebKit"}},{"regex":"isivioo","name":"Isivioo","version":"","engine":{"default":"WebKit"}},{"regex":"UC[ ]?Browser(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser","version":"$1"},{"regex":"UCWEB(?:[ /]?(\\\\d+[\\\\.\\\\d]+))?","name":"UC Browser","version":"$1"},{"regex":"UC AppleWebKit","name":"UC Browser","version":""},{"regex":"Tenta/(\\\\d+[\\\\.\\\\d]+)","name":"Tenta Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"Rocket/(\\\\d+[\\\\.\\\\d]+)","name":"Firefox Rocket","version":"$1","engine":{"default":"WebKit"}},{"regex":"Web Explorer/(\\\\d+[\\\\.\\\\d]+).*Chrome","name":"Web Explorer","version":"$1","engine":{"default":"WebKit"}},{"regex":"SznProhlizec/(\\\\d+[\\\\.\\\\d]+)","name":"Seznam Browser","version":"$1","engine":{"default":"Blink"}},{"regex":"SogouMobileBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"Sogou Mobile Browser","version":"$1","engine":{"default":""}},{"regex":"Mint Browser/(\\\\d+[\\\\.\\\\d]+)","name":"Mint Browser","version":"$1","engine":{"default":""}},{"regex":"Ecosia (?:android|ios)@(\\\\d+[\\\\.\\\\d]+)","name":"Ecosia","version":"$1","engine":{"default":""}},{"regex":"ACHEETAHI","name":"CM Browser","version":"","engine":{"default":""}},{"regex":"Kiwi Chrome","name":"Kiwi","version":"","engine":{"default":""}},{"regex":"Mb2345Browser/(\\\\d+[\\\\.\\\\d]+)","name":"2345 Browser","version":"$1","engine":{"default":""}},{"regex":"QtWebEngine/(\\\\d+[\\\\.\\\\d]+)","name":"QtWebEngine","version":"$1","engine":{"default":""}},{"regex":"Silk/(\\\\d+[\\\\.\\\\d]+) like Chrome","name":"Mobile Silk","version":"$1","engine":{"default":"Blink"}},{"regex":"Silk(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Mobile Silk","version":"$1","engine":{"default":"WebKit"}},{"regex":"IBrowse(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"IBrowse","version":"$1"},{"regex":"UP.Browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Openwave Mobile Browser","version":"$1"},{"regex":"Openwave(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Openwave Mobile Browser","version":"$1"},{"regex":"OneBrowser(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"ONE Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:NokiaBrowser|BrowserNG)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Nokia Browser","version":"$1"},{"regex":"Series60/5\\\\.0","name":"Nokia Browser","version":"7.0"},{"regex":"Series60/(\\\\d+[\\\\.\\\\d]+)","name":"Nokia OSS Browser","version":"$1"},{"regex":"S40OviBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"Nokia Ovi Browser","version":"$1"},{"regex":"^Nokia|Nokia[EN]?\\\\d+","name":"Nokia Browser","version":""},{"regex":"Sleipnir(?:(?:%20Browser)?[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Sleipnir","version":"$1","engine":{"default":""}},{"regex":"NTENTBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NTENT Browser","version":"$1"},{"regex":"TV Bro/(\\\\d+[\\\\.\\\\d]+)","name":"TV Bro","version":"$1"},{"regex":"Chrome/.+ Quark(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Quark","version":"$1","engine":{"default":"WebKit"}},{"regex":"MonumentBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Monument Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"BlueBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Blue Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"JAPAN Browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Japan Browser","version":"$1","engine":{"default":"WebKit"}},{"regex":"Version/.* Chrome(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Webview","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"CrMo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Mobile","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"CriOS(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Mobile iOS","version":"$1","engine":{"default":"WebKit"}},{"regex":"Chrome(?:/(\\\\d+[\\\\.\\\\d]+))? Mobile","name":"Chrome Mobile","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"chromeframe(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome Frame","version":"$1","engine":{"default":"WebKit"}},{"regex":"Chromium(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chromium","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"HeadlessChrome(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Headless Chrome","version":"$1","engine":{"default":"Blink"}},{"regex":"Chrome(?!book)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Chrome","version":"$1","engine":{"default":"WebKit","versions":{"28":"Blink"}}},{"regex":"(?:Tizen|SLP) Browser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Tizen Browser","version":"$1"},{"regex":"Blazer(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Palm Blazer","version":"$1"},{"regex":"Pre/(\\\\d+[\\\\.\\\\d]+)","name":"Palm Pre","version":"$1"},{"regex":"(?:hpw|web)OS/(\\\\d+[\\\\.\\\\d]+)","name":"wOSBrowser","version":"$1"},{"regex":"WebPro(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Palm WebPro","version":"$1"},{"regex":"Palmscape(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Palmscape","version":"$1"},{"regex":"Jasmine(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Jasmine","version":"$1"},{"regex":"Lynx(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Lynx","version":"$1","engine":{"default":"Text-based"}},{"regex":"NCSA_Mosaic(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NCSA Mosaic","version":"$1"},{"regex":"ABrowse(?: (\\\\d+[\\\\.\\\\d]+))?","name":"ABrowse","version":"$1"},{"regex":"amaya(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Amaya","version":"$1"},{"regex":"AmigaVoyager(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Amiga Voyager","version":"$1"},{"regex":"Amiga-Aweb(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Amiga Aweb","version":"$1"},{"regex":"Arora(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Arora","version":"$1","engine":{"default":"WebKit"}},{"regex":"Beonex(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Beonex","version":"$1","engine":{"default":"Gecko"}},{"regex":"bline(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"B-Line","version":"$1","engine":{"default":"WebKit"}},{"regex":"BrowseX \\\\((\\\\d+[\\\\.\\\\d]+)","name":"BrowseX","version":"$1"},{"regex":"Charon(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Charon","version":"$1"},{"regex":"Cheshire(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Cheshire","version":"$1"},{"regex":"dbrowser","name":"dbrowser","version":"","engine":{"default":"WebKit"}},{"regex":"Dillo(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Dillo","version":"$1","engine":{"default":"Dillo"}},{"regex":"Dolfin(?:/(\\\\d+[\\\\.\\\\d]+))?|dolphin","name":"Dolphin","version":"$1","engine":{"default":"WebKit"}},{"regex":"Elinks(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Elinks","version":"$1","engine":{"default":"Text-based"}},{"regex":"Element Browser(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Element Browser","version":"$1"},{"regex":"eZBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"eZ Browser","version":"$1"},{"regex":"Firebird(?! Build)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Firebird","version":"$1","engine":{"default":"Gecko"}},{"regex":"Fluid(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Fluid","version":"$1","engine":{"default":"WebKit"}},{"regex":"Galeon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Galeon","version":"$1","engine":{"default":"Gecko"}},{"regex":"Google Earth(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Google Earth","version":"$1","engine":{"default":"WebKit"}},{"regex":"HotJava(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"HotJava","version":"$1"},{"regex":"iCabMobile(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"iCab Mobile","version":"$1","engine":{"default":"WebKit"}},{"regex":"iCab(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"iCab","version":"$1","engine":{"default":"iCab","versions":{"4":"WebKit"}}},{"regex":"i?Lunascape(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Lunascape","version":"$1","engine":{"default":""}},{"regex":"Crazy Browser (\\\\d+[\\\\.\\\\d]+)","name":"Crazy Browser","version":"$1","engine":{"default":"Trident"}},{"regex":"IEMobile[ /](\\\\d+[\\\\.\\\\d]+)","name":"IE Mobile","version":"$1","engine":{"default":"Trident"}},{"regex":"MSIE (\\\\d+[\\\\.\\\\d]+).*XBLWP7","name":"IE Mobile","version":"$1","engine":{"default":"Trident"}},{"regex":"MSIE.*Trident/4.0","name":"Internet Explorer","version":"8.0","engine":{"default":"Trident"}},{"regex":"MSIE.*Trident/5.0","name":"Internet Explorer","version":"9.0","engine":{"default":"Trident"}},{"regex":"MSIE.*Trident/6.0","name":"Internet Explorer","version":"10.0","engine":{"default":"Trident"}},{"regex":"Trident/[78].0","name":"Internet Explorer","version":"11.0","engine":{"default":"Trident"}},{"regex":"MSIE (\\\\d+[\\\\.\\\\d]+)","name":"Internet Explorer","version":"$1","engine":{"default":"Trident"}},{"regex":"IE[ /](\\\\d+[\\\\.\\\\d]+)","name":"Internet Explorer","version":"$1","engine":{"default":"Trident"}},{"regex":"Kindle/(\\\\d+[\\\\.\\\\d]+)","name":"Kindle Browser","version":"$1"},{"regex":"K-meleon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"K-meleon","version":"$1","engine":{"default":"Gecko"}},{"regex":"Links(?: \\\\((\\\\d+[\\\\.\\\\d]+))?","name":"Links","version":"$1","engine":{"default":"Text-based"}},{"regex":"LG Browser(?:/(\\\\d+[\\\\.\\\\d]+))","name":"LG Browser","version":"$1"},{"regex":"LuaKit(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"LuaKit","version":"$1"},{"regex":"OmniWeb(?:/[v]?(\\\\d+[\\\\.\\\\d]+))?","name":"OmniWeb","version":"$1","engine":{"default":"WebKit"}},{"regex":"Phoenix(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Phoenix","version":"$1"},{"regex":"NetFrontLifeBrowser(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetFront Life","version":"$1","engine":{"default":"NetFront"}},{"regex":"NetFront(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetFront","version":"$1","engine":{"default":"NetFront"}},{"regex":"PLAYSTATION|NINTENDO 3|AppleWebKit.+ N[XF]/\\\\d+\\\\.\\\\d+\\\\.\\\\d+","name":"NetFront","version":""},{"regex":"NetPositive(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetPositive","version":"$1"},{"regex":"Odyssey Web Browser(?:.*OWB/(\\\\d+[\\\\.\\\\d]+))?","name":"Odyssey Web Browser","version":"$1"},{"regex":"OffByOne","name":"Off By One","version":""},{"regex":"(?:Oregano|OreganMediaBrowser)(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Oregano","version":"$1"},{"regex":"(?:Polaris|Embider)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Polaris","version":"$1"},{"regex":"SEMC-Browser(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"SEMC-Browser","version":"$1"},{"regex":"Shiira(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Shiira","version":"$1","engine":{"default":"WebKit"}},{"regex":"Skyfire(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Skyfire","version":"$1"},{"regex":"Snowshoe(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Snowshoe","version":"$1","engine":{"default":"WebKit"}},{"regex":"Sunrise(?:Browser)?(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Sunrise","version":"$1"},{"regex":"SuperBird(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"SuperBird","version":"$1"},{"regex":"Vision-Browser(?:/(\\\\d+[\\\\.\\\\d]+))","name":"Vision Mobile Browser","version":"$1"},{"regex":"WeTab-Browser","name":"WeTab Browser","version":""},{"regex":"Xiino(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Xiino","version":"$1"},{"regex":"BlackBerry|PlayBook|BB10","name":"BlackBerry Browser","version":""},{"regex":"Android","name":"Android Browser","version":"","engine":{"default":"WebKit"}},{"regex":"Coast(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Coast","version":"$1"},{"regex":"Surf(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"surf","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:(?:iPod|iPad|iPhone).+Version|MobileSafari)/(\\\\d+[\\\\.\\\\d]+)","name":"Mobile Safari","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:Version/(\\\\d+[\\\\.\\\\d]+).*)?Mobile.*Safari/","name":"Mobile Safari","version":"$1","engine":{"default":"WebKit"}},{"regex":"(?:iPod|iPhone|iPad)","name":"Mobile Safari","version":"","engine":{"default":"WebKit"}},{"regex":"Version/(\\\\d+[\\\\.\\\\d]+).*Safari/|Safari/?\\\\d+","name":"Safari","version":"$1","engine":{"default":"WebKit"}},{"regex":"Dorado WAP-Browser[/ ](\\\\d+[\\\\.\\\\d]+)","name":"Dorado","version":"$1"},{"regex":"NetSurf(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NetSurf","version":"$1","engine":{"default":"NetSurf"}},{"regex":"Uzbl","name":"Uzbl","version":""},{"regex":"SimpleBrowser","name":"SimpleBrowser","version":""},{"regex":"Zvu(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Zvu","version":"$1","engine":{"default":"Gecko"}},{"regex":"GOGGalaxyClient/(\\\\d+[\\\\.\\\\d]+)?","name":"GOG Galaxy","version":"$1"},{"regex":"WAP Browser/MAUI|(?:\\\\w+)?Maui Wap Browser|MAUI[- ]Browser","name":"MAUI WAP Browser","version":""},{"regex":"SP%20Browser/(\\\\d+[\\\\.\\\\d]+)","name":"SP Browser","version":"$1","engine":{"default":"WebKit"}}]');

},{}],"4z5BI":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"NetFront","name":"NetFront"},{"regex":"Edge","name":"Edge"},{"regex":"Trident","name":"Trident"},{"regex":"(?<!SmartHu)Blink","name":"Blink"},{"regex":"(?:Apple)?WebKit","name":"WebKit"},{"regex":"Presto","name":"Presto"},{"regex":"Goanna","name":"Goanna"},{"regex":"(?<!like )Gecko","name":"Gecko"},{"regex":"KHTML","name":"KHTML"},{"regex":"NetSurf","name":"NetSurf"},{"regex":"Servo","name":"Servo"},{"regex":"Goanna","name":"Goanna"},{"regex":"Ekioh(?:Flow)?","name":"EkiohFlow"}]');

},{}],"aW94u":[function(require,module,exports) {
module.exports = JSON.parse('{"36":"360 Phone Browser","1B":"115 Browser","2B":"2345 Browser","3B":"360 Browser","7B":"7654 Browser","AA":"Avant Browser","AB":"ABrowse","AF":"ANT Fresco","AG":"ANTGalio","AL":"Aloha Browser","AH":"Aloha Browser Lite","AM":"Amaya","AO":"Amigo","AN":"Android Browser","AE":"AOL Desktop","AD":"AOL Shield","AR":"Arora","AX":"Arctic Fox","AV":"Amiga Voyager","AW":"Amiga Aweb","A0":"Atom","AT":"Atomic Web Browser","AS":"Avast Secure Browser","VG":"AVG Secure Browser","AC":"Avira Scout","A1":"AwoX","BA":"Beaker Browser","BM":"Beamrise","BB":"BlackBerry Browser","BD":"Baidu Browser","BS":"Baidu Spark","BI":"Basilisk","BE":"Beonex","BH":"BlackHawk","BJ":"Bunjalloo","BL":"B-Line","BU":"Blue Browser","BN":"Borealis Navigator","BR":"Brave","BK":"BriskBard","BX":"BrowseX","BZ":"Browzar","BY":"Biyubi","BF":"Byffox","CA":"Camino","CL":"CCleaner","C6":"Chedot","C0":"Centaury","CC":"Coc Coc","C4":"CoolBrowser","C2":"Colibri","CD":"Comodo Dragon","C1":"Coast","CX":"Charon","CE":"CM Browser","CF":"Chrome Frame","HC":"Headless Chrome","CH":"Chrome","CI":"Chrome Mobile iOS","CK":"Conkeror","CM":"Chrome Mobile","CN":"CoolNovo","CO":"CometBird","CB":"COS Browser","CW":"Cornowser","C3":"Chim Lac","CP":"ChromePlus","CR":"Chromium","C5":"Chromium GOST","CY":"Cyberfox","CS":"Cheshire","CT":"Crusta","CG":"Craving Explorer","CZ":"Crazy Browser","CU":"Cunaguaro","CV":"Chrome Webview","DB":"dbrowser","DE":"Deepnet Explorer","DG":"deg-degan","DA":"Deledao","DT":"Delta Browser","DS":"DeskBrowse","DF":"Dolphin","DO":"Dorado","DR":"Dot Browser","DL":"Dooble","DI":"Dillo","DD":"DuckDuckGo Privacy Browser","EC":"Ecosia","EI":"Epic","EL":"Elinks","EB":"Element Browser","EE":"Elements Browser","EZ":"eZ Browser","EU":"EUI Browser","EP":"GNOME Web","ES":"Espial TV Browser","FA":"Falkon","FX":"Faux Browser","F1":"Firefox Mobile iOS","FB":"Firebird","FD":"Fluid","FE":"Fennec","FF":"Firefox","FK":"Firefox Focus","FY":"Firefox Reality","FR":"Firefox Rocket","FL":"Flock","FO":"Flow","FM":"Firefox Mobile","FW":"Fireweb","FN":"Fireweb Navigator","FS":"Flast","FU":"FreeU","GA":"Galeon","GH":"Ghostery Privacy Browser","GI":"GinxDroid Browser","GB":"Glass Browser","GE":"Google Earth","GO":"GOG Galaxy","HS":"HasBrowser","HA":"Hawk Turbo Browser","HE":"Helio","HO":"hola! Browser","HJ":"HotJava","HU":"Huawei Browser","IB":"IBrowse","IC":"iCab","I2":"iCab Mobile","I1":"Iridium","I3":"Iron Mobile","I4":"IceCat","ID":"IceDragon","IV":"Isivioo","IW":"Iceweasel","IE":"Internet Explorer","IM":"IE Mobile","IR":"Iron","JB":"Japan Browser","JS":"Jasmine","JA":"JavaFX","JI":"Jig Browser","JP":"Jig Browser Plus","JO":"Jio Browser","KB":"K.Browser","KI":"Kindle Browser","KM":"K-meleon","KO":"Konqueror","KP":"Kapiko","KN":"Kinza","KW":"Kiwi","KD":"Kode Browser","KY":"Kylo","KZ":"Kazehakase","LB":"Cheetah Browser","LF":"LieBaoFast","LG":"LG Browser","LH":"Light","LI":"Links","IF":"Lolifox","LO":"Lovense Browser","LU":"LuaKit","LL":"Lulumi","LS":"Lunascape","LN":"Lunascape Lite","LX":"Lynx","M1":"mCent","MB":"MicroB","MC":"NCSA Mosaic","MZ":"Meizu Browser","ME":"Mercury","MF":"Mobile Safari","MI":"Midori","MO":"Mobicip","MU":"MIUI Browser","MS":"Mobile Silk","MN":"Minimo","MT":"Mint Browser","MX":"Maxthon","NM":"MxNitro","MY":"Mypal","MR":"Monument Browser","MW":"MAUI WAP Browser","NW":"Navigateur Web","NR":"NFS Browser","NB":"Nokia Browser","NO":"Nokia OSS Browser","NV":"Nokia Ovi Browser","NX":"Nox Browser","NE":"NetSurf","NF":"NetFront","NL":"NetFront Life","NP":"NetPositive","NS":"Netscape","NT":"NTENT Browser","OC":"Oculus Browser","O1":"Opera Mini iOS","OB":"Obigo","O2":"Odin","H2":"OceanHero","OD":"Odyssey Web Browser","OF":"Off By One","HH":"OhHai Browser","OE":"ONE Browser","OX":"Opera GX","OG":"Opera Neon","OH":"Opera Devices","OI":"Opera Mini","OM":"Opera Mobile","OP":"Opera","ON":"Opera Next","OO":"Opera Touch","OA":"Orca","OS":"Ordissimo","OR":"Oregano","O0":"Origin In-Game Overlay","OY":"Origyn Web Browser","OV":"Openwave Mobile Browser","OW":"OmniWeb","OT":"Otter Browser","PL":"Palm Blazer","PM":"Pale Moon","PY":"Polypane","PP":"Oppo Browser","PR":"Palm Pre","PU":"Puffin","PW":"Palm WebPro","PA":"Palmscape","PE":"Perfect Browser","PH":"Phantom Browser","PX":"Phoenix","PB":"Phoenix Browser","PF":"PlayFree Browser","PO":"Polaris","PT":"Polarity","LY":"PolyBrowser","PI":"PrivacyWall","PS":"Microsoft Edge","QA":"Qazweb","Q2":"QQ Browser Lite","Q1":"QQ Browser Mini","QQ":"QQ Browser","QT":"Qutebrowser","QU":"Quark","QZ":"QupZilla","QM":"Qwant Mobile","QW":"QtWebEngine","RE":"Realme Browser","RK":"Rekonq","RM":"RockMelt","SB":"Samsung Browser","SA":"Sailfish Browser","S8":"Seewo Browser","SC":"SEMC-Browser","SE":"Sogou Explorer","SF":"Safari","S5":"Safe Exam Browser","SW":"SalamWeb","SV":"SFive","SH":"Shiira","S1":"SimpleBrowser","SY":"Sizzy","SK":"Skyfire","SS":"Seraphic Sraf","SL":"Sleipnir","S6":"Slimjet","S7":"SP Browser","7S":"7Star","LE":"Smart Lenovo Browser","OZ":"Smooz","SN":"Snowshoe","SO":"Sogou Mobile Browser","S2":"Splash","SI":"Sputnik Browser","SR":"Sunrise","SP":"SuperBird","SU":"Super Fast Browser","S3":"surf","SG":"Stargon","S0":"START Internet Browser","S4":"Steam In-Game Overlay","ST":"Streamy","SX":"Swiftfox","SZ":"Seznam Browser","TR":"T-Browser","TO":"t-online.de Browser","TA":"Tao Browser","TF":"TenFourFox","TB":"Tenta Browser","TZ":"Tizen Browser","TU":"Tungsten","TG":"ToGate","TS":"TweakStyle","TV":"TV Bro","UB":"UBrowser","UC":"UC Browser","UH":"UC Browser HD","UM":"UC Browser Mini","UT":"UC Browser Turbo","UR":"UR Browser","UZ":"Uzbl","VE":"Venus Browser","VI":"Vivaldi","VV":"vivo Browser","VB":"Vision Mobile Browser","VM":"VMware AirWatch","WI":"Wear Internet Browser","WP":"Web Explorer","WE":"WebPositive","WF":"Waterfox","WH":"Whale Browser","WO":"wOSBrowser","WT":"WeTab Browser","YJ":"Yahoo! Japan Browser","YA":"Yandex Browser","YL":"Yandex Browser Lite","YN":"Yaani Browser","YB":"Yolo Browser","XS":"xStand","XI":"Xiino","XV":"Xvast","ZE":"Zetakey","ZV":"Zvu"}');

},{}],"4iVdb":[function(require,module,exports) {
module.exports = JSON.parse('["36","OC","PU","SK","MF","OI","OM","DD","DB","ST","BL","IV","FM","C1","C4","SA","SB","FR","WP","HA","NX","HU","VV","RE","CB","MZ","UM","FK","FX","WI","MN","M1","AH","SU","EU","EZ","UT","DT","S0","QU","YN","JB","GH","PI","SG","KD","PE","UH","S7","CW","OZ","GI","VE"]');

},{}],"4mk08":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const mobile_apps_json_1 = __importDefault(require("../../fixtures/regexes/client/mobile_apps.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class MobileAppParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: ""
            };
            for (const mobileApp of mobile_apps_json_1.default){
                const match = user_agent_1.userAgentParser(mobileApp.regex, userAgent);
                if (!match) continue;
                result.type = "mobile app";
                result.name = variable_replacement_1.variableReplacement(mobileApp.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(mobileApp.version, match), this.options.versionTruncation);
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = MobileAppParser;

},{"../../fixtures/regexes/client/mobile_apps.json":"jWM7u","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"jWM7u":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"AndroidDownloadManager(?:[ /]([\\\\d\\\\.]+))?","name":"AndroidDownloadManager","version":"$1"},{"regex":"(?:Apple)?News(?:[ /][\\\\d\\\\.]+)? Version(?:[ /]([\\\\d\\\\.]+))?","name":"Apple News","version":"$1"},{"regex":"bPod","name":"bPod","version":""},{"regex":"MessengerLiteForiOS.(?:FBAV)(?:[ /]([\\\\d\\\\.]+))?","name":"Facebook Messenger Lite","version":"$1"},{"regex":"(?:MessengerForiOS|MESSENGER).(?:FBAV)(?:[ /]([\\\\d\\\\.]+))?","name":"Facebook Messenger","version":"$1"},{"regex":"(?:FBAV|com.facebook.katana)(?:[ /]([\\\\d\\\\.]+))?","name":"Facebook","version":"$1"},{"regex":"(?:FBAN|FBSV|FBID|FBBV)/","name":"Facebook","version":""},{"regex":"FeedR(?:/([\\\\d\\\\.]+))?","name":"FeedR","version":"$1"},{"regex":"com.google.android.apps.searchlite","name":"Google Go","version":""},{"regex":"com.google.android.apps.magazines","name":"Google Play Newsstand","version":""},{"regex":"com.google.GooglePlus","name":"Google Plus","version":""},{"regex":"MicroMessenger/([^; ]+)","name":"WeChat","version":"$1"},{"regex":"WeChatShareExtensionNew/([\\\\d\\\\.]+)","name":"WeChat Share Extension","version":"$1"},{"regex":"DingTalk/([0-9\\\\.]+)","name":"DingTalk","version":"$1"},{"regex":".*__weibo__([0-9\\\\.]+)__","name":"Sina Weibo","version":"$1"},{"regex":"Pinterest(?: for (?:Android|iOS))?(?:/([\\\\d\\\\.]+))?","name":"Pinterest","version":"$1"},{"regex":"Podcatcher Deluxe","name":"Podcatcher Deluxe","version":""},{"regex":"com.google.android.youtube(?:/([\\\\d\\\\.]+))?","name":"YouTube","version":"$1"},{"regex":"([^/]+)/(\\\\d+(?:\\\\.\\\\d+)+) \\\\((?:iPhone|iPad); iOS [0-9\\\\.]+; Scale/[0-9\\\\.]+\\\\)","name":"$1","version":"$2"},{"regex":"WhatsApp(?:[ /]([\\\\d\\\\.]+))?","name":"WhatsApp","version":"$1"},{"regex":"Line(?:[ /]([\\\\d\\\\.]+))","name":"Line","version":"$1"},{"regex":"Instacast(?:HD)?/(\\\\d\\\\.[\\\\d\\\\.abc]+) CFNetwork/([\\\\d\\\\.]+) Darwin/([\\\\d\\\\.]+)","name":"Instacast","version":"$1"},{"regex":"Podcasts/([\\\\d\\\\.]+)","name":"Podcasts","version":"$1"},{"regex":"Pocket Casts(?:, (?:Android|iOS) v([\\\\d\\\\.]+))?","name":"Pocket Casts","version":"$1"},{"regex":"Podcat/([\\\\d\\\\.]+)","name":"Podcat","version":"$1"},{"regex":"BeyondPod","name":"BeyondPod","version":null},{"regex":"AntennaPod/?([\\\\d\\\\.]+)?","name":"AntennaPod","version":"$1"},{"regex":"Overcast/([\\\\d\\\\.]+)","name":"Overcast","version":"$1"},{"regex":"(?:CastBox|fm.castbox.audiobook.radio.podcast)/?([\\\\d\\\\.]+)?","name":"CastBox","version":"$1"},{"regex":"Player FM","name":"Player FM","version":""},{"regex":"Podkicker(?: Pro)?/([\\\\d\\\\.]+)","name":"Podkicker","version":"$1"},{"regex":"PodcastRepublic/([\\\\d\\\\.]+)","name":"Podcast Republic","version":"$1"},{"regex":"Castro/(\\\\d+)","name":"Castro","version":"$1"},{"regex":"Castro 2 ([\\\\d\\\\.]+)/[\\\\d]+ Like iTunes","name":"Castro 2","version":"$1"},{"regex":"Castro 2","name":"Castro 2","version":""},{"regex":"DoggCatcher","name":"DoggCatcher","version":null},{"regex":"PodcastAddict/v([\\\\d]+)","name":"Podcast & Radio Addict","version":"$1"},{"regex":"Podcat(?:%202)?/([\\\\d]+) CFNetwork","name":"Podcat","version":"$1"},{"regex":"iCatcher[^\\\\d]+([\\\\d\\\\.]+)","name":"iCatcher","version":"$1"},{"regex":"YelpApp/([\\\\d\\\\.]+)","name":"Yelp Mobile","version":"$1"},{"regex":"jp.co.yahoo.android.yjtop/([\\\\d\\\\.]+)","name":"Yahoo! Japan","version":"$1"},{"regex":"RSSRadio/([\\\\d]+)?","name":"RSSRadio","version":"$1"},{"regex":"SogouSearch Android[\\\\d\\\\.]+ version([\\\\d\\\\.]+)?","name":"SogouSearch App","version":"$1"},{"regex":"NewsArticle/([\\\\d\\\\.]+)?","name":"NewsArticle App","version":"$1"},{"regex":"tieba/([\\\\d\\\\.]+)?","name":"tieba","version":"$1"},{"regex":"com\\\\.douban\\\\.group/([\\\\d\\\\.]+)?","name":"douban App","version":"$1"},{"regex":"BingWeb/([\\\\d\\\\.]+)?","name":"BingWebApp","version":"$1"},{"regex":"(?:com.google.GoogleMobile|GSA)/([\\\\d\\\\.]+)?","name":"Google Search App","version":"$1"},{"regex":"Flipboard/([\\\\d\\\\.]+)?","name":"Flipboard App","version":"$1"},{"regex":"Instagram[ /]([\\\\d\\\\.]+)?","name":"Instagram App","version":"$1"},{"regex":"baiduboxapp/([\\\\d\\\\.]+)?","name":"Baidu Box App","version":"$1"},{"regex":"Crosswalk(?!.*(?:Streamy|QwantMobile))/([\\\\d\\\\.]+)?","name":"CrosswalkApp","version":"$1"},{"regex":"Twitter for iPhone[/]?([\\\\d\\\\.]+)?","name":"Twitter","version":"$1"},{"regex":"Twitter/([\\\\d\\\\.]+)","name":"Twitter","version":"$1"},{"regex":"TwitterAndroid[/]?([\\\\d\\\\.]+)?","name":"Twitter","version":"$1"},{"regex":"TopBuzz/([\\\\d\\\\.]+)","name":"TopBuzz","version":"$1"},{"regex":"Snapchat/([\\\\d\\\\.]+)","name":"Snapchat","version":"$1"},{"regex":"UnityPlayer/([\\\\d\\\\.]+)","name":"UnityPlayer","version":"$1"},{"regex":"UCURSOS/v([\\\\d\\\\.]+)","name":"U-Cursos","version":"$1"},{"regex":"HeyTapBrowser/([\\\\d\\\\.]+)","name":"HeyTapBrowser","version":"$1"},{"regex":"RobloxApp/([\\\\d\\\\.]+)","name":"Roblox","version":"$1"},{"regex":"Viber/([\\\\d\\\\.]+)","name":"Viber","version":"$1"},{"regex":"Siri/1","name":"Siri","version":"1.0"},{"regex":"LinkedIn/([\\\\d\\\\.]+)","name":"LinkedIn","version":"$1"},{"regex":"Instapaper/([\\\\d\\\\.]+)","name":"Instapaper","version":"$1"},{"regex":"Keeper/([\\\\d\\\\.]+)","name":"Keeper Password Manager","version":"$1"},{"regex":"Skyeng Teachers/([\\\\d\\\\.]+)","name":"Skyeng Teachers","version":"$1"},{"regex":"Kik/([\\\\d\\\\.]+) \\\\(Android","name":"Kik","version":"$1"},{"regex":"Procast/?([\\\\d\\\\.]+)?","name":"Procast","version":"$1"},{"regex":"DeviantArt/([\\\\d\\\\.]+)","name":"DeviantArt","version":""},{"regex":"Discord/([\\\\d\\\\.]+)","name":"Discord","version":""},{"regex":"Covenant%20Eyes/([\\\\d\\\\.]+)","name":"Covenant Eyes","version":"$1"},{"regex":"HP%20Smart/([\\\\d\\\\.]+)","name":"HP Smart","version":""},{"regex":"Bitsboard/([\\\\d\\\\.]+)","name":"Bitsboard","version":"$1"},{"regex":"Betbull/([\\\\d\\\\.]+)","name":"BetBull","version":""},{"regex":"U-Cursos/([\\\\d\\\\.]+)","name":"U-Cursos","version":""},{"regex":"1PasswordThumbs/([\\\\d\\\\.]+)","name":"1Password","version":"$1"},{"regex":"(?:Microsoft Office )?(Access|Excel|OneDrive for Business|OneNote|PowerPoint|Project|Publisher|Visio|Word)[ /]([\\\\d\\\\.]+)","name":"Microsoft Office $1","version":"$2"},{"regex":"OneDriveiOSApp/([\\\\d\\\\.]+)","name":"Microsoft OneDrive","version":"$1"},{"regex":"Microsoft Office Mobile/([\\\\d\\\\.]+)","name":"Microsoft Office Mobile","version":"$1"},{"regex":"OC/([\\\\d\\\\.]+) \\\\(Skype for Business\\\\)","name":"Skype for Business","version":"$1"},{"regex":"TikTok[/ ](\\\\d+\\\\.(?:[\\\\.\\\\d]+))?","name":"TikTok","version":"$1"},{"regex":"NAVER/(\\\\d+[\\\\.\\\\d]+) CFNetwork","name":"Naver","version":"$1"},{"regex":"Copied/(\\\\d+[\\\\.\\\\d]+) CFNetwork","name":"Copied","version":""},{"regex":"Pic%20Collage/(\\\\d+[\\\\.\\\\d]+) CFNetwork","name":"Pic Collage","version":"$1"},{"regex":"Papers/(\\\\d+[\\\\.\\\\d]+) CFNetwork","name":"Papers","version":"$1"},{"regex":"RoboForm/(\\\\d+[\\\\.\\\\d]+) CFNetwork","name":"RoboForm","version":""},{"regex":"Slack/(\\\\d+[\\\\.\\\\d]+) CFNetwork","name":"Slack","version":""},{"regex":"KAKAOTALK (\\\\d+\\\\.(?:[\\\\.\\\\d]+))?","name":"KakaoTalk","version":"$1"},{"regex":"ShopeeVN/([\\\\d\\\\.]+)","name":"Shopee","version":"$1"},{"regex":"SPORT1/([\\\\d\\\\.]+)","name":"SPORT1","version":""},{"regex":"Clovia/([\\\\d\\\\.]+)","name":"Clovia","version":"$1"},{"regex":"ShowMe/([\\\\d\\\\.]+)","name":"ShowMe","version":"$1"},{"regex":"Wattpad/([\\\\d\\\\.]+)","name":"Wattpad","version":"$1"},{"regex":"WSJ/([\\\\d\\\\.]+)","name":"The Wall Street Journal","version":""},{"regex":"WH%20Questions/([\\\\d\\\\.]+)","name":"WH Questions","version":"$1"},{"regex":"whisper/([\\\\d\\\\.]+)","name":"Whisper","version":""},{"regex":"Opal/([\\\\d\\\\.]+)","name":"Opal Travel","version":"$1"},{"regex":"Zalo/([\\\\d\\\\.]+)","name":"Zalo","version":"$1"},{"regex":"Yandex/([\\\\d\\\\.]+)","name":"Yandex","version":""},{"regex":"Zoho%20Chat/([\\\\d\\\\.]+)","name":"Zoho Chat","version":"$1"},{"regex":"Thunder/(\\\\d+[\\\\.\\\\d]+)","name":"Thunder","version":"$1"},{"regex":"CGNBrowser/(\\\\d+[\\\\.\\\\d]+)","name":"CGN","version":"$1"},{"regex":"Podbean/.+App (\\\\d+[\\\\.\\\\d]+)","name":"Podbean","version":"$1"},{"regex":"AlexaMediaPlayer/(\\\\d+[\\\\.\\\\d]+)","name":"Alexa Media Player","version":"$1"},{"regex":"TuneIn Radio Pro(?:[^/]+)?/(\\\\d+[\\\\.\\\\d]+)","name":"TuneIn Radio Pro","version":"$1"},{"regex":"TuneIn Radio(?:[^/]+)?/(\\\\d+[\\\\.\\\\d]+)","name":"TuneIn Radio","version":"$1"},{"regex":"Podcaster/(\\\\d+[\\\\.\\\\d]+)","name":"Podcaster","version":"$1"},{"regex":"Swoot/(\\\\d+[\\\\.\\\\d]+)","name":"Swoot","version":"$1"},{"regex":"RadioPublic/android-(\\\\d+[\\\\.\\\\d]+)","name":"RadioPublic","version":"$1"},{"regex":"Podimo/(\\\\d+[\\\\.\\\\d]+)","name":"Podimo","version":"$1"},{"regex":"com.evolve.podcast/(\\\\d+[\\\\.\\\\d]+)","name":"Evolve Podcast","version":"$1"},{"regex":" Rocket.Chat\\\\+?/(\\\\d+[\\\\.\\\\d]+)","name":"Rocket Chat","version":"$1"},{"regex":"^Pandora Audio.+Android","name":"Pandora","version":""},{"regex":"^NPROneAndroid","name":"NPR One","version":""},{"regex":"^WirtschaftsWoche-iOS-(\\\\d+[\\\\.\\\\d]+)","name":"Wirtschafts Woche","version":"$1"},{"regex":"^Outlook-iOS/.+\\\\((\\\\d+[\\\\.\\\\d]+)\\\\)$","name":"Microsoft Outlook","version":"$1"},{"regex":"^TVirl/(\\\\d+[\\\\.\\\\d]+)","name":"TVirl","version":"$1"},{"regex":"2?chMate/(\\\\d+[\\\\.\\\\d]+)","name":"ChMate","version":"$1"},{"regex":"2tch/(\\\\d+[\\\\.\\\\d]+)","name":"2tch","version":"$1"},{"regex":"Ciisaa/(\\\\d+[\\\\.\\\\d]+)","name":"Ciisaa","version":"$1"},{"regex":"BB2C (\\\\d+[\\\\.\\\\d]+)","name":"BB2C","version":"$1"},{"regex":"twinkle/(\\\\d+[\\\\.\\\\d]+)","name":"twinkle","version":"$1"},{"regex":"JaneStyle_iOS/(\\\\d+[\\\\.\\\\d]+)","name":"JaneStyle","version":"$1"}]');

},{}],"7Ci9m":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const feed_readers_json_1 = __importDefault(require("../../fixtures/regexes/client/feed_readers.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class FeedReaderParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: "",
                url: ""
            };
            for (const feedReader of feed_readers_json_1.default){
                const match = user_agent_1.userAgentParser(feedReader.regex, userAgent);
                if (!match) continue;
                result.type = "feed reader";
                result.name = variable_replacement_1.variableReplacement(feedReader.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(feedReader.version, match), this.options.versionTruncation);
                result.url = feedReader.url;
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = FeedReaderParser;

},{"../../fixtures/regexes/client/feed_readers.json":"7SFmq","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"7SFmq":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"Akregator(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Akregator","version":"$1","url":"http://userbase.kde.org/Akregator","type":"Feed Reader"},{"regex":"Apple-PubSub(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Apple PubSub","version":"$1","url":"https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/pubsub.1.html","type":"Feed Reader"},{"regex":"BashPodder","name":"BashPodder","version":"","url":"http://lincgeek.org/bashpodder/","type":"Feed Reader"},{"regex":"Breaker/v([\\\\d\\\\.]+)","name":"Breaker","version":"$1","url":"https://www.breaker.audio/","type":"Feed Reader App"},{"regex":"Downcast/([\\\\d\\\\.]+)","name":"Downcast","version":"$1","url":"http://downcastapp.com/","type":"Feed Reader App"},{"regex":"FeedDemon(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"FeedDemon","version":"$1","url":"http://www.feeddemon.com/","type":"Feed Reader"},{"regex":"Feeddler(?:RSS|PRO)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Feeddler RSS Reader","version":"$1","url":"http://www.chebinliu.com/projects/iphone/feeddler-rss-reader/","type":"Feed Reader App"},{"regex":"QuiteRSS(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"QuiteRSS","version":"$1","url":"https://quiterss.org","type":"Feed Reader App"},{"regex":"gPodder/([\\\\d\\\\.]+)","name":"gPodder","version":"$1","url":"http://gpodder.org/","type":"Feed Reader App"},{"regex":"JetBrains Omea Reader(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"JetBrains Omea Reader","version":"$1","url":"http://www.jetbrains.com/omea/reader/","type":"Feed Reader"},{"regex":"Liferea(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Liferea","version":"$1","url":"http://liferea.sf.net/","type":"Feed Reader"},{"regex":"(?:NetNewsWire|Evergreen.+MacOS)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"NetNewsWire","version":"$1","url":"http://netnewswireapp.com/","type":"Feed Reader"},{"regex":"NewsBlur (?:iPhone|iPad) App(?: v(\\\\d+[\\\\.\\\\d]+))?","name":"NewsBlur Mobile App","version":"$1","url":"http://www.newsblur.com","type":"Feed Reader App"},{"regex":"NewsBlur(?:/(\\\\d+[\\\\.\\\\d]+))","name":"NewsBlur","version":"$1","url":"http://www.newsblur.com","type":"Feed Reader"},{"regex":"newsbeuter(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Newsbeuter","version":"$1","url":"http://www.newsbeuter.org/","type":"Feed Reader"},{"regex":"PritTorrent/([\\\\d\\\\.]+)","name":"PritTorrent","version":"$1","url":"http://bitlove.org","type":"Feed Reader"},{"regex":"Pulp[/ ](\\\\d+[\\\\.\\\\d]+)","name":"Pulp","version":"$1","url":"http://www.acrylicapps.com/pulp/","type":"Feed Reader App"},{"regex":"ReadKit(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"ReadKit","version":"$1","url":"http://readkitapp.com/","type":"Feed Reader App"},{"regex":"Reeder[/ ](\\\\d+[\\\\.\\\\d]+)","name":"Reeder","version":"$1","url":"http://reederapp.com/","type":"Feed Reader App"},{"regex":"RSSBandit(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"RSS Bandit","version":"$1","url":"http://www.rssbandit.org)","type":"Feed Reader"},{"regex":"RSS Junkie(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"RSS Junkie","version":"$1","url":"https://play.google.com/store/apps/details?id=com.bitpowder.rssjunkie","type":"Feed Reader App"},{"regex":"RSSOwl(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"RSSOwl","version":"$1","url":"http://www.rssowl.org/","type":"Feed Reader"},{"regex":"Stringer","name":"Stringer","version":"","url":"https://github.com/swanson/stringer","type":"Feed Reader"}]');

},{}],"dWoue":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const libraries_json_1 = __importDefault(require("../../fixtures/regexes/client/libraries.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class LibraryParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: "",
                url: ""
            };
            for (const library of libraries_json_1.default){
                const match = user_agent_1.userAgentParser(library.regex, userAgent);
                if (!match) continue;
                result.type = "library";
                result.name = variable_replacement_1.variableReplacement(library.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(library.version, match), this.options.versionTruncation);
                result.url = library.url || "";
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = LibraryParser;

},{"../../fixtures/regexes/client/libraries.json":"aiAZb","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"aiAZb":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"Wget(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Wget","version":"$1"},{"regex":"Guzzle(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Guzzle (PHP HTTP Client)","version":"$1"},{"regex":"(?:lib)?curl(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"curl","version":"$1"},{"regex":"python-requests(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Python Requests","version":"$1"},{"regex":"Python-urllib(?:/?(\\\\d+[\\\\.\\\\d]+))?","name":"Python urllib","version":"$1"},{"regex":"Java(?:/?(\\\\d+[\\\\.\\\\d]+))?","name":"Java","version":"$1"},{"regex":"(?:perlclient|libwww-perl)(?:/?(\\\\d+[\\\\.\\\\d]+))?","name":"Perl","version":"$1"},{"regex":"okhttp/([\\\\d\\\\.]+)","name":"OkHttp","version":"$1"},{"regex":"HTTP_Request2(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"HTTP_Request2","version":"$1"},{"regex":"HTTP_Request2(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"HTTP_Request2","version":"$1","url":"http://pear.php.net/package/http_request2"},{"regex":"Mechanize(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Mechanize","version":"$1","url":"http://github.com/sparklemotion/mechanize/"},{"regex":"aiohttp(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"aiohttp","version":"$1"},{"regex":"Google-HTTP-Java-Client(?:/(\\\\d+[\\\\.\\\\d\\\\w-]+))?","name":"Google HTTP Java Client","version":"$1"},{"regex":"WWW-Mechanize(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"WWW-Mechanize","version":"$1"},{"regex":"Faraday(?: v(\\\\d+[\\\\.\\\\d]+))?","name":"Faraday","version":"$1"},{"regex":"(?:Go-http-client|Go )/?(?:(\\\\d+[\\\\.\\\\d]+))?(?: package http)?","name":"Go-http-client","version":"$1"},{"regex":"urlgrabber(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"urlgrabber (yum)","version":"$1"},{"regex":"libdnf(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"libdnf","version":"$1"},{"regex":"HTTPie(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"HTTPie","version":"$1"},{"regex":"rest-client/(\\\\d+[\\\\.\\\\d]+).*ruby","name":"REST Client for Ruby","version":"$1"},{"regex":"RestSharp/(\\\\d+[\\\\.\\\\d]+)","name":"RestSharp","version":"$1","url":"http://restsharp.org/"},{"regex":"scalaj-http/(\\\\d+[\\\\.\\\\d]+)","name":"ScalaJ HTTP","version":"$1","url":"https://github.com/scalaj/scalaj-http"},{"regex":"REST::Client/(\\\\d+)","name":"Perl REST::Client","version":"$1","url":"https://metacpan.org/pod/REST::Client"},{"regex":"node-fetch/(\\\\d+[\\\\.\\\\d]+)","name":"Node Fetch","version":"$1","url":"https://github.com/node-fetch/node-fetch"},{"regex":"ReactorNetty/(\\\\d+[\\\\.\\\\d]+)","name":"ReactorNetty","version":"$1","url":"https://github.com/reactor/reactor-netty"},{"regex":"PostmanRuntime(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Postman Desktop","version":"$1","url":"https://github.com/postmanlabs/postman-runtime"},{"regex":"Jakarta Commons-HttpClient/([\\\\.\\\\d]+)","name":"Jakarta Commons HttpClient","version":"$1","url":"https://hc.apache.org/httpclient-3.x"},{"regex":"WinHttp.WinHttpRequest.+([\\\\.\\\\d]+)","name":"WinHttp WinHttpRequest","version":"$1"},{"regex":"Embarcadero URI Client/([\\\\.\\\\d]+)","name":"Embarcadero URI Client","version":"$1"},{"regex":"Mikrotik/([\\\\.\\\\d]+)","name":"Mikrotik Fetch","version":"$1"},{"regex":"GRequests(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"GRequests","version":"$1"},{"regex":"akka-http/([\\\\.\\\\d]+)","name":"Akka HTTP","version":"$1"}]');

},{}],"lvhXV":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const mediaplayers_json_1 = __importDefault(require("../../fixtures/regexes/client/mediaplayers.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class MediaPlayerParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: ""
            };
            for (const mediaPlayer of mediaplayers_json_1.default){
                const match = user_agent_1.userAgentParser(mediaPlayer.regex, userAgent);
                if (!match) continue;
                result.type = "media player";
                result.name = variable_replacement_1.variableReplacement(mediaPlayer.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(mediaPlayer.version, match), this.options.versionTruncation);
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = MediaPlayerParser;

},{"../../fixtures/regexes/client/mediaplayers.json":"hnEjX","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"hnEjX":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"Audacious(?:[ /]([\\\\d\\\\.]+))?","name":"Audacious","version":"$1"},{"regex":"Banshee(?:[ /]([\\\\d\\\\.]+))?","name":"Banshee","version":"$1"},{"regex":"Boxee(?:[ /]([\\\\d\\\\.]+))?","name":"Boxee","version":"$1"},{"regex":"Clementine(?:[ /]([\\\\d\\\\.]+))?","name":"Clementine","version":"$1"},{"regex":"Deezer(?:/([\\\\d\\\\.]+))?","name":"Deezer","version":"$1"},{"regex":"iTunes(?:-iPhone|-iPad)?(?:/([\\\\d\\\\.]+))?","name":"iTunes","version":"$1"},{"regex":"FlyCast(?:/([\\\\d\\\\.]+))?","name":"FlyCast","version":"$1"},{"regex":"foobar2000(?:/([\\\\d\\\\.]+))?","name":"Foobar2000","version":"$1"},{"regex":"MediaMonkey(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"MediaMonkey","version":"$1"},{"regex":"Miro(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Miro","version":"$1"},{"regex":"NexPlayer(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"NexPlayer","version":"$1"},{"regex":"Nightingale(?:/([\\\\d\\\\.]+))?","name":"Nightingale","version":"$1"},{"regex":"QuickTime(?:(?:(?:.+qtver=)|(?:(?: E-)?[\\\\./]))([\\\\d\\\\.]+))?","name":"QuickTime","version":"$1"},{"regex":"Songbird(?:/([\\\\d\\\\.]+))?","name":"Songbird","version":"$1"},{"regex":"SubStream(?:/([\\\\d\\\\.]+))?","name":"SubStream","version":"$1"},{"regex":"Sonos/([\\\\d\\\\.]+)?","name":"SONOS","version":"$1"},{"regex":"(?:Lib)?VLC(?:/([\\\\d\\\\.]+))?","name":"VLC","version":"$1"},{"regex":"Winamp(?:MPEG)?(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Winamp","version":"$1"},{"regex":"(?:Windows-Media-Player|NSPlayer)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Windows Media Player","version":"$1"},{"regex":"XBMC(?:/([\\\\d\\\\.]+))?","name":"XBMC","version":"$1"},{"regex":"Kodi(?:/([\\\\d\\\\.]+))?","name":"Kodi","version":"$1"},{"regex":"stagefright(?:/([\\\\d\\\\.]+))?","name":"Stagefright","version":"$1"},{"regex":"GoogleChirp(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Google Podcasts","version":"$1"},{"regex":"Music Player Daemon (?:(\\\\d+[\\\\.\\\\d]+))?","name":"Music Player Daemon","version":"$1"},{"regex":"mpv (?:(\\\\d+[\\\\.\\\\d]+))?","name":"mpv","version":"$1"}]');

},{}],"d7jwn":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const pim_json_1 = __importDefault(require("../../fixtures/regexes/client/pim.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class PersonalInformationManagerParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                name: "",
                version: ""
            };
            for (const personalInformationManager of pim_json_1.default){
                const match = user_agent_1.userAgentParser(personalInformationManager.regex, userAgent);
                if (!match) continue;
                result.type = "personal information manager";
                result.name = variable_replacement_1.variableReplacement(personalInformationManager.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(personalInformationManager.version, match), this.options.versionTruncation);
                break;
            }
            return result;
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = PersonalInformationManagerParser;

},{"../../fixtures/regexes/client/pim.json":"hQY2Y","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"hQY2Y":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"Outlook-Express(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Outlook Express","version":"$1"},{"regex":"Microsoft Outlook(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Microsoft Outlook","version":"$1"},{"regex":"(?:Thunderbird|Icedove|Shredder)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Thunderbird","version":"$1"},{"regex":"Airmail(?: (\\\\d+[\\\\.\\\\d]+))?","name":"Airmail","version":"$1"},{"regex":"Lotus-Notes(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"Lotus Notes","version":"$1"},{"regex":"Barca(?:Pro)?(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Barca","version":"$1"},{"regex":"Postbox(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Postbox","version":"$1"},{"regex":"MailBar(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"MailBar","version":"$1"},{"regex":"The Bat!(?: Voyager)?(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"The Bat!","version":"$1"},{"regex":"DAVdroid(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"DAVdroid","version":"$1"},{"regex":"(?:SeaMonkey|Iceape)(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"SeaMonkey","version":"$1"},{"regex":"Live5ch/(\\\\d+[\\\\.\\\\d]+)","name":"Live5ch","version":"$1"},{"regex":"JaneView/","name":"JaneView","version":""},{"regex":"BathyScaphe/","name":"BathyScaphe","version":""}]');

},{}],"nlCs9":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const cameras_1 = __importDefault(require("./cameras"));
const mobiles_1 = __importDefault(require("./mobiles"));
const televisions_1 = __importDefault(require("./televisions"));
const cars_1 = __importDefault(require("./cars"));
const consoles_1 = __importDefault(require("./consoles"));
const notebooks_1 = __importDefault(require("./notebooks"));
const portable_media_players_1 = __importDefault(require("./portable-media-players"));
const deviceParsers = [
    consoles_1.default,
    cars_1.default,
    cameras_1.default,
    televisions_1.default,
    portable_media_players_1.default,
    mobiles_1.default,
    notebooks_1.default
];
class ClientParser {
    constructor(){
        this.parse = (userAgent)=>{
            for (const Parser of deviceParsers){
                const parser = new Parser();
                const device = parser.parse(userAgent);
                if (device.type !== "") return device;
            }
            return null;
        };
    }
}
exports.default = ClientParser;

},{"./cameras":"jmtYJ","./mobiles":"jTWht","./televisions":"f9SkP","./cars":"2ehGP","./consoles":"gq9ao","./notebooks":"27Zpq","./portable-media-players":"fc0rS"}],"jmtYJ":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const cameras_json_1 = __importDefault(require("../../fixtures/regexes/device/cameras.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class CameraParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, camera] of Object.entries(cameras_json_1.default)){
                const match = user_agent_1.userAgentParser(camera.regex, userAgent);
                if (!match) continue;
                result.type = "camera";
                result.brand = brand;
                if ("model" in camera && camera.model) result.model = variable_replacement_1.variableReplacement(camera.model, match).trim();
                else if ("models" in camera && camera.models) for (const model of camera.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, modelMatch).trim();
                    break;
                }
                break;
            }
            return result;
        };
    }
}
exports.default = CameraParser;

},{"../../fixtures/regexes/device/cameras.json":"jDA9X","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"jDA9X":[function(require,module,exports) {
module.exports = JSON.parse('{"Nikon":{"regex":"Coolpix S800c","device":"camera","model":"Coolpix S800c"},"Samsung":{"regex":"EK-G[CN][0-9]{3}","device":"camera","models":[{"regex":"EK-GN120","model":"Galaxy NX"},{"regex":"EK-GC100","model":"Galaxy Camera"},{"regex":"EK-GC110","model":"Galaxy Camera WiFi only"},{"regex":"EK-GC200","model":"Galaxy Camera 2"},{"regex":"EK-GC([0-9]{3})","model":"Galaxy Camera $1"}]}}');

},{}],"jTWht":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const mobiles_json_1 = __importDefault(require("../../fixtures/regexes/device/mobiles.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const model_1 = require("../../utils/model");
class MobileParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            let resultType = "";
            for (const [brand, mobile] of Object.entries(mobiles_json_1.default)){
                const match = user_agent_1.userAgentParser(mobile.regex, userAgent);
                if (!match) continue;
                resultType = "device" in mobile && mobile.device || "";
                result.brand = brand;
                if ("model" in mobile && mobile.model) result.model = model_1.buildModel(variable_replacement_1.variableReplacement(mobile.model, match)).trim();
                else if ("models" in mobile && mobile.models) for (const model of mobile.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = model_1.buildModel(variable_replacement_1.variableReplacement(model.model, modelMatch)).trim();
                    if ("device" in model && model.device) resultType = model.device;
                    if ("brand" in model) result.brand = model.brand || "";
                    break;
                }
                break;
            }
            // Sanitize device type
            if (resultType === "tv") result.type = "television";
            else if (resultType === "car browser") result.type = "car";
            else result.type = resultType;
            // Sanitize device brand
            if (result.brand === "Unknown") result.brand = "";
            return result;
        };
    }
}
exports.default = MobileParser;

},{"../../fixtures/regexes/device/mobiles.json":"5LFtf","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../utils/model":"j4X29"}],"5LFtf":[function(require,module,exports) {

},{}],"j4X29":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildModel = (model)=>{
    model = model.replace(/_/g, " ");
    model = model.replace(RegExp(" TD$", "i"), "");
    if (model === "Build") return "";
    return model;
};

},{}],"f9SkP":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const televisions_json_1 = __importDefault(require("../../fixtures/regexes/device/televisions.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const model_1 = require("../../utils/model");
class TelevisionParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            if (!this.isHbbTv(userAgent)) return result;
            result.type = "television";
            for (const [brand, television] of Object.entries(televisions_json_1.default)){
                const match = user_agent_1.userAgentParser(television.regex, userAgent);
                if (!match) continue;
                result.brand = brand;
                if ("model" in television && television.model) result.model = model_1.buildModel(variable_replacement_1.variableReplacement(television.model, match)).trim();
                else if ("models" in television && television.models) for (const model of television.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = model_1.buildModel(variable_replacement_1.variableReplacement(model.model, modelMatch)).trim();
                    break;
                }
                break;
            }
            return result;
        };
        this.isHbbTv = (userAgent)=>{
            return user_agent_1.userAgentParser("HbbTV/([1-9]{1}(?:.[0-9]{1}){1,2})", userAgent);
        };
    }
}
exports.default = TelevisionParser;

},{"../../fixtures/regexes/device/televisions.json":"lv7qE","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../utils/model":"j4X29"}],"lv7qE":[function(require,module,exports) {
module.exports = JSON.parse('{"Airties":{"regex":"Airties","device":"tv","models":[{"regex":"Airties; ?([^);/]+)","model":"$1"}]},"ALDI NORD":{"regex":"ALDINORD[;,]","device":"tv","model":""},"ALDI S\xdcD":{"regex":"ALDISUED[;,]","device":"tv","model":""},"Altech UEC":{"regex":"Altech UEC","device":"tv","models":[{"regex":"Altech UEC; ?([^);/]+)","model":"$1"}]},"AOC":{"regex":"AOC","device":"tv","models":[{"regex":"(LE43S5970-20|S50856)","model":"$1"}]},"ARRIS":{"regex":"ARRIS[;,]","device":"tv","models":[{"regex":"FS-ARS-01B","model":"FS-ARS-01B"}]},"Atvio":{"regex":"ATVIO","device":"tv","models":[{"regex":"55D1620","model":"55D1620"}]},"BangOlufsen":{"regex":"Bangolufsen","device":"tv","model":"BeoVision"},"Blaupunkt":{"regex":"Blaupunkt_UMC[;,]","device":"tv","models":[{"regex":"LC-65CUG8052E","model":"LC-65CUG8052E"}]},"Bush":{"regex":"BUSH[;,]","device":"tv","model":""},"Celcus":{"regex":"CELCUS[;,]","device":"tv","model":""},"Changhong":{"regex":"Changhong","device":"tv","models":[{"regex":"Changhong; ?([^);/]+)","model":"$1"}]},"CreNova":{"regex":"CreNova","device":"tv","model":"CNV001"},"Digihome":{"regex":"DIGIHOME[;,]","device":"tv","model":""},"DMM":{"regex":"DMM","device":"tv","model":"Dreambox"},"ELECTRONIA":{"regex":"ELECTRONIA[;,]","device":"tv","model":""},"Essentielb":{"regex":"ESSENTIELB[;,]","device":"tv","model":""},"Finlux":{"regex":"FINLUX[;,]","device":"tv","model":""},"F&U":{"regex":"FU[;,]","device":"tv","model":""},"Fuego":{"regex":"FUEGO[;,]","device":"tv","model":""},"GoGEN":{"regex":"GOGEN[;,]","device":"tv","model":""},"Grundig":{"regex":"(OWB|Grundig|Arcelik)","device":"tv","model":""},"Haier":{"regex":"(?:HHW_)?HAIER","device":"tv","models":[{"regex":"LE55X7000U","model":"LE55X7000U"}]},"Hi-Level":{"regex":"HI-LEVEL[;,]","device":"tv","model":""},"Hisense":{"regex":"Hisense|Eurofins_Digital_Testing","device":"tv","models":[{"regex":"50ADEVTOOL","model":"50ADEVTOOL"},{"regex":"50A683FEVS","model":"50A683FEVS"},{"regex":"55A6100EE","model":"55A6100EE"},{"regex":"55U62QGAVT","model":"55U62QGAVT"},{"regex":"50A6502EA","model":"50A6502EA"},{"regex":"MICALIDVB6886","model":"MICALIDVB6886"},{"regex":"(L[A-Z]{2,3}[0-9]{2}[A-Z][0-9]{3,4}[A-Z]{0,6}[0-9]?[A-Z]?)","model":"$1"},{"regex":"(H[A-Z]?[0-9]{2}[A-Z][0-9]{3,4}[A-Z]{0,4})","model":"$1"}]},"Hitachi":{"regex":"Hitachi[;,]","device":"tv","models":[{"regex":"49D2900","model":"49D2900"}]},"Horizon":{"regex":"HORIZON[;,]","device":"tv","model":""},"Hotel":{"regex":"HOTEL[;,]","device":"tv","model":""},"Humax":{"regex":"Humax","device":"tv","models":[{"regex":"(HD-FOX C|HD (FOX\\\\+|NANO)|iCord (HD\\\\+|MINI|Cable)|(CX|IR)HD-5100(C|S)|HM9503HD)","model":"$1"},{"regex":"HMS1000S","model":"HMS-1000S"},{"regex":"Humax; ([^);/]+)","model":"$1"}]},"Hyundai":{"regex":"HYUNDAI[;,]","device":"tv","model":""},"Ikea":{"regex":"Ikea","device":"tv","model":""},"Intek":{"regex":"Intek","device":"tv","models":[{"regex":"(Vantage|VT-100|VT-1)","model":"$1"}]},"Inverto":{"regex":"Inverto","device":"tv","models":[{"regex":"inverto; ([^);/]+)","model":"$1"},{"regex":"(Volksbox Web Edition|Volksbox Essential|Volksbox II|Volksbox)","model":"$1"}]},"JVC":{"regex":"AFTSO001|JVC[;,]","device":"tv","models":[{"regex":"AFTSO001","model":"4K (2019)"}]},"Kalley":{"regex":"KALLEY[;,]","device":"tv","models":[{"regex":"32D1620","model":"32D1620"}]},"KUBO":{"regex":"KUBO[;,]","device":"tv","model":""},"Laurus":{"regex":"LAURUS[;,]","device":"tv","model":""},"LG":{"regex":"LGE","device":"tv","models":[{"regex":"XU43WT180N","model":"XU43WT180N"},{"regex":"43LJ614V-ZA","model":"43LJ614V-ZA"},{"regex":"55SK850V-ZA","model":"55SK850V-ZA"},{"regex":"KEY0000213F1z","model":"KEY0000213F1z"},{"regex":"KEY0000213F","model":"KEY0000213F"},{"regex":"KEY000000(2E|2F|3B|3F)","model":"KEY000000$1"},{"regex":"(NetCast [0-9]{1}.[0-9]{1}|GLOBAL_PLAT3)","model":"$1"},{"regex":"(OLED[0-9]{2}[A-Z0-9]{3}[A-Z]{2})","model":"$1"},{"regex":"(OLED[0-9]{2}[A-Z][0-9][A-Z])","model":"$1"},{"regex":"(OLED[0-9]{2}[A-Z0-9]{2})","model":"$1"},{"regex":"([0-9]{2}[A-Z]{2}[0-9]{4}[A-Z0-9]{1}[A-Z]{2})","model":"$1"},{"regex":"([0-9]{2}NANO[0-9]{3}[A-Z]{2})","model":"$1"},{"regex":"([0-9]{2}NANO[0-9]{2})","model":"$1"},{"regex":"LGE;? ?([0-9]{2}[A-Z]{2}[0-9]{2,4}[A-Z]?)","model":"$1"},{"regex":"LM21U","model":"LM21U"},{"regex":"32LM","model":"32LM"}]},"Lifemaxx":{"regex":"Lifemaxx[;,]","device":"tv","model":""},"Linsar":{"regex":"LINSAR[;,]","device":"tv","model":""},"Loewe":{"regex":"Loewe","device":"tv","models":[{"regex":"([A-Z]{2}[0-9]{3})","model":"$1"}]},"Luxor":{"regex":"LUXOR[;,]","device":"tv","model":""},"Manhattan":{"regex":"Manhattan","device":"tv","models":[{"regex":"T3","model":"T3"}]},"MediaTek":{"regex":"MTK|MediaTek;","device":"tv","models":[{"regex":"(MT[0-9]{4})","model":"$1"}]},"Medion":{"regex":"Medion","device":"tv","model":""},"Miray":{"regex":"MIRAY","device":"tv","models":[{"regex":"LEDM-322NIP","model":"LEDM-322NIP"}]},"MStar":{"regex":"MStar[;,]","device":"tv","models":[{"regex":"([24])KTV18","model":"$1KTV18"}]},"MTC":{"regex":"MTC[;,]","device":"tv","models":[{"regex":"([24])K_Android_TV_V01","model":"$1K Android TV"}]},"Nordmende":{"regex":"NORDMENDE[;,]","device":"tv","model":""},"Metz":{"regex":"Metz","device":"tv","model":""},"Ok":{"regex":"OK[;,]","device":"tv","model":""},"Panasonic":{"regex":"Panasonic","device":"tv","models":[{"regex":"VIERA (201[1-9])","model":"VIERA ($1)"},{"regex":"(DIGA [A-Z]{1}[0-9]{4})","model":"$1"},{"regex":"DIGA Webkit ([A-Z]{1}[0-9]{4})","model":"DIGA $1"},{"regex":"SmartTV(201[89]|202[0-1])","model":"Smart TV ($1)"}]},"PEAQ":{"regex":"PEAQ","device":"tv","model":""},"Philips":{"regex":"Philips|NETTV/","device":"tv","models":[{"regex":"Philips[,;] ?((?! )[^),;/]+)","model":"$1"},{"regex":"NETTV/[0-9\\\\.]{5}","model":"NetTV Series"}]},"Polaroid":{"regex":"POLAROID[;,]","device":"tv","model":""},"PROFiLO":{"regex":"PROFILO[;,]","device":"tv","model":""},"Qilive":{"regex":"QILIVE[;,]","device":"tv","model":""},"REGAL":{"regex":"REGAL[;,]","device":"tv","model":""},"Saba":{"regex":"Saba[;,]","device":"tv","model":""},"Salora":{"regex":"Salora[;,]","device":"tv","model":""},"Samsung":{"regex":"Samsung|Maple_2011","device":"tv","models":[{"regex":"SmartTV(201[2-9]|202[0-1]):([^);/]+)","model":"$2"},{"regex":"SmartTV(201[2-9]|202[0-1])","model":"Smart TV ($1)"},{"regex":"Maple_2011","model":"Smart TV (2011)"}]},"SCBC":{"regex":"SCBC[;,]","device":"tv","models":[{"regex":"SCBC586","model":"SCBC586"},{"regex":"43D1850","model":"43D1850"}]},"SEG":{"regex":"SEG[;,]","device":"tv","model":""},"Selevision":{"regex":"Selevision","device":"tv","models":[{"regex":"Selevision; (?:Selevision )?([^);/]+)","model":"$1"},{"regex":"(EMC1000i)","model":"$1"}]},"Sharp":{"regex":"(?:UMC-)?Sharp","device":"tv","models":[{"regex":"Sharp[,;] ?((?! |HbbTV)[^),;/]+)","model":"$1"},{"regex":"(LE[0-9]{3}[A-Z]{0,3})","model":"$1"},{"regex":"LC-([^);/]+)","model":"LC-$1"},{"regex":"BLA-43","model":"BLA-43"}]},"Skyworth":{"regex":"Sky_worth","device":"tv","models":[{"regex":"Sky_worth;([^);/]+)","model":"$1"}]},"Smart":{"regex":"Smart[;,]","device":"tv","models":[{"regex":"Smart; ([^);/]+)","model":"$1"},{"regex":"([A-Z]{2}[0-9]{2}|ZAPPIX)","model":"$1"}]},"Sony":{"regex":"Sony","device":"tv","models":[{"regex":"KDL-GR1","model":"KDL-GR1"},{"regex":"KDL-GN([56])","model":"KDL-GN$1"},{"regex":"BRAVIA (VH1|4K VH2)","model":"BRAVIA $1"},{"regex":"(KDL?-?[0-9]{2}[A-Z]{1}[0-9]{4}[A-Z]{1})","model":"$1"},{"regex":"(KDL?-?[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1})","model":"$1"},{"regex":"(KDL?-?[0-9]{2}[A-Z]{1,2}[0-9]{1,5})","model":"$1"}]},"SWTV":{"regex":"SWTV[;,]","device":"tv","models":[{"regex":"SKWE20E21","model":"SKWE20E21"}]},"TD Systems":{"regex":"TDSystems[;,]","device":"tv","models":[{"regex":"SmartTV(2019|2020)","model":"Smart TV ($1)"}]},"Technicolor":{"regex":"Technicolor","device":"tv","models":[{"regex":"uzw4054ttg","model":"UZW4054TTG"}]},"Technika":{"regex":"TECHNIKA[;,]","device":"tv","model":""},"TechniSat":{"regex":"TechniSat","device":"tv","models":[{"regex":"((DigiCorder|MultyVision|Digit) (ISIO S|ISIO C|ISIO))","model":"$1"}]},"TechnoTrend":{"regex":"TechnoTrend","device":"tv","models":[{"regex":"([A-Z]{1}-[0-9]{3})","model":"$1"}]},"Techwood":{"regex":"Techwood[;,]","device":"tv","model":""},"Telefunken":{"regex":"Telefunken","device":"tv","model":""},"TCL":{"regex":"TCL","device":"tv","models":[{"regex":"(32D1820|(?:39|55)D2900|32D2930|(?:32|43)S4900)","model":"$1"}]},"Thomson":{"regex":"THOMSON[,]?|THOM","device":"tv","models":[{"regex":"(TB28D19DHS-01|T28D18SFS-01B)","model":"$1 28.0\\""},{"regex":"(T32RTM5040|T32D18SFS-01B)","model":"$1 32.0\\""},{"regex":"(T43FSL5031|T43D18SFS-01B)","model":"$1 43.0\\""},{"regex":"(T40D18SFS-01B)","model":"$1 40.0\\""},{"regex":"(T49D18SFS-01B)","model":"$1 49.0\\""},{"regex":"(T55D18[SD]FS-01B)","model":"$1 55.0\\""},{"regex":"40FB5426","model":"40FB5426"}]},"TOKYO":{"regex":"TOKYO[;,]","device":"tv","models":[{"regex":"TOKTCLED32S","model":"TOKTCLED32S"}]},"Toshiba":{"regex":"Toshiba","device":"tv","models":[{"regex":"40L2600","model":"40L2600"},{"regex":"(([0-9]{2}|DTV_)[A-Z]{2}[0-9]{1,3})","model":"$1"}]},"Videoweb":{"regex":"videoweb|tv2n","device":"tv","models":[{"regex":"(tv2n)","model":"$1"},{"regex":"(videowebtv)","model":"VideoWeb TV"}]},"VOX":{"regex":"VOX[;,]","device":"tv","model":""},"WELLINGTON":{"regex":"WELLINGTON[;,]","device":"tv","model":""},"X.Vision":{"regex":"X-VISION[;,]","device":"tv","model":""},"Vestel":{"regex":"(?:Vestel.+VESTEL|VESTEL;)","device":"tv","model":""}}');

},{}],"2ehGP":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const car_browsers_json_1 = __importDefault(require("../../fixtures/regexes/device/car_browsers.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class CarParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, car] of Object.entries(car_browsers_json_1.default)){
                const match = user_agent_1.userAgentParser(car.regex, userAgent);
                if (!match) continue;
                result.type = "car";
                result.brand = brand;
                for (const model of car.models){
                    const match = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!match) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, match).trim();
                }
                break;
            }
            return result;
        };
    }
}
exports.default = CarParser;

},{"../../fixtures/regexes/device/car_browsers.json":"kzkjI","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"kzkjI":[function(require,module,exports) {
module.exports = JSON.parse('{"Tesla":{"regex":"(?:Tesla/[0-9.]+|QtCarBrowser)","device":"car browser","models":[{"regex":"QtCarBrowser","model":"Model S"},{"regex":"Tesla/[0-9.]+","model":""}]},"MAC AUDIO":{"regex":"Mac Audio Spro","device":"car browser","models":[{"regex":"Spro","model":"S Pro"}]},"Topway":{"regex":"sp9853i_1h10_vmm","device":"car browser","models":[{"regex":"sp9853i_1h10_vmm","model":"TS9"}]}}');

},{}],"gq9ao":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const consoles_json_1 = __importDefault(require("../../fixtures/regexes/device/consoles.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class ConsoleParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, gameConsole] of Object.entries(consoles_json_1.default)){
                const match = user_agent_1.userAgentParser(gameConsole.regex, userAgent);
                if (!match) continue;
                result.type = gameConsole.device;
                result.brand = brand;
                if ("model" in gameConsole && gameConsole.model) result.model = variable_replacement_1.variableReplacement(gameConsole.model, match).trim();
                else if ("models" in gameConsole && gameConsole.models) for (const model of gameConsole.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, modelMatch).trim();
                    break;
                }
                break;
            }
            return result;
        };
    }
}
exports.default = ConsoleParser;

},{"../../fixtures/regexes/device/consoles.json":"lMm6d","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"lMm6d":[function(require,module,exports) {
module.exports = JSON.parse('{"Archos":{"regex":"Archos.*GAMEPAD([2]?)","device":"console","model":"Gamepad $1"},"Microsoft":{"regex":"Xbox","device":"console","models":[{"regex":"Xbox Series X","model":"Xbox Series X"},{"regex":"Xbox One X","model":"Xbox One X"},{"regex":"Xbox One","model":"Xbox One"},{"regex":"XBOX_ONE_ED","model":"Xbox One S"},{"regex":"Xbox","model":"Xbox 360"}]},"Nintendo":{"regex":"Nintendo (([3]?DS[i]?)|Wii[U]?|Switch)","device":"console","model":"$1"},"OUYA":{"regex":"OUYA","device":"console","model":"OUYA"},"Sega":{"regex":"Dreamcast","device":"console","model":"Dreamcast"},"Sony":{"regex":"PlayStation (3|4 Pro|4|Portable|Vita)","device":"console","model":"PlayStation $1"}}');

},{}],"27Zpq":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const notebooks_json_1 = __importDefault(require("../../fixtures/regexes/device/notebooks.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const model_1 = require("../../utils/model");
class NotebooksParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            if (!user_agent_1.userAgentParser("FBMD/", userAgent)) return result;
            for (const [brand, notebook] of Object.entries(notebooks_json_1.default)){
                const match = user_agent_1.userAgentParser(notebook.regex, userAgent);
                if (!match) continue;
                result.type = "desktop";
                result.brand = brand;
                if ("model" in notebook && notebook.model) result.model = model_1.buildModel(variable_replacement_1.variableReplacement(notebook.model, match)).trim();
                else if ("models" in notebook && notebook.models) for (const model of notebook.models){
                    const match = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!match) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, match).trim();
                }
                break;
            }
            return result;
        };
    }
}
exports.default = NotebooksParser;

},{"../../fixtures/regexes/device/notebooks.json":"2tGdW","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","../../utils/model":"j4X29"}],"2tGdW":[function(require,module,exports) {
module.exports = JSON.parse('{"Acer":{"regex":"FBMD/(?:Aspire E5-421G|Z5WAL|One S1003);","device":"desktop","models":[{"regex":"FBMD/Aspire E5-421G;","model":"Aspire E5-421G"},{"regex":"FBMD/Z5WAL;","model":"Aspire E5-511"},{"regex":"FBMD/One S1003;","model":"One 10"}]},"Asus":{"regex":"FBMD/(?:K50IN|K54L|T100HAN|T103HAF|UX360CAK|X550LB|X553MA|X555LN|X556UQK);","device":"desktop","models":[{"regex":"FBMD/K50IN;","model":"K50IN"},{"regex":"FBMD/K54L;","model":"K54L"},{"regex":"FBMD/T100HAN;","model":"Transformer Book"},{"regex":"FBMD/T103HAF;","model":"Transformer Mini"},{"regex":"FBMD/UX360CAK;","model":"ZenBook Flip"},{"regex":"FBMD/X550LB;","model":"X550LB"},{"regex":"FBMD/X553MA;","model":"X553MA"},{"regex":"FBMD/X555LN;","model":"X555LN"},{"regex":"FBMD/X556UQK;","model":"X556UQK"}]},"Dell":{"regex":"FBMD/(?:Latitude E4300|Inspiron 3541|XPS 15 95[35]0);","device":"desktop","models":[{"regex":"Latitude E4300","model":"Latitude E4300"},{"regex":"Inspiron 3541","model":"Inspiron 3541"},{"regex":"XPS 15 9530","model":"XPS 15 9530"},{"regex":"XPS 15 9550","model":"XPS 15 9550"}]},"HP":{"regex":"FBMD/((?:Compaq|HP) |23-f364)","device":"desktop","models":[{"regex":"Compaq Presario CQ61 Notebook PC","model":"Compaq Presario CQ61"},{"regex":"HP Pavilion x2 Detachable","model":"Pavilion x2"},{"regex":"HP Laptop 15-bs0xx","model":"15 Laptop PC"},{"regex":"HP ENVY x360 Convertible 15-bp0xx","model":"ENVY x360 Convertible PC"},{"regex":"HP EliteBook (25[67]0p)","model":"EliteBook $1"},{"regex":"HP ProBook (440 G5|6[35]60b)","model":"ProBook $1"},{"regex":"HP Pavilion dv6 Notebook PC","model":"Pavilion dv6"},{"regex":"HP Pavilion Notebook","model":"Pavilion"},{"regex":"HP Spectre x360 Convertible","model":"Spectre x360"},{"regex":"HP Pavilion All-in-One 24-r0xx","model":"Pavilion 24-r0xx All-in-One Desktop PC","device":"desktop"},{"regex":"23-f364","model":"Pavilion TouchSmart 23-f364 All-in-One Desktop PC","device":"desktop"}]},"Lenovo":{"regex":"FBMD/(?:37021C5|80E5|80SM|80VR);","device":"desktop","models":[{"regex":"FBMD/37021C5;","model":"ThinkPad Helix 3702"},{"regex":"FBMD/80E5;","model":"G50-80"},{"regex":"FBMD/80SM;","model":"Ideapad 310-15ISK"},{"regex":"FBMD/80VR;","model":"Legion Y720"}]},"Schneider":{"regex":"FBMD/SCL141CTP;","device":"desktop","model":"Notebook 14\\" Cherry Trail"},"Thomson":{"regex":"FBMD/TH360R12.32CTW;","device":"desktop","model":"Prestige TH-360R12.32CTW"},"Toshiba":{"regex":"FBMD/Satellite ","device":"desktop","models":[{"regex":"Satellite (A[25]00|C650|C855|L650|S855)","model":"Satellite $1"},{"regex":"Satellite ([^;\\\\)]+);","model":"Satellite $1"}]}}');

},{}],"fc0rS":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const portable_media_player_json_1 = __importDefault(require("../../fixtures/regexes/device/portable_media_player.json"));
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
class PortableMediaPlayersParser {
    constructor(){
        this.parse = (userAgent)=>{
            const result = {
                type: "",
                brand: "",
                model: ""
            };
            for (const [brand, portableMediaPlayer] of Object.entries(portable_media_player_json_1.default)){
                const match = user_agent_1.userAgentParser(portableMediaPlayer.regex, userAgent);
                if (!match) continue;
                result.type = portableMediaPlayer.device;
                result.brand = brand;
                if ("model" in portableMediaPlayer && portableMediaPlayer.model) result.model = variable_replacement_1.variableReplacement(portableMediaPlayer.model, match).trim();
                else if ("models" in portableMediaPlayer && portableMediaPlayer.models) for (const model of portableMediaPlayer.models){
                    const modelMatch = user_agent_1.userAgentParser(model.regex, userAgent);
                    if (!modelMatch) continue;
                    result.model = variable_replacement_1.variableReplacement(model.model, modelMatch).trim();
                    break;
                }
                break;
            }
            return result;
        };
    }
}
exports.default = PortableMediaPlayersParser;

},{"../../fixtures/regexes/device/portable_media_player.json":"bJQX3","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF"}],"bJQX3":[function(require,module,exports) {
module.exports = JSON.parse('{"Apple":{"regex":"(?:Apple-)?iPod","device":"portable media player","models":[{"regex":"(?:Apple-)?iPod1[C,]1","model":"iPod Touch 1G"},{"regex":"(?:Apple-)?iPod2[C,]1","model":"iPod Touch 2G"},{"regex":"(?:Apple-)?iPod3[C,]1","model":"iPod Touch 3"},{"regex":"(?:Apple-)?iPod4[C,]1","model":"iPod Touch 4"},{"regex":"(?:Apple-)?iPod5[C,]1","model":"iPod Touch 5"},{"regex":"(?:Apple-)?iPod7[C,]1","model":"iPod Touch 6"},{"regex":"(?:Apple-)?iPod","model":"iPod Touch"}]},"Cowon":{"regex":"COWON ([^;/]+) Build","device":"portable media player","model":"$1"},"Microsoft":{"regex":"Microsoft ZuneHD","device":"portable media player","model":"Zune HD"},"Panasonic":{"regex":"(SV-MV100)","device":"portable media player","model":"$1"},"Samsung":{"regex":"YP-(G[SIPB]?1|G[57]0|GB70D)","device":"portable media player","models":[{"regex":"YP-G[B]?1","model":"Galaxy Player 4.0"},{"regex":"YP-G70","model":"Galaxy Player 5.0"},{"regex":"YP-GS1","model":"Galaxy Player 3.6"},{"regex":"YP-GI1","model":"Galaxy Player 4.2"},{"regex":"YP-GP1","model":"Galaxy Player 5.8"},{"regex":"YP-G50","model":"Galaxy Player 50"},{"regex":"YP-GB70D","model":"Galaxy Player 70 Plus"}]},"Wizz":{"regex":"(DV-PTB1080)(?:[);/ ]|$)","device":"portable media player","model":"$1"},"SONOS":{"regex":"Sonos/.+\\\\((?:ZP.+)\\\\)|Sonos;","device":"portable media player","models":[{"regex":"\\\\((ZPS(?:[13569]|1[1-578]|2[03])|ZP90)\\\\)","model":"$1"},{"regex":"Sonos;Play5;","model":"Play:5"},{"regex":"Sonos;One;","model":"One"}]}}');

},{}],"gSgGA":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const oss_json_1 = __importDefault(require("../../fixtures/regexes/oss.json"));
const version_1 = require("../../utils/version");
const variable_replacement_1 = require("../../utils/variable-replacement");
const user_agent_1 = require("../../utils/user-agent");
const operating_system_json_1 = __importDefault(require("./fixtures/operating-system.json"));
const desktopOsArray = [
    "AmigaOS",
    "IBM",
    "GNU/Linux",
    "Mac",
    "Unix",
    "Windows",
    "BeOS",
    "Chrome OS"
];
const shortOsNames = operating_system_json_1.default.operatingSystem;
const osFamilies = operating_system_json_1.default.osFamilies;
class OperatingSystemParser {
    constructor(options){
        this.options = {
            versionTruncation: 1
        };
        this.parse = (userAgent)=>{
            const result = {
                name: "",
                version: "",
                platform: this.parsePlatform(userAgent)
            };
            for (const operatingSystem of oss_json_1.default){
                const match = user_agent_1.userAgentParser(operatingSystem.regex, userAgent);
                if (!match) continue;
                result.name = variable_replacement_1.variableReplacement(operatingSystem.name, match);
                result.version = version_1.formatVersion(variable_replacement_1.variableReplacement(operatingSystem.version, match), this.options.versionTruncation);
                if (result.name === "lubuntu") result.name = "Lubuntu";
                if (result.name === "debian") result.name = "Debian";
                if (result.name === "YunOS") result.name = "YunOs";
                return result;
            }
            return null;
        };
        this.parsePlatform = (userAgent)=>{
            if (user_agent_1.userAgentParser("arm|aarch64|Watch ?OS|Watch1,[12]", userAgent)) return "ARM";
            if (user_agent_1.userAgentParser("mips", userAgent)) return "MIPS";
            if (user_agent_1.userAgentParser("sh4", userAgent)) return "SuperH";
            if (user_agent_1.userAgentParser("WOW64|x64|win64|amd64|x86_?64", userAgent)) return "x64";
            if (user_agent_1.userAgentParser("(?:i[0-9]|x)86|i86pc", userAgent)) return "x86";
            return "";
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
    }
}
exports.default = OperatingSystemParser;
OperatingSystemParser.getDesktopOsArray = ()=>desktopOsArray;
OperatingSystemParser.getOsFamily = (osName)=>{
    const osShortName = OperatingSystemParser.getOsShortName(osName);
    for (const [osFamily, shortNames] of Object.entries(osFamilies)){
        if (shortNames.includes(osShortName)) return osFamily;
    }
    return "";
};
OperatingSystemParser.getOsShortName = (osName)=>{
    for (const [shortName, name] of Object.entries(shortOsNames)){
        if (name === osName) return shortName;
    }
    return "";
};

},{"../../fixtures/regexes/oss.json":"hhctA","../../utils/version":"5QJ7z","../../utils/variable-replacement":"ixNsu","../../utils/user-agent":"5QvTF","./fixtures/operating-system.json":"jM6kk"}],"hhctA":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"Grid OS (\\\\d+[\\\\.\\\\d]+)","name":"GridOS","version":"$1"},{"regex":"CaixaMagica","name":"Caixa M\xe1gica","version":""},{"regex":"Mageia; Linux","name":"Mageia","version":""},{"regex":"(?:WH|WhaleTV/)(\\\\d+[\\\\.\\\\d]+)","name":"Whale OS","version":"$1"},{"regex":"Tizen[ /]?(\\\\d+[\\\\.\\\\d]+)?","name":"Tizen","version":"$1"},{"regex":"Sailfish|Jolla","name":"Sailfish OS","version":""},{"regex":"(?:Ali)?YunOS[ /]?(\\\\d+[\\\\.\\\\d]+)?","name":"YunOS","version":"$1"},{"regex":"Windows Phone;FBSV/(\\\\d+[\\\\.\\\\d]+)","name":"Windows Phone","version":"$1"},{"regex":"(?:Windows Phone (?:OS)?|wds)[ /]?(\\\\d+[\\\\.\\\\d]+)","name":"Windows Phone","version":"$1"},{"regex":"XBLWP7|Windows Phone","name":"Windows Phone","version":""},{"regex":"Windows CE(?: (\\\\d+[\\\\.\\\\d]+))?","name":"Windows CE","version":"$1"},{"regex":"(?:IEMobile|Windows ?Mobile)(?: (\\\\d+[\\\\.\\\\d]+))?","name":"Windows Mobile","version":"$1"},{"regex":"Windows NT 6.2; ARM;","name":"Windows RT","version":""},{"regex":"Windows NT 6.3; ARM;","name":"Windows RT","version":"8.1"},{"regex":"Windows IoT 10.0","name":"Windows IoT","version":"10"},{"regex":"KAIOS(?:/(\\\\d+[\\\\.\\\\d]+))?","name":"KaiOS","version":"$1"},{"regex":"RazoDroiD(?: v(\\\\d+[\\\\.\\\\d]*))?","name":"RazoDroiD","version":"$1"},{"regex":"MildWild(?: CM-(\\\\d+[\\\\.\\\\d]*))?","name":"MildWild","version":"$1"},{"regex":"CyanogenMod(?:[\\\\-/](?:CM)?(\\\\d+[\\\\.\\\\d]*))?","name":"CyanogenMod","version":"$1"},{"regex":"(?:.*_)?MocorDroid(?:(\\\\d+[\\\\.\\\\d]*))?","name":"MocorDroid","version":"$1"},{"regex":"Fire OS(?:/(\\\\d+[\\\\.\\\\d]*))?","name":"Fire OS","version":"$1"},{"regex":"AFTSO001","name":"Fire OS","version":"7"},{"regex":"FydeOS","name":"FydeOS","version":""},{"regex":"(?:Podbean|Podimo)(?:.+)?/Android","name":"Android","version":""},{"regex":"Pinterest for Android/.+; (\\\\d(?:[\\\\d\\\\.]+)?)\\\\)$","name":"Android","version":"$1"},{"regex":"Android; (\\\\d+[\\\\.\\\\d]*); Mobile;","name":"Android","version":"$1"},{"regex":"[ ]([\\\\d\\\\.]+)\\\\) AppleWebKit.*ROBLOX Android App","name":"Android","version":"$1"},{"regex":"(?:(?:Orca-)?Android|Adr)[ /]?(?:[a-z]+ )?(\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"(?:Allview_TX1_Quasar|Cosmote_My_mini_Tab) (\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"Android ?(?:jelly bean|Kit Kat|S.O. Ginger Bread|The FireCyano|:) (\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"(?:Orca-Android|FB4A).*FBSV/(\\\\d+[\\\\.\\\\d]*);","name":"Android","version":"$1"},{"regex":" Adr |Android|Silk-Accelerated=[a-z]{4,5}","name":"Android","version":""},{"regex":"(?:TwitterAndroid).*[ /](?:[a-z]+ )?(\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"BeyondPod|AntennaPod|Podkicker|DoggCatcher|Player FM|okhttp|Podcatcher Deluxe|.+K_?Android_?TV_|Sonos/.+\\\\(ACR_","name":"Android","version":""},{"regex":"Linux; Andr0id[; ](\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"Linux; diordnA[; ](\\\\d+[\\\\.\\\\d]*)","name":"Android","version":"$1"},{"regex":"AmigaOS[ ]?(\\\\d+[\\\\.\\\\d]+)","name":"AmigaOS","version":"$1"},{"regex":"AmigaOS|AmigaVoyager|Amiga-AWeb","name":"AmigaOS","version":""},{"regex":"ThreadX(?:/(\\\\d+[\\\\.\\\\d]*))?","name":"ThreadX","version":"$1"},{"regex":"Nucleus(?:(?: |/v?)(\\\\d+[\\\\.\\\\d]*))?","name":"MTK / Nucleus","version":"$1"},{"regex":"MTK(?:(?: |/v?)(\\\\d+[\\\\.\\\\d]*))?","name":"MTK / Nucleus","version":"$1"},{"regex":"MRE/(\\\\d+)\\\\.(\\\\d+).*;MAUI","name":"MRE","version":"$1.$2"},{"regex":"dvkbuntu","name":"DVKBuntu","version":""},{"regex":"Helio/(\\\\d+[\\\\.\\\\d]+)","name":"Lumin OS","version":"$1"},{"regex":"HasCodingOs (\\\\d+[\\\\.\\\\d]+)","name":"HasCodingOS","version":"$1"},{"regex":"PCLinuxOS/(\\\\d+[\\\\.\\\\d]+)","name":"PCLinuxOS","version":"$1"},{"regex":"(Ordissimo|webissimo3)","name":"Ordissimo","version":""},{"regex":"(?:Win|Sistema )Fenix","name":"Fenix","version":""},{"regex":"TOS; Linux","name":"TmaxOS","version":""},{"regex":"Maemo","name":"Maemo","version":""},{"regex":"Arch ?Linux(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?","name":"Arch Linux","version":"$1"},{"regex":"VectorLinux(?: package)?(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?","name":"VectorLinux","version":"$1"},{"regex":"Linux; .*((?:Debian|Knoppix|Mint|Ubuntu|Kubuntu|Xubuntu|Lubuntu|Fedora|Red Hat|Mandriva|Gentoo|Sabayon|Slackware|SUSE|CentOS|BackTrack))[ /](\\\\d+[\\\\.\\\\d]+)","name":"$1","version":"$2"},{"regex":"Deepin[ /](\\\\d+[\\\\.\\\\d]+)","name":"Deepin","version":"$1"},{"regex":"(Debian|Knoppix|Mint(?! Browser)|Ubuntu|Kubuntu|Xubuntu|Lubuntu|Fedora|Red Hat|Mandriva|Gentoo|Sabayon|Slackware|SUSE|CentOS|BackTrack|Freebox)(?:(?: Enterprise)? Linux)?(?:[ /\\\\-](\\\\d+[\\\\.\\\\d]+))?","name":"$1","version":"$2"},{"regex":"OS ROSA; Linux","name":"Rosa","version":""},{"regex":"WEBOS(\\\\d+[\\\\.\\\\d]+)","name":"webOS","version":"$1"},{"regex":"Web0S; Linux/SmartTV.+Chrome/68","name":"webOS","version":"5"},{"regex":"Web0S; Linux/SmartTV.+Chrome/53","name":"webOS","version":"4"},{"regex":"Web0S; Linux/SmartTV.+Chrome/38","name":"webOS","version":"3"},{"regex":"Web0S; Linux/SmartTV.+Safari/538","name":"webOS","version":"2"},{"regex":"Web0S; Linux/SmartTV.+Safari/537","name":"webOS","version":"1"},{"regex":"(?:Web0S; .*WEBOS|webOS|web0S|Palm webOS|hpwOS)(?:[/]?(\\\\d+[\\\\.\\\\d]+))?","name":"webOS","version":"$1"},{"regex":"(?:PalmOS|Palm OS)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?|Palm","name":"palmOS","version":"$1"},{"regex":"Xiino(?:.*v\\\\. (\\\\d+[\\\\.\\\\d]+))?","name":"palmOS","version":"$1"},{"regex":"MorphOS(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"MorphOS","version":"$1"},{"regex":"FBW.+FBSV/(\\\\d+[\\\\.\\\\d]*);","name":"Windows","version":"$1"},{"regex":"mingw32","name":"Windows","version":""},{"regex":"Windows/(\\\\d+\\\\.\\\\d+)","name":"Windows","version":"$1"},{"regex":"CYGWIN_NT-10.0|Windows NT 10.0|Windows 10","name":"Windows","version":"10"},{"regex":"CYGWIN_NT-6.4|Windows NT 6.4|Windows 10|win10","name":"Windows","version":"10"},{"regex":"CYGWIN_NT-6.3|Windows NT 6.3|Windows 8.1","name":"Windows","version":"8.1"},{"regex":"CYGWIN_NT-6.2|Windows NT 6.2|Windows 8","name":"Windows","version":"8"},{"regex":"CYGWIN_NT-6.1|Windows NT 6.1|Windows 7|win7","name":"Windows","version":"7"},{"regex":"CYGWIN_NT-6.0|Windows NT 6.0|Windows Vista","name":"Windows","version":"Vista"},{"regex":"CYGWIN_NT-5.2|Windows NT 5.2|Windows Server 2003 / XP x64","name":"Windows","version":"Server 2003"},{"regex":"CYGWIN_NT-5.1|Windows NT 5.1|Windows XP","name":"Windows","version":"XP"},{"regex":"CYGWIN_NT-5.0|Windows NT 5.0|Windows 2000","name":"Windows","version":"2000"},{"regex":"CYGWIN_NT-4.0|Windows NT 4.0|WinNT|Windows NT","name":"Windows","version":"NT"},{"regex":"CYGWIN_ME-4.90|Win 9x 4.90|Windows ME","name":"Windows","version":"ME"},{"regex":"CYGWIN_98-4.10|Win98|Windows 98","name":"Windows","version":"98"},{"regex":"CYGWIN_95-4.0|Win32|Win95|Windows 95|Windows_95","name":"Windows","version":"95"},{"regex":"Windows 3.1","name":"Windows","version":"3.1"},{"regex":"Windows","name":"Windows","version":""},{"regex":"Haiku","name":"Haiku OS","version":""},{"regex":"(?:Watch1,[12]/|Watch OS,|watchOS[ /])(\\\\d+[\\\\.\\\\d]*)","name":"watchOS","version":"$1"},{"regex":"iPad/([89]|1[012]).(\\\\d+[\\\\.\\\\d]*)","name":"iOS","version":"$1.$2"},{"regex":"Pinterest for iOS/.+; (\\\\d(?:[\\\\d\\\\.]+)?)\\\\)$","name":"iOS","version":"$1"},{"regex":"CFNetwork/.+ Darwin/20.4.0(?!.*x86_64)","name":"iOS","version":"14.5"},{"regex":"CFNetwork/.+ Darwin/20.3.0(?!.*x86_64)","name":"iOS","version":"14.4"},{"regex":"CFNetwork/.+ Darwin/20.2.0(?!.*x86_64)","name":"iOS","version":"14.3"},{"regex":"CFNetwork/.+ Darwin/20.1.0(?!.*x86_64)","name":"iOS","version":"14.2"},{"regex":"CFNetwork/.+ Darwin/20.0.0(?!.*x86_64)","name":"iOS","version":"14.0"},{"regex":"CFNetwork/.+ Darwin/19.6.0(?!.*x86_64)","name":"iOS","version":"13.6"},{"regex":"CFNetwork/.+ Darwin/19.5.0(?!.*x86_64)","name":"iOS","version":"13.5"},{"regex":"CFNetwork/.+ Darwin/19.4.0(?!.*x86_64)","name":"iOS","version":"13.4"},{"regex":"CFNetwork/.+ Darwin/19.3.0(?!.*x86_64)","name":"iOS","version":"13.3.1"},{"regex":"CFNetwork/.+ Darwin/19.2.0(?!.*x86_64)","name":"iOS","version":"13.3"},{"regex":"CFNetwork/.+ Darwin/19.0.0(?!.*x86_64)","name":"iOS","version":"13.0"},{"regex":"CFNetwork/.+ Darwin/18.7.0(?!.*x86_64)","name":"iOS","version":"12.4"},{"regex":"CFNetwork/.+ Darwin/18.6.0(?!.*x86_64)","name":"iOS","version":"12.3"},{"regex":"CFNetwork/.+ Darwin/18.5.0(?!.*x86_64)","name":"iOS","version":"12.2"},{"regex":"CFNetwork/.+ Darwin/18.2.0(?!.*x86_64)","name":"iOS","version":"12.1"},{"regex":"CFNetwork/.+ Darwin/18.0.0(?!.*x86_64)","name":"iOS","version":"12.0"},{"regex":"CFNetwork/.+ Darwin/17.7.0(?!.*x86_64)","name":"iOS","version":"11.4.1"},{"regex":"CFNetwork/.+ Darwin/17.6.0(?!.*x86_64)","name":"iOS","version":"11.4"},{"regex":"CFNetwork/889(?!.*x86_64)","name":"iOS","version":"11.1"},{"regex":"CFNetwork/887(?!.*x86_64)","name":"iOS","version":"11.0"},{"regex":"CFNetwork/811(?!.*x86_64)","name":"iOS","version":"10.3"},{"regex":"CFNetwork/808\\\\.3","name":"iOS","version":"10.3"},{"regex":"CFNetwork/808\\\\.2","name":"iOS","version":"10.2"},{"regex":"CFNetwork/808\\\\.1","name":"iOS","version":"10.1"},{"regex":"CFNetwork/808\\\\.0","name":"iOS","version":"10.0"},{"regex":"CFNetwork/808","name":"iOS","version":"10"},{"regex":"CFNetwork/758\\\\.4\\\\.3","name":"iOS","version":"9.3.2"},{"regex":"CFNetwork/758\\\\.3\\\\.15","name":"iOS","version":"9.3"},{"regex":"CFNetwork/758\\\\.2\\\\.[78]","name":"iOS","version":"9.2"},{"regex":"CFNetwork/758\\\\.1\\\\.6","name":"iOS","version":"9.1"},{"regex":"CFNetwork/758\\\\.0\\\\.2","name":"iOS","version":"9.0"},{"regex":"CFNetwork/711\\\\.5\\\\.6","name":"iOS","version":"8.4.1"},{"regex":"CFNetwork/711\\\\.4\\\\.6","name":"iOS","version":"8.4"},{"regex":"CFNetwork/711\\\\.3\\\\.18","name":"iOS","version":"8.3"},{"regex":"CFNetwork/711\\\\.2\\\\.23","name":"iOS","version":"8.2"},{"regex":"CFNetwork/711\\\\.1\\\\.1[26]","name":"iOS","version":"8.1"},{"regex":"CFNetwork/711\\\\.0\\\\.6","name":"iOS","version":"8.0"},{"regex":"CFNetwork/672\\\\.1","name":"iOS","version":"7.1"},{"regex":"CFNetwork/672\\\\.0","name":"iOS","version":"7.0"},{"regex":"CFNetwork/609\\\\.1","name":"iOS","version":"6.1"},{"regex":"CFNetwork/60[29]","name":"iOS","version":"6.0"},{"regex":"CFNetwork/548\\\\.1","name":"iOS","version":"5.1"},{"regex":"CFNetwork/548\\\\.0","name":"iOS","version":"5.0"},{"regex":"CFNetwork/485\\\\.13","name":"iOS","version":"4.3"},{"regex":"CFNetwork/485\\\\.12","name":"iOS","version":"4.2"},{"regex":"CFNetwork/485\\\\.10","name":"iOS","version":"4.1"},{"regex":"CFNetwork/485\\\\.2","name":"iOS","version":"4.0"},{"regex":"CFNetwork/467\\\\.12","name":"iOS","version":"3.2"},{"regex":"CFNetwork/459","name":"iOS","version":"3.1"},{"regex":"iPhone/(\\\\d+[\\\\.\\\\d]*) hw/","name":"iOS","version":"$1"},{"regex":"iOS(\\\\d+\\\\.\\\\d+\\\\.\\\\d+)","name":"iOS","version":"$1"},{"regex":"iOS(\\\\d+)\\\\.(\\\\d+)0","name":"iOS","version":"$1.$2"},{"regex":"iPhone OS ([0-9]{1})([0-9]{1})([0-9]{1})","name":"iOS","version":"$1.$2.$3"},{"regex":"(?:CPU OS|iPh(?:one)?[ _]OS|iOS)[ _/](\\\\d+(?:[_\\\\.]\\\\d+)*)","name":"iOS","version":"$1"},{"regex":"(?:FBIOS|Messenger(?:Lite)?ForiOS).*FBSV/ ?(\\\\d+[\\\\.\\\\d]*);","name":"iOS","version":"$1"},{"regex":"(?:Apple-)?(?:iPhone|iPad|iPod)(?:.*Mac OS X.*Version/(\\\\d+\\\\.\\\\d+)|; Opera)?","name":"iOS","version":"$1"},{"regex":"(?:Podcasts/(?:[\\\\d\\\\.]+)|Instacast(?:HD)?/(?:\\\\d\\\\.[\\\\d\\\\.abc]+)|Pocket Casts, iOS|\\\\(iOS\\\\)|iOS; Opera|Overcast|Castro|Podcat|iCatcher|RSSRadio/|MobileSafari/)(?!.*x86_64)","name":"iOS","version":""},{"regex":"iTunes-(iPod|iPad|iPhone)/(?:[\\\\d\\\\.]+)","name":"iOS","version":""},{"regex":"iOS/Version ([\\\\d\\\\.]+)","name":"iOS","version":"$1"},{"regex":"Sonos/.+\\\\(ICRU_","name":"iOS","version":""},{"regex":"CFNetwork/.+ Darwin/20.2.0.*(x86_64)|(x86_64-apple-)?darwin20.2.0","name":"Mac","version":"11.1"},{"regex":"CFNetwork/.+ Darwin/20.[01].0.*(x86_64)|(x86_64-apple-)?darwin20.[01].0","name":"Mac","version":"11.0"},{"regex":"CFNetwork/.+ Darwin/19.6.0.*(x86_64)|(x86_64-apple-)?darwin19.6.0","name":"Mac","version":"10.15.6"},{"regex":"CFNetwork/.+ Darwin/19.5.0.*(x86_64)|(x86_64-apple-)?darwin19.5.0","name":"Mac","version":"10.15.5"},{"regex":"CFNetwork/.+ Darwin/19.4.0.*(x86_64)|(x86_64-apple-)?darwin19.4.0","name":"Mac","version":"10.15.4"},{"regex":"CFNetwork/.+ Darwin/19.3.0.*(x86_64)|(x86_64-apple-)?darwin19.3.0","name":"Mac","version":"10.15.3"},{"regex":"CFNetwork/.+ Darwin/19.2.0.*(x86_64)|(x86_64-apple-)?darwin19.2.0","name":"Mac","version":"10.15.2"},{"regex":"CFNetwork/(?:108[258]|109[18]|1103).*(x86_64)","name":"Mac","version":"10.15"},{"regex":"CFNetwork/.+ Darwin/18.2.0.*(x86_64)|(x86_64-apple-)?darwin18.2.0","name":"Mac","version":"10.14.1"},{"regex":"CFNetwork/(?:96[29]|97[14568]).*(x86_64)","name":"Mac","version":"10.14"},{"regex":"CFNetwork/.+ Darwin/17.7.0.*(x86_64)|(x86_64-apple-)?darwin17.7.0","name":"Mac","version":"10.13.6"},{"regex":"CFNetwork/.+ Darwin/17.6.0.*(x86_64)|(x86_64-apple-)?darwin17.6.0","name":"Mac","version":"10.13.5"},{"regex":"CFNetwork/.+ Darwin/17.5.0.*(x86_64)|(x86_64-apple-)?darwin17.5.0","name":"Mac","version":"10.13.4"},{"regex":"CFNetwork/.+ Darwin/17.4.0.*(x86_64)|(x86_64-apple-)?darwin17.4.0","name":"Mac","version":"10.13.3"},{"regex":"CFNetwork/.+ Darwin/17.3.0.*(x86_64)|(x86_64-apple-)?darwin17.3.0","name":"Mac","version":"10.13.2"},{"regex":"CFNetwork/.+ Darwin/17.2.0.*(x86_64)|(x86_64-apple-)?darwin17.2.0","name":"Mac","version":"10.13.1"},{"regex":"CFNetwork/(?:887|889|893|897|901|902).*(x86_64)","name":"Mac","version":"10.13"},{"regex":"CFNetwork/.+ Darwin/16.7.0.*(x86_64)|(x86_64-apple-)?darwin16.7.0","name":"Mac","version":"10.12.6"},{"regex":"CFNetwork/.+ Darwin/16.6.0.*(x86_64)|(x86_64-apple-)?darwin16.6.0","name":"Mac","version":"10.12.5"},{"regex":"CFNetwork/.+ Darwin/16.5.0.*(x86_64)|(x86_64-apple-)?darwin16.5.0","name":"Mac","version":"10.12.4"},{"regex":"CFNetwork/.+ Darwin/16.3.0.*(x86_64)|(x86_64-apple-)?darwin16.3.0","name":"Mac","version":"10.12.3"},{"regex":"CFNetwork/.+ Darwin/16.2.0.*(x86_64)|(x86_64-apple-)?darwin16.2.0","name":"Mac","version":"10.12.2"},{"regex":"CFNetwork/.+ Darwin/16.1.0.*(x86_64)|(x86_64-apple-)?darwin16.1.0","name":"Mac","version":"10.12.1"},{"regex":"CFNetwork/811.*(x86_64)","name":"Mac","version":"10.12"},{"regex":"CFNetwork/807","name":"Mac","version":"10.12"},{"regex":"CFNetwork/.+ Darwin/15.6.0.*(x86_64)|(x86_64-apple-)?darwin15.6.0","name":"Mac","version":"10.11.6"},{"regex":"CFNetwork/.+ Darwin/15.5.0.*(x86_64)|(x86_64-apple-)?darwin15.5.0","name":"Mac","version":"10.11.5"},{"regex":"CFNetwork/.+ Darwin/15.4.0.*(x86_64)|(x86_64-apple-)?darwin15.4.0","name":"Mac","version":"10.11.4"},{"regex":"CFNetwork/.+ Darwin/15.3.0.*(x86_64)|(x86_64-apple-)?darwin15.3.0","name":"Mac","version":"10.11.3"},{"regex":"CFNetwork/.+ Darwin/15.2.0.*(x86_64)|(x86_64-apple-)?darwin15.2.0","name":"Mac","version":"10.11.2"},{"regex":"CFNetwork/760","name":"Mac","version":"10.11"},{"regex":"CFNetwork/.+ Darwin/14.5.0.*(x86_64)|(x86_64-apple-)?darwin14.5.0","name":"Mac","version":"10.10.5"},{"regex":"CFNetwork/.+ Darwin/14.4.0.*(x86_64)|(x86_64-apple-)?darwin14.4.0","name":"Mac","version":"10.10.4"},{"regex":"CFNetwork/.+ Darwin/14.3.0.*(x86_64)|(x86_64-apple-)?darwin14.3.0","name":"Mac","version":"10.10.3"},{"regex":"CFNetwork/.+ Darwin/14.1.0.*(x86_64)|(x86_64-apple-)?darwin14.1.0","name":"Mac","version":"10.10.2"},{"regex":"CFNetwork/720","name":"Mac","version":"10.10"},{"regex":"CFNetwork/.+ Darwin/13.4.0.*(x86_64)|(x86_64-apple-)?darwin13.4.0","name":"Mac","version":"10.9.5"},{"regex":"CFNetwork/.+ Darwin/13.3.0.*(x86_64)|(x86_64-apple-)?darwin13.3.0","name":"Mac","version":"10.9.4"},{"regex":"CFNetwork/.+ Darwin/13.2.0.*(x86_64)|(x86_64-apple-)?darwin13.2.0","name":"Mac","version":"10.9.3"},{"regex":"CFNetwork/.+ Darwin/13.1.0.*(x86_64)|(x86_64-apple-)?darwin13.1.0","name":"Mac","version":"10.9.2"},{"regex":"CFNetwork/673","name":"Mac","version":"10.9"},{"regex":"CFNetwork/.+ Darwin/12.5.0.*(x86_64)|(x86_64-apple-)?darwin12.5.0","name":"Mac","version":"10.8.5"},{"regex":"CFNetwork/.+ Darwin/12.4.0.*(x86_64)|(x86_64-apple-)?darwin12.4.0","name":"Mac","version":"10.8.4"},{"regex":"CFNetwork/.+ Darwin/12.3.0.*(x86_64)|(x86_64-apple-)?darwin12.3.0","name":"Mac","version":"10.8.3"},{"regex":"CFNetwork/.+ Darwin/12.2.0.*(x86_64)|(x86_64-apple-)?darwin12.2.0","name":"Mac","version":"10.8.2"},{"regex":"CFNetwork/.+ Darwin/12.1.0.*(x86_64)|(x86_64-apple-)?darwin12.1.0","name":"Mac","version":"10.8.1"},{"regex":"CFNetwork/596","name":"Mac","version":"10.8"},{"regex":"CFNetwork/.+ Darwin/11.5.0.*(x86_64)|(x86_64-apple-)?darwin11.5.0","name":"Mac","version":"10.7.5"},{"regex":"CFNetwork/.+ Darwin/11.4.0.*(x86_64)|(x86_64-apple-)?darwin11.4.0","name":"Mac","version":"10.7.4"},{"regex":"CFNetwork/.+ Darwin/11.3.0.*(x86_64)|(x86_64-apple-)?darwin11.3.0","name":"Mac","version":"10.7.3"},{"regex":"CFNetwork/.+ Darwin/11.2.0.*(x86_64)|(x86_64-apple-)?darwin11.2.0","name":"Mac","version":"10.7.2"},{"regex":"CFNetwork/.+ Darwin/11.1.0.*(x86_64)|(x86_64-apple-)?darwin11.1.0","name":"Mac","version":"10.7.1"},{"regex":"CFNetwork/520","name":"Mac","version":"10.7"},{"regex":"CFNetwork/454","name":"Mac","version":"10.6"},{"regex":"CFNetwork/(?:438|422|339|330|221|220|217)","name":"Mac","version":"10.5"},{"regex":"CFNetwork/12[89]","name":"Mac","version":"10.4"},{"regex":"CFNetwork/1\\\\.2","name":"Mac","version":"10.3"},{"regex":"CFNetwork/1\\\\.1","name":"Mac","version":"10.2"},{"regex":"Mac[ +]OS[ +]?X(?:[ /](?:Version )?(\\\\d+(?:[_\\\\.]\\\\d+)+))?","name":"Mac","version":"$1"},{"regex":"Mac (?:OS/)?(\\\\d+(?:[_\\\\.]\\\\d+)+)","name":"Mac","version":"$1"},{"regex":"macOS/(\\\\d+[\\\\.\\\\d]+)","name":"Mac","version":"$1"},{"regex":"Darwin|Macintosh|Mac_PowerPC|PPC|Mac PowerPC|iMac|MacBook|macOS|Sonos/.+\\\\(MDCR_","name":"Mac","version":""},{"regex":"SeewoOS x86_64 (\\\\d+[\\\\.\\\\d]+)","name":"SeewoOS","version":"$1"},{"regex":"CrOS [a-z0-9_]+ .* Chrome/(\\\\d+[\\\\.\\\\d]+)","name":"Chrome OS","version":"$1"},{"regex":"(?:BB10;.+Version|Black[Bb]erry[0-9a-z]+|Black[Bb]erry.+Version)/(\\\\d+[\\\\.\\\\d]+)","name":"BlackBerry OS","version":"$1"},{"regex":"RIM Tablet OS (\\\\d+[\\\\.\\\\d]+)","name":"BlackBerry Tablet OS","version":"$1"},{"regex":"RIM Tablet OS|QNX|Play[Bb]ook","name":"BlackBerry Tablet OS","version":""},{"regex":"BlackBerry","name":"BlackBerry OS","version":""},{"regex":"bPod","name":"BlackBerry OS","version":""},{"regex":"BeOS","name":"BeOS","version":""},{"regex":"Symbian/3.+NokiaBrowser/7\\\\.3","name":"Symbian^3","version":"Anna"},{"regex":"Symbian/3.+NokiaBrowser/7\\\\.4","name":"Symbian^3","version":"Belle"},{"regex":"Symbian/3","name":"Symbian^3","version":""},{"regex":"(?:Series ?60|SymbOS|S60)(?:[ /]?(\\\\d+[\\\\.\\\\d]+|V\\\\d+))?","name":"Symbian OS Series 60","version":"$1"},{"regex":"Series40","name":"Symbian OS Series 40","version":""},{"regex":"SymbianOS/(\\\\d+[\\\\.\\\\d]+)","name":"Symbian OS","version":"$1"},{"regex":"MeeGo|WeTab","name":"MeeGo","version":""},{"regex":"Symbian(?: OS)?|SymbOS","name":"Symbian OS","version":""},{"regex":"Nokia","name":"Symbian","version":""},{"regex":"(?:Mobile|Tablet);.+Firefox/\\\\d+\\\\.\\\\d+","name":"Firefox OS","version":""},{"regex":"RISC OS(?:-NC)?(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"RISC OS","version":"$1"},{"regex":"Inferno(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Inferno","version":"$1"},{"regex":"bada(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Bada","version":"$1"},{"regex":"(?:Brew(?!-Applet)(?: MP)?|BMP)(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Brew","version":"$1"},{"regex":"GoogleTV(?:[ /](\\\\d+[\\\\.\\\\d]+))?","name":"Google TV","version":"$1"},{"regex":"AppleTV(?:/?(\\\\d+[\\\\.\\\\d]+))?","name":"Apple TV","version":"$1"},{"regex":"WebTV/(\\\\d+[\\\\.\\\\d]+)","name":"WebTV","version":"$1"},{"regex":"RemixOS 5.1.1","name":"Remix OS","version":"1"},{"regex":"RemixOS 6.0","name":"Remix OS","version":"2"},{"regex":"RemixOS","name":"Remix OS","version":""},{"regex":"(?:SunOS|Solaris)(?:[/ ](\\\\d+[\\\\.\\\\d]+))?","name":"Solaris","version":"$1"},{"regex":"AIX(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"AIX","version":"$1"},{"regex":"HP-UX(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"HP-UX","version":"$1"},{"regex":"FreeBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"FreeBSD","version":"$1"},{"regex":"NetBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"NetBSD","version":"$1"},{"regex":"OpenBSD(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"OpenBSD","version":"$1"},{"regex":"DragonFly(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"DragonFly","version":"$1"},{"regex":"Syllable(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))?","name":"Syllable","version":"$1"},{"regex":"IRIX(?:;64)?(?:[/ ]?(\\\\d+[\\\\.\\\\d]+))","name":"IRIX","version":"$1"},{"regex":"OSF1(?:[/ ]?v?(\\\\d+[\\\\.\\\\d]+))?","name":"OSF1","version":"$1"},{"regex":"Nintendo (Wii|Switch)","name":"Nintendo","version":"$1"},{"regex":"PlayStation ?([34])","name":"PlayStation","version":"$1"},{"regex":"Xbox|KIN\\\\.(?:One|Two)","name":"Xbox","version":"360"},{"regex":"Nitro|Nintendo ([3]?DS[i]?)","name":"Nintendo Mobile","version":"$1"},{"regex":"PlayStation ((?:Portable|Vita))","name":"PlayStation Portable","version":"$1"},{"regex":"OS/2","name":"OS/2","version":""},{"regex":"Linux(?:OS)?[^a-z]","name":"GNU/Linux","version":""}]');

},{}],"jM6kk":[function(require,module,exports) {
module.exports = JSON.parse('{"operatingSystem":{"AIX":"AIX","AND":"Android","AMG":"AmigaOS","ATV":"Apple TV","ARL":"Arch Linux","BTR":"BackTrack","SBA":"Bada","BEO":"BeOS","BLB":"BlackBerry OS","QNX":"BlackBerry Tablet OS","BMP":"Brew","CES":"CentOS","COS":"Chrome OS","CYN":"CyanogenMod","DEB":"Debian","DEE":"Deepin","DFB":"DragonFly","FED":"Fedora","FOS":"Firefox OS","FIR":"Fire OS","FRE":"Freebox","BSD":"FreeBSD","FYD":"FydeOS","GNT":"Gentoo","GTV":"Google TV","HPX":"HP-UX","HAI":"Haiku OS","IRI":"IRIX","INF":"Inferno","KOS":"KaiOS","KNO":"Knoppix","KBT":"Kubuntu","LIN":"GNU/Linux","LBT":"Lubuntu","VLN":"VectorLinux","MAC":"Mac","MAE":"Maemo","MDR":"Mandriva","SMG":"MeeGo","MCD":"MocorDroid","MIN":"Mint","MLD":"MildWild","MOR":"MorphOS","NBS":"NetBSD","MTK":"MTK / Nucleus","MRE":"MRE","WII":"Nintendo","NDS":"Nintendo Mobile","OS2":"OS/2","T64":"OSF1","OBS":"OpenBSD","ORD":"Ordissimo","PSP":"PlayStation Portable","PS3":"PlayStation","RHT":"Red Hat","ROS":"RISC OS","RSO":"Rosa","REM":"Remix OS","RZD":"RazoDroiD","SAB":"Sabayon","SSE":"SUSE","SAF":"Sailfish OS","SEE":"SeewoOS","SLW":"Slackware","SOS":"Solaris","SYL":"Syllable","SYM":"Symbian","SYS":"Symbian OS","S40":"Symbian OS Series 40","S60":"Symbian OS Series 60","SY3":"Symbian^3","TDX":"ThreadX","TIZ":"Tizen","TOS":"TmaxOS","UBT":"Ubuntu","WAS":"watchOS","WTV":"WebTV","WHS":"Whale OS","WIN":"Windows","WCE":"Windows CE","WIO":"Windows IoT","WMO":"Windows Mobile","WPH":"Windows Phone","WRT":"Windows RT","XBX":"Xbox","XBT":"Xubuntu","YNS":"YunOs","IOS":"iOS","POS":"palmOS","WOS":"webOS"},"osFamilies":{"Android":["AND","CYN","FIR","REM","RZD","MLD","MCD","YNS"],"AmigaOS":["AMG","MOR"],"Apple TV":["ATV"],"BlackBerry":["BLB","QNX"],"Brew":["BMP"],"BeOS":["BEO","HAI"],"Chrome OS":["COS","FYD","SEE"],"Firefox OS":["FOS","KOS"],"Gaming Console":["WII","PS3"],"Google TV":["GTV"],"IBM":["OS2"],"iOS":["IOS","WAS"],"RISC OS":["ROS"],"GNU/Linux":["LIN","ARL","DEB","KNO","MIN","UBT","KBT","XBT","LBT","FED","RHT","VLN","MDR","GNT","SAB","SLW","SSE","CES","BTR","SAF","ORD","TOS","RSO","DEE","FRE"],"Mac":["MAC"],"Mobile Gaming Console":["PSP","NDS","XBX"],"Real-time OS":["MTK","TDX","MRE"],"Other Mobile":["WOS","POS","SBA","TIZ","SMG","MAE"],"Symbian":["SYM","SYS","SY3","S60","S40"],"Unix":["SOS","AIX","HPX","BSD","NBS","OBS","DFB","SYL","IRI","T64","INF"],"WebTV":["WTV"],"Windows":["WIN"],"Windows Mobile":["WPH","WMO","WCE","WRT","WIO"],"Other Smart TV":["WHS"]}}');

},{}],"9mXz9":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const vendorfragments_json_1 = __importDefault(require("../../fixtures/regexes/vendorfragments.json"));
const user_agent_1 = require("../../utils/user-agent");
class VendorFragmentParser {
    constructor(){
        this.parse = (userAgent)=>{
            for (const [brand, vendorFragment] of Object.entries(vendorfragments_json_1.default))for (const regex of vendorFragment){
                const match = user_agent_1.userAgentParser(regex, userAgent);
                if (!match) continue;
                return brand;
            }
            return "";
        };
    }
}
exports.default = VendorFragmentParser;

},{"../../fixtures/regexes/vendorfragments.json":"2BasV","../../utils/user-agent":"5QvTF"}],"2BasV":[function(require,module,exports) {
module.exports = JSON.parse('{"Dell":["MDDR(JS)?","MDDC(JS)?","MDDS(JS)?"],"Acer":["MAAR(JS)?"],"Sony":["MASE(JS)?","MASP(JS)?","MASA(JS)?"],"Asus":["MAAU","NP0[26789]","ASJB","ASU2(JS)?"],"Samsung":["MASM(JS)?","SMJB"],"Lenovo":["MALC(JS)?","MALE(JS)?","MALN(JS)?","LCJB","LEN2"],"Toshiba":["MATM(JS)?","MATB(JS)?","MATP(JS)?","TNJB","TAJB"],"Medion":["MAMD"],"MSI":["MAMI(JS)?","MAM3"],"Gateway":["MAGW(JS)?"],"Fujitsu":["MAFS(JS)?","FSJB"],"Compaq":["CPDTDF","CPNTDF(JS?)","CMNTDF(JS)?","CMDTDF(JS)?"],"HP":["HPCMHP","HPNTDF(JS)?","HPDTDF(JS)?"],"Hyrican":["MANM(JS)?"],"Ordissimo":["Ordissimo","webissimo3"]}');

},{}],"gL7by":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const bots_json_1 = __importDefault(require("../../fixtures/regexes/bots.json"));
const user_agent_1 = require("../../utils/user-agent");
class BotParser {
    constructor(){
        this.parse = (userAgent)=>{
            var _a, _b, _c, _d;
            for (const bot of bots_json_1.default){
                const match = user_agent_1.userAgentParser(bot.regex, userAgent);
                if (!match) continue;
                return {
                    name: bot.name,
                    category: bot.category || "",
                    url: bot.url || "",
                    producer: {
                        name: ((_b = (_a = bot) === null || _a === void 0 ? void 0 : _a.producer) === null || _b === void 0 ? void 0 : _b.name) || "",
                        url: ((_d = (_c = bot) === null || _c === void 0 ? void 0 : _c.producer) === null || _d === void 0 ? void 0 : _d.url) || ""
                    }
                };
            }
            return null;
        };
    }
}
module.exports = BotParser;

},{"../../fixtures/regexes/bots.json":"htHnN","../../utils/user-agent":"5QvTF"}],"htHnN":[function(require,module,exports) {
module.exports = JSON.parse('[{"regex":"360Spider(-Image|-Video)?","name":"360Spider","category":"Search bot","url":"https://www.so.com/help/help_3_2.html","producer":{"name":"Online Media Group, Inc.","url":""}},{"regex":"Aboundex","name":"Aboundexbot","category":"Search bot","url":"http://www.aboundex.com/crawler/","producer":{"name":"Aboundex.com","url":"http://www.aboundex.com"}},{"regex":"AcoonBot","name":"Acoon","category":"Search bot","url":"http://www.acoon.de/robot.asp","producer":{"name":"Acoon GmbH","url":"http://www.acoon.de"}},{"regex":"AddThis\\\\.com","name":"AddThis.com","category":"Social Media Agent","url":"","producer":{"name":"Clearspring Technologies, Inc.","url":"http://www.clearspring.com"}},{"regex":"AhrefsBot","name":"aHrefs Bot","category":"Crawler","url":"https://ahrefs.com/robot","producer":{"name":"Ahrefs Pte Ltd","url":"https://ahrefs.com/robot"}},{"regex":"ia_archiver|alexabot|verifybot","name":"Alexa Crawler","category":"Search bot","url":"https://support.alexa.com/hc/en-us/sections/200100794-Crawlers","producer":{"name":"Alexa Internet","url":"https://www.alexa.com"}},{"regex":"alexa site audit","name":"Alexa Site Audit","category":"Site Monitor","url":"https://support.alexa.com/hc/en-us/articles/200450194","producer":{"name":"Alexa Internet","url":"https://www.alexa.com"}},{"regex":"Amazon[ -]Route ?53[ -]Health[ -]Check[ -]Service","name":"Amazon Route53 Health Check","category":"Service Agent","producer":{"name":"Amazon Web Services","url":"https://aws.amazon.com/"}},{"regex":"AmorankSpider","name":"Amorank Spider","category":"Crawler","url":"http://amorank.com/webcrawler.html","producer":{"name":"Amorank","url":"http://www.amorank.com"}},{"regex":"ApacheBench","name":"ApacheBench","category":"Benchmark","url":"https://httpd.apache.org/docs/2.4/programs/ab.html","producer":{"name":"The Apache Software Foundation","url":"https://www.apache.org/foundation/"}},{"regex":"Applebot","name":"Applebot","category":"Crawler","url":"https://support.apple.com/en-us/HT204683","producer":{"name":"Apple Inc","url":"https://www.apple.com"}},{"regex":"AppSignalBot","name":"AppSignalBot","category":"Site Monitor","url":"https://docs.appsignal.com/uptime-monitoring/","producer":{"name":"AppSignal","url":"https://appsignal.com/"}},{"regex":"Arachni","name":"Arachni","category":"Security Checker","url":"https://www.arachni-scanner.com/","producer":{"name":"Sarosys LLC","url":"https://www.sarosys.com/"}},{"regex":"AspiegelBot","name":"AspiegelBot","category":"Crawler","url":"https://aspiegel.com/","producer":{"name":"Huawei","url":"https://www.huawei.com/"}},{"regex":"Castro 2, Episode Duration Lookup","name":"Castro 2","category":"Service Agent","url":"http://supertop.co/castro/","producer":{"name":"Supertop","url":"http://supertop.co"}},{"regex":"Curious George","name":"Analytics SEO Crawler","category":"Crawler","url":"http://www.analyticsseo.com/crawler","producer":{"name":"Analytics SEO","url":"http://www.analyticsseo.com"}},{"regex":"archive\\\\.org_bot|special_archiver","name":"archive.org bot","category":"Crawler","url":"https://archive.org/details/archive.org_bot","producer":{"name":"The Internet Archive","url":"https://archive.org"}},{"regex":"Ask Jeeves/Teoma","name":"Ask Jeeves","category":"Search bot","url":"","producer":{"name":"Ask Jeeves Inc.","url":"http://www.ask.com"}},{"regex":"Backlink-Check\\\\.de","name":"Backlink-Check.de","category":"Crawler","url":"http://www.backlink-check.de/bot.html","producer":{"name":"Mediagreen Medienservice","url":"http://www.backlink-check.de"}},{"regex":"BacklinkCrawler","name":"BacklinkCrawler","category":"Crawler","url":"http://www.backlinktest.com/crawler.html","producer":{"name":"2.0Promotion GbR","url":"http://www.backlinktest.com"}},{"regex":"baiduspider(-image)?|baidu Transcoder|baidu.*spider","name":"Baidu Spider","category":"Search bot","url":"http://www.baidu.com/search/spider.htm","producer":{"name":"Baidu","url":"http://www.baidu.com"}},{"regex":"BazQux","name":"BazQux Reader","url":"https://bazqux.com/fetcher","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"MSNBot|msrbot|bingbot|BingPreview|msnbot-(UDiscovery|NewsBlogs)|adidxbot","name":"BingBot","category":"Search bot","url":"http://search.msn.com/msnbot.htmn","producer":{"name":"Microsoft Corporation","url":"http://www.microsoft.com"}},{"regex":"Blekkobot","name":"Blekkobot","category":"Search bot","url":"http://blekko.com/about/blekkobot","producer":{"name":"Blekko","url":"http://blekko.com"}},{"regex":"BLEXBot(Test)?","name":"BLEXBot Crawler","category":"Crawler","url":"http://webmeup-crawler.com","producer":{"name":"WebMeUp","url":"http://webmeup.com"}},{"regex":"Bloglovin","name":"Bloglovin","url":"http://www.bloglovin.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Blogtrottr","name":"Blogtrottr","url":"","category":"Feed Fetcher","producer":{"name":"Blogtrottr Ltd","url":"https://blogtrottr.com/"}},{"regex":"BoardReader Blog Indexer","name":"BoardReader Blog Indexer","category":"Crawler","producer":{"name":"BoardReader","url":"https://boardreader.com/"}},{"regex":"BountiiBot","name":"Bountii Bot","category":"Search bot","url":"http://bountii.com/contact.php","producer":{"name":"Bountii Inc.","url":"http://bountii.com"}},{"regex":"Browsershots","name":"Browsershots","category":"Service Agent","url":"http://browsershots.org/faq","producer":{"name":"Browsershots.org","url":"http://browsershots.org"}},{"regex":"BUbiNG","name":"BUbiNG","category":"Crawler","url":"http://law.di.unimi.it/BUbiNG.html","producer":{"name":"The Laboratory for Web Algorithmics (LAW)","url":"http://law.di.unimi.it/software.php#buging"}},{"regex":"(?<!HTC)[ _]Butterfly/","name":"Butterfly Robot","category":"Search bot","url":"http://labs.topsy.com/butterfly","producer":{"name":"Topsy Labs","url":"http://labs.topsy.com"}},{"regex":"CareerBot","name":"CareerBot","category":"Crawler","url":"http://www.career-x.de/bot.html","producer":{"name":"career-x GmbH","url":"http://www.career-x.de"}},{"regex":"CCBot","name":"ccBot crawler","category":"Crawler","url":"http://commoncrawl.org/faq/","producer":{"name":"reddit inc.","url":"http://www.reddit.com"}},{"regex":"Cliqzbot","name":"Cliqzbot","category":"Crawler","url":"http://cliqz.com/company/cliqzbot","producer":{"name":"10betterpages GmbH","url":"http://cliqz.com"}},{"regex":"Cloudflare-AMP","name":"CloudFlare AMP Fetcher","category":"Crawler","url":"https://amp.cloudflare.com/doc/fetcher.html","producer":{"name":"CloudFlare","url":"http://www.cloudflare.com"}},{"regex":"CloudflareDiagnostics","name":"Cloudflare Diagnostics","category":"Site Monitor","url":"https://www.cloudflare.com/","producer":{"name":"Cloudflare","url":"https://www.cloudflare.com"}},{"regex":"CloudFlare-AlwaysOnline","name":"CloudFlare Always Online","category":"Site Monitor","url":"http://www.cloudflare.com/always-online","producer":{"name":"CloudFlare","url":"http://www.cloudflare.com"}},{"regex":"coccoc.com","name":"C\u1ED1c C\u1ED1c Bot","url":"https://help.coccoc.com/en/search-engine/coccoc-robots","category":"Search bot","producer":{"name":"C\u1ED1c C\u1ED1c","url":"https://coccoc.com/"}},{"regex":"collectd","name":"Collectd","url":"https://collectd.org/","category":"Site Monitor","producer":{"name":"Collectd","url":"https://collectd.org/"}},{"regex":"CommaFeed","name":"CommaFeed","url":"http://www.commafeed.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"CSS Certificate Spider","name":"CSS Certificate Spider","category":"Crawler","url":"http://www.css-security.com/certificatespider/","producer":{"name":"Certified Security Solutions","url":"https://www.css-security.com/company/about-us/"}},{"regex":"Datadog Agent","name":"Datadog Agent","url":"https://github.com/DataDog/dd-agent","category":"Site Monitor","producer":{"name":"Datadog","url":"https://www.datadoghq.com/"}},{"regex":"Datanyze","name":"Datanyze","url":"","category":"Crawler","producer":{"name":"Datanyze","url":"https://www.datanyze.com"}},{"regex":"Dataprovider","name":"Dataprovider","category":"Crawler","url":"","producer":{"name":"Dataprovider B.V.","url":"https://www.dataprovider.com/"}},{"regex":"Daum(oa)?[ /][0-9]","name":"Daum","category":"Search bot","url":"http://tab.search.daum.net/aboutWebSearch_en.html","producer":{"name":"Daum Communications Corp.","url":"http://www.kakaocorp.com/main"}},{"regex":"Dazoobot","name":"Dazoobot","category":"Search bot","url":"","producer":{"name":"DAZOO.FR","url":"http://dazoo.fr"}},{"regex":"discobot(-news)?","name":"Discobot","category":"Search bot","url":"http://discoveryengine.com/discobot.html","producer":{"name":"Discovery Engine","url":"http://discoveryengine.com"}},{"regex":"Domain Re-Animator Bot|support@domainreanimator.com","name":"Domain Re-Animator Bot","category":"Crawler","url":"","producer":{"name":"Domain Re-Animator, LLC","url":"http://domainreanimator.com"}},{"regex":"DotBot","name":"DotBot","category":"Crawler","url":"http://www.opensiteexplorer.org/dotbot","producer":{"name":"SEOmoz, Inc.","url":"http://moz.com/"}},{"regex":"DuckDuck(?:Go-Favicons-)?Bot","name":"DuckDuckGo Bot","category":"Search bot","url":"https://duckduckgo.com/duckduckbot","producer":{"name":"DuckDuckGo","url":"https://duckduckgo.com/"}},{"regex":"EasouSpider","name":"Easou Spider","category":"Search bot","url":"http://www.easou.com/search/spider.html","producer":{"name":"easou ICP","url":"http://www.easou.com"}},{"regex":"eCairn-Grabber","name":"eCairn-Grabber","category":"Crawler","producer":{"name":"eCairn","url":"https://ecairn.com"}},{"regex":"EMail Exractor","name":"EMail Exractor","category":"Crawler","url":"","producer":{"name":"","url":""}},{"regex":"evc-batch","name":"evc-batch","category":"Crawler","url":"","producer":{"name":"eVenture Capital Partners II, LLC","url":"http://www.eventures.vc/"}},{"regex":"Exabot(-Thumbnails|-Images)?|ExaleadCloudview","name":"ExaBot","category":"Crawler","url":"http://www.exabot.com/go/robot","producer":{"name":"Dassault Syst\xe8mes","url":"http://www.3ds.com"}},{"regex":"ExactSeek Crawler","name":"ExactSeek Crawler","category":"Search bot","url":"http://www.exactseek.com","producer":{"name":"Jayde Online, Inc.","url":"http://www.jaydeonlineinc.com"}},{"regex":"Ezooms","name":"Ezooms","category":"Crawler","url":"","producer":{"name":"SEOmoz, Inc.","url":"http://moz.com/"}},{"regex":"facebookexternalhit|facebookplatform|facebookexternalua","name":"Facebook External Hit","category":"Social Media Agent","url":"https://www.facebook.com/externalhit_uatext.php","producer":{"name":"Facebook","url":"http://www.facebook.com"}},{"regex":"Feedbin","name":"Feedbin","url":"http://feedbin.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"FeedBurner","name":"FeedBurner","url":"http://www.feedburner.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Feed Wrangler","name":"Feed Wrangler","url":"https://feedwrangler.net/","category":"Feed Fetcher","producer":{"name":"David Smith & Developing Perspective, LLC","url":"https://david-smith.org"}},{"regex":"(Meta)?Feedly(Bot|App)?","name":"Feedly","url":"http://www.feedly.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Feedspot","name":"Feedspot","url":"http://www.feedspot.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"Fever/[0-9]","name":"Fever","url":"http://feedafever.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"FlipboardProxy|FlipboardRSS","name":"Flipboard","url":"http://flipboard.com/browserproxy","category":"Feed Fetcher","producer":{"name":"Flipboard","url":"http://flipboard.com/"}},{"regex":"Findxbot","name":"Findxbot","category":"Crawler","url":"http://www.findxbot.com"},{"regex":"FreshRSS","name":"FreshRSS","category":"Feed Fetcher","url":"https://freshrss.org/"},{"regex":"Genieo","name":"Genieo Web filter","category":"","url":"http://www.genieo.com/webfilter.html","producer":{"name":"Genieo","url":"http://www.genieo.com"}},{"regex":"GigablastOpenSource","name":"Gigablast","category":"Search bot","url":"https://github.com/gigablast/open-source-search-engine","producer":{"name":"Matt Wells","url":"http://www.gigablast.com/faq.html"}},{"regex":"Gluten Free Crawler","name":"Gluten Free Crawler","category":"Crawler","url":"http://glutenfreepleasure.com/","producer":{"name":"","url":""}},{"regex":"ichiro/mobile goo","name":"Goo","category":"Search bot","url":"http://search.goo.ne.jp/option/use/sub4/sub4-1","producer":{"name":"NTT Resonant","url":"http://goo.ne.jp"}},{"regex":"Google Favicon","name":"Google Favicon","category":"Crawler"},{"regex":"Google Search Console","name":"Google Search Console","category":"Crawler","url":"https://search.google.com/search-console/about","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"Google Page Speed Insights","name":"Google PageSpeed Insights","category":"Site Monitor","url":"http://developers.google.com/speed/pagespeed/insights/","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"google_partner_monitoring","name":"Google Partner Monitoring","category":"Site Monitor","url":"","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"Google-Cloud-Scheduler","name":"Google Cloud Scheduler","category":"Crawler","url":"https://cloud.google.com/scheduler","producer":{"name":"Google Inc.","url":"https://www.google.com"}},{"regex":"Google-Structured-Data-Testing-Tool","name":"Google Structured Data Testing Tool","category":"Validator","url":"https://search.google.com/structured-data/testing-tool","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"GoogleStackdriverMonitoring","name":"Google Stackdriver Monitoring","category":"Site Monitor","url":"https://cloud.google.com/monitoring","producer":{"name":"Google Inc.","url":"https://www.google.com"}},{"regex":"via ggpht\\\\.com GoogleImageProxy","name":"Gmail Image Proxy","category":"Crawler","url":"","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"SeznamEmailProxy","name":"Seznam Email Proxy","category":"Crawler","url":"","producer":{"name":"Seznam.cz, a.s.","url":"http://www.seznam.cz/"}},{"regex":"Seznam-Zbozi-robot","name":"Seznam Zbozi.cz","category":"Crawler","url":"","producer":{"name":"Seznam.cz, a.s.","url":"https://www.zbozi.cz/"}},{"regex":"Heurekabot-Feed","name":"Heureka Feed","category":"Crawler","url":"https://sluzby.heureka.cz/napoveda/heurekabot/","producer":{"name":"Heureka.cz, a.s.","url":"https://www.heureka.cz/"}},{"regex":"ShopAlike","name":"ShopAlike","category":"Crawler","url":"","producer":{"name":"Visual Meta","url":"https://www.shopalike.cz/"}},{"regex":"AdsBot-Google(-Mobile)?|Adwords-(DisplayAds|Express|Instant)|Google Web Preview|Google[ -]Publisher[ -]Plugin|Google-(Ads-Qualify|Adwords|AMPHTML|Assess|HotelAdsVerifier|Read-Aloud|Shopping-Quality|Site-Verification|speakr|Test|Youtube-Links)|(APIs|DuplexWeb|Feedfetcher|Mediapartners)-Google|Googlebot(-Mobile|-Image|-Video|-News)?|GoogleProducer|Google.*/\\\\+/web/snippet","name":"Googlebot","category":"Search bot","url":"http://www.google.com/bot.html","producer":{"name":"Google Inc.","url":"http://www.google.com"}},{"regex":"heritrix","name":"Heritrix","category":"Crawler","url":"https://webarchive.jira.com/wiki/display/Heritrix/Heritrix","producer":{"name":"The Internet Archive","url":"https://archive.org"}},{"regex":"HubSpot ","name":"HubSpot","category":"Crawler","producer":{"name":"HubSpot Inc.","url":"https://www.hubspot.com"}},{"regex":"HTTPMon","name":"HTTPMon","category":"Site Monitor","url":"http://www.httpmon.com","producer":{"name":"towards GmbH","url":"http://www.towards.ch/"}},{"regex":"ICC-Crawler","name":"ICC-Crawler","category":"Crawler","url":"http://www.nict.go.jp/en/univ-com/plan/crawl.html","producer":{"name":"","url":""}},{"regex":"inoreader.com","name":"inoreader","category":"Feed Reader","url":"https://www.inoreader.com"},{"regex":"iisbot","name":"IIS Site Analysis","category":"Crawler","url":"http://www.iis.net/iisbot.html","producer":{"name":"Microsoft Corporation","url":"http://www.microsoft.com"}},{"regex":"ips-agent","name":"IPS Agent","category":"Crawler","producer":{"name":"VeriSign, Inc","url":"http://www.verisign.com/"}},{"regex":"IP-Guide\\\\.com","name":"IP-Guide Crawler","category":"Crawler","url":"","producer":{"name":"","url":"https://ip-guide.com"}},{"regex":"kouio","name":"Kouio","url":"http://kouio.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"larbin","name":"Larbin web crawler","category":"Crawler","url":"http://larbin.sourceforge.net","producer":{"name":"","url":""}},{"regex":"([A-z0-9]*)-Lighthouse","name":"Lighthouse","category":"Site Monitor","url":"https://developers.google.com/web/tools/lighthouse","producer":{"name":"Lighthouse","url":"https://developers.google.com/web/tools/lighthouse"}},{"regex":"linkdexbot(-mobile)?|linkdex\\\\.com","name":"Linkdex Bot","category":"Search bot","url":"http://www.linkdex.com/bots","producer":{"name":"Mojeek Ltd.","url":"http://www.mojeek.com"}},{"regex":"LinkedInBot","name":"LinkedIn Bot","category":"Social Media Agent","url":"http://www.linkedin.com","producer":{"name":"LinkedIn","url":"http://www.linkedin.com"}},{"regex":"ltx71","name":"LTX71","url":"http://ltx71.com/","producer":{"name":"","url":""}},{"regex":"Mail\\\\.RU(_Bot)?","name":"Mail.Ru Bot","category":"Search bot","url":"http://help.mail.ru/webmaster/indexing/robots/types_robots","producer":{"name":"Mail.Ru Group","url":"http://corp.mail.ru"}},{"regex":"magpie-crawler","name":"Magpie-Crawler","category":"Social Media Agent","url":"http://www.brandwatch.com/magpie-crawler/","producer":{"name":"Brandwatch","url":"http://www.brandwatch.com"}},{"regex":"MagpieRSS","name":"MagpieRSS","url":"http://magpierss.sourceforge.net/","category":"Feed Parser","producer":{"name":"","url":""}},{"regex":"masscan","name":"masscan","url":"https://github.com/robertdavidgraham/masscan","category":"Crawler","producer":{"name":"Robert Graham","url":"https://github.com/robertdavidgraham"}},{"regex":"Mastodon/","name":"Mastodon Bot","category":"Social Media Agent"},{"regex":"meanpathbot","name":"Meanpath Bot","category":"Search bot","url":"http://www.meanpath.com/meanpathbot.html","producer":{"name":"Meanpath","url":"http://www.meanpath.com"}},{"regex":"MetaJobBot","name":"MetaJobBot","category":"Crawler","url":"http://www.metajob.at/the/crawler","producer":{"name":"MetaJob","url":"http://www.metajob.at"}},{"regex":"MetaInspector","name":"MetaInspector","category":"Crawler","url":"https://github.com/jaimeiniesta/metainspector"},{"regex":"MixrankBot","name":"Mixrank Bot","category":"Crawler","url":"http://mixrank.com","producer":{"name":"Online Media Group, Inc.","url":""}},{"regex":"MJ12bot","name":"MJ12 Bot","category":"Search bot","url":"http://majestic12.co.uk/bot.php","producer":{"name":"Majestic-12","url":"http://majestic12.co.uk"}},{"regex":"Mnogosearch","name":"Mnogosearch","category":"Search bot","url":"http://www.mnogosearch.org/","producer":{"name":"Lavtech.Com Corp.","url":""}},{"regex":"MojeekBot","name":"MojeekBot","category":"Search bot","url":"http://www.mojeek.com/bot.html","producer":{"name":"Mojeek Ltd.","url":"http://www.mojeek.com"}},{"regex":"munin","name":"Munin","category":"Site Monitor","url":"http://munin-monitoring.org/","producer":{"name":"Munin","url":"http://munin-monitoring.org/"}},{"regex":"NalezenCzBot","name":"NalezenCzBot","category":"Crawler","url":"http://www.nalezen.cz/about-crawler","producer":{"name":"Jaroslav Kubo\u0161","url":""}},{"regex":"check_http/v","name":"Nagios check_http","category":"Site Monitor","url":"https://nagios.org","producer":{"name":"Nagios Plugins Development Team","url":"https://nagios.org"}},{"regex":"nbertaupete95\\\\(at\\\\)gmail.com","name":"nbertaupete95","category":"Crawler"},{"regex":"Netcraft( Web Server Survey| SSL Server Survey|SurveyAgent)","name":"Netcraft Survey Bot","category":"Search bot","url":"","producer":{"name":"Netcraft","url":"http://www.netcraft.com"}},{"regex":"netEstate NE Crawler","name":"netEstate","category":"Crawler","url":"http://www.website-datenbank.de/Impressum","producer":{"name":"netEstate GmbH","url":"https://www.netestate.de/en/"}},{"regex":"Netvibes","name":"Netvibes","url":"http://www.netvibes.com/","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"NewsBlur .*(Fetcher|Finder)","name":"NewsBlur","url":"http://www.newsblur.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"NewsGatorOnline","name":"NewsGator","url":"http://www.newsgator.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"nlcrawler","name":"NLCrawler","category":"Crawler","url":"","producer":{"name":"Northern Light","url":"http://northernlight.com"}},{"regex":"Nmap Scripting Engine","name":"Nmap","category":"Security Checker","url":"https://nmap.org/book/nse.html","producer":{"name":"Nmap","url":"https://nmap.org/"}},{"regex":"Nuzzel","name":"Nuzzel","category":"Crawler","producer":{"name":"Nuzzel","url":"https://www.nuzzel.com/"}},{"regex":"Octopus [0-9]","name":"Octopus"},{"regex":"omgili(?:bot)?","name":"Omgili bot","category":"Search bot","url":"http://www.omgili.com/Crawler.html","producer":{"name":"Omgili","url":"http://www.omgili.com"}},{"regex":"OpenindexSpider","name":"Openindex Spider","category":"Search bot","url":"http://www.openindex.io/en/webmasters/spider.html","producer":{"name":"Openindex B.V.","url":"http://www.openindex.io"}},{"regex":"spbot","name":"OpenLinkProfiler","category":"Crawler","url":"http://openlinkprofiler.org/bot","producer":{"name":"Axandra GmbH","url":"http://www.axandra.com"}},{"regex":"OpenWebSpider","name":"OpenWebSpider","category":"Crawler","url":"http://www.openwebspider.org","producer":{"name":"OpenWebSpider Lab","url":"http://lab.openwebspider.org"}},{"regex":"OrangeBot|VoilaBot","name":"Orange Bot","category":"Search bot","url":"http://lemoteur.orange.fr","producer":{"name":"Orange","url":"http://www.orange.fr"}},{"regex":"PaperLiBot","name":"PaperLiBot","category":"Search bot","url":"http://support.paper.li/entries/20023257-what-is-paper-li","producer":{"name":"Smallrivers SA","url":"http://www.paper.li"}},{"regex":"phantomas/","name":"Phantomas","category":"Site Monitor","url":"https://github.com/macbre/phantomas"},{"regex":"phpservermon","name":"PHP Server Monitor","category":"Site Monitor","url":"https://github.com/phpservermon/phpservermon","producer":{"name":"PHP Server Monitor","url":"http://www.phpservermonitor.org/"}},{"regex":"PocketParser","name":"PocketParser","category":"Read-it-later Service","url":"https://getpocket.com/pocketparser_ua","producer":{"name":"Pocket","url":"https://getpocket.com/"}},{"regex":"PritTorrent","name":"PritTorrent","category":"Crawler","url":"https://github.com/astro/prittorrent","producer":{"name":"Bitlove","url":"http://bitlove.org/"}},{"regex":"PRTG Network Monitor","name":"PRTG Network Monitor","category":"Network Monitor","url":"https://www.paessler.com/prtg","producer":{"name":"Paessler AG","url":"https://www.paessler.com"}},{"regex":"psbot(-page)?","name":"Picsearch bot","category":"Search bot","url":"http://www.picsearch.com/bot.html","producer":{"name":"Picsearch","url":"http://www.picsearch.com"}},{"regex":"Pingdom(?:\\\\.com|TMS)","name":"Pingdom Bot","category":"Site Monitor","url":"","producer":{"name":"Pingdom AB","url":"https://www.pingdom.com"}},{"regex":"Quora Link Preview","name":"Quora Link Preview","category":"Crawler","url":"","producer":{"name":"Quora","url":"http://www.quora.com"}},{"regex":"Quora-Bot","name":"Quora Bot","category":"Crawler","url":"","producer":{"name":"Quora","url":"https://www.quora.com/"}},{"regex":"RamblerMail","name":"RamblerMail Image Proxy","category":"Crawler","url":"","producer":{"name":"Rambler&Co","url":"https://rambler-co.ru/"}},{"regex":"QuerySeekerSpider","name":"QuerySeekerSpider","category":"Crawler","url":"http://queryseeker.com/bot.html","producer":{"name":"QueryEye Inc.","url":"http://queryeye.com"}},{"regex":"Qwantify","name":"Qwantify","category":"Crawler","url":"https://www.qwant.com/","producer":{"name":"Qwant Corporation","url":"https://www.qwant.com/"}},{"regex":"Rainmeter","name":"Rainmeter","category":"Crawler","url":"https://www.rainmeter.net"},{"regex":"redditbot","name":"Reddit Bot","category":"Social Media Agent","url":"http://www.reddit.com/feedback","producer":{"name":"reddit inc.","url":"http://www.reddit.com"}},{"regex":"Riddler","name":"Riddler","category":"Security search bot","url":"https://riddler.io/about","producer":{"name":"F-Secure","url":"https://www.f-secure.com"}},{"regex":"rogerbot","name":"Rogerbot","category":"Crawler","url":"http://moz.com/help/pro/what-is-rogerbot-","producer":{"name":"SEOmoz, Inc.","url":"http://moz.com/"}},{"regex":"ROI Hunter","name":"ROI Hunter","category":"Crawler","url":"","producer":{"name":"Roihunter a.s.","url":"http://roihunter.com/"}},{"regex":"SafeDNSBot","name":"SafeDNSBot","category":"Crawler","url":"https://www.safedns.com/searchbot","producer":{"name":"SafeDNS, Inc.","url":"https://www.safedns.com/"}},{"regex":"Scrapy","name":"Scrapy","category":"Crawler","url":"http://scrapy.org"},{"regex":"Screaming Frog SEO Spider","name":"Screaming Frog SEO Spider","category":"Crawler","url":"http://www.screamingfrog.co.uk/seo-spider","producer":{"name":"Screaming Frog Ltd","url":"http://www.screamingfrog.co.uk"}},{"regex":"ScreenerBot","name":"ScreenerBot","category":"Crawler","url":"http://www.screenerbot.com","producer":{"name":"","url":""}},{"regex":"SemrushBot","name":"Semrush Bot","category":"Crawler","url":"http://www.semrush.com/bot.html","producer":{"name":"SEMrush","url":"http://www.semrush.com"}},{"regex":"SensikaBot","name":"Sensika Bot","category":"","url":"","producer":{"name":"Sensika","url":"http://sensika.com"}},{"regex":"SEOENG(World)?Bot","name":"SEOENGBot","category":"Crawler","url":"http://www.seoengine.com/seoengbot.htm","producer":{"name":"SEO Engine","url":"http://www.seoengine.com"}},{"regex":"SEOkicks-Robot","name":"SEOkicks-Robot","category":"Crawler","url":"http://www.seokicks.de/robot.html","producer":{"name":"SEOkicks","url":"https://www.seokicks.de/"}},{"regex":"seoscanners\\\\.net","name":"Seoscanners.net","category":"Crawler","url":""},{"regex":"SkypeUriPreview","name":"Skype URI Preview","category":"Service Agent","url":"","producer":{"name":"Skype Communications S.\xe0.r.l.","url":"https://www.skype.com"}},{"regex":"SeznamBot|SklikBot|Seznam screenshot-generator","name":"Seznam Bot","category":"Search bot","url":"http://www.mapy.cz/cz/seznambot.html","producer":{"name":"Seznam.cz, a.s.","url":"http://www.seznam.cz/"}},{"regex":"shopify-partner-homepage-scraper","name":"Shopify Partner","category":"Crawler","url":"https://www.shopify.com/partners","producer":{"name":"Shopify","url":"https://www.shopify.com/"}},{"regex":"ShopWiki","name":"ShopWiki","category":"Search tools","url":"http://www.shopwiki.com/wiki/Help:Bot","producer":{"name":"ShopWiki Corp.","url":"http://www.shopwiki.com"}},{"regex":"SilverReader","name":"SilverReader","url":"http://silverreader.com","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"SimplePie","name":"SimplePie","url":"http://www.simplepie.org","category":"Feed Parser","producer":{"name":"","url":""}},{"regex":"SISTRIX Crawler","name":"SISTRIX Crawler","category":"Crawler","url":"http://crawler.sistrix.net","producer":{"name":"SISTRIX GmbH","url":"http://www.sistrix.de"}},{"regex":"compatible; (?:SISTRIX )?Optimizer","name":"SISTRIX Optimizer","category":"Crawler","url":"https://optimizer.sistrix.com","producer":{"name":"SISTRIX GmbH","url":"http://www.sistrix.de"}},{"regex":"SiteSucker","name":"SiteSucker","category":"Crawler","url":"http://ricks-apps.com/osx/sitesucker/"},{"regex":"sixy.ch","name":"Sixy.ch","category":"Site Monitor","url":"http://sixy.ch","producer":{"name":"Manuel Kasper","url":"https://neon1.net/"}},{"regex":"Slackbot|Slack-ImgProxy","name":"Slackbot","category":"Crawler","url":"https://api.slack.com/robots","producer":{"name":"Slack Technologies","url":"http://slack.com"}},{"regex":"(Sogou (web|inst|Pic) spider)|New-Sogou-Spider","name":"Sogou Spider","category":"Search bot","url":"http://www.sogou.com/docs/help/webmasters.htm","producer":{"name":"Sohu, Inc.","url":"http://www.sogou.com"}},{"regex":"Sosospider|Sosoimagespider","name":"Soso Spider","category":"Search bot","url":"http://help.soso.com/webspider.htm","producer":{"name":"Tencent Holdings","url":"http://www.soso.com"}},{"regex":"Sprinklr","name":"Sprinklr","category":"Crawler","url":"","producer":{"name":"Sprinklr, Inc.","url":"https://www.sprinklr.com/"}},{"regex":"sqlmap/","name":"sqlmap","category":"Security Checker","url":"http://sqlmap.org/","producer":{"name":"sqlmap","url":"http://sqlmap.org/"}},{"regex":"SSL Labs","name":"SSL Labs","category":"Validator","url":"https://www.ssllabs.com/about/assessment.html","producer":{"name":"SSL Labs","url":"https://www.ssllabs.com/about/assessment.html"}},{"regex":"StatusCake","name":"StatusCake","category":"Site Monitor","url":"https://www.statuscake.com","producer":{"name":"StatusCake","url":"https://www.statuscake.com"}},{"regex":"Superfeedr bot","name":"Superfeedr Bot","category":"Feed Fetcher","url":"","producer":{"name":"Superfeedr","url":"https://superfeedr.com/"}},{"regex":"Sparkler/[0-9]","name":"Sparkler","category":"Crawler","url":"https://github.com/USCDataScience/sparkler"},{"regex":"Spinn3r","name":"Spinn3r","category":"Crawler","url":"http://spinn3r.com/robot","producer":{"name":"Tailrank Inc","url":"http://spinn3r.com"}},{"regex":"SputnikBot","name":"Sputnik Bot","category":"Crawler","url":""},{"regex":"SputnikFaviconBot","name":"Sputnik Favicon Bot","category":"Crawler","url":""},{"regex":"SputnikImageBot","name":"Sputnik Image Bot","category":"Crawler","url":""},{"regex":"SurveyBot","name":"Survey Bot","category":"Search bot","url":"http://www.domaintools.com/webmasters/surveybot.php","producer":{"name":"Domain Tools","url":"http://www.domaintools.com"}},{"regex":"TarmotGezgin","name":"Tarmot Gezgin","url":"http://www.tarmot.com/gezgin/","category":"Search bot"},{"regex":"TelegramBot","name":"TelegramBot","url":"https://telegram.org/blog/bot-revolution"},{"regex":"TLSProbe","name":"TLSProbe","url":"https://scan.trustnet.venafi.com/","category":"Security search bot","producer":{"name":"Venafi TrustNet","url":"https://www.venafi.com"}},{"regex":"TinEye-bot","name":"TinEye Crawler","category":"Search bot","url":"http://www.tineye.com/crawler.html","producer":{"name":"Id\xe9e Inc.","url":"http://ideeinc.com"}},{"regex":"Tiny Tiny RSS","name":"Tiny Tiny RSS","url":"http://tt-rss.org","category":"Feed Fetcher","producer":{"name":"","url":""}},{"regex":"theoldreader.com","name":"theoldreader","category":"Feed Reader","url":"https://theoldreader.com"},{"regex":"trendictionbot","name":"Trendiction Bot","category":"Crawler","url":"http://www.trendiction.de/bot","producer":{"name":"Talkwalker Inc.","url":"http://www.talkwalker.com"}},{"regex":"TurnitinBot","name":"TurnitinBot","category":"Crawler","url":"http://www.turnitin.com/robot/crawlerinfo.html","producer":{"name":"iParadigms, LLC.","url":"http://www.turnitin.com"}},{"regex":"TweetedTimes Bot","name":"TweetedTimes Bot","category":"Crawler","url":"http://tweetedtimes.com","producer":{"name":"TweetedTimes","url":"http://tweetedtimes.com/"}},{"regex":"TweetmemeBot","name":"Tweetmeme Bot","category":"Crawler","url":"http://tweetmeme.com/","producer":{"name":"Mediasift","url":""}},{"regex":"Twingly Recon","name":"Twingly Recon","category":"Crawler","producer":{"name":"Twingly","url":"https://www.twingly.com"}},{"regex":"Twitterbot","name":"Twitterbot","category":"Social Media Agent","url":"https://dev.twitter.com/docs/cards/getting-started","producer":{"name":"Twitter","url":"http://www.twitter.com"}},{"regex":"UniversalFeedParser","name":"UniversalFeedParser","category":"Feed Fetcher","url":"https://github.com/kurtmckee/feedparser","producer":{"name":"Kurt McKee","url":"https://github.com/kurtmckee"}},{"regex":"via secureurl\\\\.fwdcdn\\\\.com","name":"UkrNet Mail Proxy","category":"Crawler","url":"","producer":{"name":"UkrNet Ltd","url":"https://www.ukr.net/"}},{"regex":"Uptimebot","name":"Uptimebot","category":"Site Monitor","url":"https://uptime.com/uptimebot","producer":{"name":"Uptime","url":"https://uptime.com"}},{"regex":"UptimeRobot","name":"Uptime Robot","category":"Site Monitor","url":"","producer":{"name":"Uptime Robot","url":"http://uptimerobot.com"}},{"regex":"URLAppendBot","name":"URLAppendBot","category":"Crawler","url":"http://www.profound.net/urlappendbot.html","producer":{"name":"Profound Networks","url":"http://www.profound.net"}},{"regex":"Vagabondo","name":"Vagabondo","category":"Crawler","url":"","producer":{"name":"WiseGuys","url":"http://www.wise-guys.nl/"}},{"regex":"vkShare; ","name":"VK Share Button","category":"Crawler","url":"http://vk.com/dev/Share","producer":{"name":"VK","url":"http://vk.com/"}},{"regex":"VSMCrawler","name":"Visual Site Mapper Crawler","category":"Crawler","url":"http://www.visualsitemapper.com/crawler","producer":{"name":"Alentum Software Ltd.","url":"http://www.alentum.com"}},{"regex":"Jigsaw","name":"W3C CSS Validator","category":"Validator","url":"http://jigsaw.w3.org/css-validator","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C_I18n-Checker","name":"W3C I18N Checker","category":"Validator","url":"http://validator.w3.org/i18n-checker","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C-checklink","name":"W3C Link Checker","category":"Validator","url":"http://validator.w3.org/checklink","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C_Validator|Validator.nu","name":"W3C Markup Validation Service","category":"Validator","url":"http://validator.w3.org/services","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C-mobileOK","name":"W3C MobileOK Checker","category":"Validator","url":"http://validator.w3.org/mobile","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"W3C_Unicorn","name":"W3C Unified Validator","category":"Validator","url":"http://validator.w3.org/unicorn","producer":{"name":"W3C","url":"http://www.w3.org"}},{"regex":"Wappalyzer","name":"Wappalyzer","url":"https://github.com/AliasIO/Wappalyzer","producer":{"name":"AliasIO","url":"https://github.com/AliasIO"}},{"regex":"PTST/","name":"WebPageTest","category":"Site Monitor","url":"https://www.webpagetest.org"},{"regex":"WeSEE(:Search)?","name":"WeSEE:Search","category":"Search bot","url":"http://www.wesee.com/bot","producer":{"name":"WeSEE Ltd","url":"http://www.wesee.com"}},{"regex":"WebbCrawler","name":"WebbCrawler","category":"Crawler","url":"http://badcheese.com/crawler.html","producer":{"name":"Steve Webb","url":"http://badcheese.com"}},{"regex":"websitepulse[+ ]checker","name":"WebSitePulse","category":"Site Monitor","url":"http://badcheese.com/crawler.html","producer":{"name":"WebSitePulse","url":"http://www.websitepulse.com/"}},{"regex":"WordPress","name":"WordPress","category":"Service Agent","url":"https://wordpress.org/","producer":{"name":"Wordpress.org","url":"https://wordpress.org/"}},{"regex":"Wotbox","name":"Wotbox","category":"Search bot","url":"http://www.wotbox.com/bot/","producer":{"name":"Wotbox","url":"http://www.wotbox.com"}},{"regex":"XenForo","name":"XenForo","category":"Service Agent","url":"https://xenforo.com/","producer":{"name":"XenForo Ltd.","url":"https://xenforo.com/"}},{"regex":"yacybot","name":"YaCy","category":"Search bot","url":"http://yacy.net/bot.html","producer":{"name":"YaCy","url":"http://yacy.net"}},{"regex":"Yahoo! Slurp|Yahoo!-AdCrawler","name":"Yahoo! Slurp","category":"Search bot","url":"http://help.yahoo.com/ysearch/slurp","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":"Yahoo Link Preview|Yahoo:LinkExpander:Slingstone","name":"Yahoo! Link Preview","category":"Crawler","url":"https://help.yahoo.com/kb/mail/yahoo-link-preview-SLN23615.html","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":"YahooMailProxy","name":"Yahoo! Mail Proxy","category":"Service Agent","url":"https://help.yahoo.com/kb/yahoo-mail-proxy-SLN28749.html","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":"YahooCacheSystem","name":"Yahoo! Cache System","category":"Crawler","url":"","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":"Y!J-BRW","name":"Yahoo! Japan BRW","category":"Crawler","url":"https://www.yahoo-help.jp/app/answers/detail/p/595/a_id/42716/~/\u30A6\u30A7\u30D6\u30DA\u30FC\u30B8\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u30B7\u30B9\u30C6\u30E0\u306E\u30E6\u30FC\u30B6\u30FC\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306B\u3064\u3044\u3066","producer":{"name":"Yahoo! Japan Corp.","url":"https://www.yahoo.co.jp/"}},{"regex":"Yandex(SpravBot|ScreenshotBot|MobileBot|AccessibilityBot|ForDomain|Vertis|Market|Catalog|Calendar|Sitelinks|AdNet|Pagechecker|Webmaster|Media|Video|Bot|Images|Antivirus|Direct|Blogs|Favicons|ImageResizer|Verticals|News(links)?|Metrika|\\\\.Gazeta Bot)|YaDirectFetcher|YandexTurbo|YandexTracker|YandexSearchShop|YandexRCA|YandexPartner|YandexOntoDBAPI|YandexOntoDB|YandexMobileScreenShotBot","name":"Yandex Bot","category":"Search bot","url":"http://www.yandex.com/bots","producer":{"name":"Yandex LLC","url":"http://company.yandex.com"}},{"regex":"Yeti|NaverJapan","name":"Yeti/Naverbot","category":"Search bot","url":"http://help.naver.com/robots/","producer":{"name":"Naver","url":"http://www.naver.com"}},{"regex":"YoudaoBot","name":"Youdao Bot","category":"Search bot","url":"http://www.youdao.com/help/webmaster/spider","producer":{"name":"NetEase, Inc.","url":"http://corp.163.com"}},{"regex":"YOURLS v[0-9]","name":"Yourls","category":"Crawler","url":"http://yourls.org"},{"regex":"YRSpider|YYSpider","name":"Yunyun Bot","category":"Search bot","url":"http://www.yunyun.com/SiteInfo.php?r=about","producer":{"name":"YunYun","url":"http://www.yunyun.com"}},{"regex":"zgrab","name":"zgrab","category":"Security Checker","url":"https://github.com/zmap/zgrab"},{"regex":"Zookabot","name":"Zookabot","category":"Crawler","url":"http://zookabot.com","producer":{"name":"Hwacha ApS","url":"http://hwacha.dk"}},{"regex":"ZumBot","name":"ZumBot","category":"Search bot","url":"http://help.zum.com/inquiry","producer":{"name":"ZUM internet","url":"http://www.zuminternet.com/"}},{"regex":"YottaaMonitor","name":"Yottaa Site Monitor","category":"Site Monitor","url":"http://www.yottaa.com/products/site-monitor","producer":{"name":"Yottaa","url":"http://www.yottaa.com/"}},{"regex":"Yahoo Ad monitoring.*yahoo-ad-monitoring-SLN24857.*","name":"Yahoo Gemini","category":"Crawler","url":"https://help.yahoo.com/kb/yahoo-ad-monitoring-SLN24857.html","producer":{"name":"Yahoo! Inc.","url":"http://www.yahoo.com"}},{"regex":".*Java.*outbrain","name":"Outbrain","category":"Crawler","url":"","producer":{"name":"Outbrain","url":"http://www.outbrain.com/"}},{"regex":"HubPages.*crawlingpolicy","name":"HubPages","category":"Crawler","url":"http://hubpages.com/help/crawlingpolicy","producer":{"name":"HubPages","url":"http://hubpages.com/"}},{"regex":"Pinterest(bot)?/\\\\d\\\\.\\\\d.*www\\\\.pinterest\\\\.com.*","name":"Pinterest","url":"http://www.pinterest.com/bot.html","category":"Crawler","producer":{"name":"Pinterest","url":"http://www.pinterest.com/"}},{"regex":"Site24x7","name":"Site24x7 Website Monitoring","category":"Site Monitor","url":"https://www.site24x7.com/site24x7-faq.html","producer":{"name":"Site24x7","url":"https://www.site24x7.com"}},{"regex":"s~snapchat-proxy","name":"Snapchat Proxy","category":"Crawler","url":"https://www.snapchat.com","producer":{"name":"Snapchat Inc.","url":"https://www.snapchat.com"}},{"regex":"Let\'s Encrypt validation server","name":"Let\'s Encrypt Validation","category":"Service Agent","url":"https://letsencrypt.org/how-it-works/","producer":{"name":"Let\'s Encrypt","url":"https://letsencrypt.org"}},{"regex":"GrapeshotCrawler","name":"Grapeshot","category":"Crawler","url":"https://www.grapeshot.com/crawler","producer":{"name":"Grapeshot","url":"https://www.grapeshot.com"}},{"regex":"www\\\\.monitor\\\\.us","name":"Monitor.Us","category":"Site Monitor","url":"http://www.monitor.us","producer":{"name":"Monitor.Us","url":"http://www.monitor.us"}},{"regex":"Catchpoint( bot)?","name":"Catchpoint","category":"Site Monitor","url":"","producer":{"name":"Catchpoint Systems","url":"http://www.catchpoint.com/"}},{"regex":"bitlybot","name":"BitlyBot","category":"Crawler","url":"https://bitly.com","producer":{"name":"Bitly, Inc.","url":"https://bitly.com"}},{"regex":"Zao/","name":"Zao","category":"Crawler"},{"regex":"lycos","name":"Lycos"},{"regex":"Slurp","name":"Inktomi Slurp"},{"regex":"Speedy Spider","name":"Speedy"},{"regex":"ScoutJet","name":"ScoutJet"},{"regex":"nrsbot|netresearch","name":"NetResearchServer"},{"regex":"scooter","name":"Scooter"},{"regex":"gigabot","name":"Gigabot"},{"regex":"charlotte","name":"Charlotte"},{"regex":"Pompos","name":"Pompos"},{"regex":"ichiro","name":"ichiro"},{"regex":"PagePeeker","name":"PagePeeker"},{"regex":"WebThumbnail","name":"WebThumbnail"},{"regex":"Willow Internet Crawler","name":"Willow Internet Crawler"},{"regex":"EmailWolf","name":"EmailWolf"},{"regex":"NetLyzer FastProbe","name":"NetLyzer FastProbe"},{"regex":"AdMantX.*admantx\\\\.com","name":"ADMantX"},{"regex":"Server Density Service Monitoring.*","name":"Server Density"},{"regex":"RSSRadio \\\\(Push Notification Scanner;support@dorada\\\\.co\\\\.uk\\\\)","name":"RSSRadio Bot"},{"regex":"(A6-Indexer|nuhk|TsolCrawler|Yammybot|Openbot|Gulper Web Bot|grub-client|Download Demon|SearchExpress|Microsoft URL Control|borg|altavista|dataminr.com|tweetedtimes.com|TrendsmapResolver|teoma|blitzbot|oegp|furlbot|http%20client|polybot|htdig|mogimogi|larbin|scrubby|searchsight|seekbot|semanticdiscovery|snappy|vortex(?! Build)|zeal|fast-webcrawler|converacrawler|dataparksearch|findlinks|BrowserMob|HttpMonitor|ThumbShotsBot|URL2PNG|ZooShot|GomezA|Google SketchUp|Read%20Later|RackspaceBot|robots|SeopultContentAnalyzer|7Siters|centuryb.o.t9|InterNaetBoten|EasyBib AutoCite|Bidtellect|tomnomnom/meg)","name":"Generic Bot"},{"regex":"^sentry","name":"Sentry Bot","producer":{"name":"Sentry","url":"https://sentry.io"}},{"regex":"^Spotify","name":"Spotify","producer":{"name":"Spotify","url":"https://www.spotify.com"}},{"regex":"The Knowledge AI","name":"The Knowledge AI","category":"Crawler"},{"regex":"Embedly","name":"Embedly","category":"Crawler","url":"https://support.embed.ly/hc/en-us","producer":{"name":"A Medium, Corp.","url":"https://medium.com/"}},{"regex":"BrandVerity","name":"BrandVerity","category":"Crawler","url":"https://www.brandverity.com/why-is-brandverity-visiting-me","producer":{"name":"BrandVerity, Inc.","url":"https://www.brandverity.com/"}},{"regex":"Kaspersky Lab CFR link resolver","name":"Kaspersky","category":"Security Checker","url":"https://www.kaspersky.com/","producer":{"name":"AO Kaspersky Lab","url":"https://www.kaspersky.com/"}},{"regex":"eZ Publish Link Validator","name":"eZ Publish Link Validator","category":"Crawler","url":"https://ez.no/","producer":{"name":"eZ Systems AS","url":"https://ez.no/"}},{"regex":"woorankreview","name":"WooRank","category":"Search bot","url":"https://www.woorank.com/","producer":{"name":"WooRank sprl","url":"https://www.woorank.com/"}},{"regex":"(Match|LinkCheck) by Siteimprove.com","name":"Siteimprove","category":"Search bot","url":"https://siteimprove.com/","producer":{"name":"Siteimprove GmbH","url":"https://siteimprove.com/"}},{"regex":"CATExplorador","name":"CATExplorador","category":"Search bot","url":"https://fundacio.cat/ca/domini/","producer":{"name":"Fundaci\xf3 puntCAT","url":"https://fundacio.cat/ca/domini/"}},{"regex":"Buck","name":"Buck","category":"Search bot","url":"https://hypefactors.com/","producer":{"name":"Hypefactors A/S","url":"https://hypefactors.com/"}},{"regex":"tracemyfile","name":"TraceMyFile","category":"Search bot","url":"https://www.tracemyfile.com/","producer":{"name":"Idee Inc.","url":"http://ideeinc.com/"}},{"regex":"zelist.ro feed parser","name":"Ze List","url":"https://www.zelist.ro/","category":"Feed Fetcher","producer":{"name":"Treeworks SRL","url":"https://www.tree.ro/"}},{"regex":"weborama-fetcher","name":"Weborama","category":"Search bot","url":"https://weborama.com/","producer":{"name":"Weborama SA","url":"https://weborama.com/"}},{"regex":"BoardReader Favicon Fetcher","name":"BoardReader","category":"Search bot","url":"https://boardreader.com/","producer":{"name":"Effyis Inc","url":"https://boardreader.com/"}},{"regex":"IDG/IT","name":"IDG/IT","category":"Search bot","url":"https://spaziodati.eu/","producer":{"name":"SpazioDati S.r.l.","url":"https://spaziodati.eu/"}},{"regex":"Bytespider","name":"Bytespider","category":"Search bot","url":"https://bytedance.com/","producer":{"name":"ByteDance Ltd.","url":"https://bytedance.com/"}},{"regex":"WikiDo","name":"WikiDo","category":"Search bot","url":"https://www.wikido.com/","producer":{"name":"Fotolitografie Fiorentine di Becchi Antonio s.n.c.","url":"https://www.wikido.com/"}},{"regex":"AwarioSmartBot","name":"Awario","category":"Search bot","url":"https://awario.com/bots.html","producer":{"name":"Awario","url":"https://awario.com/"}},{"regex":"AwarioRssBot","name":"Awario","category":"Feed Fetcher","url":"https://awario.com/bots.html","producer":{"name":"Awario","url":"https://awario.com/"}},{"regex":"oBot","name":"oBot","category":"Search bot","url":"https://www.xforce-security.com/crawler/","producer":{"name":"IBM Germany Research & Development GmbH","url":"https://exchange.xforce.ibmcloud.com/"}},{"regex":"SMTBot","name":"SMTBot","category":"Search bot","url":"https://www.similartech.com/smtbot","producer":{"name":"SimilarTech Ltd.","url":"https://www.similartech.com/"}},{"regex":"LCC","name":"LCC","category":"Search bot","url":"https://corpora.uni-leipzig.de/crawler_faq.html","producer":{"name":"Universit\xe4t Leipzig","url":"https://www.uni-leipzig.de/"}},{"regex":"Startpagina-Linkchecker","name":"Startpagina Linkchecker","category":"Search bot","url":"https://www.startpagina.nl/linkchecker","producer":{"name":"Startpagina B.V.","url":"https://www.startpagina.nl/"}},{"regex":"GTmetrix","name":"GTmetrix","category":"Crawler","url":"https://gtmetrix.com/","producer":{"name":"Carbon60 Operating Co. Ltd.","url":"https://www.carbon60.com/"}},{"regex":"Nutch","name":"Nutch-based Bot","category":"Crawler","url":"https://nutch.apache.org","producer":{"name":"The Apache Software Foundation","url":"https://www.apache.org/foundation/"}},{"regex":"Seobility","name":"Seobility","category":"Crawler","url":"https://www.seobility.net/en/faq/?category=crawling#!aboutourbot"},{"regex":"Vercelbot","name":"Vercel Bot","category":"Service bot","url":"https://vercel.com"},{"regex":"Grammarly","name":"Grammarly","category":"Service bot","url":"https://www.grammarly.com"},{"regex":"Robozilla","name":"Robozilla","category":"Crawler"},{"regex":"Domains Project","name":"Domains Project","category":"Crawler","url":"https://domainsproject.org"},{"regex":"PetalBot","name":"Petal Bot","category":"Crawler","url":"https://aspiegel.com/petalbot"},{"regex":"SerendeputyBot","name":"Serendeputy Bot","category":"Crawler","url":"https://serendeputy.com/about/serendeputy-bot"},{"regex":"ias-va.*admantx.*service-fetcher","name":"ADmantX Service Fetcher","category":"Service bot","url":"https://www.admantx.com/service-fetcher.html"},{"regex":"SemanticScholarBot","name":"Semantic Scholar Bot","category":"Crawler","url":"https://www.semanticscholar.org/crawler"},{"regex":"VelenPublicWebCrawler","name":"Velen Public Web Crawler","category":"Crawler","url":"https://hunter.io/robot"},{"regex":"Barkrowler","name":"Barkrowler","category":"Crawler","url":"http://www.exensa.com/crawl"},{"regex":"BDCbot","name":"BDCbot","category":"Crawler","url":"https://bigweb.bigdatacorp.com.br/pages/faq.aspx","producer":{"name":"BIG Data Solucoes Em Tecnologia de Informatica LTDA","url":"https://bigdatacorp.com.br/"}},{"regex":"adbeat","name":"Adbeat","category":"Crawler","url":"https://www.adbeat.com/operation_policy","producer":{"name":"PPC Labs LLC","url":"https://www.adbeat.com/"}},{"regex":"BW/(?:(\\\\d+[\\\\.\\\\d]+))","name":"BuiltWith","category":"Crawler","url":"https://builtwith.com/biup","producer":{"name":"BuiltWith Pty Ltd","url":"https://builtwith.com/"}},{"regex":"https://whatis.contentkingapp.com","name":"ContentKing","category":"Site Monitor","url":"https://whatis.contentkingapp.com/","producer":{"name":"ContentKing BV","url":"https://www.contentkingapp.com/"}},{"regex":"MicroAdBot","name":"MicroAdBot","category":"Crawler","url":"https://www.microad.co.jp/","producer":{"name":"MicroAd, Inc.","url":"https://www.microad.co.jp/"}},{"regex":"PingAdmin.Ru","name":"PingAdmin.Ru","category":"Site Monitor","url":"https://ping-admin.ru/"},{"regex":"notifyninja.+monitoring","name":"Notify Ninja","category":"Site Monitor","url":"http://notifyninja.com"},{"regex":"WebDataStats","name":"WebDataStats","category":"Crawler","url":"https://webdatastats.com/policy.html","producer":{"name":"WebTehRazrabotka LLC","url":"https://webdatastats.com/"}},{"regex":"parse.ly scraper","name":"parse.ly","category":"Crawler","url":"https://www.parse.ly/help/integration/crawler","producer":{"name":"Parsely, Inc.","url":"https://www.parse.ly/"}},{"regex":"Nimbostratus-Bot","name":"Nimbostratus Bot","category":"Site Monitor","url":"http://cloudsystemnetworks.com"},{"regex":"HeartRails_Capture/\\\\d","name":"Heart Rails Capture","category":"Service Agent","url":"http://capture.heartrails.com"},{"regex":"Project-Resonance","name":"Project Resonance","category":"Crawler","url":"http://project-resonance.com"},{"regex":"DataXu/\\\\d","name":"DataXu","category":"Service Agent","url":"https://advertising.roku.com/dataxu","producer":{"name":"Roku, Inc.","url":"https://roku.com"}},{"regex":"Cocolyzebot","name":"Cocolyzebot","category":"Crawler","url":"https://cocolyze.com/en/cocolyzebot","producer":{"name":"VSI INNOVATION SAS","url":"https://vsi-innovation.com/"}},{"regex":"veryhip","name":"VeryHip","category":"Crawler","url":"https://veryhip.com/","producer":{"name":"VeryHip","url":"https://veryhip.com/"}},{"regex":"LinkpadBot","name":"LinkpadBot","category":"Crawler","url":"https://www.linkpad.org/","producer":{"name":"Solomono LLC","url":"https://www.linkpad.org/"}},{"regex":"MuscatFerret","name":"MuscatFerret","category":"Crawler","url":"http://www.webtop.com/"},{"regex":"PageThing.com","name":"PageThing","category":"Crawler","url":"https://www.pagething.com/","producer":{"name":"SPECIALNOISE LTD","url":"https://www.specialnoise.com/"}},{"regex":"ArchiveBox","name":"ArchiveBox","url":"https://archivebox.io/","category":"Crawler","producer":{"name":"","url":""}},{"regex":"Choosito","name":"Choosito","url":"https://www.choosito.com/","category":"Crawler","producer":{"name":"Choosito! Inc.","url":"https://www.choosito.com/"}},{"regex":"datagnionbot","name":"datagnionbot","url":"https://www.datagnion.com/bot.html","category":"Crawler","producer":{"name":"DATAGNION GMBH","url":"https://www.datagnion.com/"}},{"regex":"WhatCMS","name":"WhatCMS","url":"https://whatcms.org/","category":"Crawler","producer":{"name":"","url":""}},{"regex":"httpx","name":"httpx","url":"https://github.com/projectdiscovery/httpx","category":"Crawler","producer":{"name":"","url":""}},{"regex":"scaninfo@expanseinc.com","name":"Expanse","category":"Security Checker","url":"https://expanse.co/","producer":{"name":"Expanse Inc.","url":"https://expanse.co/"}},{"regex":"HuaweiWebCatBot","name":"HuaweiWebCatBot","category":"Crawler","url":"https://isecurity.huawei.com","producer":{"name":"Huawei Technologies Co., Ltd.","url":"https://huawei.com"}},{"regex":"Hatena-Favicon","name":"Hatena Favicon","category":"Crawler","url":"https://www.hatena.ne.jp/faq/","producer":{"name":"Hatena Co., Ltd.","url":"https://www.hatena.ne.jp"}},{"regex":"RyowlEngine/(\\\\d+)","name":"Ryowl","category":"Crawler","url":"https://ryowl.org"},{"regex":"OdklBot/(\\\\d+)","name":"Odnoklassniki Bot","category":"Crawler","url":"https://odnoklassniki.ru"},{"regex":"Mediatoolkitbot","name":"Mediatoolkit Bot","category":"Crawler","url":"https://mediatoolkit.com"},{"regex":"ZoominfoBot","name":"ZoominfoBot","category":"Crawler","url":"https://www.zoominfo.com"},{"regex":"WeViKaBot/([\\\\d+\\\\.])","name":"WeViKaBot","category":"Crawler","url":"http://www.wevika.de"},{"regex":"SEOkicks","name":"SEOkicks","category":"Crawler","url":"https://www.seokicks.de/robot.html"},{"regex":"Plukkie/([\\\\d+\\\\.])","name":"Plukkie","category":"Crawler","url":"http://www.botje.com/plukkie.htm"},{"regex":"proximic;","name":"Comscore","category":"Crawler","url":"https://www.comscore.com/Web-Crawler"},{"regex":"SurdotlyBot/([\\\\d+\\\\.])","name":"SurdotlyBot","category":"Crawler","url":"http://sur.ly/bot.html"},{"regex":"Gowikibot/([\\\\d+\\\\.])","name":"Gowikibot","category":"Crawler","url":"http:/www.gowikibot.com"},{"regex":"SabsimBot/([\\\\d+\\\\.])","name":"SabsimBot","category":"Crawler","url":"https://sabsim.com"},{"regex":"LumtelBot/([\\\\d+\\\\.])","name":"LumtelBot","category":"Crawler","url":"https://umtel.com"},{"regex":"PiplBot","name":"PiplBot","category":"Crawler","url":"http://www.pipl.com/bot"},{"regex":"woobot/([\\\\d+\\\\.])","name":"WooRank","category":"Crawler","url":"https://www.woorank.com/bot"},{"regex":"[a-z0-9\\\\-_]*((?<!cu|power[ _]|m[ _])bot(?![ _]TAB|[ _]?5[0-9])|crawler|crawl|checker|archiver|transcoder|spider)([^a-z]|$)","name":"Generic Bot"}]');

},{}],"glMh9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.versionCompare = (v1, v2, operator)=>{
    //      discuss at: http://locutus.io/php/version_compare/
    //      original by: Philippe Jausions (http://pear.php.net/user/jausions)
    //      original by: Aidan Lister (http://aidanlister.com/)
    //      reimplemented by: Kankrelune (http://www.webfaktory.info/)
    //      improved by: Brett Zamir (http://brett-zamir.me)
    //      improved by: Scott Baker
    //      improved by: Theriault (https://github.com/Theriault)
    //      example 1: version_compare('8.2.5rc', '8.2.5a')
    //      returns 1: 1
    //      example 2: version_compare('8.2.50', '8.2.52', '<')
    //      returns 2: true
    //      example 3: version_compare('5.3.0-dev', '5.3.0')
    //      returns 3: -1
    //      example 4: version_compare('4.1.0.52','4.01.0.51')
    //      returns 4: 1
    // Important: compare must be initialized at 0.
    let i;
    let x;
    let compare = 0;
    // vm maps textual PHP versions to negatives so they're less than 0.
    // PHP currently defines these as CASE-SENSITIVE. It is important to
    // leave these as negatives so that they can come before numerical versions
    // and as if no letters were there to begin with.
    // (1alpha is < 1 and < 1.1 but > 1dev1)
    // If a non-numerical value can't be mapped to this table, it receives
    // -7 as its value.
    const vm = {
        "dev": -6,
        "alpha": -5,
        "a": -5,
        "beta": -4,
        "b": -4,
        "RC": -3,
        "rc": -3,
        "#": -2,
        "p": 1,
        "pl": 1
    };
    // This function will be called to prepare each version argument.
    // It replaces every _, -, and + with a dot.
    // It surrounds any nonsequence of numbers/dots with dots.
    // It replaces sequences of dots with a single dot.
    //    version_compare('4..0', '4.0') === 0
    // Important: A string of 0 length needs to be converted into a value
    // even less than an unexisting value in vm (-7), hence [-8].
    // It's also important to not strip spaces because of this.
    //   version_compare('', ' ') === 1
    const prepVersion = (v)=>{
        v = ("" + v).replace(/[_\-+]/g, ".");
        v = v.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, ".");
        return !v.length ? [
            -8
        ] : v.split(".");
    };
    // This converts a version component to a number.
    // Empty component becomes 0.
    // Non-numerical component becomes a negative number.
    // Numerical component becomes itself as an integer.
    const numVersion = (v)=>{
        return !v ? 0 : isNaN(v) ? vm[v] || -7 : parseInt(v, 10);
    };
    v1 = prepVersion(v1);
    v2 = prepVersion(v2);
    x = Math.max(v1.length, v2.length);
    for(i = 0; i < x; i++){
        if (v1[i] === v2[i]) continue;
        v1[i] = numVersion(v1[i]);
        v2[i] = numVersion(v2[i]);
        if (v1[i] < v2[i]) {
            compare = -1;
            break;
        } else if (v1[i] > v2[i]) {
            compare = 1;
            break;
        }
    }
    if (!operator) return compare;
    // Important: operator is CASE-SENSITIVE.
    // "No operator" seems to be treated as "<."
    // Any other values seem to make the function return null.
    switch(operator){
        case ">":
        case "gt":
            return compare > 0;
        case ">=":
        case "ge":
            return compare >= 0;
        case "<=":
        case "le":
            return compare <= 0;
        case "===":
        case "=":
        case "eq":
            return compare === 0;
        case "<>":
        case "!==":
        case "ne":
            return compare !== 0;
        case "":
        case "<":
        case "lt":
            return compare < 0;
        default:
            return null;
    }
};

},{}],"iCHnM":[function(require,module,exports) {
var _refs = require("./refs");
const { body  } = (0, _refs.refs);
window.addEventListener("load", ()=>{
    body.classList.remove("preload");
});

},{"./refs":"2WoF2"}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map