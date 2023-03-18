/**
 * @name enhancecodeblocks
 * @description Enhances Discords Codeblocks & Text File Attachments
 * @version 1.0.11
 * @author Doggybootsy
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value);

// src/styles.css
var styles_default, init_styles = __esm({
  "src/styles.css"() {
    styles_default = `[class^="spoilerContainer-"] {\r
  width: 100%;\r
}\r
.ECBlock-file {\r
  width: 100%;\r
  display: flex;\r
}\r
.ECBlock {\r
  background: var(--background-secondary-alt);\r
  border: 1px solid var(--background-tertiary);\r
  border-radius: 3px;\r
  overflow: hidden;\r
  color: var(--text-muted);\r
}\r
.ECBlock.ECBlock-error {\r
  padding: 8px;\r
  background: var(--background-message-automod);\r
}\r
.ECBlock.ECBlock-error pre {\r
  max-width: 100%;\r
}\r
.ECBlock .react-error {\r
  margin-bottom: 8px;\r
}\r
.ECBlock-numberSetting {\r
  transform: translateY(-5px);\r
  display: flex;\r
}\r
.ECBlock-numberSetting [class*="value-"] {\r
  width: 120px;\r
}\r
.ECBlock-file .ECBlock {\r
  /* so they wont be small */\r
  width: 100vw;\r
}\r
.ECBlock.ECBlock-loading .ECBlock-wrapper {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
.ECBlock .ECBlock-header {\r
  display: flex;\r
  justify-content: space-between;\r
  padding: 8px;\r
  padding-bottom: 6px;\r
  border-bottom: 1px solid var(--background-tertiary);\r
  align-items: center;\r
  color: var(--text-normal);\r
} \r
.ECBlock .ECBlock-title {\r
  display: flex;\r
  align-items: center;\r
  margin-right: 16px;\r
} \r
.ECBlock .ECBlock-title > :not(:last-child) {\r
  margin-right: 8px;\r
} \r
.ECBlock .ECBlock-lang {\r
  cursor: pointer;\r
} \r
.ECBlock .ECBlock-byteSize {\r
  font-size: small;\r
  color: var(--text-muted);\r
} \r
.ECBlock .ECBlock-collapse {\r
  cursor: pointer;\r
  display: flex;\r
} \r
.ECBlock .ECBlock-enlarge {\r
  width: 22px;\r
  justify-content: center;\r
} \r
.ECBlock-collapsed .ECBlock-header {\r
  border-bottom: 0 solid var(--background-tertiary);\r
} \r
.ECBlock .ECBlock-actions {\r
  display: flex;\r
} \r
.ECBlock .ECBlock-actions > :not(:last-child) {\r
  margin-right: 8px;\r
} \r
.ECBlock .ECBlock-actions > .ECBlock-remove:hover {\r
  color: var(--status-danger);\r
} \r
.ECBlock .ECBlock-actions > div {\r
  cursor: pointer;\r
  color: var(--interactive-normal);  \r
  display: flex;\r
  align-items: center;\r
} \r
.ECBlock.ECBlock-loading .ECBlock-actions > div {\r
  color: var(--interactive-muted);\r
  cursor: not-allowed;\r
} \r
.ECBlock .ECBlock-actions > div:hover {\r
  color: var(--interactive-hover);  \r
}\r
.ECBlock .ECBlock-actions > div:active,\r
.ECBlock .ECBlock-actions .ECBlock-active {\r
  color: var(--interactive-active);  \r
}\r
.ECBlock .ECBlock-actions > div.ECBlock-copied {\r
  color: var(--status-positive);\r
}\r
.ECBlock .ECBlock-wrapper {\r
  overflow: auto scroll;\r
}\r
.ECBlock .ECBlock-table {\r
  font-size: 0.9rem;\r
}\r
.ECBlock .ECBlock-table tr > :first-child {\r
  padding: 0 8px;\r
  border-right: 1px solid var(--background-tertiary);\r
  user-select: none;\r
  text-align: center;\r
  position: sticky;\r
  left: 0;\r
  background: var(--background-secondary-alt);\r
}\r
.ECBlock .ECBlock-table tr > :last-child {\r
  padding: 0 8px;\r
  white-space: pre;\r
  user-select: text;\r
  width: 100%;\r
}\r
.ECBlock-preview {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
.ECBlock-overflow {\r
  position: fixed;\r
  right: 12px;\r
  top: 12px;\r
  display: flex;\r
  color: var(--interactive-normal);\r
  cursor: pointer;\r
  padding: 4px;\r
  border-radius: 4px;\r
}\r
.ECBlock-overflow:hover {\r
  color: var(--interactive-hover);  \r
  background: var(--background-modifier-hover);\r
}\r
.ECBlock-overflow:active {\r
  color: var(--interactive-active);  \r
  background: var(--background-modifier-active);\r
}\r
.ECBlock-overflow.ECBlock-selected {\r
  background: var(--background-modifier-selected);\r
}\r
.ECBlock-zIndex-hook {\r
  z-index: 1;\r
}`;
  }
});

// shim-react:react
var require_react = __commonJS({
  "shim-react:react"(exports2) {
    var module2 = BdApi.React;
    Object.assign(exports2, module2);
    module2.default || Object.assign(exports2, { default: module2 });
  }
});

// shim-react-spring:react-spring
var require_react_spring = __commonJS({
  "shim-react-spring:react-spring"(exports2) {
    var module2 = BdApi.Webpack.getModule((m) => m.useSpring);
    Object.assign(exports2, module2);
    module2.default || Object.assign(exports2, { default: module2 });
  }
});

// src/hooks/common.ts
function useStateDeps(initialState, deps) {
  let [state, setState] = (0, import_react.useState)(initialState);
  return (0, import_react.useLayoutEffect)(() => setState(initialState), deps), [state, setState];
}
function useMessages() {
  return (0, import_react.useMemo)(() => intl._fetchMessages(intl.getLocale()), []);
}
var import_react, intl, init_common = __esm({
  "src/hooks/common.ts"() {
    "use strict";
    import_react = __toESM(require_react());
    intl = BdApi.Webpack.getModule((m) => m.Messages);
  }
});

// shim-highlight.js:highlight.js
var require_highlight = __commonJS({
  "shim-highlight.js:highlight.js"(exports2) {
    var module2 = BdApi.Webpack.getModule((m) => m.highlight);
    Object.assign(exports2, module2);
    module2.default || Object.assign(exports2, { default: module2 });
  }
});

// src/util/index.ts
function createURL(content) {
  let svg = content.includes("xmlns=") ? content : content.replace(/^(<svg) /, '$1 xmlns="http://www.w3.org/2000/svg" ');
  return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
}
function formatBytes(bytes) {
  if (Number.isNaN(bytes))
    return "";
  if (bytes === 0)
    return "0 B";
  let i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${["", "K", "M"][i]}B`;
}
var import_react2, init_util = __esm({
  "src/util/index.ts"() {
    "use strict";
    import_react2 = __toESM(require_react());
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
    return import_highlight.default.getLanguage(lang) ? import_highlight.default.highlight(lang, _content) : import_highlight.default.highlight(_lang, _content);
  }, [content, language, maxBytes]);
}
function useSrc(content) {
  let [src, setSrc] = (0, import_react4.useState)(() => createURL(content));
  return (0, import_react4.useEffect)(() => () => URL.revokeObjectURL(src)), (0, import_react4.useLayoutEffect)(() => {
    setSrc((old) => (URL.revokeObjectURL(old), createURL(content)));
  }, [content]), src;
}
function useSizing(collapsed, tableRef, modal, content, lang, showPreview) {
  let [maxHeight] = useData("maxHeight", 300), [previewHeight] = useData("previewHeight", 200), ref = (0, import_react4.useRef)(!1), [tableHeight, setTableHeight] = (0, import_react4.useState)(0), { height, angle } = import_react_spring.default.useSpring({
    config: ref.current ? import_react_spring.default.config.default : { duration: 0 },
    height: collapsed ? 0 : tableHeight,
    angle: collapsed ? 0 : 1
  });
  return (0, import_react4.useLayoutEffect)(() => {
    if (ref.current = !1, modal)
      setTableHeight(400);
    else if (tableRef.current && tableRef.current.parentElement) {
      let scrollerHeight = Number(getComputedStyle(tableRef.current.parentElement, "::-webkit-scrollbar").height.replace("px", ""));
      tableRef.current.parentElement.scroll({ left: 1e4 });
      let add = tableRef.current.parentElement.scrollLeft !== 0;
      tableRef.current.parentElement.scroll({ left: 0 }), setTableHeight(
        // Max Height of 300px
        Math.min(add ? scrollerHeight + tableRef.current.offsetHeight : tableRef.current.offsetHeight, maxHeight)
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
var import_react6, _Icon, Icon, icon_default, init_icon = __esm({
  "src/components/icon.tsx"() {
    "use strict";
    import_react6 = __toESM(require_react()), _Icon = class extends import_react6.Component {
      static error({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 20 20", color: "var(--status-danger)" }, BdApi.React.createElement("path", { d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z", "fill-rule": "evenodd", "clip-rule": "evenodd", fill: "currentColor" }));
      }
      render() {
        let CachedIcon = _Icon.icons[this.props.name];
        return CachedIcon ? BdApi.React.createElement(CachedIcon, { width: this.props.size, height: this.props.size }) : BdApi.React.createElement(_Icon.error, { width: this.props.size, height: this.props.size });
      }
    }, Icon = _Icon;
    __publicField(Icon, "icons", {
      arrow: BdApi.Webpack.getModule((m) => m.toString().includes("M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.")),
      eye: BdApi.Webpack.getModule((m) => m.toString().includes("13.1046 10.8954 14 12 14Z")),
      download: BdApi.Webpack.getModule((m) => m.toString().includes("20V18H6V20H18Z")),
      copy: BdApi.Webpack.getModule((m) => m.toString().includes("21V7h6v5h5v9H8z")),
      trash: BdApi.Webpack.getModule((m) => m.toString?.().includes("17H9V11H11V17ZM15 17H13V11H15V17Z")),
      discord: BdApi.Webpack.getModule((m) => m.toString?.().includes("9.54272 12.0187 10.994C12.0187")),
      at: BdApi.Webpack.getModule((m) => m.toString?.().includes("11.999C14.6 13.433")),
      globe: BdApi.Webpack.getModule((m) => m.toString?.().includes("16H15V13C15 12.45 14.55")),
      overflow: BdApi.Webpack.getModule((m) => m.toString?.().includes(".8954305-2 2-2zm0-6c1.1045695 0 2 .8954305")),
      enlarge({ width, height }) {
        return BdApi.React.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 16 16" }, BdApi.React.createElement("path", { fill: "currentColor", d: "M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z" }), BdApi.React.createElement("path", { fill: "currentColor", d: "M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z" }));
      },
      github({ width, height }) {
        return BdApi.React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", width, height }, BdApi.React.createElement("path", { d: "m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" }));
      }
    });
    icon_default = Icon;
  }
});

// src/components/settingsItem.tsx
function SettingItem({ title, disabled, hideBorder, item, note }) {
  return BdApi.React.createElement("div", { className: `${classes.container}${disabled ? ` ${classes.disabled}` : ""}` }, BdApi.React.createElement("div", { className: classes.labelRow }, BdApi.React.createElement("label", { className: classes.title }, title), BdApi.React.createElement("div", { className: classes.control }, item)), note && BdApi.React.createElement(Text, { className: `${noteClasses.description} ${noteClasses.modeDefault}${disabled ? ` ${noteClasses.modeDisabled}` : ""}` }, note), !hideBorder && BdApi.React.createElement(Divider, { className: classes.dividerDefault }));
}
var import_react7, classes, noteClasses, Divider, Text, settingsItem_default, init_settingsItem = __esm({
  "src/components/settingsItem.tsx"() {
    "use strict";
    import_react7 = __toESM(require_react()), classes = BdApi.Webpack.getModule((m) => m.container && m.dividerDefault), noteClasses = BdApi.Webpack.getModule((m) => m.description && m.modeDefault), Divider = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings("),style:", "().divider,"), { searchExports: !0 }), Text = BdApi.Webpack.getModule((m) => m.Colors && m.Sizes);
    settingsItem_default = (0, import_react7.memo)(SettingItem);
  }
});

// src/components/index.tsx
var import_react8, ModalRoot, Spinner, foundToolTip, Tooltip, Switch, Popout, NumberInputStepper, ErrorBoundary, init_components = __esm({
  "src/components/index.tsx"() {
    "use strict";
    import_react8 = __toESM(require_react());
    init_icon();
    init_settingsItem();
    ModalRoot = BdApi.Webpack.getModule((m) => m?.toString?.().includes("ENTERING") && m?.toString?.()?.includes("headerId"), { searchExports: !0 }), Spinner = BdApi.Webpack.getModule((m) => m.Type?.PULSING_ELLIPSIS, { searchExports: !0 }), foundToolTip = BdApi.Webpack.getModule((m) => m.prototype?.setDomElement && m.prototype.render.toString().includes("renderTooltip()"), { searchExports: !0 }), Tooltip = foundToolTip ?? BdApi.Components.Tooltip, Switch = BdApi.Webpack.getModule((m) => m.toString?.().includes(".tooltipNote,"), { searchExports: !0 }), Popout = BdApi.Webpack.getModule((m) => m.prototype?.render?.toString().includes("shouldShowPopout"), { searchExports: !0 }), NumberInputStepper = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings(".minValue,", ".maxValue,", "tabIndex:")), ErrorBoundary = class extends import_react8.default.Component {
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
  let messages = useMessages();
  return BdApi.React.createElement(
    SearchPopout,
    {
      autoFocus: !0,
      className: languageSelector,
      multiSelect: !1,
      onChange,
      placeholder: messages.PREVIEW_CHANGE_LANGUAGE,
      value: /* @__PURE__ */ new Set([value.toLowerCase()])
    },
    (searchValue) => getContent(searchValue)
  );
}
var import_react9, import_highlight2, SearchPopout, SearchItem, languageSelector, LANGUAGES, changeLang_default, init_changeLang = __esm({
  "src/codeblock/changeLang.tsx"() {
    "use strict";
    import_react9 = __toESM(require_react()), import_highlight2 = __toESM(require_highlight());
    init_hooks();
    SearchPopout = BdApi.Webpack.getModule((m) => m.toString?.().includes(".Messages.AUTOCOMPLETE_NO_RESULTS_HEADER"), { searchExports: !0 }), SearchItem = BdApi.Webpack.getModule((m) => m.Checkbox && m.Checkmark, { searchExports: !0 }), { languageSelector } = BdApi.Webpack.getModule((m) => m.languageSelector && m.codeIcon), LANGUAGES = import_highlight2.default.listLanguages().map((name) => {
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
function Header({ angle, collapsed, setCollapsed, languageName, isSVG, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal, setLang, remove, bytes, loading }) {
  let [shouldShow, setShouldShow] = import_react10.default.useState(!1), messages = useMessages(), formattedBytes = (0, import_react10.useMemo)(() => formatBytes(bytes), [bytes]);
  return BdApi.React.createElement("div", { className: "ECBlock-header" }, BdApi.React.createElement("div", { className: "ECBlock-title" }, !modal && BdApi.React.createElement(import_react_spring2.default.animated.div, { style: {
    transform: angle.to({
      output: ["rotate(-90deg)", "rotate(0deg)"]
    })
  } }, BdApi.React.createElement(Tooltip, { text: collapsed ? "Collapsed" : "Uncollapse", hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-collapse", ...props, onClick: () => setCollapsed(!collapsed) }, BdApi.React.createElement(icon_default, { size: 22, name: "arrow" })))), BdApi.React.createElement(
    Popout,
    {
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
    (props) => BdApi.React.createElement("div", { className: "ECBlock-lang", ...props, onClick: (event) => {
      setShouldShow(!shouldShow), props.onClick && props.onClick(event);
    } }, languageName)
  ), !loading && BdApi.React.createElement(Tooltip, { text: `${bytes} B`, hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-byteSize", ...props }, formattedBytes))), BdApi.React.createElement("div", { className: "ECBlock-actions" }, remove && BdApi.React.createElement(Tooltip, { text: messages.DELETE, hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-remove", ...props, onClick: remove }, BdApi.React.createElement(icon_default, { size: 22, name: "trash" }))), isSVG && BdApi.React.createElement(Tooltip, { text: "Preview", hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: `ECBlock-previewButton${showPreview ? " ECBlock-active" : ""}`, ...props, onClick: () => setShowPreview(!showPreview) }, BdApi.React.createElement(icon_default, { size: 22, name: "eye" }))), BdApi.React.createElement(Tooltip, { text: messages.DOWNLOAD, hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-downloadButton", ...props, onClick: downloadAction }, BdApi.React.createElement(icon_default, { size: 22, name: "download" }))), BdApi.React.createElement(Tooltip, { text: copied ? messages.COPIED : messages.COPY, hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: `ECBlock-copyButton${copied ? " ECBlock-copied" : ""}`, ...props, onClick: copyAction }, BdApi.React.createElement(icon_default, { size: 22, name: "copy" }))), !modal && BdApi.React.createElement(Tooltip, { text: messages.PREVIEW_WHOLE_FILE, hideOnClick: !1 }, (props) => BdApi.React.createElement("div", { className: "ECBlock-enlarge", ...props, onClick: enlargeAction }, BdApi.React.createElement(icon_default, { size: 22, name: "enlarge" })))));
}
var import_react10, import_react_spring2, header_default, init_header = __esm({
  "src/codeblock/header.tsx"() {
    "use strict";
    import_react10 = __toESM(require_react()), import_react_spring2 = __toESM(require_react_spring());
    init_components();
    init_changeLang();
    init_hooks();
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
function Preview({ content, height }) {
  let src = useSrc(content);
  return BdApi.React.createElement("div", { className: "ECBlock-preview" }, BdApi.React.createElement("img", { src, height }));
}
var import_react13, preview_default, init_preview = __esm({
  "src/codeblock/preview.tsx"() {
    "use strict";
    import_react13 = __toESM(require_react());
    init_hooks();
    preview_default = (0, import_react13.memo)(Preview);
  }
});

// src/codeblock/index.tsx
function CodeBlock({ content, lang, modal, fileName, loading = !1, remove }) {
  let tableRef = (0, import_react14.useRef)(null), [_lang, setLang] = useStateDeps(lang, [lang]), [autoCollapse] = useData("autoCollapse", !1), [collapsed, setCollapsed] = useStateDeps(() => modal ? !1 : autoCollapse, [autoCollapse]), language = useLanguage(_lang), highlighted = useHighlighted(language, _lang, content), [showPreview, setShowPreview] = (0, import_react14.useState)(!1), [previewHeight] = useData("previewHeight", 200), { height, angle } = useSizing(collapsed, tableRef, modal, content, lang, showPreview), isSVG = (0, import_react14.useMemo)(() => lang === "svg" && language.name === "HTML, XML", [lang, language]), downloadAction = (0, import_react14.useCallback)(() => {
    loading || window.DiscordNative && window.DiscordNative.fileManager.saveWithDialog(content, fileName());
  }, [content, lang, loading]), [copied, setCopied] = import_react14.default.useState(!1), copyAction = (0, import_react14.useCallback)(() => {
    loading || copied || (window.DiscordNative && window.DiscordNative.clipboard.copy(content), setCopied(!0), setTimeout(() => setCopied(!1), 2e3));
  }, [content, copied, loading]), enlargeAction = (0, import_react14.useCallback)(() => {
    loading || openModal(({ transitionState, onClose }) => BdApi.React.createElement(ModalRoot, { transitionState, onClose, size: "large" }, BdApi.React.createElement(CodeBlock, { content, lang, modal: !0, fileName })));
  }, [content, lang, loading]), byteSize = (0, import_react14.useMemo)(() => new File([content], "").size, [content]);
  return BdApi.React.createElement(
    "div",
    {
      className: `ECBlock${collapsed ? " ECBlock-collapsed" : ""}${modal ? " ECBlock-modal" : ""}${loading ? " ECBlock-loading" : ""}`,
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
    BdApi.React.createElement(import_react_spring3.default.animated.div, { className: `ECBlock-wrapper ${thin}`, style: { height } }, loading && BdApi.React.createElement(Spinner, { type: Spinner.Type.WANDERING_CUBES }), !loading && showPreview && isSVG && BdApi.React.createElement(preview_default, { content, height: modal ? 400 : previewHeight }), !loading && !(showPreview && isSVG) && BdApi.React.createElement(table_default, { highlighted, tableRef, language }))
  );
}
var import_react14, import_react_spring3, thin, openModal, codeblock_default, init_codeblock2 = __esm({
  "src/codeblock/index.tsx"() {
    "use strict";
    import_react14 = __toESM(require_react()), import_react_spring3 = __toESM(require_react_spring());
    init_hooks();
    init_header();
    init_table();
    init_preview();
    init_components();
    init_data();
    ({ thin } = BdApi.Webpack.getModule((m) => m.thin && m.none)), openModal = BdApi.Webpack.getModule((m) => m?.toString?.().includes("onCloseCallback") && m?.toString().includes("Layer"), { searchExports: !0 });
    codeblock_default = (0, import_react14.memo)(CodeBlock);
  }
});

// src/attachment/wrapper.tsx
function AttachmentWrapper({ attachment: attachment2, onContextMenu, className, remove, canDeleteAttachments }) {
  let content = useFetchContent(attachment2.url), lang = (0, import_react15.useMemo)(() => {
    let spl = attachment2.filename.split(".");
    return spl.length - 1 ? spl.pop() : "";
  }, []);
  return BdApi.React.createElement("div", { className: `ECBlock-file ${className}`, onContextMenu }, BdApi.React.createElement(
    codeblock_default,
    {
      content: content || "",
      lang,
      modal: !1,
      fileName: () => attachment2.filename,
      loading: typeof content != "string",
      remove: canDeleteAttachments ? remove : !1
    }
  ));
}
var import_react15, wrapper_default, init_wrapper = __esm({
  "src/attachment/wrapper.tsx"() {
    "use strict";
    import_react15 = __toESM(require_react());
    init_hooks();
    init_codeblock2();
    wrapper_default = (0, import_react15.memo)(AttachmentWrapper);
  }
});

// src/attachment/index.tsx
function Attachment({ props, attachment: attachment2, renderPlaintextFilePreview, canDeleteAttachments }) {
  let [maxFileBytes] = useData("maxFileBytes", 2e8), [error, setError] = useStateDeps(() => attachment2.attachment.size > maxFileBytes, [maxFileBytes]);
  return error ? BdApi.React.createElement("div", { className: "ECBlock ECBlock-error" }, BdApi.React.createElement("div", { className: "react-error", onClick: () => setError(!1) }, "File is too large for Enhance Codeblocks to handle. Click to try anyways"), renderPlaintextFilePreview.call(attachment2, props)) : BdApi.React.createElement(ErrorBoundary, { fallback: renderPlaintextFilePreview.call(attachment2, props) }, BdApi.React.createElement(wrapper_default, { ...props, canDeleteAttachments, remove: () => attachment2.onRemoveAttachment(attachment2.attachment) }));
}
var import_react16, attachment_default, init_attachment2 = __esm({
  "src/attachment/index.tsx"() {
    "use strict";
    import_react16 = __toESM(require_react());
    init_wrapper();
    init_components();
    init_data();
    init_hooks();
    attachment_default = (0, import_react16.memo)(Attachment);
  }
});

// src/settings/joinGuild.ts
async function getInvite() {
  if (cachedInvite)
    return cachedInvite;
  let { invite } = await inviteResolver.resolveInvite(GUILD_CONSTANT.invite, "Desktop Modal");
  return cachedInvite = invite, invite;
}
async function joinGuild() {
  let guild = GuildStore.getGuild(GUILD_CONSTANT.guildId);
  if (guild)
    return BdApi.UI.showToast(`Going to ${guild.name}`, { icon: !0, type: "info" }), transitionTo(`/channels/${GUILD_CONSTANT.guildId}`);
  let invite = await getInvite();
  InviteModalStore.isOpen = () => !0, native.minimize = () => {
  }, await dispatcher.dispatch({ type: "INVITE_MODAL_OPEN", invite }), setTimeout(() => {
    InviteModalStore.isOpen = originalIsOpen, native.minimize = originalNative;
  });
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
var displayUserModal, menu_default, init_menu = __esm({
  "src/settings/menu.tsx"() {
    "use strict";
    init_components();
    init_joinGuild();
    displayUserModal = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings(".analyticsLocation,", ",friendToken:"), { searchExports: !0 }), menu_default = BdApi.ContextMenu.buildMenu([
      {
        label: "Github",
        action: () => window.open("https://github.com/doggybootsy/enhancecodeblocks/"),
        icon: () => BdApi.React.createElement(icon_default, { name: "github", size: 18 })
      },
      {
        label: "Join Discord",
        action: () => joinGuild_default(),
        icon: () => BdApi.React.createElement(icon_default, { name: "discord", size: 18 })
      },
      {
        label: "Profile",
        action: () => displayUserModal({ userId: "515780151791976453" }),
        icon: () => BdApi.React.createElement(icon_default, { name: "at", size: 18 })
      },
      {
        label: "Website",
        action: () => window.open("https://doggybootsy.github.io/"),
        icon: () => BdApi.React.createElement(icon_default, { name: "globe", size: 18 })
      }
    ]);
  }
});

// src/settings/index.tsx
function Settings() {
  let [autoCollapse, setAutoCollapse] = useData("autoCollapse", !1), [maxHeight, setMaxHeight] = useData("maxHeight", 300), [previewHeight, setPreviewHeight] = useData("previewHeight", 200), [maxBytes, setBytes] = useData("maxBytes", 21846), [maxFileBytes, setFileBytes] = useData("maxFileBytes", 2e8), [open, setOpen] = (0, import_react17.useState)(!1), ref = (0, import_react17.useRef)(null);
  return (0, import_react17.useLayoutEffect)(() => {
    !ref.current || !ref.current.parentElement || ref.current.parentElement.classList.add("ECBlock-zIndex-hook");
  }, []), BdApi.React.createElement("div", { className: "ECBlock-settings", ref }, BdApi.React.createElement(
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
    (props) => BdApi.React.createElement("div", { ...props, onClick: () => setOpen(!open), className: `ECBlock-overflow${open ? " ECBlock-selected" : ""}` }, BdApi.React.createElement(icon_default, { name: "overflow", size: 24 }))
  ), BdApi.React.createElement(
    Switch,
    {
      value: autoCollapse,
      onChange: setAutoCollapse
    },
    "Auto Collapse"
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(NumberInputStepper, { onChange: setMaxHeight, value: maxHeight })),
      title: "Max Height"
    }
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(NumberInputStepper, { onChange: setPreviewHeight, value: previewHeight })),
      title: "Preview Height"
    }
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(NumberInputStepper, { onChange: setBytes, value: maxBytes })),
      note: "This helps reduce lag, by limiting the amount of characters that gets highlighted",
      title: "Max Number of Characters"
    }
  ), BdApi.React.createElement(
    settingsItem_default,
    {
      item: BdApi.React.createElement("div", { className: "ECBlock-numberSetting" }, BdApi.React.createElement(NumberInputStepper, { onChange: setFileBytes, value: maxFileBytes })),
      note: "This helps preventing crashing on large files",
      title: "Max Number of Bytes allowed on files"
    }
  ));
}
var import_react17, settings_default, init_settings = __esm({
  "src/settings/index.tsx"() {
    "use strict";
    import_react17 = __toESM(require_react());
    init_components();
    init_data();
    init_menu();
    settings_default = (0, import_react17.memo)(Settings);
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
    init_styles();
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
            for (let attachment2 of res.props.attachments) {
              let { renderPlaintextFilePreview } = attachment2;
              attachment2.renderPlaintextFilePreview = (props2) => BdApi2.React.createElement(attachment_default, { props: props2, attachment: attachment2, canDeleteAttachments: that.props.canDeleteAttachments, renderPlaintextFilePreview });
            }
        }), BdApi2.DOM.addStyle(styles_default), this.forceUpdateMessages();
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
