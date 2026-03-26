/**
 * @name enhancecodeblocks
 * @description Enhances Discords Codeblocks & Text File Attachments
 * @version 1.0.27
 * @author Doggybootsy
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// shim-@plugin/css:@plugin/css
var css_default, init_css = __esm({
  "shim-@plugin/css:@plugin/css"() {
    css_default = `[class^="obscuredTextContent_"]:has(.ECBlock) {
  pointer-events: all !important;
}
[class*="hidden_"] .ECBlock::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--__current--spoiler-background-color);
  border-radius: var(--radius-xs);
  pointer-events: none;
}
.ECBlock-file {
  width: 100%;
  display: flex;
}
.ECBlock {
  background: var(--background-secondary-alt);
  border: 1px solid var(--background-tertiary);
  border-radius: var(--radius-xs);
  overflow: hidden;
  color: var(--text-muted);
  text-size-adjust: none;
  line-height: 1rem;
  position: relative;
}
.ECBlock > div {
  opacity: var(--__current--spoiler-content-opacity);
  -webkit-transition: opacity .1s ease;
  transition: opacity .1s ease;
}
.ECBlock.ECBlock-wrap .ECBlock-table tr > :last-child {
  white-space: pre-wrap;
}
.ECBlock.ECBlock-error {
  padding: 8px;
  background: var(--background-message-automod);
}
.ECBlock.ECBlock-error pre {
  max-width: 100%;
}
.ECBlock .react-error {
  margin-bottom: 8px;
}
.ECBlock-numberSetting {
  transform: translateY(-5px);
  display: flex;
}
.ECBlock-numberSetting [class*="value-"] {
  width: 120px;
}
.ECBlock-file .ECBlock {
  /* so they wont be small */
  width: 100vw;
  max-width: 66rem;
}
.ECBlock.ECBlock-loading .ECBlock-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ECBlock .ECBlock-header {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--background-tertiary);
  align-items: center;
  color: var(--text-normal);
} 
.ECBlock .ECBlock-title {
  display: flex;
  align-items: center;
  margin-right: 16px;
} 
.ECBlock .ECBlock-title > :not(:last-child) {
  margin-right: 8px;
} 
.ECBlock .ECBlock-lang {
  cursor: pointer;
} 
.ECBlock .ECBlock-byteSize {
  font-size: small;
  color: var(--text-muted);
} 
.ECBlock .ECBlock-collapse {
  cursor: pointer;
  display: flex;
  color: var(--interactive-normal);
} 
.ECBlock .ECBlock-collapse:hover {
  color: var(--interactive-hover);  
}
.ECBlock .ECBlock-collapse:active {
  color: var(--interactive-active);  
}
.ECBlock .ECBlock-enlarge {
  width: 22px;
  justify-content: center;
} 
.ECBlock-collapsed .ECBlock-header {
  border-bottom: 0 solid var(--background-tertiary);
} 
.ECBlock .ECBlock-actions {
  display: flex;
} 
.ECBlock .ECBlock-actions > :not(:last-child) {
  margin-right: 8px;
} 
.ECBlock .ECBlock-actions > .ECBlock-remove:hover {
  color: var(--status-danger);
} 
.ECBlock .ECBlock-actions > div {
  cursor: pointer;
  color: var(--interactive-normal);
  display: flex;
  align-items: center;
} 
.ECBlock.ECBlock-loading .ECBlock-actions > div {
  color: var(--interactive-muted);
  cursor: not-allowed;
} 
.ECBlock .ECBlock-actions > div:hover {
  color: var(--interactive-hover);  
}
.ECBlock .ECBlock-actions > div:active,
.ECBlock .ECBlock-actions .ECBlock-active {
  color: var(--interactive-active);  
}
.ECBlock .ECBlock-actions > div.ECBlock-copied {
  color: var(--status-positive);
}
.ECBlock .ECBlock-wrapper {
  overflow: auto scroll;
  user-select: text;
}
.ECBlock .ECBlock-table {
  font-size: 0.9em;
  font-family: var(--font-code);
}
.ECBlock .ECBlock-table tr > :first-child {
  padding: 0 8px;
  border-right: 1px solid var(--background-tertiary);
  user-select: none;
  text-align: center;
  position: sticky;
  left: 0;
  background: var(--background-secondary-alt);
}
.ECBlock .ECBlock-table tr > :last-child {
  padding: 0 8px;
  white-space: pre;
  user-select: text;
  width: 100%;
}
.ECBlock-preview {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ECBlock-overflow {
  position: fixed;
  right: 12px;
  top: 12px;
  display: flex;
  color: var(--interactive-normal);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--radius-xs);
}
.ECBlock-overflow:hover {
  color: var(--interactive-hover);  
  background: var(--background-modifier-hover);
}
.ECBlock-overflow:active {
  color: var(--interactive-active);  
  background: var(--background-modifier-active);
}
.ECBlock-overflow.ECBlock-selected {
  color: var(--interactive-active);  
  background: var(--background-modifier-selected);
}
.ECBlock-zIndex-hook {
  z-index: 1;
}
.ECBlock-selectSetting select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid var(--background-tertiary);
  background: var(--background-secondary);
  color: var(--text-normal);
}
.ECBlock-markdown {
  background: var(--background-secondary-alt);
  padding: 16px;
  color: var(--text-normal);
  line-height: 1.6;
}
.ECBlock-markdown h1,
.ECBlock-markdown h2,
.ECBlock-markdown h3,
.ECBlock-markdown h4,
.ECBlock-markdown h5,
.ECBlock-markdown h6 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 600;
  color: var(--text-normal);
}
.ECBlock-markdown h1 { font-size: 2em; border-bottom: 1px solid var(--background-tertiary); padding-bottom: 0.3em; }
.ECBlock-markdown h2 { font-size: 1.5em; border-bottom: 1px solid var(--background-tertiary); padding-bottom: 0.3em; }
.ECBlock-markdown h3 { font-size: 1.25em; }
.ECBlock-markdown h4 { font-size: 1em; }
.ECBlock-markdown h5 { font-size: 0.875em; }
.ECBlock-markdown h6 { font-size: 0.85em; color: var(--text-muted); }
.ECBlock-markdown p {
  margin-bottom: 1em;
}
.ECBlock-markdown code {
  background: var(--background-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: var(--font-code);
  font-size: 0.9em;
}
.ECBlock-markdown pre {
  background: var(--background-tertiary);
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
  margin-bottom: 1em;
}
.ECBlock-markdown pre code {
  background: transparent;
  padding: 0;
}
.ECBlock-markdown blockquote {
  border-left: 4px solid var(--background-tertiary);
  padding-left: 1em;
  margin-left: 0;
  color: var(--text-muted);
}
.ECBlock-markdown a {
  color: var(--text-link);
  text-decoration: none;
}
.ECBlock-markdown a:hover {
  text-decoration: underline;
}
.ECBlock-markdown ul,
.ECBlock-markdown ol {
  margin-bottom: 1em;
  padding-left: 2em;
}
.ECBlock-markdown li {
  margin-bottom: 0.25em;
}
.ECBlock-markdown table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1em;
}
.ECBlock-markdown table th,
.ECBlock-markdown table td {
  border: 1px solid var(--background-tertiary);
  padding: 8px;
}
.ECBlock-markdown table th {
  background: var(--background-secondary);
}
.ECBlock-markdown img {
  max-width: 100%;
  border-radius: 4px;
}
.ECBlock-markdown hr {
  border: none;
  border-top: 1px solid var(--background-tertiary);
  margin: 1em 0;
}
.ECBlock-markdown input[type="checkbox"] {
  margin-right: 8px;
}
.ECBlock-markdown li.task-list-item {
  list-style-type: none;
}`;
  }
});

// shim-react:react
var require_react = __commonJS({
  "shim-react:react"(exports2) {
    var module2 = BdApi.React;
    Object.assign(exports2, module2);
    "default" in module2 || Object.assign(exports2, { default: module2 });
  }
});

// shim-react-spring:react-spring
var require_react_spring = __commonJS({
  "shim-react-spring:react-spring"(exports2) {
    var module2 = BdApi.Webpack.getModule((m) => m.useSpring && m.animated);
    Object.assign(exports2, module2);
    "default" in module2 || Object.assign(exports2, { default: module2 });
  }
});

// src/hooks/common.ts
function useStateDeps(initialState, deps) {
  let [state, setState] = (0, import_react.useState)(initialState);
  return (0, import_react.useLayoutEffect)(() => setState(initialState), deps), [state, setState];
}
var import_react, init_common = __esm({
  "src/hooks/common.ts"() {
    "use strict";
    import_react = __toESM(require_react());
  }
});

// shim-highlight.js:highlight.js
var require_highlight = __commonJS({
  "shim-highlight.js:highlight.js"(exports2) {
    var module2 = BdApi.Webpack.getModule((m) => m.highlight && m.listLanguages);
    Object.assign(exports2, module2);
    "default" in module2 || Object.assign(exports2, { default: module2 });
  }
});

// src/util/index.ts
function debounce(handler, timeout) {
  let timer;
  return function() {
    clearTimeout(timer), timer = setTimeout(() => handler.apply(this, arguments), timeout);
  };
}
function createURL(content) {
  let svg = domParser.parseFromString(content, "image/svg+xml").documentElement;
  return svg instanceof SVGElement ? (svg.getAttribute("xmlns") || svg.setAttribute("xmlns", "http://www.w3.org/2000/svg"), URL.createObjectURL(new Blob([svg.outerHTML], { type: "image/svg+xml" }))) : !1;
}
function formatBytes(bytes) {
  if (Number.isNaN(bytes))
    return "";
  if (bytes === 0)
    return "0 B";
  let i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${["", "K", "M"][i]}B`;
}
function message(key) {
  return intl.intl.string(intl.t[key]);
}
var import_react2, domParser, intl, init_util = __esm({
  "src/util/index.ts"() {
    "use strict";
    import_react2 = __toESM(require_react());
    domParser = new DOMParser();
    intl = BdApi.Webpack.getModule((m) => m.t && m.intl);
  }
});

// src/data/index.ts
function useData(key, presetValue) {
  let [state, setState] = (0, import_react3.useState)(() => getData(key, presetValue)), updateState = (0, import_react3.useCallback)((state2) => {
    setState(state2), setData(key, state2);
    let set = listeners.get(key);
    set || (set = /* @__PURE__ */ new Set());
    for (let listener of set)
      listener();
  }, [state]);
  return (0, import_react3.useLayoutEffect)(() => {
    let set = listeners.get(key);
    set || listeners.set(key, set = /* @__PURE__ */ new Set());
    function forceUpdate() {
      setState(() => getData(key, presetValue));
    }
    return set.add(forceUpdate), () => void set?.delete(forceUpdate);
  }, []), [
    state,
    updateState
  ];
}
function getData(key, presetValue) {
  return BdApi.Data.load("ECBlocks", key) ?? presetValue;
}
function setData(key, newValue) {
  return BdApi.Data.save("ECBlocks", key, newValue);
}
var import_react3, listeners, init_data = __esm({
  "src/data/index.ts"() {
    "use strict";
    import_react3 = __toESM(require_react()), listeners = /* @__PURE__ */ new Map();
  }
});

// src/hooks/codeblock.ts
function useLanguage(language) {
  return (0, import_react4.useMemo)(() => {
    let lang = import_highlight.default.getLanguage(language);
    return lang || import_highlight.default.getLanguage("txt");
  }, [language]);
}
function useHighlighted(language, _lang, content) {
  let [maxBytes] = useData("maxBytes", 21846);
  return (0, import_react4.useMemo)(() => {
    let lang = language.aliases?.[0] ? language.aliases[0] : language.name, _content = content.length > maxBytes ? `${content.slice(0, maxBytes)}

[Download to view the rest of this file]` : content;
    return import_highlight.default.getLanguage(lang) ? import_highlight.default.highlight(_content, { language: lang }) : import_highlight.default.highlight(_content, { language: _lang });
  }, [content, language, maxBytes]);
}
function useSrc(content) {
  let [src, setSrc] = (0, import_react4.useState)(() => createURL(content));
  return (0, import_react4.useEffect)(() => {
    if (src)
      return () => URL.revokeObjectURL(src);
  }, [src]), (0, import_react4.useLayoutEffect)(() => {
    setSrc((old) => (old && URL.revokeObjectURL(old), createURL(content)));
  }, [content]), src;
}
function useSizing(collapsed, tableRef, modal, content, lang, showPreview) {
  let [maxHeight] = useData("maxHeight", 300), [previewHeight] = useData("previewHeight", 200), [instantCollapse] = useData("instantCollapse", !1), ref = (0, import_react4.useRef)(!1), [tableHeight, setTableHeight] = (0, import_react4.useState)(0), { height, angle } = import_react_spring.default.useSpring({
    config: ref.current ? instantCollapse ? { duration: 0 } : import_react_spring.default.config.default : { duration: 0 },
    height: collapsed ? 0 : tableHeight,
    angle: collapsed ? 0 : 1
  });
  return (0, import_react4.useLayoutEffect)(() => {
    if (ref.current = !1, modal)
      setTableHeight(400);
    else if (tableRef.current && tableRef.current.parentElement) {
      let { height: height2 } = getComputedStyle(tableRef.current.parentElement, "::-webkit-scrollbar"), match = height2.match(/([0-9]+)(.*)/), scrollerHeight;
      try {
        if (match) {
          let [, size, length] = match;
          if (!CSS[length])
            scrollerHeight = Number(height2.replace("px", ""));
          else {
            let css = CSS[length](size);
            css ? scrollerHeight = css.to("px").value : scrollerHeight = Number(height2.replace("px", ""));
          }
        } else
          scrollerHeight = Number(height2.replace("px", ""));
      } catch {
        scrollerHeight = Number(height2.replace("px", ""));
      }
      tableRef.current.parentElement.scroll({ left: 1e4 });
      let add = tableRef.current.parentElement.scrollLeft !== 0;
      tableRef.current.parentElement.scroll({ left: 0 }), setTableHeight(
        // Max Height of 300px
        Math.min((add ? scrollerHeight + tableRef.current.offsetHeight : tableRef.current.offsetHeight) + 2, maxHeight)
      );
    } else
      setTableHeight(previewHeight);
    setTimeout(() => ref.current = !0);
  }, [content, showPreview, lang, maxHeight, previewHeight]), { height, angle };
}
var import_highlight, import_react4, import_react_spring, init_codeblock = __esm({
  "src/hooks/codeblock.ts"() {
    "use strict";
    import_highlight = __toESM(require_highlight()), import_react4 = __toESM(require_react()), import_react_spring = __toESM(require_react_spring());
    init_util();
    init_data();
  }
});

// src/hooks/attachment.ts
function useFetchContent(url) {
  let [content, setContent] = (0, import_react5.useState)(() => cache.has(url) ? cache.get(url) : !1);
  return (0, import_react5.useEffect)(() => {
    if (content !== !1)
      return;
    let abortController = new AbortController();
    return (async () => {
      let result = await fetch(url, { signal: abortController.signal });
      if (result.ok) {
        let text = await result.text();
        cache.set(url, text), setContent(text);
      } else
        setContent(`Enhance Codeblocks FETCH ERROR: STATUS=${JSON.stringify(result.status)} OK=${JSON.stringify(result.ok)} URL=${JSON.stringify(result.url)}`);
    })(), () => abortController.abort();
  }, []), content;
}
var import_react5, cache, init_attachment = __esm({
  "src/hooks/attachment.ts"() {
    "use strict";
    import_react5 = __toESM(require_react()), cache = /* @__PURE__ */ new Map();
  }
});

// src/hooks/index.ts
var init_hooks = __esm({
  "src/hooks/index.ts"() {
    "use strict";
    init_common();
    init_codeblock();
    init_attachment();
  }
});

// src/components/icon.tsx
function Icon({ size, name }) {
  let Icon2 = (0, import_react6.useMemo)(() => icons[name] ? icons[name] : icons.error, [name]);
  return BdApi.React.createElement(Icon2, { width: size, height: size });
}
var import_react6, icons, icon_default, init_icon = __esm({
  "src/components/icon.tsx"() {
    "use strict";
    import_react6 = __toESM(require_react()), icons = {
      arrow({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("polygon", { fillRule: "nonzero", fill: "currentColor", points: "18.35 4.35 16 2 6 12 16 22 18.35 19.65 10.717 12" }));
      },
      eye({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z" }), BdApi.React.createElement("path", { fill: "currentColor", d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" }));
      },
      download({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z" }));
      },
      copy({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z" }), BdApi.React.createElement("path", { fill: "currentColor", d: "M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" }));
      },
      trash({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z" }), BdApi.React.createElement("path", { fill: "currentColor", d: "M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z" }));
      },
      discord({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 28 20" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z" }));
      },
      at({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z" }));
      },
      globe({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" }));
      },
      overflow({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 24 24" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z" }));
      },
      enlarge({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 16 16" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z" }), BdApi.React.createElement("path", { fill: "currentColor", d: "M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z" }));
      },
      github({ width, height }) {
        return BdApi.React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", width, height }, BdApi.React.createElement("path", { d: "m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" }));
      },
      error({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 20 20", color: "var(--status-danger)" }, BdApi.React.createElement("path", { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", "fill-rule": "evenodd", "clip-rule": "evenodd", fill: "currentColor" }));
      }
    };
    icon_default = (0, import_react6.memo)(Icon);
  }
});

// src/components/settingsItem.tsx
function SettingItem({ title, disabled, hideBorder, item, note }) {
  return BdApi.React.createElement("div", { className: `${classes.container}${disabled ? ` ${classes.disabled}` : ""}` }, BdApi.React.createElement("div", { className: classes.labelRow }, BdApi.React.createElement("label", { className: classes.title }, title), BdApi.React.createElement("div", { className: classes.control }, item)), note && BdApi.React.createElement(Text, { className: `${noteClasses.description} ${noteClasses.modeDefault}${disabled ? ` ${noteClasses.modeDisabled}` : ""}` }, note), !hideBorder && BdApi.React.createElement(Divider, { className: classes.dividerDefault }));
}
var import_react7, classes, noteClasses, Divider, Text, settingsItem_default, init_settingsItem = __esm({
  "src/components/settingsItem.tsx"() {
    "use strict";
    import_react7 = __toESM(require_react()), classes = BdApi.Webpack.getModule((m) => m.container && m.dividerDefault), noteClasses = BdApi.Webpack.getModule((m) => m.description && m.modeDefault), Divider = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings("),style:", ".divider,"), { searchExports: !0 }), Text = BdApi.Webpack.getModule((m) => m.Colors && m.Sizes);
    settingsItem_default = (0, import_react7.memo)(SettingItem);
  }
});

// src/components/index.tsx
var import_react8, ModalRoot, Spinner, foundToolTip, Tooltip, Switch, Popout, ErrorBoundary, init_components = __esm({
  "src/components/index.tsx"() {
    "use strict";
    import_react8 = __toESM(require_react());
    init_icon();
    init_settingsItem();
    ModalRoot = BdApi.Webpack.getByStrings("reducedMotion:", "transitionState:", "small", "dialog", { searchExports: !0 }), Spinner = BdApi.Webpack.getModule((m) => m.Type?.PULSING_ELLIPSIS, { searchExports: !0 }), foundToolTip = BdApi.Webpack.getModule((m) => m.prototype?.setDomElement && m.prototype.render.toString().includes("renderTooltip()"), { searchExports: !0 }), Tooltip = foundToolTip || BdApi.Components.Tooltip, Switch = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings("focusProps:", ",tooltipNote:"), { searchExports: !0 }), Popout = BdApi.Webpack.getModule((m) => m.prototype?.render?.toString().includes("shouldShowPopout"), { searchExports: !0 }), ErrorBoundary = class extends import_react8.default.Component {
      state = { hasError: !1 };
      componentDidCatch() {
        this.setState({ hasError: !0 });
      }
      render() {
        return this.state.hasError ? BdApi.React.createElement("div", { className: "ECBlock ECBlock-error" }, BdApi.React.createElement("div", { className: "react-error", onClick: () => this.setState({ hasError: !1 }) }, "There was an unexpected Error with Enhance Codeblocks. Click to try and rerender."), this.props.fallback) : this.props.children;
      }
    };
  }
});

// src/codeblock/changeLang.tsx
function getContent(searchValue) {
  return LANGUAGES.map(({ value, aliases, lang }) => ({
    component: BdApi.React.createElement(SearchItem, { key: value, value }, BdApi.React.createElement(SearchItem.Label, null, lang.name)),
    aliases
  })).filter(({ aliases }) => aliases.find((alias) => alias.toLowerCase().includes(searchValue.toLocaleLowerCase()))).map(({ component }) => component);
}
function ChangeLang({ value, onChange }) {
  return BdApi.React.createElement(
    SearchPopout,
    {
      autoFocus: !0,
      className: languageSelector,
      multiSelect: !1,
      onChange,
      placeholder: message("utm4qs"),
      value: /* @__PURE__ */ new Set([value.toLowerCase()])
    },
    (searchValue) => getContent(searchValue)
  );
}
var import_react9, import_highlight2, SearchPopout, SearchItem, languageSelector, LANGUAGES, changeLang_default, init_changeLang = __esm({
  "src/codeblock/changeLang.tsx"() {
    "use strict";
    import_react9 = __toESM(require_react()), import_highlight2 = __toESM(require_highlight());
    init_util();
    SearchPopout = BdApi.Webpack.getModule((m) => m.toString?.().includes('4o4z3e"]'), { searchExports: !0 }), SearchItem = BdApi.Webpack.getModule((m) => m.Checkbox && m.Checkmark, { searchExports: !0 }), { languageSelector } = BdApi.Webpack.getModule((m) => m.languageSelector && m.fileName), LANGUAGES = import_highlight2.default.listLanguages().map((name) => {
      let lang = import_highlight2.default.getLanguage(name);
      return {
        lang,
        value: name,
        aliases: lang.aliases ? lang.aliases.concat(name) : [name]
      };
    });
    changeLang_default = (0, import_react9.memo)(ChangeLang);
  }
});

// src/codeblock/header.tsx
function Header({ angle, collapsed, setCollapsed, languageName, isSVG, isMarkdown, markdownViewMode, setMarkdownViewMode, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal, setLang, remove, bytes, loading }) {
  let [shouldShow, setShouldShow] = import_react10.default.useState(!1), targetElementRef = import_react10.default.useRef(null), formattedBytes = (0, import_react10.useMemo)(() => formatBytes(bytes), [bytes]);
  return BdApi.React.createElement("div", { className: "ECBlock-header" }, BdApi.React.createElement("div", { className: "ECBlock-title" }, !modal && BdApi.React.createElement(import_react_spring2.default.animated.div, { style: {
    transform: angle.to({
      output: ["rotate(180deg)", "rotate(270deg)"]
    })
  } }, BdApi.React.createElement(Tooltip, { text: collapsed ? "Collapsed" : "Uncollapse", hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-collapse", ...props, onClick: () => setCollapsed(!collapsed) }, BdApi.React.createElement(icon_default, { size: 22, name: "arrow" })))), BdApi.React.createElement(
    Popout,
    {
      targetElementRef,
      renderPopout: () => BdApi.React.createElement(changeLang_default, { value: languageName, onChange: (value) => {
        setShouldShow(!1), setLang(value);
      } }),
      shouldShow,
      position: "right",
      align: "top",
      spacing: 16,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      onRequestClose: () => setShouldShow(!1)
    },
    (props) => BdApi.React.createElement("div", { className: "ECBlock-lang", ref: targetElementRef, ...props, onClick: (event) => {
      setShouldShow(!shouldShow), props.onClick && props.onClick(event);
    } }, languageName)
  ), !loading && BdApi.React.createElement(Tooltip, { text: `${bytes} B`, hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-byteSize", ...props }, formattedBytes))), BdApi.React.createElement("div", { className: "ECBlock-actions" }, remove && BdApi.React.createElement(Tooltip, { text: message("oyYWHE"), hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-remove", ...props, onClick: remove }, BdApi.React.createElement(icon_default, { size: 22, name: "trash" }))), isSVG && BdApi.React.createElement(Tooltip, { text: "Preview", hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: `ECBlock-previewButton${showPreview ? " ECBlock-active" : ""}`, ...props, onClick: () => setShowPreview(!showPreview) }, BdApi.React.createElement(icon_default, { size: 22, name: "eye" }))), isMarkdown && BdApi.React.createElement(Tooltip, { text: markdownViewMode === "rendered" ? "View Code" : "View Rendered", hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: `ECBlock-markdownButton${markdownViewMode === "rendered" ? " ECBlock-active" : ""}`, ...props, onClick: () => setMarkdownViewMode?.(markdownViewMode === "rendered" ? "raw" : "rendered") }, BdApi.React.createElement(icon_default, { size: 22, name: markdownViewMode === "rendered" ? "copy" : "eye" }))), BdApi.React.createElement(Tooltip, { text: message("1WjMbC"), hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-downloadButton", ...props, onClick: downloadAction }, BdApi.React.createElement(icon_default, { size: 22, name: "download" }))), BdApi.React.createElement(Tooltip, { text: copied ? message("t5VZ88") : message("OpuAlK"), hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: `ECBlock-copyButton${copied ? " ECBlock-copied" : ""}`, ...props, onClick: copyAction }, BdApi.React.createElement(icon_default, { size: 22, name: "copy" }))), !modal && BdApi.React.createElement(Tooltip, { text: message("0PQYk3"), hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-enlarge", ...props, onClick: enlargeAction }, BdApi.React.createElement(icon_default, { size: 22, name: "enlarge" })))));
}
var import_react10, import_react_spring2, header_default, init_header = __esm({
  "src/codeblock/header.tsx"() {
    "use strict";
    import_react10 = __toESM(require_react()), import_react_spring2 = __toESM(require_react_spring());
    init_components();
    init_changeLang();
    init_util();
    header_default = (0, import_react10.memo)(Header);
  }
});

// src/codeblock/table/handler.ts
function properties(language, line) {
  let props = {
    dangerouslySetInnerHTML: { __html: line },
    className: "ECBlock-line"
  };
  if (!language.name)
    return props;
  let handler = propHandlers[language.name];
  return handler ? handler(line, props) : props;
}
var propHandlers, handler_default, init_handler = __esm({
  "src/codeblock/table/handler.ts"() {
    "use strict";
    propHandlers = {
      Diff(line, props) {
        let match = line.match(/<span class="hljs-(deletion|addition)">(.*?)<\/span>/);
        if (!match)
          return props;
        let [, type, content] = match;
        return props.dangerouslySetInnerHTML.__html = content, props.className = `${props.className} hljs-${type}`, props;
      }
    };
    handler_default = properties;
  }
});

// src/codeblock/table/line.tsx
function Line({ index, language, line }) {
  let props = (0, import_react11.useMemo)(() => handler_default(language, line), [language, line]);
  return BdApi.React.createElement("tr", { className: "ECBlock-row" }, BdApi.React.createElement("td", { className: "ECBlock-index" }, index + 1), BdApi.React.createElement("td", { ...props }));
}
var import_react11, line_default, init_line = __esm({
  "src/codeblock/table/line.tsx"() {
    "use strict";
    import_react11 = __toESM(require_react());
    init_handler();
    line_default = (0, import_react11.memo)(Line);
  }
});

// src/codeblock/table/index.tsx
function Code({ highlighted, tableRef, language }) {
  let spl = (0, import_react12.useMemo)(() => highlighted.value.split(`
`), [highlighted]);
  return BdApi.React.createElement("table", { className: "ECBlock-table", ref: tableRef }, BdApi.React.createElement("tbody", null, spl.map((line, index) => BdApi.React.createElement(line_default, { key: `${line}__${index}`, index, line, language }))));
}
var import_react12, table_default, init_table = __esm({
  "src/codeblock/table/index.tsx"() {
    "use strict";
    import_react12 = __toESM(require_react());
    init_line();
    table_default = (0, import_react12.memo)(Code);
  }
});

// src/codeblock/preview.tsx
function Preview({ height, src }) {
  return BdApi.React.createElement("div", { className: "ECBlock-preview" }, BdApi.React.createElement("img", { src, height }));
}
var import_react13, preview_default, init_preview = __esm({
  "src/codeblock/preview.tsx"() {
    "use strict";
    import_react13 = __toESM(require_react());
    preview_default = (0, import_react13.memo)(Preview);
  }
});

// src/codeblock/markdown.tsx
function MarkdownRenderer({ content }) {
  let html = (window.marked || (() => (text) => {
    let html2 = text.replace(/^#### (.*$)/gim, "<h4>$1</h4>").replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>").replace(/^# (.*$)/gim, "<h1>$1</h1>").replace(/\*\*\*(.*?)\*\*\*/gim, "<strong><em>$1</em></strong>").replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>").replace(/\*(.*?)\*/gim, "<em>$1</em>").replace(/~~(.*?)~~/gim, "<del>$1</del>").replace(/`(.*?)`/gim, "<code>$1</code>").replace(/\n/gim, "<br>");
    return html2 = html2.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>"), html2 = html2.replace(/^\- \[x\] (.*$)/gim, '<li class="task-list-item"><input type="checkbox" checked disabled> $1</li>'), html2 = html2.replace(/^\- \[ \] (.*$)/gim, '<li class="task-list-item"><input type="checkbox" disabled> $1</li>'), html2 = html2.replace(/^\- (.*$)/gim, "<li>$1</li>"), html2 = html2.replace(/^\d+\. (.*$)/gim, "<li>$1</li>"), html2 = html2.replace(/^---$/gim, "<hr>"), html2 = html2.replace(/^\*\*\*$/gim, "<hr>"), html2 = html2.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>'), html2 = html2.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1">'), html2 = html2.replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>"), html2 = html2.replace(/(<li[^>]*>.*?<\/li>\n?)+/gim, "<ul>$&</ul>"), html2;
  })())(content);
  return BdApi.React.createElement(
    "div",
    {
      className: "ECBlock-markdown",
      dangerouslySetInnerHTML: { __html: html }
    }
  );
}
var import_react14, markdown_default, init_markdown = __esm({
  "src/codeblock/markdown.tsx"() {
    "use strict";
    import_react14 = __toESM(require_react());
    markdown_default = import_react14.default.memo(MarkdownRenderer);
  }
});

// src/codeblock/index.tsx
function CodeBlock({ content, lang, modal, fileName, loading = !1, remove }) {
  let tableRef = (0, import_react15.useRef)(null), [_lang, setLang] = useStateDeps(lang, [lang]), [autoCollapse] = useData("autoCollapse", !1), [collapsed, setCollapsed] = useStateDeps(() => modal ? !1 : autoCollapse, [autoCollapse]), language = useLanguage(_lang), highlighted = useHighlighted(language, _lang, content), [showPreview, setShowPreview] = (0, import_react15.useState)(!1), [previewHeight] = useData("previewHeight", 200), [markdownViewMode, setMarkdownViewMode] = useData("markdownViewMode", "raw"), { height, angle } = useSizing(collapsed, tableRef, modal, content, lang, showPreview), src = useSrc(content), isSVG = (0, import_react15.useMemo)(() => lang === "svg" && language.name === "HTML, XML" && Boolean(src), [lang, language, src]), isMarkdown = (0, import_react15.useMemo)(() => ["md", "markdown", "mdx"].includes(lang.toLowerCase()), [lang]), downloadAction = (0, import_react15.useCallback)(() => {
    loading || window.DiscordNative && window.DiscordNative.fileManager.saveWithDialog(content, fileName());
  }, [content, lang, loading]), [copied, setCopied] = (0, import_react15.useState)(!1), setCopiedFalse = (0, import_react15.useMemo)(() => debounce(() => setCopied(!1), 2e3), []), copyAction = (0, import_react15.useCallback)(() => {
    loading || (window.DiscordNative && window.DiscordNative.clipboard.copy(content), setCopied(!0), setCopiedFalse());
  }, [content, copied, loading]), enlargeAction = (0, import_react15.useCallback)(() => {
    loading || openModal(({ transitionState }) => BdApi.React.createElement(ModalRoot, { transitionState, size: "large" }, BdApi.React.createElement(CodeBlock, { content, lang, modal: !0, fileName })));
  }, [content, lang, loading]), byteSize = (0, import_react15.useMemo)(() => new File([content], "").size, [content]), [wrapText] = useData("wrapText", !1);
  return BdApi.React.createElement(
    "div",
    {
      className: `ECBlock${wrapText ? " ECBlock-wrap" : ""}${collapsed ? " ECBlock-collapsed" : ""}${modal ? " ECBlock-modal" : ""}${loading ? " ECBlock-loading" : ""}`,
      "data-language": language.name
    },
    BdApi.React.createElement(
      header_default,
      {
        angle,
        collapsed,
        setCollapsed,
        languageName: `${isSVG ? "SVG, " : ""}${language.name}`,
        isSVG,
        isMarkdown,
        markdownViewMode,
        setMarkdownViewMode,
        showPreview,
        setShowPreview,
        copied,
        downloadAction,
        copyAction,
        enlargeAction,
        modal,
        setLang,
        remove,
        bytes: byteSize,
        loading
      }
    ),
    BdApi.React.createElement(import_react_spring3.default.animated.div, { className: `ECBlock-wrapper ${thin}`, style: { height } }, loading && BdApi.React.createElement(Spinner, { type: Spinner.Type.WANDERING_CUBES }), !loading && showPreview && isSVG && BdApi.React.createElement(preview_default, { src, height: modal ? 400 : previewHeight }), !loading && !(showPreview && isSVG) && isMarkdown && markdownViewMode === "rendered" && BdApi.React.createElement(markdown_default, { content }), !loading && !(showPreview && isSVG) && !(isMarkdown && markdownViewMode === "rendered") && BdApi.React.createElement(table_default, { highlighted, tableRef, language }))
  );
}
var import_react15, import_react_spring3, thin, openModal, codeblock_default, init_codeblock2 = __esm({
  "src/codeblock/index.tsx"() {
    "use strict";
    import_react15 = __toESM(require_react()), import_react_spring3 = __toESM(require_react_spring());
    init_hooks();
    init_header();
    init_table();
    init_preview();
    init_markdown();
    init_components();
    init_data();
    init_util();
    ({ thin } = BdApi.Webpack.getModule((m) => m.thin && m.none)), openModal = BdApi.Webpack.getMangled("?.stackNextByDefault", {
      openModal: BdApi.Webpack.Filters.byStrings("?.stackNextByDefault"),
      closeModal: BdApi.Webpack.Filters.byStrings(".setState", ".getState()["),
      closeAllModals: BdApi.Webpack.Filters.byStrings(".getState();for")
    }, {
      firstId: 192308,
      cacheId: "betterdiscord-modals"
    }).openModal;
    codeblock_default = (0, import_react15.memo)(CodeBlock);
  }
});

// src/attachment/wrapper.tsx
function AttachmentWrapper({ item, onContextMenu, className, remove, canDeleteAttachments }) {
  let content = useFetchContent(item.originalItem.url), lang = (0, import_react16.useMemo)(() => {
    let spl = item.originalItem.filename.split(".");
    return spl.length - 1 ? spl.pop() : "";
  }, []);
  return BdApi.React.createElement("div", { className: `ECBlock-file ${className}`, onContextMenu }, BdApi.React.createElement(
    codeblock_default,
    {
      content: content || "",
      lang,
      modal: !1,
      fileName: () => item.originalItem.filename,
      loading: typeof content != "string",
      remove: canDeleteAttachments ? remove : !1
    }
  ));
}
var import_react16, wrapper_default, init_wrapper = __esm({
  "src/attachment/wrapper.tsx"() {
    "use strict";
    import_react16 = __toESM(require_react());
    init_hooks();
    init_codeblock2();
    wrapper_default = (0, import_react16.memo)(AttachmentWrapper);
  }
});

// src/attachment/index.tsx
function Attachment({ props, item: attachment2, renderPlaintextFilePreview, canDeleteAttachments }) {
  let [maxFileBytes] = useData("maxFileBytes", 2e8), [error, setError] = useStateDeps(() => attachment2.item.originalItem.size > maxFileBytes, [maxFileBytes]);
  return error ? BdApi.React.createElement("div", { className: "ECBlock ECBlock-error" }, BdApi.React.createElement("div", { className: "react-error", onClick: () => setError(!1) }, "File is too large for Enhance Codeblocks to handle. Click to try anyways"), renderPlaintextFilePreview.call(attachment2, props)) : BdApi.React.createElement(ErrorBoundary, { fallback: renderPlaintextFilePreview.call(attachment2, props) }, BdApi.React.createElement(wrapper_default, { ...props, canDeleteAttachments, remove: () => attachment2.onRemoveAttachment(attachment2.item) }));
}
var import_react17, attachment_default, init_attachment2 = __esm({
  "src/attachment/index.tsx"() {
    "use strict";
    import_react17 = __toESM(require_react());
    init_wrapper();
    init_components();
    init_data();
    init_hooks();
    attachment_default = (0, import_react17.memo)(Attachment);
  }
});

// src/settings/joinGuild.ts
async function getInvite() {
  if (cachedInvite)
    return cachedInvite;
  try {
    BdApi.UI.showToast(`Resolving invite '${GUILD_CONSTANT.invite}'`, { icon: !0, type: "info" });
    let { invite } = await inviteResolver.resolveInvite(GUILD_CONSTANT.invite, "Desktop Modal");
    return cachedInvite = invite, invite;
  } catch (error) {
    return BdApi.UI.showToast(`Unable to resolve invite '${GUILD_CONSTANT.invite}'`, { icon: !0, type: "danger" }), console.error(error), !1;
  }
}
async function joinGuild() {
  BdApi.UI.showInviteModal(GUILD_CONSTANT.invite);
}
var GUILD_CONSTANT, dispatcher, inviteResolver, InviteModalStore, originalIsOpen, native, originalNative, GuildStore, transitionTo, cachedInvite, joinGuild_default, init_joinGuild = __esm({
  "src/settings/joinGuild.ts"() {
    "use strict";
    GUILD_CONSTANT = {
      invite: "yYJA3qQE5F",
      guildId: "864267123694370836"
    }, dispatcher = BdApi.Webpack.getModule((m) => m.subscribe && m.dispatch), inviteResolver = BdApi.Webpack.getModule((m) => m.resolveInvite), InviteModalStore = BdApi.Webpack.getModule((m) => m.getName?.() === "InviteModalStore"), { isOpen: originalIsOpen } = InviteModalStore, native = BdApi.Webpack.getModule((m) => m.minimize && m.requireModule), { minimize: originalNative } = native, GuildStore = BdApi.Webpack.getModule((m) => m.getName?.() === "GuildStore"), transitionTo = BdApi.Webpack.getModule((m) => typeof m == "function" && String(m).includes('"transitionTo - Transitioning to "'), { searchExports: !0 });
    joinGuild_default = joinGuild;
  }
});

// src/settings/menu.tsx
var displayUserModal, Menu, shouldShowMenu, menu_default, init_menu = __esm({
  "src/settings/menu.tsx"() {
    "use strict";
    init_components();
    init_joinGuild();
    displayUserModal = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings(".analyticsLocation,", ",friendToken:"), { searchExports: !0 }), Menu = BdApi.ContextMenu.buildMenu([
      {
        label: "Support Discord",
        action: () => joinGuild_default(),
        icon: () => BdApi.React.createElement(icon_default, { name: "discord", size: 18 })
      },
      {
        label: "Profile",
        action: () => displayUserModal({ userId: "515780151791976453" }),
        icon: () => BdApi.React.createElement(icon_default, { name: "at", size: 18 })
      },
      {
        label: "Source",
        action: () => window.open("https://github.com/doggybootsy/enhancecodeblocks/"),
        icon: () => BdApi.React.createElement(icon_default, { name: "github", size: 18 })
      },
      {
        label: "Website",
        action: () => window.open("https://doggybootsy.github.io/"),
        icon: () => BdApi.React.createElement(icon_default, { name: "globe", size: 18 })
      }
    ]), shouldShowMenu = !0;
    try {
      Menu({})?.type === void 0 && (shouldShowMenu = !1);
    } catch {
    }
    menu_default = Menu;
  }
});

// src/settings/index.tsx
function clamp(x, lower, upper) {
  return Math.min(upper, Math.max(lower, x));
}
function Settings() {
  let [autoCollapse, setAutoCollapse] = useData("autoCollapse", !1), [instantCollapse, setInstantCollapse] = useData("instantCollapse", !1), [maxHeight, setMaxHeight] = useData("maxHeight", 300), [previewHeight, setPreviewHeight] = useData("previewHeight", 200), [maxBytes, setBytes] = useData("maxBytes", 21846), [maxFileBytes, setFileBytes] = useData("maxFileBytes", 2e8), [wrapText, setWrapText] = useData("wrapText", !1), [markdownViewMode, setMarkdownViewMode] = useData("markdownViewMode", "raw"), [open, setOpen] = (0, import_react18.useState)(!1), ref = (0, import_react18.useRef)(null);
  return (0, import_react18.useLayoutEffect)(() => {
    !ref.current || !ref.current.parentElement || ref.current.parentElement.classList.add("ECBlock-zIndex-hook");
  }, []), BdApi.React.createElement("div", { className: "ECBlock-settings", ref }, shouldShowMenu && BdApi.React.createElement(
    Popout,
    {
      onRequestClose: () => setOpen(!1),
      shouldShow: open,
      position: "left",
      align: "top",
      spacing: 8,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      renderPopout: () => BdApi.React.createElement(menu_default, { onClose: () => setOpen(!1) })
    },
    (props) => BdApi.React.createElement("div", { ...props, onClick: () => setOpen(!open), role: "button", tabIndex: 1, className: `ECBlock-overflow${open ? " ECBlock-selected" : ""}` }, BdApi.React.createElement(icon_default, { name: "overflow", size: 24 }))
  ), BdApi.React.createElement(
    Switch,
    {
      value: autoCollapse,
      onChange: setAutoCollapse
    },
    "Auto Collapse"
  ), BdApi.React.createElement(
    Switch,
    {
      value: instantCollapse,
      onChange: setInstantCollapse
    },
    "Instant Collapse"
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(
        "input",
        {
          type: "number",
          onChange: (event) => {
            setMaxHeight(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
          },
          value: maxHeight
        }
      )),
      title: "Max Height"
    }
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(
        "input",
        {
          type: "number",
          onChange: (event) => {
            setPreviewHeight(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
          },
          value: previewHeight
        }
      )),
      title: "Preview Height"
    }
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(
        "input",
        {
          type: "number",
          onChange: (event) => {
            setBytes(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
          },
          value: maxBytes
        }
      )),
      note: "This helps reduce lag, by limiting the amount of characters that gets highlighted",
      title: "Max Number of Characters"
    }
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(
        "input",
        {
          type: "number",
          onChange: (event) => {
            setFileBytes(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
          },
          value: maxFileBytes
        }
      )),
      note: "This helps preventing crashing on large files",
      title: "Max Number of Bytes allowed on files"
    }
  ), BdApi.React.createElement(
    Switch,
    {
      value: wrapText,
      onChange: setWrapText
    },
    "Wrap Text"
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-selectSetting" }, BdApi.React.createElement(
        "select",
        {
          value: markdownViewMode,
          onChange: (e) => setMarkdownViewMode(e.target.value)
        },
        BdApi.React.createElement("option", { value: "raw" }, "Raw"),
        BdApi.React.createElement("option", { value: "rendered" }, "Rendered")
      )),
      note: "Choose how markdown files (.md, .markdown, .mdx) display by default",
      title: "Markdown View Mode"
    }
  ));
}
var import_react18, settings_default, init_settings = __esm({
  "src/settings/index.tsx"() {
    "use strict";
    import_react18 = __toESM(require_react());
    init_components();
    init_data();
    init_menu();
    settings_default = (0, import_react18.memo)(Settings);
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var BdApi2, codeBlock, MessageAttachment, messageListItem, ECBlocks, src_default, init_src = __esm({
  "src/index.tsx"() {
    "use strict";
    init_css();
    init_codeblock2();
    init_attachment2();
    init_settings();
    init_components();
    BdApi2 = new window.BdApi("ECBlocks"), { codeBlock } = BdApi2.Webpack.getModule((m) => m.parse && m.parseTopic).defaultRules, MessageAttachment = BdApi2.Webpack.getModule((m) => m.defaultProps?.renderEmbeds, { searchExports: !0 }), { messageListItem } = BdApi2.Webpack.getModule((m) => m.messageListItem), ECBlocks = class {
      forceUpdateMessages() {
        let nodes = document.querySelectorAll(`.${messageListItem}`), owners = Array.from(nodes, (node) => BdApi2.ReactUtils.getOwnerInstance(node)).filter((m) => m);
        for (let owner of new Set(owners)) {
          let { render } = owner;
          render.toString() !== "() => null" && (owner.render = () => null, owner.forceUpdate(() => {
            owner.render = render, owner.forceUpdate();
          }));
        }
      }
      start() {
        BdApi2.Patcher.after(codeBlock, "react", (that, [props], res) => BdApi2.React.createElement(ErrorBoundary, { fallback: res }, BdApi2.React.createElement(codeblock_default, { ...props, modal: !1, fileName: () => `codeblock-${Date.now()}.${props.lang || "txt"}` }))), BdApi2.Patcher.after(MessageAttachment.prototype, "renderAttachments", (that, props, res) => {
          if (res)
            for (let attachment2 of res.props.items) {
              let { renderPlaintextFilePreview } = attachment2;
              attachment2.renderPlaintextFilePreview = attachment2.item.originalItem.__enhancecodeblocks__ ??= (props2) => BdApi2.React.createElement(attachment_default, { props: props2, item: attachment2, canDeleteAttachments: that.props.canDeleteAttachments, renderPlaintextFilePreview });
            }
        }), BdApi2.DOM.addStyle(css_default), this.forceUpdateMessages();
      }
      stop() {
        BdApi2.Patcher.unpatchAll(), BdApi2.DOM.removeStyle(), this.forceUpdateMessages();
      }
      getSettingsPanel() {
        return BdApi2.React.createElement(ErrorBoundary, null, BdApi2.React.createElement(settings_default, null));
      }
    }, src_default = ECBlocks;
  }
});

// index.js
module.exports = (init_src(), __toCommonJS(src_exports));
