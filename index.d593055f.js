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
})({"hr1nT":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7fb99ceed593055f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4NwX8":[function(require,module,exports) {
var _lib = require("./lib");
var _sim = require("./sim");
for(const key in _lib)if (_lib.hasOwnProperty(key)) window[key] = _lib[key];
for(const key in _sim)if (_sim.hasOwnProperty(key)) window[key] = _sim[key];

},{"./lib":"khj5u","./sim":"aMbHx"}],"khj5u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Item", ()=>Item);
parcelHelpers.export(exports, "ItemState", ()=>ItemState);
parcelHelpers.export(exports, "ItemConditionTypes", ()=>ItemConditionTypes);
parcelHelpers.export(exports, "ItemCondition", ()=>ItemCondition);
parcelHelpers.export(exports, "ItemConditions", ()=>ItemConditions);
parcelHelpers.export(exports, "Recipe", ()=>Recipe);
parcelHelpers.export(exports, "REGISTRY", ()=>REGISTRY);
parcelHelpers.export(exports, "refreshRegistry", ()=>refreshRegistry);
var _itemsJson = require("./items.json");
var _itemsJsonDefault = parcelHelpers.interopDefault(_itemsJson);
var _recipesJson = require("./recipes.json");
var _recipesJsonDefault = parcelHelpers.interopDefault(_recipesJson);
class Item {
    static #_ = this.DEFAULT_ITEM = new Item(0, "", [], [
        {
            character: 0,
            color: 0
        }
    ]);
    constructor(id, name, tags, display, properties = {}){
        this.properties = {};
        this.id = id;
        this.name = name;
        this.tags = tags;
        this.display = display;
        this.properties = properties;
    }
    get usedIn() {
        return (REGISTRY && REGISTRY.uses.get(this.id)?.map((id)=>REGISTRY.getRecipe(id)) || []).filter((recipe, i, a)=>a.indexOf(recipe) === i);
    }
    get resultedBy() {
        return (REGISTRY && REGISTRY.results.get(this.id)?.map((id)=>REGISTRY.getRecipe(id)) || []).filter((recipe, i, a)=>a.indexOf(recipe) === i);
    }
    get active() {
        return this.usedIn.some((recipe)=>recipe.time);
    }
    get root() {
        return this.tags.includes("root") || this.tags.includes("natural") || this.resultedBy.length === 0;
    }
    depth() {
        return REGISTRY.depths.get(this.id) || 0;
    }
    resources() {
        return [];
    }
    required(has = [], seen = new Set()) {
        if (has.includes(this.id) || seen.has(this.id)) return 0;
        seen.add(this.id);
        if (this.root) return 1;
        return this.resultedBy.reduce((acc, recipe)=>acc + recipe.used().reduce((acc, item)=>acc + REGISTRY.getItem(item).required(has, seen), 0), 0);
    }
    // recursive
    isNeededToMake(item) {
        if (this.id === item.id) return true;
        if (this.root) return false;
        return this.resultedBy.some((recipe)=>REGISTRY.getItem(recipe.getAnOrigin()).isNeededToMake(item) || recipe.actor && REGISTRY.getItem(recipe.getAnActor()).isNeededToMake(item));
    }
}
class ItemState {
    constructor(id){
        this.value = 0;
        this.time = 0;
        this.id = id;
    }
    get item() {
        return REGISTRY.getItem(this.id);
    }
    clone() {
        let clone = new ItemState(this.id);
        clone.value = this.value;
        clone.time = this.time;
        return clone;
    }
}
var ItemConditionTypes;
(function(ItemConditionTypes) {
    ItemConditionTypes["None"] = "";
    ItemConditionTypes["All"] = "All";
    ItemConditionTypes["Is"] = "Is";
    ItemConditionTypes["IsNot"] = "IsNot";
    ItemConditionTypes["WithTag"] = "WithTag";
    ItemConditionTypes["WithoutTag"] = "WithoutTag";
    ItemConditionTypes["PropertyIs"] = "PropertyIs";
    ItemConditionTypes["PropertyIsNot"] = "PropertyIsNot";
})(ItemConditionTypes || (ItemConditionTypes = {}));
function cmp(inp, op, ref) {
    switch(op){
        case "=":
            return inp === ref;
        case ">":
            return inp > ref;
        case "<":
            return inp < ref;
        case ">=":
            return inp >= ref;
        case "<=":
            return inp <= ref;
        default:
            return false;
    }
}
class ItemCondition {
    static matches(item, condition) {
        switch(condition.type){
            case "All":
                return true;
            case "Is":
                return item.id === condition.data;
            case "IsNot":
                return item.id !== condition.data;
            case "WithTag":
                return item.tags.indexOf(condition.data) > -1;
            case "WithoutTag":
                return item.tags.indexOf(condition.data) === -1;
            case "PropertyIs":
                return cmp(item.properties[condition.data.property], condition.data.op, condition.data.ref);
            case "PropertyIsNot":
                return !cmp(item.properties[condition.data.property], condition.data.op, condition.data.ref);
            default:
                return false;
        }
    }
}
class ItemConditions {
    static matches(condition, item) {
        return condition.conditions.every((c)=>ItemCondition.matches(item, c));
    }
}
var RecipeResultType;
(function(RecipeResultType) {
    RecipeResultType["None"] = "";
    RecipeResultType["SameItem"] = "SameItem";
    RecipeResultType["NewItem"] = "NewItem";
})(RecipeResultType || (RecipeResultType = {}));
class Recipe {
    constructor(id, origin, results, options){
        this.results = [];
        this.id = id;
        this.origin = origin;
        this.results = results;
        this.originValue = options.originValue;
        this.time = options.time;
        this.actor = options.actor;
    }
    willOccur(origin, actor, now) {
        return ItemConditions.matches(this.origin, origin.item) && (!this.originValue || cmp(origin.value, this.originValue.op, this.originValue.ref)) && (!this.time || now - origin.time >= this.time) && (!this.actor || actor && ItemConditions.matches(this.actor, actor.item) && (!this.actorValue || cmp(actor.value, this.actorValue.op, this.actorValue.ref)));
    }
    static getRandomResult(results, random) {
        if (results.length === 0) return {
            origin: {
                type: "",
                data: null
            }
        };
        if (results.length === 1) return results[0];
        let total = 0;
        for(let i = 0; i < results.length; i++)total += results[i].chance || 1;
        let r = 0;
        for(let i = 0; i < results.length; i++){
            r += (results[i].chance || 1) / total;
            if (r >= random) return results[i];
        }
        return results[0];
    }
    origins() {
        return REGISTRY && REGISTRY.query(this.origin) || [];
    }
    actors() {
        return REGISTRY && REGISTRY.query(this.actor || {
            conditions: [
                {
                    type: "",
                    data: null
                }
            ]
        }) || [];
    }
    used() {
        return [
            ...this.origins(),
            ...this.actors()
        ];
    }
    simpleUsed() {
        return [
            ...this.getAnOrigin() === 0 ? [] : [
                this.getAnOrigin()
            ],
            ...this.getAnActor() === 0 ? [] : [
                this.getAnActor()
            ]
        ];
    }
    resulted() {
        const resulted = [];
        for (const result of this.results){
            if (result.origin.type === "NewItem") resulted.push(result.origin.data);
            else if (result.origin.type === "SameItem") resulted.push(...this.origins());
            if (result.actor) {
                if (result.actor.type === "NewItem") resulted.push(result.actor.data);
                else if (result.actor.type === "SameItem") resulted.push(...this.actors());
            }
        }
        // remove duplicates
        return resulted.filter((v, i, a)=>a.indexOf(v) === i);
    }
    notableResulted() {
        const resulted = [];
        for (const result of this.results){
            if (result.origin.type === "NewItem") resulted.push(result.origin.data);
            if (result.actor) {
                if (result.actor.type === "NewItem") resulted.push(result.actor.data);
            }
        }
        // remove duplicates
        return resulted.filter((v, i, a)=>a.indexOf(v) === i);
    }
    getAnOrigin() {
        return this.origins()[0] || 0;
    }
    getAnActor() {
        return this.actor ? this.actors()[0] || 0 : 0;
    }
    static getResult(item, result) {
        let newItem = null;
        switch(result.type){
            case "SameItem":
                newItem = item.clone();
                if (result.data) switch(result.data.op){
                    case "=":
                        newItem.value = result.data.ref;
                        break;
                    case "+":
                        newItem.value += result.data.ref;
                        break;
                    case "-":
                        newItem.value -= result.data.ref;
                        break;
                }
                break;
            case "NewItem":
                newItem = new ItemState(result.data);
                break;
        }
        return newItem;
    }
    static getOptionalResult(item, result) {
        let newItem = null;
        switch(result.type){
            case "SameItem":
                if (!item) return null;
                console.log(item);
                newItem = item.clone();
                if (result.data) switch(result.data.op){
                    case "=":
                        newItem.value = result.data.ref;
                        break;
                    case "+":
                        newItem.value += result.data.ref;
                        break;
                    case "-":
                        newItem.value -= result.data.ref;
                        break;
                }
                break;
            case "NewItem":
                newItem = new ItemState(result.data);
                break;
        }
        return newItem;
    }
    getResults(origin, actor, random) {
        if (this.results.length === 0) return [
            null,
            null
        ];
        const result = !random ? this.results[0] : Recipe.getRandomResult(this.results, random);
        let originResult = Recipe.getResult(origin, result.origin);
        let actorResult = result.actor ? Recipe.getOptionalResult(actor, result.actor) : null;
        return [
            originResult,
            actorResult
        ];
    }
}
class Registry {
    constructor(){
        this.items = [];
        this.depths = new Map();
        this.recipes = [];
        this.uses = new Map();
        this.results = new Map();
        this.items = [];
        this.recipes = [];
    }
    setItems(itemsData) {
        itemsData = [
            Item.DEFAULT_ITEM,
            ...itemsData
        ];
        itemsData.forEach((itemData)=>{
            const id = this.items.length;
            this.items.push(new Item(id, itemData.name, itemData.tags, itemData.display, itemData.properties));
        });
    }
    setRecipes(recipesData) {
        recipesData.forEach((recipeData)=>{
            const id = this.recipes.length;
            this.recipes.push(new Recipe(id, recipeData.origin, recipeData.results, recipeData));
        });
    }
    refresh() {
        this.recipes.forEach((_, i)=>{
            this.recipes[i].used().forEach((id)=>{
                if (!this.uses.has(id)) this.uses.set(id, []);
                this.uses.get(id)?.push(i);
            });
            this.recipes[i].notableResulted().forEach((id)=>{
                if (!this.results.has(id)) this.results.set(id, []);
                this.results.get(id)?.push(i);
            });
        });
        for (const item of this.items)if (item.root) this.depths.set(item.id, 0);
        let changed = true;
        while(changed){
            changed = false;
            for (const item of this.items){
                if (item.root || this.depths.has(item.id)) continue;
                const recipes = item.resultedBy.filter((recipe)=>recipe.used().every((result)=>this.depths.has(result)));
                if (recipes.length === 0) continue;
                const depth = Math.max(...recipes.map((recipe)=>Math.max(...recipe.used().map((result)=>this.depths.get(result) || 0)))) + 1;
                this.depths.set(item.id, depth);
                changed = true;
            }
        }
    }
    query(condition) {
        let results = [];
        this.items.forEach((item)=>{
            if (ItemConditions.matches(condition, item)) results.push(item.id);
        });
        return results;
    }
    itemsData() {
        return JSON.stringify(this.items.map((item)=>({
                ...item,
                id: undefined
            })));
    }
    recipesData() {
        return JSON.stringify(this.recipes.map((recipe)=>({
                ...recipe,
                id: undefined
            })));
    }
    get itemCount() {
        return this.items.length;
    }
    getItem(id) {
        return this.items[id] || Item.DEFAULT_ITEM;
    }
    getRecipe(id) {
        return this.recipes[id];
    }
}
const REGISTRY = new Registry();
REGISTRY.setItems((0, _itemsJsonDefault.default));
REGISTRY.setRecipes((0, _recipesJsonDefault.default));
REGISTRY.refresh();
const refreshRegistry = ()=>{
    REGISTRY.setItems(JSON.parse(REGISTRY.itemsData()));
    REGISTRY.setRecipes(JSON.parse(REGISTRY.recipesData()));
    REGISTRY.refresh();
};

},{"./items.json":"enBGR","./recipes.json":"hR6B2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enBGR":[function(require,module,exports) {
module.exports = JSON.parse('[{"properties":{},"name":"Water","tags":["natural","blocking","static"],"display":[{"character":247,"color":41}]},{"properties":{},"name":"Ice","tags":["natural","blocking","static"],"display":[{"character":178,"color":43}]},{"properties":{},"name":"Red Cedar Tree","tags":["natural","blocking","static"],"display":[{"character":5,"color":26}]},{"properties":{"weight":10},"name":"Douglas Fir Tree","tags":["natural","blocking","static"],"display":[{"character":6,"color":37}]},{"properties":{"weight":10},"name":"Mountain Maple Tree","tags":["natural","blocking","static"],"display":[{"character":5,"color":35}]},{"properties":{},"name":"Western Juniper Tree","tags":["natural","blocking","static"],"display":[{"character":20,"color":29}]},{"properties":{},"name":"Large Boulder","tags":["natural","blocking","static"],"display":[{"character":30,"color":5}]},{"properties":{},"name":"Willow Tree","tags":["natural","blocking","static"],"display":[{"character":158,"color":34}]},{"properties":{"weight":5},"name":"Flint Deposit","tags":["natural","blocking","static"],"display":[{"character":111,"color":9}]},{"properties":{"weight":20},"name":"Fertile Soil","tags":["natural","static"],"display":[{"character":30,"color":20}]},{"properties":{"weight":10},"name":"Clay Deposit","tags":["natural","static"],"display":[{"character":30,"color":27}]},{"properties":{},"name":"Snow Bank","tags":["natural","blocking","static"],"display":[{"character":30,"color":8}]},{"properties":{"weight":10},"name":"Stone","tags":["natural"],"display":[{"character":7,"color":5}]},{"properties":{},"name":"Flint Deposit with Chip","tags":["static"],"display":[{"character":149,"color":9}]},{"properties":{"damage":1},"name":"Flint Chip","tags":["weapon","tool","knifelike","important"],"display":[{"character":47,"color":9}]},{"properties":{},"name":"Large Branch","tags":[],"display":[{"character":244,"color":20}]},{"properties":{},"name":"Shaft","tags":[],"display":[{"character":179,"color":20}]},{"properties":{},"name":"Stick","tags":[],"display":[{"character":45,"color":20}]},{"properties":{"weight":50},"name":"Ryegrass","tags":["natural","static"],"display":[{"character":35,"color":32}]},{"properties":{"weight":20},"name":"Cat Tail","tags":["natural","foodSource","static"],"display":[{"character":244,"color":34}]},{"properties":{},"name":"Cat Tail Stalk","tags":[],"display":[{"character":47,"color":34}]},{"properties":{"food":10},"name":"Cat Tail Head","tags":["edible"],"display":[{"character":45,"color":27}]},{"properties":{},"name":"Cordage Rope","tags":[],"display":[{"character":21,"color":24}]},{"properties":{},"name":"Cordage Thread","tags":[],"display":[{"character":21,"color":22}]},{"properties":{},"name":"Tied Stick","tags":[],"display":[{"character":45,"color":20},{"character":21,"color":24}]},{"properties":{"weight":5},"name":"Flat Rock","tags":["natural"],"display":[{"character":95,"color":7}]},{"properties":{"weight":5},"name":"Full Blackberry Bush","tags":["natural","foodSource","static"],"display":[{"character":42,"color":49}]},{"properties":{"food":5},"name":"Blackberry","tags":["edible"],"display":[{"character":249,"color":49}]},{"properties":{},"name":"Blackberry Bush with 5 Berries","tags":["foodSource","static"],"display":[{"character":42,"color":49},{"character":53,"color":49}]},{"properties":{},"name":"Blackberry Bush with 4 Berries","tags":["foodSource","static"],"display":[{"character":42,"color":49},{"character":52,"color":49}]},{"properties":{},"name":"Blackberry Bush with 3 Berries","tags":["foodSource","static"],"display":[{"character":42,"color":49},{"character":51,"color":49}]},{"properties":{},"name":"Blackberry Bush with 2 Berries","tags":["foodSource","static"],"display":[{"character":42,"color":49},{"character":50,"color":49}]},{"properties":{},"name":"Blackberry Bush with 1 Berry","tags":["foodSource","static"],"display":[{"character":42,"color":49},{"character":49,"color":49}]},{"properties":{},"name":"Empty Blackberry Bush","tags":["static"],"display":[{"character":42,"color":53}]},{"properties":{"damage":3},"name":"Flint Hatchet","tags":["weapon","tool","hatchetlike","important"],"display":[{"character":173,"color":9}]},{"properties":{"weight":10},"name":"Stinging Nettle","tags":["natural"],"display":[{"character":235,"color":34}]},{"properties":{},"name":"Blackberry Seed","tags":["seed"],"display":[{"character":249,"color":53}]},{"properties":{},"name":"Fertile Plot","tags":["static"],"display":[{"character":240,"color":20}]},{"properties":{},"name":"Seeded Blackberry Bush","tags":["static"],"display":[{"character":240,"color":20},{"character":249,"color":53}]},{"properties":{},"name":"Watered Blackberry Bush","tags":["static"],"display":[{"character":240,"color":20},{"character":236,"color":55}]},{"properties":{"food":10},"name":"Wild Potato","tags":["edible","natural"],"display":[{"character":7,"color":21}]},{"properties":{"food":10},"name":"Wild Carrot","tags":["edible","natural"],"display":[{"character":25,"color":29}]},{"properties":{"food":10},"name":"Wild Onion","tags":["edible","natural"],"display":[{"character":162,"color":33}]},{"properties":{},"name":"Fertile Soil Clump","tags":[],"display":[{"character":7,"color":20}]},{"properties":{},"name":"Clay Ball","tags":[],"display":[{"character":7,"color":27}]},{"properties":{"food":15},"name":"Chanterelle","tags":["edible","natural"],"display":[{"character":24,"color":32}]},{"properties":{"weight":5},"name":"Full Rose Hip Bush","tags":["foodSource","static","natural"],"display":[{"character":128,"color":60}]},{"properties":{"food":5},"name":"Rose Hip","tags":["edible"],"display":[{"character":46,"color":60}]},{"properties":{},"name":"Rose Hip Bush with 2 Hips","tags":["foodSource","static"],"display":[{"character":128,"color":60},{"character":50,"color":60}]},{"properties":{},"name":"Rose Hip Bush with 1 Hip","tags":["foodSource","static"],"display":[{"character":128,"color":60},{"character":49,"color":60}]},{"properties":{},"name":"Empty Rose Hip Bush","tags":[],"display":[{"character":128,"color":62}]},{"properties":{},"name":"Kindling","tags":[],"display":[{"character":37,"color":20}]},{"properties":{},"name":"Curved Branch","tags":[],"display":[{"character":40,"color":20}]},{"properties":{},"name":"Split Shaft","tags":[],"display":[{"character":179,"color":21}]},{"properties":{},"name":"Split Shaft with Notch","tags":[],"display":[{"character":124,"color":21}]},{"properties":{},"name":"Fire Starting Kit","tags":["important"],"display":[{"character":29,"color":21}]},{"properties":{"heat":20},"name":"Fire","tags":["static","heatSource","important"],"display":[{"character":127,"color":0},{"character":127,"color":28},{"character":127,"color":0},{"character":127,"color":31}]},{"properties":{"heat":12},"name":"Fire Embers","tags":["static","heatSource"],"display":[{"character":15,"color":0},{"character":15,"color":0},{"character":15,"color":28},{"character":15,"color":28}]},{"properties":{"heat":4},"name":"Ignited Kit","tags":["static","heatSource"],"display":[{"character":42,"color":0},{"character":42,"color":28}]},{"properties":{},"name":"Charcoal","tags":["static"],"display":[{"character":236,"color":5}]},{"properties":{},"name":"Bow","tags":["tool","important"],"display":[{"character":123,"color":20}]},{"properties":{},"name":"Bow Drill","tags":["important"],"display":[{"character":123,"color":20},{"character":45,"color":20}]},{"properties":{},"name":"Curved Shaft","tags":[],"display":[{"character":60,"color":20}]},{"properties":{"food":10},"name":"Tinder","tags":[],"display":[{"character":42,"color":27}]},{"properties":{},"name":"Red Cedar Tree with Tinder","tags":["static"],"display":[{"character":5,"color":26},{"character":42,"color":27}]},{"properties":{},"name":"Clay Deposit with 3 Balls","tags":["static"],"display":[{"character":30,"color":27},{"character":51,"color":27}]},{"properties":{},"name":"Clay Deposit with 2 Balls","tags":["static"],"display":[{"character":30,"color":27},{"character":50,"color":27}]},{"properties":{},"name":"Clay Deposit with 1 Ball","tags":["static"],"display":[{"character":30,"color":27},{"character":49,"color":27}]},{"properties":{},"name":"Rye Grain","tags":[],"display":[{"character":37,"color":32}]},{"properties":{},"name":"Straw","tags":[],"display":[{"character":186,"color":32}]},{"properties":{"size":3},"name":"Straw Basket","tags":["container","important"],"display":[{"character":118,"color":32}]},{"properties":{},"name":"Wet Clay Bowl","tags":[],"display":[{"character":118,"color":27}]},{"properties":{},"name":"Clay Bowl","tags":[],"display":[{"character":118,"color":22}]},{"properties":{},"name":"Clay Bowl with Water","tags":[],"display":[{"character":118,"color":22},{"character":4,"color":41}]},{"properties":{},"name":"Harvested Mountain Maple Tree","tags":["static"],"display":[{"character":5,"color":35},{"character":0,"color":1}]},{"properties":{},"name":"Harvested Douglas Fir Tree","tags":["static"],"display":[{"character":6,"color":37},{"character":0,"color":1}]},{"properties":{"food":15},"name":"Roasted Potato","tags":["edible"],"display":[{"character":7,"color":17}]},{"properties":{"food":15},"name":"Roasted Carrot","tags":["edible"],"display":[{"character":25,"color":17}]},{"properties":{"food":15},"name":"Roasted Onion","tags":["edible"],"display":[{"character":162,"color":17}]},{"properties":{"food":10},"name":"Roasted Stinging Nettle","tags":["edible"],"display":[{"character":235,"color":17}]},{"properties":{},"name":"Bowl of Uncooked Rose Hip Tea","tags":[],"display":[{"character":118,"color":22},{"character":4,"color":63}]},{"properties":{"food":15,"heal":20,"cure":1,"leftovers":73},"name":"Full Bowl of Rose Hip Tea","tags":["edible","healing"],"display":[{"character":118,"color":22},{"character":4,"color":0}]},{"properties":{},"name":"Bowl with Rye Dough","tags":[],"display":[{"character":118,"color":22},{"character":9,"color":32}]},{"properties":{},"name":"Bowl of Uncooked Stinging Nettle Tea","tags":[],"display":[{"character":118,"color":22},{"character":4,"color":37}]},{"properties":{"food":25,"heal":10,"cure":1,"leftovers":73},"name":"Bowl of Stinging Nettle Tea","tags":["edible","healing"],"display":[{"character":118,"color":22},{"character":4,"color":34}]},{"properties":{},"name":"Grave","tags":["static"],"display":[{"character":157,"color":7}]},{"properties":{},"name":"Harvested Willow Tree","tags":["static"],"display":[{"character":158,"color":34},{"character":0,"color":1}]},{"properties":{"food":5,"heal":5},"name":"Willow Bark","tags":["edible","healing"],"display":[{"character":126,"color":34}]},{"properties":{},"name":"Rye Flour","tags":[],"display":[{"character":174,"color":32}]},{"properties":{},"name":"Adobe","tags":[],"display":[{"character":81,"color":25}]},{"properties":{},"name":"Adobe Oven","tags":["important","static"],"display":[{"character":117,"color":25}]},{"properties":{},"name":"Adobe Forge","tags":["important","static"],"display":[{"character":234,"color":25}]},{"properties":{},"name":"Rye Dough","tags":[],"display":[{"character":9,"color":32}]},{"properties":{},"name":"Rye Dough on Flat Rock","tags":[],"display":[{"character":95,"color":7},{"character":9,"color":32}]},{"properties":{},"name":"Rye Bread on Flat Rock","tags":["static"],"display":[{"character":95,"color":7},{"character":233,"color":32}]},{"properties":{"food":30},"name":"Rye Bread","tags":["edible","delicious"],"display":[{"character":233,"color":32}]},{"properties":{},"name":"Iron Vein","tags":["natural","static"],"display":[{"character":94,"color":28}]},{"properties":{"weight":10},"name":"Raw Iron Ore","tags":["natural"],"display":[{"character":22,"color":28}]},{"properties":{},"name":"Wet Clay Plate","tags":[],"display":[{"character":95,"color":27}]},{"properties":{},"name":"Clay Plate","tags":[],"display":[{"character":95,"color":22}]},{"properties":{"heat":8},"name":"Lit Torch","tags":["heatSource"],"display":[{"character":26,"color":0},{"character":26,"color":31}]},{"properties":{},"name":"Charcoal Piece","tags":[],"display":[{"character":96,"color":5}]},{"properties":{"heat":12},"name":"Lit Oven","tags":["heatSource","static"],"display":[{"character":117,"color":0},{"character":117,"color":31}]},{"properties":{"heat":16},"name":"Lit Forge","tags":["heatSource","static"],"display":[{"character":234,"color":0},{"character":234,"color":31}]},{"properties":{},"name":"Bowl with Iron Ore","tags":[],"display":[{"character":118,"color":22},{"character":22,"color":28}]},{"properties":{},"name":"Bowl with Charcoal","tags":[],"display":[{"character":118,"color":22},{"character":96,"color":5}]},{"properties":{},"name":"Bowl with Steel Prerequisites","tags":[],"display":[{"character":118,"color":22},{"character":22,"color":28},{"character":96,"color":5}]},{"properties":{"heat":16},"name":"Forge with Warming Iron Ore","tags":["static","heatSource"],"display":[{"character":234,"color":0},{"character":22,"color":28},{"character":234,"color":31},{"character":22,"color":28}]},{"properties":{"heat":16},"name":"Forge with Hot Iron Ore","tags":["static","heatSource"],"display":[{"character":234,"color":0},{"character":22,"color":31},{"character":234,"color":31},{"character":22,"color":0}]},{"properties":{},"name":"Wooden Tongs","tags":[],"display":[{"character":120,"color":20}]},{"properties":{},"name":"Wooden Tongs with Hot Iron","tags":[],"display":[{"character":120,"color":20},{"character":22,"color":0},{"character":120,"color":20},{"character":22,"color":31}]},{"properties":{},"name":"Flat Rock with Hot Iron","tags":["static"],"display":[{"character":95,"color":7},{"character":22,"color":0},{"character":95,"color":7},{"character":22,"color":31}]},{"properties":{},"name":"Flat Rock with Hot Iron Ingot","tags":["static"],"display":[{"character":95,"color":7},{"character":169,"color":0}]},{"properties":{},"name":"Flat Rock with Iron Ore","tags":["static"],"display":[{"character":95,"color":7},{"character":22,"color":28}]},{"properties":{},"name":"Flat Rock with Iron Ingot","tags":["static"],"display":[{"character":95,"color":7},{"character":169,"color":28}]},{"properties":{},"name":"Iron Ingot","tags":["resource","important"],"display":[{"character":169,"color":28}]},{"properties":{},"name":"Smithing Hammer","tags":["tool","important"],"display":[{"character":231,"color":28}]},{"properties":{},"name":"Unforged Steel Crucible","tags":[],"display":[{"character":110,"color":22},{"character":22,"color":28},{"character":96,"color":5}]},{"properties":{"heat":16},"name":"Forge with Warming Steel Crucible","tags":["static","heatSource"],"display":[{"character":234,"color":0},{"character":110,"color":28},{"character":234,"color":31},{"character":110,"color":28}]},{"properties":{"heat":16},"name":"Forge with Hot Steel Crucible","tags":["static","heatSource"],"display":[{"character":234,"color":0},{"character":110,"color":31},{"character":234,"color":31},{"character":110,"color":0}]},{"properties":{},"name":"Wooden Tongs with Hot Steel Crucible","tags":[],"display":[{"character":120,"color":20},{"character":110,"color":0},{"character":120,"color":20},{"character":110,"color":31}]},{"properties":{},"name":"Flat Rock with Hot Steel Crucible","tags":["static"],"display":[{"character":95,"color":7},{"character":110,"color":0}]},{"properties":{},"name":"Flat Rock with Steel Crucible","tags":["static"],"display":[{"character":95,"color":7},{"character":110,"color":22}]},{"properties":{},"name":"Forged Steel Crucible","tags":["static"],"display":[{"character":110,"color":22}]},{"properties":{},"name":"Bowl with Steel Ingot","tags":["static"],"display":[{"character":118,"color":22},{"character":254,"color":7}]},{"properties":{"food":20000},"name":"Steel Ingot","tags":["edible"],"display":[{"character":254,"color":7}]}]');

},{}],"hR6B2":[function(require,module,exports) {
module.exports = JSON.parse('[{"results":[{"origin":{"type":"NewItem","data":29},"actor":{"type":"NewItem","data":28}}],"origin":{"conditions":[{"type":"Is","data":27}]}},{"results":[{"origin":{"type":"NewItem","data":30},"actor":{"type":"NewItem","data":28}}],"origin":{"conditions":[{"type":"Is","data":29}]}},{"results":[{"origin":{"type":"NewItem","data":31},"actor":{"type":"NewItem","data":28}}],"origin":{"conditions":[{"type":"Is","data":30}]}},{"results":[{"origin":{"type":"NewItem","data":32},"actor":{"type":"NewItem","data":28}}],"origin":{"conditions":[{"type":"Is","data":31}]}},{"results":[{"origin":{"type":"NewItem","data":33},"actor":{"type":"NewItem","data":28}}],"origin":{"conditions":[{"type":"Is","data":32}]}},{"results":[{"origin":{"type":"NewItem","data":34},"actor":{"type":"NewItem","data":28}}],"origin":{"conditions":[{"type":"Is","data":33}]}},{"results":[{"origin":{"type":"NewItem","data":25},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":18}]},"actor":{"conditions":[{"type":"Is","data":23}]}},{"results":[{"origin":{"type":"NewItem","data":23},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":21}]},"actor":{"conditions":[{"type":"Is","data":21}]}},{"results":[{"origin":{"type":"NewItem","data":23},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":36}]},"actor":{"conditions":[{"type":"Is","data":36}]}},{"results":[{"origin":{"type":"NewItem","data":21},"actor":{"type":"NewItem","data":22}}],"origin":{"conditions":[{"type":"Is","data":20}]}},{"results":[{"origin":{"type":"NewItem","data":14},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":9}]},"actor":{"conditions":[{"type":"Is","data":13}]}},{"results":[{"origin":{"type":"NewItem","data":9},"actor":{"type":"NewItem","data":15}}],"origin":{"conditions":[{"type":"Is","data":14}]}},{"results":[{"origin":{"type":"NewItem","data":17},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":16}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":18},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":17}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":37},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":28}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":38},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":44}]},"actor":{"conditions":[{"type":"Is","data":13}]}},{"results":[{"origin":{"type":"NewItem","data":44},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":10}]}},{"results":[{"origin":{"type":"NewItem","data":39},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":38}]},"actor":{"conditions":[{"type":"Is","data":37}]}},{"results":[{"origin":{"type":"NewItem","data":49},"actor":{"type":"NewItem","data":48}}],"origin":{"conditions":[{"type":"Is","data":47}]}},{"results":[{"origin":{"type":"NewItem","data":50},"actor":{"type":"NewItem","data":48}}],"origin":{"conditions":[{"type":"Is","data":49}]}},{"results":[{"origin":{"type":"NewItem","data":51},"actor":{"type":"NewItem","data":48}}],"origin":{"conditions":[{"type":"Is","data":50}]}},{"results":[{"origin":{"type":"NewItem","data":52},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":16}]},"actor":{"conditions":[{"type":"Is","data":35}]}},{"results":[{"origin":{"type":"NewItem","data":35},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":25}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":54},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":17}]},"actor":{"conditions":[{"type":"Is","data":35}]}},{"results":[{"origin":{"type":"NewItem","data":55},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":54}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":56},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":55}]},"actor":{"conditions":[{"type":"Is","data":64}]}},{"results":[{"origin":{"type":"NewItem","data":63},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":53}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":64},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":22}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":57},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":59}]},"actor":{"conditions":[{"type":"Is","data":52}]}},{"results":[{"origin":{"type":"NewItem","data":58},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":57}]},"time":86400},{"results":[{"origin":{"type":"NewItem","data":60},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":58}]},"time":86400},{"results":[{"origin":{"type":"NewItem","data":59},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":56}]},"actor":{"conditions":[{"type":"Is","data":62}]}},{"results":[{"origin":{"type":"NewItem","data":61},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":63}]},"actor":{"conditions":[{"type":"Is","data":23}]}},{"results":[{"origin":{"type":"NewItem","data":62},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":61}]},"actor":{"conditions":[{"type":"Is","data":18}]}},{"results":[{"origin":{"type":"NewItem","data":65},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":3}]},"actor":{"conditions":[{"type":"Is","data":15}]}},{"results":[{"origin":{"type":"NewItem","data":3},"actor":{"type":"NewItem","data":64}}],"origin":{"conditions":[{"type":"Is","data":65}]}},{"results":[{"origin":{"type":"NewItem","data":66},"actor":{"type":"NewItem","data":45}}],"origin":{"conditions":[{"type":"Is","data":11}]}},{"results":[{"origin":{"type":"NewItem","data":67},"actor":{"type":"NewItem","data":45}}],"origin":{"conditions":[{"type":"Is","data":66}]}},{"results":[{"origin":{"type":"NewItem","data":68},"actor":{"type":"NewItem","data":45}}],"origin":{"conditions":[{"type":"Is","data":67}]}},{"results":[{"origin":{"type":"NewItem","data":45},"actor":{"type":"NewItem","data":45}}],"origin":{"conditions":[{"type":"Is","data":68}]}},{"results":[{"origin":{"type":"NewItem","data":69},"actor":{"type":"NewItem","data":70}}],"origin":{"conditions":[{"type":"Is","data":19}]}},{"results":[{"origin":{"type":"NewItem","data":72},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":45}]},"actor":{"conditions":[{"type":"Is","data":13}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":73}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":72}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":74}}],"origin":{"conditions":[{"type":"Is","data":1}]},"actor":{"conditions":[{"type":"Is","data":73}]}},{"results":[{"origin":{"type":"NewItem","data":76},"actor":{"type":"NewItem","data":16}}],"origin":{"conditions":[{"type":"Is","data":4}]}},{"results":[{"origin":{"type":"NewItem","data":75},"actor":{"type":"NewItem","data":53}}],"origin":{"conditions":[{"type":"Is","data":5}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":77}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":41}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":78}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":42}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":79}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":43}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":80}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":36}]}},{"results":[{"origin":{"type":"NewItem","data":4},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":76}]},"time":14400},{"results":[{"origin":{"type":"NewItem","data":5},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":75}]},"time":14400},{"results":[{"origin":{"type":"NewItem","data":81},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":74}]},"actor":{"conditions":[{"type":"Is","data":48}]}},{"results":[{"origin":{"type":"NewItem","data":84},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":74}]},"actor":{"conditions":[{"type":"Is","data":36}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":82}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":81}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":85}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":84}]}},{"results":[{"origin":{"type":"NewItem","data":20},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":22}]},"time":28800},{"results":[{"origin":{"type":"NewItem","data":57},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":58}]},"actor":{"conditions":[{"type":"Is","data":52}]}},{"results":[{"origin":{"type":"NewItem","data":87},"actor":{"type":"NewItem","data":88}}],"origin":{"conditions":[{"type":"Is","data":8}]}},{"results":[{"origin":{"type":"NewItem","data":89},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":69}]},"actor":{"conditions":[{"type":"Is","data":13}]}},{"results":[{"origin":{"type":"NewItem","data":90},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":45}]},"actor":{"conditions":[{"type":"Is","data":70}]}},{"results":[{"origin":{"type":"NewItem","data":93},"actor":{"type":"NewItem","data":73}}],"origin":{"conditions":[{"type":"Is","data":89}]},"actor":{"conditions":[{"type":"Is","data":74}]}},{"results":[{"origin":{"type":"NewItem","data":94},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":26}]},"actor":{"conditions":[{"type":"Is","data":93}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":101}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":18}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":100}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":99}]}},{"results":[{"origin":{"type":"NewItem","data":99},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":45}]},"actor":{"conditions":[{"type":"Is","data":26}]}},{"results":[{"origin":{"type":"NewItem","data":60},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":101}]},"time":3600},{"results":[{"origin":{"type":"NewItem","data":102},"actor":{"type":"NewItem","data":102}}],"origin":{"conditions":[{"type":"Is","data":60}]}},{"results":[{"origin":{"type":"NewItem","data":91},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":90}]},"actor":{"conditions":[{"type":"Is","data":90}]}},{"results":[{"origin":{"type":"NewItem","data":92},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":91}]},"actor":{"conditions":[{"type":"Is","data":90}]}},{"results":[{"origin":{"type":"NewItem","data":103},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":91}]},"actor":{"conditions":[{"type":"Is","data":101}]}},{"results":[{"origin":{"type":"NewItem","data":104},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":92}]},"actor":{"conditions":[{"type":"Is","data":101}]}},{"results":[{"origin":{"type":"NewItem","data":91},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":103}]},"time":28800},{"results":[{"origin":{"type":"NewItem","data":92},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":104}]},"time":28800},{"results":[{"origin":{"type":"NewItem","data":57},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":52}]},"actor":{"conditions":[{"type":"Is","data":101}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":95}}],"origin":{"conditions":[{"type":"Is","data":103}]},"actor":{"conditions":[{"type":"Is","data":94}]}},{"results":[{"origin":{"type":"NewItem","data":26},"actor":{"type":"NewItem","data":96}}],"origin":{"conditions":[{"type":"Is","data":95}]}},{"results":[{"origin":{"type":"NewItem","data":71},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":70}]},"actor":{"conditions":[{"type":"Is","data":70}]}},{"results":[{"origin":{"type":"SameItem","data":{"op":"","ref":0}},"actor":{"type":"NewItem","data":102}}],"origin":{"conditions":[{"type":"Is","data":57}]},"actor":{"conditions":[{"type":"Is","data":22}]}},{"results":[{"origin":{"type":"NewItem","data":105},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":73}]},"actor":{"conditions":[{"type":"Is","data":98}]}},{"results":[{"origin":{"type":"NewItem","data":106},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":73}]},"actor":{"conditions":[{"type":"Is","data":102}]}},{"results":[{"origin":{"type":"NewItem","data":107},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":105}]},"actor":{"conditions":[{"type":"Is","data":102}]}},{"results":[{"origin":{"type":"NewItem","data":107},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":106}]},"actor":{"conditions":[{"type":"Is","data":98}]}},{"results":[{"origin":{"type":"NewItem","data":108},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":104}]},"actor":{"conditions":[{"type":"Is","data":98}]}},{"results":[{"origin":{"type":"NewItem","data":109},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":108}]},"time":600},{"results":[{"origin":{"type":"NewItem","data":110},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":18}]},"actor":{"conditions":[{"type":"Is","data":18}]}},{"results":[{"origin":{"type":"NewItem","data":104},"actor":{"type":"NewItem","data":111}}],"origin":{"conditions":[{"type":"Is","data":109}]},"actor":{"conditions":[{"type":"Is","data":110}]}},{"results":[{"origin":{"type":"NewItem","data":114},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":112}]},"time":3600},{"results":[{"origin":{"type":"NewItem","data":26},"actor":{"type":"NewItem","data":98}}],"origin":{"conditions":[{"type":"Is","data":114}]}},{"results":[{"origin":{"type":"NewItem","data":112},"actor":{"type":"NewItem","data":110}}],"origin":{"conditions":[{"type":"Is","data":26}]},"actor":{"conditions":[{"type":"Is","data":111}]}},{"results":[{"origin":{"type":"NewItem","data":113},"actor":{"type":"SameItem","data":{"op":"","ref":0}}}],"origin":{"conditions":[{"type":"Is","data":112}]},"actor":{"conditions":[{"type":"Is","data":13}]}},{"results":[{"origin":{"type":"NewItem","data":115},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":113}]},"time":1800},{"results":[{"origin":{"type":"NewItem","data":26},"actor":{"type":"NewItem","data":116}}],"origin":{"conditions":[{"type":"Is","data":115}]}},{"results":[{"origin":{"type":"NewItem","data":118},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":107}]},"actor":{"conditions":[{"type":"Is","data":100}]}},{"results":[{"origin":{"type":"NewItem","data":119},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":104}]},"actor":{"conditions":[{"type":"Is","data":118}]}},{"results":[{"origin":{"type":"NewItem","data":120},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":119}]},"time":600},{"results":[{"origin":{"type":"NewItem","data":104},"actor":{"type":"NewItem","data":121}}],"origin":{"conditions":[{"type":"Is","data":120}]},"actor":{"conditions":[{"type":"Is","data":110}]}},{"results":[{"origin":{"type":"NewItem","data":122},"actor":{"type":"NewItem","data":110}}],"origin":{"conditions":[{"type":"Is","data":26}]},"actor":{"conditions":[{"type":"Is","data":121}]}},{"results":[{"origin":{"type":"NewItem","data":123},"actor":{"type":""}}],"origin":{"conditions":[{"type":"Is","data":122}]},"time":1800},{"results":[{"origin":{"type":"NewItem","data":26},"actor":{"type":"NewItem","data":124}}],"origin":{"conditions":[{"type":"Is","data":123}]}},{"results":[{"origin":{"type":"NewItem","data":125},"actor":{"type":"NewItem","data":100}}],"origin":{"conditions":[{"type":"Is","data":124}]}},{"results":[{"origin":{"type":"NewItem","data":73},"actor":{"type":"NewItem","data":126}}],"origin":{"conditions":[{"type":"Is","data":125}]}}]');

},{}],"gkKU3":[function(require,module,exports) {
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

},{}],"aMbHx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WORLD_SIZE", ()=>WORLD_SIZE);
parcelHelpers.export(exports, "CHUNK_SIZE", ()=>CHUNK_SIZE);
parcelHelpers.export(exports, "Chunk", ()=>Chunk);
parcelHelpers.export(exports, "World", ()=>World);
parcelHelpers.export(exports, "generateName", ()=>generateName);
parcelHelpers.export(exports, "generateId", ()=>generateId);
parcelHelpers.export(exports, "hashString", ()=>hashString);
parcelHelpers.export(exports, "mlerp", ()=>mlerp);
parcelHelpers.export(exports, "sigmoid", ()=>sigmoid);
parcelHelpers.export(exports, "normal", ()=>normal);
parcelHelpers.export(exports, "generateGroup", ()=>generateGroup);
parcelHelpers.export(exports, "assignReputations", ()=>assignReputations);
var _lib = require("./lib");
const WORLD_SIZE = 40;
const CHUNK_SIZE = 10;
class Chunk {
    constructor(x, y, items){
        this.x = x;
        this.y = y;
        this.items = items;
    }
    get(x, y) {
        return this.items[y * CHUNK_SIZE + x] || null;
    }
    set(x, y, item) {
        this.items[y * CHUNK_SIZE + x] = item;
    }
    has(selector) {
        return this.items.some((item)=>item != null && (0, _lib.ItemConditions).matches(selector, item.item));
    }
    find(selector) {
        const index = this.items.findIndex((item)=>item != null && (0, _lib.ItemConditions).matches(selector, item.item));
        if (index === -1) return null;
        return {
            x: this.x * CHUNK_SIZE + index % CHUNK_SIZE,
            y: this.y + Math.floor(index / CHUNK_SIZE),
            item: this.items[index]
        };
    }
    get active() {
        return this.items.some((item)=>item != null && item.item.active);
    }
    get heatProduced() {
        return this.items.reduce((a, b)=>a + (b?.item.properties.heat || 0), 0);
    }
}
class World {
    constructor(){
        this.chunks = [];
        this.heat = [];
        for(let y = 0; y < WORLD_SIZE; y += 1)for(let x = 0; x < WORLD_SIZE; x += 1){
            this.chunks.push(new Chunk(x, y, new Array(CHUNK_SIZE * CHUNK_SIZE).fill(null)));
            this.heat.push(0);
        }
    }
    update(temp) {
        for(let y = 0; y < WORLD_SIZE; y += 1)for(let x = 0; x < WORLD_SIZE; x += 1){
            const index = y * WORLD_SIZE + x;
            this.heat[index] = mlerp(this.heat[index], temp + this.chunks[index].heatProduced, 0.05);
        }
        // disperse
        for(let y = 0; y < WORLD_SIZE; y += 1)for(let x = 0; x < WORLD_SIZE; x += 1){
            const index = y * WORLD_SIZE + x;
            const temp = this.heat[index];
            const left = x > 0 ? this.heat[index - 1] : temp;
            const right = x < WORLD_SIZE - 1 ? this.heat[index + 1] : temp;
            const up = y > 0 ? this.heat[index - WORLD_SIZE] : temp;
            const down = y < WORLD_SIZE - 1 ? this.heat[index + WORLD_SIZE] : temp;
            const avg = (left + right + up + down) / 4;
            if (avg > temp) this.heat[index] = mlerp(temp, avg, 0.2);
            else this.heat[index] = mlerp(temp, avg, 0.01);
        }
    }
    get size() {
        return WORLD_SIZE * CHUNK_SIZE;
    }
    getChunk(x, y) {
        return this.chunks[y * WORLD_SIZE + x];
    }
    active() {
        return this.chunks.filter((chunk)=>chunk.active).map((chunk)=>{
            const res = [];
            let index = chunk.items.findIndex((item)=>item != null && item.item.active);
            while(index !== -1){
                res.push({
                    x: chunk.x * CHUNK_SIZE + index % CHUNK_SIZE,
                    y: chunk.y * CHUNK_SIZE + Math.floor(index / CHUNK_SIZE),
                    item: chunk.items[index]
                });
                index = chunk.items.findIndex((item, i)=>i > index && item != null && item.item.active);
            }
            return res;
        }).flat();
    }
    get(x, y) {
        return this.getChunk(Math.floor(x / CHUNK_SIZE), Math.floor(y / CHUNK_SIZE))?.get(x % CHUNK_SIZE, y % CHUNK_SIZE) || null;
    }
    set(x, y, item) {
        this.getChunk(Math.floor(x / CHUNK_SIZE), Math.floor(y / CHUNK_SIZE)).set(x % CHUNK_SIZE, y % CHUNK_SIZE, item);
    }
    localWorld(x, y, size) {
        const local = [];
        for(let dy = -size; dy <= size; dy += 1)for(let dx = -size; dx <= size; dx += 1){
            const xx = x + dx;
            const yy = y + dy;
            if (xx < 0 || yy < 0 || xx >= this.size || yy >= this.size) local.push({
                x: xx,
                y: yy,
                item: null
            });
            else local.push({
                x: xx,
                y: yy,
                item: this.get(xx, yy)
            });
        }
        return local;
    }
}
function generateName() {
    const vowels = "eaiou";
    const consonants = "tnsrhldcymfwgpbvkxjqz";
    const syllables = Math.round(Math.random() * 3 + 1);
    let name = "";
    for(let i = 0; i < syllables; i += 1){
        name += consonants[Math.floor(Math.random() ** 2 * consonants.length)];
        name += vowels[Math.floor(Math.random() * vowels.length)];
        if (Math.random() < 0.5) name += consonants[Math.floor(Math.random() ** 2 * consonants.length)];
    }
    return name;
}
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
function hashString(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i += 1){
        hash += str.charCodeAt(i);
        hash += hash << 10;
        hash ^= hash >> 6;
        hash += hash << 3;
    }
    return hash;
}
function mlerp(a, b, t) {
    return a + (b - a) * t;
}
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
function normal(x) {
    return Math.exp(-(x ** 2));
}
var Needs;
(function(Needs) {
    Needs["Health"] = "health";
    Needs["Hunger"] = "hunger";
    Needs["Temperature"] = "temperature";
    Needs["Boredom"] = "boredom";
})(Needs || (Needs = {}));
var Direction;
(function(Direction) {
    Direction[Direction["Here"] = 0] = "Here";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var ActionType;
(function(ActionType) {
    ActionType["Nothing"] = "nothing";
    ActionType["Move"] = "move";
    ActionType["Interact"] = "interact";
    ActionType["Eat"] = "eat";
})(ActionType || (ActionType = {}));
const Action = {
    Nothing: ()=>({
            type: "nothing",
            data: {}
        }),
    Move: (direction)=>({
            type: "move",
            data: {
                direction
            }
        }),
    Interact: (direction)=>({
            type: "interact",
            data: {
                direction
            }
        }),
    Eat: ()=>({
            type: "eat",
            data: {}
        })
};
var NounType;
(function(NounType) {
    NounType["Person"] = "person";
    NounType["Place"] = "place";
    NounType["Thing"] = "thing";
})(NounType || (NounType = {}));
const Noun = {
    Person: (id)=>({
            type: "person",
            data: {
                id
            }
        }),
    Place: (x, y)=>({
            type: "place",
            data: {
                x,
                y
            }
        }),
    Thing: (selector)=>({
            type: "thing",
            data: {
                selector
            }
        })
};
var MemoryType;
(function(MemoryType) {
    MemoryType["Location"] = "location";
    MemoryType["PersonKnows"] = "personKnows";
    MemoryType["Exists"] = "exists";
})(MemoryType || (MemoryType = {}));
const Memory = {
    Location: (noun, x, y, time)=>({
            type: "location",
            data: {
                noun,
                x,
                y
            },
            time
        }),
    PersonKnows: (person, memory, time)=>({
            type: "personKnows",
            data: {
                person,
                memory
            },
            time
        }),
    Exists: (noun, time)=>({
            type: "exists",
            data: {
                noun
            },
            time
        })
};
var ObjectiveType;
(function(ObjectiveType) {
    ObjectiveType["FulfillNeed"] = "fulfillNeed";
    ObjectiveType["Obtain"] = "obtain";
    ObjectiveType["BoredomTask"] = "boredomTask";
})(ObjectiveType || (ObjectiveType = {}));
var BoredomTaskType;
(function(BoredomTaskType) {
    BoredomTaskType["Craft"] = "craft";
    BoredomTaskType["Organize"] = "organize";
    BoredomTaskType["Farm"] = "farm";
    BoredomTaskType["Build"] = "build";
})(BoredomTaskType || (BoredomTaskType = {}));
const Objective = {
    FulfillNeed: (need)=>({
            type: "fulfillNeed",
            data: {
                need
            }
        }),
    Obtain: (noun, another = false)=>({
            type: "obtain",
            data: {
                noun,
                another,
                children: []
            }
        }),
    BoredomTask: (task, expiry)=>({
            type: "boredomTask",
            data: {
                task,
                expiry
            }
        })
};
class Person {
    constructor(id, name, surname, born, x, y){
        this.home = null;
        this.health = 100;
        this.hunger = 100;
        this.temperature = 0;
        this.score = 0;
        this.reputations = {};
        this.needs = {
            ["health"]: 0,
            ["hunger"]: 0,
            ["temperature"]: 0,
            ["boredom"]: 0
        };
        this.memory = [];
        this.objectives = [];
        this.long = {};
        this.short = {};
        this.common = {};
        this.holding = null;
        this.nextAction = null;
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.born = born;
        this.x = x;
        this.y = y;
        this.gender = Math.random();
    }
    male() {
        return this.gender < 0.5;
    }
    female() {
        return this.gender > 0.5;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
    get color() {
        return Math.abs(hashString(this.surname)) % 64;
    }
    get altColor() {
        return Math.abs(hashString(this.name)) % 64;
    }
    get display() {
        const myDisplay = [
            {
                character: this.male() ? 11 : 12,
                color: this.color
            }
        ];
        const holdingDisplay = this.holding?.item.display ?? [];
        return [
            ...myDisplay,
            ...holdingDisplay
        ];
    }
    get known() {
        return this.memory.filter((memory)=>memory.type === "location" && memory.data.noun.type === "thing").map((memory)=>(0, _lib.REGISTRY).query(memory.data.noun.data.selector)).flat().filter((item, index, self)=>self.indexOf(item) === index);
    }
    hungerSeverity() {
        return this.hunger < 20 ? 1 : sigmoid((50 - this.hunger) / 10);
    }
    update(world) {
        const temp = world.heat[this.outerIndex()];
        this.temperature = mlerp(this.temperature, temp, 0.02);
        this.score += (this.temperature / 20) ** 3;
        if (this.health < 100) {
            this.score -= ((100 - this.health) / 100) ** 2;
            this.health += sigmoid((this.hunger - 50) / 10) * 0.01;
        }
        const tempEffect = 1 - sigmoid(this.temperature / 2);
        this.hunger -= 0.03 * (0.1 + tempEffect * 0.9);
        if (this.hunger < 0) {
            this.health -= 1.0 * tempEffect * tempEffect;
            this.hunger = 0;
        }
        if (this.hunger > 100) {
            this.health += this.hunger - 100;
            this.hunger = 100;
        }
        if (this.health > 100) {
            this.score += (this.health - 100) ** 2;
            this.health = 100;
        }
        if (this.score < 0) this.score = 0;
    }
    think(world, people, now) {
        // compute needs
        this.needs["health"] = (80 - Math.min(this.health, 80)) ** 3;
        this.needs["hunger"] = (90 - Math.min(this.hunger, 90)) ** 2;
        this.needs["temperature"] = Math.max((5 - this.temperature) * 10, 0);
        this.needs["boredom"] = this.health > 80 && this.hunger > 80 ? 60 : 0;
        const local = world.localWorld(this.x, this.y, 10);
        const localPeople = people.filter((person)=>Math.abs(person.x - this.x) < 10 && Math.abs(person.y - this.y) < 10);
        const indices = [
            {
                x: this.x,
                y: this.y
            },
            {
                x: this.x,
                y: this.y - 1
            },
            {
                x: this.x - 1,
                y: this.y
            },
            {
                x: this.x,
                y: this.y + 1
            },
            {
                x: this.x + 1,
                y: this.y
            }
        ];
        // forget memories after a day
        this.memory = this.memory.filter((memory)=>now - memory.time < 86400);
        for (const person of localPeople){
            this.memory = this.memory.filter((memory)=>!(memory.type === "exists" && memory.data.noun.type === "person" && memory.data.noun.data.id === person.id));
            if (person.id !== this.id) this.memory.push(Memory.Exists(Noun.Person(person.id), now));
            this.memory = this.memory.filter((memory)=>!(memory.type === "location" && memory.data.noun.type === "person" && memory.data.noun.data.id === person.id));
            if (person.id !== this.id) this.memory.push(Memory.Location({
                type: "person",
                data: {
                    id: person.id
                }
            }, person.x, person.y, now));
        }
        // if we find out an item is missing, remove it from memory
        this.memory = this.memory.filter((memory)=>{
            if (memory.type != "location" || memory.data.noun.type != "thing") return true;
            if (memory.data.x < this.x - 10 || memory.data.x > this.x + 10 || memory.data.y < this.y - 10 || memory.data.y > this.y + 10) return true;
            const item = local.find(({ x, y })=>x === memory.data.x && y === memory.data.y);
            return !(item == null || item.item == null || !(0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item.item.item)); // eww
        });
        // similar but for people
        this.memory = this.memory.filter((memory)=>{
            if (memory.type != "location" || memory.data.noun.type != "person") return true;
            // if two people move away at the exact time, can unintentionally forget where they are
            if (memory.data.x < this.x - 8 || memory.data.x > this.x + 8 || memory.data.y < this.y - 8 || memory.data.y > this.y + 8) return true;
            const person = localPeople.find(({ x, y })=>x === memory.data.x && y === memory.data.y);
            return !(person == null || person.id === this.id);
        });
        for (const { x, y, item } of local)if (item != null) {
            if (item.item.root) this.common[item.id] = (this.common[item.id] ?? 0) + 1;
            if (!this.short["justDropped"]) {
                let i = 0;
                for (const objective of this.objectives.slice(0, this.objectives.length - 1)){
                    if (objective.type === "obtain" && !objective.data.another) {
                        if ((0, _lib.ItemConditions).matches(objective.data.noun.data.selector, item.item)) {
                            this.completeAltObjective(i);
                            this.memory.push(Memory.Location(objective.data.noun, x, y, now));
                            break;
                        }
                    }
                    i += 1;
                }
            }
            if (item.item.tags.includes("important") || item.item.tags.includes("foodSource") || item.item.tags.includes("heatSource") || item.item.tags.includes("healing") || item.item.tags.includes("edible")) {
                this.memory = this.memory.filter((memory)=>!(memory.type === "location" && memory.data.noun.type === "thing" && memory.data.noun.data.selector.conditions.find((condition)=>condition.type === (0, _lib.ItemConditionTypes).Is && condition.data === item.item.id)));
                this.memory.push(Memory.Location({
                    type: "thing",
                    data: {
                        selector: {
                            conditions: [
                                {
                                    type: (0, _lib.ItemConditionTypes).Is,
                                    data: item.item.id
                                }
                            ]
                        }
                    }
                }, x, y, now));
            }
        }
        let focus = "health";
        for (const need of [
            "health",
            "hunger",
            "temperature",
            "boredom"
        ])if (this.needs[need] > this.needs[focus]) focus = need;
        // focus = Needs.Hunger;
        if (this.objectives.length === 0 || this.objectives[0].type !== "fulfillNeed" || this.objectives[0].data.need !== focus) {
            this.objectives = [];
            this.addObjective(Objective.FulfillNeed(focus));
        }
        const rootObjective = this.objectives[0];
        if (rootObjective.type === "fulfillNeed") {
            if (rootObjective.data.need === "hunger") {
                if (Math.random() < 0.002) {
                    this.objectives = [
                        rootObjective
                    ];
                    this.short = {};
                }
            }
        }
        const objective = this.objectives[this.objectives.length - 1];
        this.nextAction = Action.Nothing();
        if (this.short["goto"] != null) {
            if (this.x === this.short["goto"].x && this.y === this.short["goto"].y) this.short["goto"] = null;
            else {
                if (this.short["calculated"]) ;
                else {
                    const dx = this.short["goto"].x - this.x;
                    const dy = this.short["goto"].y - this.y;
                    const worldAtGoto = world.get(this.short["goto"].x, this.short["goto"].y);
                    if (worldAtGoto != null && worldAtGoto.item.tags.includes("blocking")) this.short["goto"] = this.gotoNoBlocking(world, this.short["goto"].x, this.short["goto"].y);
                    if (Math.abs(dx) > Math.abs(dy)) {
                        if (dx > 0) this.nextAction = Action.Move(4);
                        else this.nextAction = Action.Move(2);
                    } else if (dy > 0) this.nextAction = Action.Move(3);
                    else this.nextAction = Action.Move(1);
                    const next = indices[this.nextAction.data.direction];
                    if (world.get(next.x, next.y) != null && world.get(next.x, next.y)?.item.tags.includes("blocking") || people.some((person)=>person.id != this.id && person.x === next.x && person.y === next.y)) this.nextAction = this.moveRandomly(world, indices);
                }
            }
        } else if (objective.type === "fulfillNeed") {
            if (objective.data.need === "health") {
                if (this.holding != null && this.holding.item.tags.includes("healing")) this.nextAction = Action.Eat();
                else if (world.get(this.x, this.y) != null && world.get(this.x, this.y).item.tags.includes("healing")) {
                    if (this.holding != null) this.tryToDrop(world, indices, now);
                    else this.nextAction = Action.Interact(0);
                } else {
                    const allHealing = (0, _lib.REGISTRY).items.filter((item)=>item.tags.includes("healing"));
                    this.addObjective(Objective.Obtain(Noun.Thing({
                        conditions: [
                            {
                                type: (0, _lib.ItemConditionTypes).Is,
                                data: allHealing[Math.floor(Math.random() * allHealing.length)].id
                            }
                        ]
                    }), false));
                }
            } else if (objective.data.need === "hunger") {
                if (this.holding != null && this.holding.item.tags.includes("edible")) this.nextAction = Action.Eat();
                else if (world.get(this.x, this.y) != null && world.get(this.x, this.y).item.tags.includes("edible")) {
                    if (this.holding != null) this.tryToDrop(world, indices, now);
                    else this.nextAction = Action.Interact(0);
                } else {
                    // priority when NOT SEVERE: make a food source / work towards good food
                    // priority when SEVERE: find food
                    const nutritionScore = (item)=>{
                        const food = item.properties.food;
                        const heal = item.properties.heal || 0;
                        return (food + Math.log2(heal + 1)) ** 2;
                    };
                    const foodScore = (item)=>{
                        const nutrition = nutritionScore(item);
                        const depth = item.depth();
                        const knowsLocation = this.memory.some((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item));
                        const effort = (Math.log2(depth) * item.required(this.known)) ** (knowsLocation ? 1 : 2) + 1;
                        return nutrition / effort * (0.8 + Math.random() * 0.4);
                    };
                    const foodSourceScore = (item)=>{
                        const foodItMakes = item.usedIn.map((recipe)=>recipe.notableResulted().map((id)=>(0, _lib.REGISTRY).getItem(id))).flat().filter((item)=>item.tags.includes("edible"));
                        const score = foodItMakes.map(nutritionScore).reduce((a, b)=>a + b, 0);
                        const depth = 0;
                        const knowsLocation = this.memory.some((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item));
                        const effort = (depth + 1) ** (knowsLocation ? 1 : 2);
                        return score / effort * (0.8 + Math.random() * 0.4);
                    };
                    const allEdible = (0, _lib.REGISTRY).items.filter((item)=>item.tags.includes("edible"));
                    const allFoodSources = (0, _lib.REGISTRY).items.filter((item)=>item.tags.includes("foodSource"));
                    {
                        // find food
                        const food = allEdible.filter((item)=>foodScore(item) > 0);
                        const bestFood = food.sort((a, b)=>foodScore(b) - foodScore(a))[0];
                        console.table(food.map((item)=>({
                                name: item.name,
                                score: foodScore(item),
                                nutrition: nutritionScore(item),
                                effort: (item.depth() * item.required(this.known)) ** (this.memory.some((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item)) ? 1 : 2) + 1
                            })));
                        if (bestFood) this.addObjective(Objective.Obtain(Noun.Thing({
                            conditions: [
                                {
                                    type: (0, _lib.ItemConditionTypes).Is,
                                    data: bestFood.id
                                }
                            ]
                        }), false));
                    }
                }
            } else if (objective.data.need === "temperature" || objective.data.need === "boredom") {
                // fire?
                const fire = (0, _lib.REGISTRY).getItem(57);
                const kindling = (0, _lib.REGISTRY).getItem(52);
                const fireMemory = this.locationMemory(fire);
                if (fireMemory) {
                    if (this.temperature < 2) {
                        if (world.chunks[this.outerIndex()].items.some((item)=>item != null && item.item.id === fire.id)) {
                            // randomly move within chunk
                            const dir = [
                                1,
                                2,
                                3,
                                4
                            ].filter((dir)=>{
                                const next = indices[dir];
                                const chunkIndex = next.x / CHUNK_SIZE + next.y / CHUNK_SIZE * WORLD_SIZE;
                                return chunkIndex === this.outerIndex();
                            });
                            this.nextAction = Action.Move(dir[Math.floor(Math.random() * dir.length)]);
                        } else {
                            this.nextAction = this.moveRandomly(world, indices);
                            this.short["goto"] = this.gotoNoBlocking(world, fireMemory.data.x, fireMemory.data.y);
                        }
                    } else {
                        if (this.holding && this.holding.item.id === kindling.id) {
                            // put kindling near fire
                            if (world.chunks[this.outerIndex()].items.some((item)=>item != null && item.item.id === fire.id)) {
                                this.tryToDrop(world, indices, now);
                                this.short["goto"] = this.gotoNoBlocking(world, this.x + Math.floor(Math.random() * 10 - 5), this.y + Math.floor(Math.random() * 10 - 5));
                            } else {
                                this.nextAction = this.moveRandomly(world, indices);
                                this.short["goto"] = this.gotoNoBlocking(world, fireMemory.data.x, fireMemory.data.y);
                            }
                        } else if (world.get(this.x, this.y) != null && world.get(this.x, this.y).id === kindling.id) this.nextAction = Action.Interact(0);
                        else {
                            this.addObjective(Objective.Obtain(Noun.Thing({
                                conditions: [
                                    {
                                        type: (0, _lib.ItemConditionTypes).Is,
                                        data: kindling.id
                                    }
                                ]
                            }), true));
                            this.short["goto"] = this.gotoNoBlocking(world, this.x + Math.floor(Math.random() * 10 - 5), this.y + Math.floor(Math.random() * 10 - 5));
                        }
                    }
                } else this.addObjective(Objective.Obtain(Noun.Thing({
                    conditions: [
                        {
                            type: (0, _lib.ItemConditionTypes).Is,
                            data: fire.id
                        }
                    ]
                }), false));
            } else objective.data.need;
        //   ___  ___ _____ _   ___ _  _ 
        //  / _ \| _ )_   _/_\ |_ _| \| |
        // | (_) | _ \ | |/ _ \ | || .` |
        //  \___/|___/ |_/_/ \_\___|_|\_|
        } else if (objective.type === "obtain") {
            const item = (0, _lib.REGISTRY).getItem((0, _lib.REGISTRY).query(objective.data.noun.data.selector)[0]);
            const memory = this.memory.find((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item));
            if (!objective.data.another && this.holding != null && (0, _lib.ItemConditions).matches(objective.data.noun.data.selector, this.holding.item)) {
                this.nextAction = Action.Nothing();
                this.completeObjective();
            } else if (!this.short["justDropped"] && indices.map((i)=>world.get(i.x, i.y)).some((other)=>other != null && other.item.id === item.id)) {
                const dir = indices.findIndex((i)=>world.get(i.x, i.y) != null && world.get(i.x, i.y).item.id === item.id);
                this.memory.push(Memory.Location(Noun.Thing({
                    conditions: [
                        {
                            type: (0, _lib.ItemConditionTypes).Is,
                            data: item.id
                        }
                    ]
                }), indices[dir].x, indices[dir].y, now));
                this.completeObjective();
            } else if (!objective.data.another && !this.short["justDropped"] && memory) this.short["goto"] = this.gotoNoBlocking(world, memory.data.x, memory.data.y);
            else if (!item.root) {
                const recipes = item.resultedBy;
                const recipe = recipes.find((recipe)=>recipe.simpleUsed().map((id)=>(0, _lib.REGISTRY).getItem(id)).every((item)=>this.holding != null && this.holding.id === item.id || this.memory.find((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item))));
                if (recipe) {
                    const shouldBeHolding = recipe.actor;
                    const shouldBeNextTo = recipe.origin;
                    const holdingTheActor = !!shouldBeHolding && this.holding != null && (0, _lib.ItemConditions).matches(shouldBeHolding, this.holding.item) || !shouldBeHolding && !this.holding;
                    const nextToOriginIndex = indices.findIndex((i)=>world.get(i.x, i.y) != null && (0, _lib.ItemConditions).matches(shouldBeNextTo, world.get(i.x, i.y).item));
                    if (!holdingTheActor) {
                        if (this.holding && (!shouldBeHolding || !(0, _lib.ItemConditions).matches(shouldBeHolding, this.holding.item))) this.tryToDrop(world, indices, now);
                        else if (indices.some((i)=>world.get(i.x, i.y) != null && (0, _lib.ItemConditions).matches(shouldBeHolding, world.get(i.x, i.y).item))) this.nextAction = Action.Interact(indices.findIndex((i)=>world.get(i.x, i.y) != null && world.get(i.x, i.y).item.id === shouldBeHolding.conditions[0].data));
                        else {
                            const item = (0, _lib.REGISTRY).getItem(recipe.getAnActor());
                            // find memory
                            const memory = this.memory.find((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item));
                            if (memory) this.short["goto"] = this.gotoNoBlocking(world, memory.data.x, memory.data.y);
                            else {
                                this.addObjective(Objective.Obtain(Noun.Thing({
                                    conditions: [
                                        {
                                            type: (0, _lib.ItemConditionTypes).Is,
                                            data: item.id
                                        }
                                    ]
                                }), true), objective);
                                this.nextAction = Action.Nothing();
                            }
                        }
                    } else if (nextToOriginIndex === -1) {
                        if (this.holding && (!shouldBeHolding || !(0, _lib.ItemConditions).matches(shouldBeHolding, this.holding.item))) this.tryToDrop(world, indices, now);
                        else {
                            const item = (0, _lib.REGISTRY).getItem(recipe.getAnOrigin());
                            // find memory
                            const memory = this.memory.find((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item));
                            if (memory) this.short["goto"] = this.gotoNoBlocking(world, memory.data.x, memory.data.y);
                            else {
                                this.addObjective(Objective.Obtain(Noun.Thing({
                                    conditions: [
                                        {
                                            type: (0, _lib.ItemConditionTypes).Is,
                                            data: item.id
                                        }
                                    ]
                                }), true), objective);
                                this.nextAction = Action.Nothing();
                            }
                        }
                    } else this.nextAction = Action.Interact(nextToOriginIndex);
                } else {
                    const itemEffort = (item)=>{
                        if (this.objectives.some((objective)=>objective.type === "obtain" && (0, _lib.ItemConditions).matches(objective.data.noun.data.selector, item) && !objective.data.another)) return Infinity;
                        const craftEffort = (item.depth() || 0) ** 2 + 1;
                        const canFindEasily = this.memory.find((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item)) || local.find(({ item: i })=>i != null && i.item.id === item.id);
                        const howCommon = item.resources().reduce((a, b)=>a + (this.common[b.id] ?? 0), 0);
                        return (canFindEasily ? Math.sqrt(craftEffort) / 2 : craftEffort) / Math.log(howCommon + Math.E) * (0.8 + Math.random() * 0.4);
                    };
                    const recipeEffort = (recipe)=>{
                        if (recipe.actor && recipe.results.some((result)=>result.actor && result.actor.type === "SameItem")) return Infinity;
                        return itemEffort((0, _lib.REGISTRY).getItem(recipe.getAnOrigin())) * (recipe.actor ? itemEffort((0, _lib.REGISTRY).getItem(recipe.getAnActor())) : 1) * (recipe.time || 1);
                    };
                    const bestRecipe = recipes.sort((a, b)=>recipeEffort(a) - recipeEffort(b))[0];
                    const items = bestRecipe.simpleUsed().map((id)=>(0, _lib.REGISTRY).getItem(id));
                    const seen = new Set();
                    for (const item of items.sort((a, b)=>a.active || b.active ? a.active === b.active ? 0 : a.active ? -1 : 1 : a.depth() - b.depth())){
                        if (seen.has(item.id)) this.objectives[this.objectives.length - 1].data.another = true;
                        this.addObjective(Objective.Obtain(Noun.Thing({
                            conditions: [
                                {
                                    type: (0, _lib.ItemConditionTypes).Is,
                                    data: item.id
                                }
                            ]
                        }), false), objective);
                        seen.add(item.id);
                    }
                    this.nextAction = Action.Nothing();
                }
            } else {
                // first see if in vicinity
                const item = this.nearestItem(local, objective.data.noun.data.selector);
                if (item != null && item.item != null) this.short["goto"] = this.gotoNoBlocking(world, item.x, item.y);
                else if (this.whereIsItem(objective.data.noun.data.selector)) {
                    const location = this.whereIsItem(objective.data.noun.data.selector);
                    this.short["goto"] = this.gotoNoBlocking(world, location.x, location.y);
                } else {
                    this.short["searched"] = [
                        ...this.short["searched"] ?? [],
                        [
                            this.x,
                            this.y
                        ]
                    ];
                    let x = Math.min(Math.max(this.x + Math.round(Math.random() * 20 - 10), 0), world.size - 1);
                    let y = Math.min(Math.max(this.y + Math.round(Math.random() * 20 - 10), 0), world.size - 1);
                    let limit = 0;
                    while(this.short["searched"].find(([sx, sy])=>sx > x - 10 && sx < x + 10 && sy > y - 10 && sy < y + 10)){
                        x = Math.min(Math.max(this.x + Math.round(Math.random() * (20 + limit * 4) - (10 + limit * 2)), 0), world.size - 1);
                        y = Math.min(Math.max(this.y + Math.round(Math.random() * (20 + limit * 4) - (10 + limit * 2)), 0), world.size - 1);
                        limit += 1;
                        if (limit > 10) break;
                    }
                    this.short["goto"] = this.gotoNoBlocking(world, x, y);
                }
            }
        }
        if (this.nextAction.type === "nothing" && Math.random() < 0.5) this.nextAction = this.moveRandomly(world, indices);
    }
    gotoNoBlocking(world, x, y) {
        console.log("GOTO NOT BLOCKING:", x, y, world.get(x, y), world.get(x, y) && world.get(x, y).item.tags.includes("blocking"));
        if (world.get(x, y) != null && world.get(x, y).item.tags.includes("blocking")) {
            for (const [xx, yy] of [
                [
                    x,
                    y + 1
                ],
                [
                    x,
                    y - 1
                ],
                [
                    x + 1,
                    y
                ],
                [
                    x - 1,
                    y
                ]
            ]){
                if (world.get(xx, yy) == null || !world.get(xx, yy).item.tags.includes("blocking")) return {
                    x: xx,
                    y: yy
                };
            }
            return {
                x,
                y
            };
        } else return {
            x,
            y
        };
    }
    moveRandomly(world, indices) {
        const dirs = [
            1,
            2,
            3,
            4
        ].filter((dir)=>{
            const next = indices[dir];
            return world.get(next.x, next.y) == null || !world.get(next.x, next.y).item.tags.includes("blocking");
        });
        if (dirs.length > 0) return Action.Move(dirs[Math.floor(Math.random() * dirs.length)]);
        else return Action.Move(1 + Math.floor(Math.random() * 4));
    }
    addItemToMemory(world, x, y, now) {
        if (world.get(x, y) != null) this.memory.push(Memory.Location(Noun.Thing({
            conditions: [
                {
                    type: (0, _lib.ItemConditionTypes).Is,
                    data: world.get(x, y).item.id
                }
            ]
        }), x, y, now));
    }
    tryToDrop(world, indices, now) {
        this.short["justDropped"] = true;
        for(let i = 0; i < indices.length; i += 1)if (world.get(indices[i].x, indices[i].y) == null) {
            this.nextAction = Action.Interact(i);
            this.memory.push(Memory.Location(Noun.Thing({
                conditions: [
                    {
                        type: (0, _lib.ItemConditionTypes).Is,
                        data: this.holding.item.id
                    }
                ]
            }), indices[i].x, indices[i].y, now));
            return true;
        }
        this.nextAction = this.moveRandomly(world, indices);
        return false;
    }
    nearestItem(world, selector) {
        const items = world.filter(({ item })=>item != null && (0, _lib.ItemConditions).matches(selector, item.item));
        if (items.length === 0) return null;
        return items.sort((a, b)=>{
            const aDist = (a.x - this.x) ** 2 + (a.y - this.y) ** 2;
            const bDist = (b.x - this.x) ** 2 + (b.y - this.y) ** 2;
            return aDist - bDist;
        })[0];
    }
    nearestItemWithoutNearbyPerson(world, selector, people) {
        const items = world.filter(({ item })=>item != null && (0, _lib.ItemConditions).matches(selector, item.item));
        if (items.length === 0) return null;
        const peopleDist = items.map(({ x, y })=>people.reduce((a, b)=>Math.min(a, (b.x - x) ** 2 + (b.y - y) ** 2), Infinity));
        return items.sort((a, b)=>{
            const aDist = ((a.x - this.x) ** 2 + (a.y - this.y) ** 2) / (peopleDist[items.indexOf(a)] + 1);
            const bDist = ((b.x - this.x) ** 2 + (b.y - this.y) ** 2) / (peopleDist[items.indexOf(b)] + 1);
            return aDist - bDist;
        })[0];
    }
    completeAltObjective(index) {
        const marked = new Set();
        const queue = [
            index
        ];
        const map = this.objectives.map((obj)=>obj.type === "obtain" ? obj.data.noun : null);
        this.short["goto"] = null;
        this.short["path"] = null;
        while(queue.length > 0){
            const current = queue.pop();
            marked.add(current);
            if (this.objectives[current].type === "obtain") this.objectives[current].data.children.forEach((child)=>{
                if (!marked.has(child)) queue.push(child);
            });
        }
        this.objectives = this.objectives.filter((_, i)=>!marked.has(i));
        this.objectives.forEach((objective)=>{
            if (objective.type === "obtain") objective.data.children = objective.data.children.filter((child)=>!marked.has(child)).map((child)=>this.objectives.findIndex((obj)=>obj.data.noun === map[child]));
        });
    }
    /*
    computePath(world: World, x: number, y: number, obstacles: {x: number, y: number}[] = []): { [key: number]: Direction } | null {
        // A* pathfinding, cannot move through items tagged 'blocking'
        // returns a map of which index we're at and which direction to move from there.

        const heuristic = (index: number) => {
            const dx = index % WORLD_SIZE - x;
            const dy = Math.floor(index / WORLD_SIZE) - y;
            return Math.sqrt(dx ** 2 + dy ** 2);
        }

        const obstaclesSet = new Set(obstacles.map(({ x, y }) => y * WORLD_SIZE + x));

        const start = this.index();
        const end = Math.min(Math.max(y, 0), WORLD_SIZE - 1) * WORLD_SIZE + Math.min(Math.max(x, 0), WORLD_SIZE - 1);

        if (start === end) {
            return {};
        }
        if (obstaclesSet.has(end)) {
            return null;
        }

        const open: number[] = [start];
        const closed = new Set<number>();

        const cost: { [key: number]: number } = {};
        const parent: { [key: number]: number | null } = {};

        cost[start] = 0;
        parent[start] = null;

        let i = 0;
        while (open.length > 0) {
            const current = open.reduce((a, b) => cost[a] ?? 0 + heuristic(a) < cost[b] ?? 0 + heuristic(b) ? a : b, open[0]);
            if (current === end) {
                break;
            }
            
            open.splice(open.indexOf(current), 1);
            closed.add(current);

            const neighbors = [
                current - WORLD_SIZE,
                current - 1,
                current + 1,
                current + WORLD_SIZE,
            ];

            for (const neighbor of neighbors) {
                const nx = neighbor % WORLD_SIZE;
                const ny = Math.floor(neighbor / WORLD_SIZE);
                if (nx < 0 || ny < 0 || nx >= WORLD_SIZE || ny >= WORLD_SIZE) {
                    continue;
                }
                if (closed.has(neighbor)) {
                    continue;
                }
                if (obstaclesSet.has(neighbor)) {
                    continue;
                }
                if (world[neighbor] != null && world[neighbor]!.item.tags.includes('blocking')) {
                    continue;
                }
                const newCost = cost[current] + 1;
                if (!open.includes(neighbor)) {
                    open.push(neighbor);
                } else if (newCost >= cost[neighbor]) {
                    continue;
                }
                cost[neighbor] = newCost;
                parent[neighbor] = current;
            }

            i += 1;
            if (i > 10000) {
                console.log('search exceeded 10000 node limit');
                break;
            }
        }

        if (open.length === 0) {
            console.log('ran out of nodes?', i);
        }
        
        if (parent[end] == null) {
            console.log('no path found', this.x, this.y, x, y);
            return null;
        }

        const path: { [key: number]: Direction } = {};
        let current = end;
        while (current !== start) {
            const next = parent[current]!;
            if (next === current - WORLD_SIZE) {
                path[next] = Direction.Down;
            } else if (next === current - 1) {
                path[next] = Direction.Right;
            } else if (next === current + 1) {
                path[next] = Direction.Left;
            } else if (next === current + WORLD_SIZE) {
                path[next] = Direction.Up;
            }
            current = next;
        }
        return path;
    } */ locationMemory(item) {
        return this.memory.find((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(memory.data.noun.data.selector, item));
    }
    whereIsItem(item) {
        const memory = this.memory.find((memory)=>memory.type === "location" && memory.data.noun.type === "thing" && (0, _lib.ItemConditions).matches(item, (0, _lib.REGISTRY).getItem((0, _lib.REGISTRY).query(memory.data.noun.data.selector)[0] || 0)));
        if (memory == null) return null;
        return memory.data;
    }
    completeObjective() {
        const lastIndex = this.objectives.length - 1;
        this.objectives.forEach((objective)=>{
            if (objective.type === "obtain") objective.data.children = objective.data.children.filter((child)=>child !== lastIndex);
        });
        this.objectives.pop();
        this.short = {};
    }
    addObjective(objective, parent) {
        if (parent != null && parent.type === "obtain" && objective.type === "obtain") parent.data.children.push(this.objectives.length);
        this.objectives.push(objective);
        this.short = {};
    }
    act() {
        if (this.nextAction != null) return this.nextAction;
        else return Action.Nothing();
    }
    outerIndex() {
        return Math.floor(this.y / CHUNK_SIZE) * WORLD_SIZE + Math.floor(this.x / CHUNK_SIZE);
    }
    innerIndex() {
        return this.y % CHUNK_SIZE * CHUNK_SIZE + this.x % CHUNK_SIZE;
    }
}
exports.default = Person;
function generateGroup(now, world) {
    const surname = generateName();
    const size = Math.round(Math.random() * 4 + 2);
    const x = Math.round(Math.random() * world.size);
    const y = Math.round(Math.random() * world.size);
    const group = [];
    const takenPositions = [];
    for(let i = 0; i < size; i += 1){
        const name = generateName();
        let px = x;
        let py = y;
        while(takenPositions.find(([tx, ty])=>tx === px && ty === py) || world.get(px, py) != null){
            px = Math.min(Math.max(x + Math.round(Math.random() * 20 - 10), 0), world.size - 1);
            py = Math.min(Math.max(y + Math.round(Math.random() * 20 - 10), 0), world.size - 1);
        }
        takenPositions.push([
            px,
            py
        ]);
        group.push(new Person(generateId(), name, surname, now, px, py));
    }
    for (const person of group)for (const other of group){
        if (person === other) continue;
        person.reputations[other.id] = 100;
        person.memory.push(Memory.Exists(Noun.Person(other.id), now));
        person.health = 80 + Math.random() * 20;
        person.home = {
            x,
            y
        };
    }
    return group;
}
function assignReputations(people) {
    for (const person of people)for (const other of people){
        if (person === other) continue;
        if (person.reputations[other.id] === undefined) person.reputations[other.id] = 0;
        if (person.female() != other.female()) person.reputations[other.id] += 50;
        person.reputations[other.id] += Math.round(Math.random() * 20 - 10);
    }
}

},{"./lib":"khj5u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hr1nT","4NwX8"], "4NwX8", "parcelRequire74bd")

//# sourceMappingURL=index.d593055f.js.map
