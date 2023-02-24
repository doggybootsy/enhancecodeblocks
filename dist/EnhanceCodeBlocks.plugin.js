/**
 * @name enhancecodeblocks
 * @description Enhances Discords Codeblocks & Text File Attachments
 * @version 1.0.4
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

// shim-react:react
var require_react = __commonJS({
  "shim-react:react"(exports2) {
    var module2 = BdApi.React;
    Object.assign(exports2, module2);
    module2.default || Object.assign(exports2, { default: module2 });
  }
});

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
  cursor: pointer;\r
} \r
.ECBlock .ECBlock-title > :not(:last-child) {\r
  margin-right: 8px;\r
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
}\r
.ECBlock-preview {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}`;
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

// shim-highlight.js:highlight.js
var require_highlight = __commonJS({
  "shim-highlight.js:highlight.js"(exports2) {
    var module2 = BdApi.Webpack.getModule((m) => m.highlight);
    Object.assign(exports2, module2);
    module2.default || Object.assign(exports2, { default: module2 });
  }
});

// src/codeblock/constants.ts
var init_constants = __esm({
  "src/codeblock/constants.ts"() {
    "use strict";
  }
});

// src/util/index.ts
function useForceUpdate() {
  let [, forceUpdate] = (0, import_react.useState)(Symbol());
  return () => forceUpdate(Symbol());
}
function createURL(content) {
  let svg = content.includes("xmlns=") ? content : content.replace(/^(<svg) /, '$1 xmlns="http://www.w3.org/2000/svg" ');
  return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
}
function useStateDeps(initialState, deps) {
  let [state, setState] = (0, import_react.useState)(initialState);
  return (0, import_react.useLayoutEffect)(() => setState(initialState), deps), [state, setState];
}
var import_react, init_util = __esm({
  "src/util/index.ts"() {
    "use strict";
    import_react = __toESM(require_react());
  }
});

// src/codeblock/hooks.ts
function useMessages() {
  return (0, import_react2.useRef)(intl._fetchMessages(intl.getLocale())).current;
}
function useLanguage(language) {
  return (0, import_react2.useMemo)(() => {
    let lang = import_highlight.default.getLanguage(language);
    return lang || import_highlight.default.getLanguage("txt");
  }, [language]);
}
function useHighlighted(language, _lang, content) {
  return (0, import_react2.useMemo)(() => {
    let lang = language.aliases?.[0] ? language.aliases[0] : language.name;
    return import_highlight.default.getLanguage(lang) ? import_highlight.default.highlight(lang, content) : import_highlight.default.highlight(_lang, content);
  }, [content, language]);
}
function useSrc(content) {
  let forceUpdate = useForceUpdate(), src = (0, import_react2.useRef)(createURL(content));
  return (0, import_react2.useEffect)(() => () => URL.revokeObjectURL(src.current), []), (0, import_react2.useLayoutEffect)(() => {
    URL.revokeObjectURL(src.current), src.current = createURL(content), forceUpdate();
  }, [content]), src.current;
}
function useSizing(collapsed, tableRef, modal, content, lang, showPreview) {
  let ref = (0, import_react2.useRef)(!1), [tableHeight, setTableHeight] = (0, import_react2.useState)(0), { height, angle } = import_react_spring.default.useSpring({
    config: ref.current ? {
      mass: 1,
      tension: 250
    } : {
      duration: 0
    },
    height: collapsed ? 0 : tableHeight,
    angle: collapsed ? 0 : 1
  });
  return (0, import_react2.useLayoutEffect)(() => {
    if (ref.current = !1, modal)
      setTableHeight(400);
    else if (tableRef.current && tableRef.current.parentElement) {
      let scrollerHeight = Number(getComputedStyle(tableRef.current.parentElement, "::-webkit-scrollbar").height.replace("px", ""));
      tableRef.current.parentElement.scroll({ left: 1e4 });
      let add = tableRef.current.parentElement.scrollLeft !== 0;
      tableRef.current.parentElement.scroll({ left: 0 }), setTableHeight(
        // Max Height of 300px
        Math.min(add ? scrollerHeight + tableRef.current.offsetHeight : tableRef.current.offsetHeight, 300)
      );
    } else
      setTableHeight(200);
    setTimeout(() => ref.current = !0);
  }, [content, showPreview, lang]), { height, angle };
}
var import_react2, import_highlight, import_react_spring, intl, init_hooks = __esm({
  "src/codeblock/hooks.ts"() {
    "use strict";
    import_react2 = __toESM(require_react()), import_highlight = __toESM(require_highlight()), import_react_spring = __toESM(require_react_spring());
    init_constants();
    init_util();
    intl = BdApi.Webpack.getModule((m) => m.Messages);
  }
});

// src/components/index.tsx
function EnlargeIcon({ width, height }) {
  return import_react3.default.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 16 16" }, import_react3.default.createElement("path", { fill: "currentColor", d: "M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z" }), import_react3.default.createElement("path", { fill: "currentColor", d: "M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z" }));
}
var import_react3, ArrowIcon, EyeIcon, DownloadIcon, CopyIcon, TrashIcon, ModalRoot, Spinner, Tooltip, Switch, Popout, ErrorBoundary, init_components = __esm({
  "src/components/index.tsx"() {
    "use strict";
    import_react3 = __toESM(require_react()), ArrowIcon = BdApi.Webpack.getModule((m) => m.toString().includes("M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.")), EyeIcon = BdApi.Webpack.getModule((m) => m.toString().includes("13.1046 10.8954 14 12 14Z")), DownloadIcon = BdApi.Webpack.getModule((m) => m.toString().includes("20V18H6V20H18Z")), CopyIcon = BdApi.Webpack.getModule((m) => m.toString().includes("21V7h6v5h5v9H8z")), TrashIcon = BdApi.Webpack.getModule((m) => m.toString?.().includes("17H9V11H11V17ZM15 17H13V11H15V17Z"));
    ModalRoot = BdApi.Webpack.getModule((m) => m?.toString?.().includes("ENTERING"), { searchExports: !0 }), Spinner = BdApi.Webpack.getModule((m) => m.Type?.PULSING_ELLIPSIS, { searchExports: !0 }), Tooltip = BdApi.Webpack.getModule((m) => m.prototype?.setDomElement && m.prototype.render.toString().includes("renderTooltip()")), Switch = BdApi.Webpack.getModule((m) => m.toString?.().includes(".tooltipNote,"), { searchExports: !0 }), Popout = BdApi.Webpack.getModule((m) => m.prototype?.render?.toString().includes("shouldShowPopout")), ErrorBoundary = class extends import_react3.default.Component {
      constructor(props) {
        super(props), this.state = { hasError: !1 };
      }
      componentDidCatch() {
        this.setState({ hasError: !0 });
      }
      render() {
        return this.state.hasError ? this.props.fallback ?? import_react3.default.createElement("div", { className: "react-error" }, "There was an unexpected Error.") : this.props.children;
      }
    };
  }
});

// src/codeblock/changeLang.tsx
function getContent(searchValue) {
  return LANGUAGES.map(({ value, aliases, lang }) => ({
    component: import_react4.default.createElement(SearchItem, { key: value, value }, import_react4.default.createElement(SearchItem.Label, null, lang.name)),
    aliases
  })).filter(({ aliases }) => aliases.find((alias) => alias.toLowerCase().includes(searchValue.toLocaleLowerCase()))).map(({ component }) => component);
}
function ChangeLang({ value, onChange }) {
  let messages = useMessages();
  return import_react4.default.createElement(
    SearchPopout,
    {
      autoFocus: !0,
      className: languageSelector,
      multiSelect: !1,
      onChange,
      placeholder: messages.SEARCH_LANGUAGES,
      value: /* @__PURE__ */ new Set([value.toLowerCase()])
    },
    getContent
  );
}
var import_react4, import_highlight2, SearchPopout, SearchItem, languageSelector, LANGUAGES, changeLang_default, init_changeLang = __esm({
  "src/codeblock/changeLang.tsx"() {
    "use strict";
    import_react4 = __toESM(require_react()), import_highlight2 = __toESM(require_highlight());
    init_hooks();
    SearchPopout = BdApi.Webpack.getModule((m) => m.toString?.().includes(".Messages.AUTOCOMPLETE_NO_RESULTS_HEADER"), { searchExports: !0 }), SearchItem = BdApi.Webpack.getModule((m) => m.Checkbox && m.Checkmark, { searchExports: !0 }), { languageSelector } = BdApi.Webpack.getModule((m) => m.languageSelector), LANGUAGES = import_highlight2.default.listLanguages().map((name) => {
      let lang = import_highlight2.default.getLanguage(name);
      return {
        lang,
        value: name,
        aliases: lang.aliases ? lang.aliases.concat(name) : [name]
      };
    });
    changeLang_default = (0, import_react4.memo)(ChangeLang);
  }
});

// src/codeblock/header.tsx
function Header({ angle, collapsed, setCollapsed, languageName, isSVG, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal, setLang, remove }) {
  let [shouldShow, setShouldShow] = import_react5.default.useState(!1), messages = useMessages();
  return import_react5.default.createElement("div", { className: "ECBlock-header" }, import_react5.default.createElement("div", { className: "ECBlock-title" }, !modal && import_react5.default.createElement(import_react_spring2.default.animated.div, { style: {
    transform: angle.to({
      output: ["rotate(-90deg)", "rotate(0deg)"]
    })
  } }, import_react5.default.createElement(Tooltip, { text: collapsed ? "Collapsed" : "Uncollapse", hideOnClick: !1 }, (props) => import_react5.default.createElement("div", { className: "ECBlock-collapse", ...props, onClick: () => setCollapsed(!collapsed) }, import_react5.default.createElement(ArrowIcon, { width: 22, height: 22 })))), import_react5.default.createElement(
    Popout,
    {
      renderPopout: () => import_react5.default.createElement(changeLang_default, { value: languageName, onChange: (value) => {
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
    (props) => import_react5.default.createElement("div", { className: "ECBlock-lang", ...props, onClick: (event) => {
      setShouldShow(!shouldShow), props.onClick(event);
    } }, languageName)
  )), import_react5.default.createElement("div", { className: "ECBlock-actions" }, remove && import_react5.default.createElement(Tooltip, { text: messages.DELETE, hideOnClick: !1 }, (props) => import_react5.default.createElement("div", { className: "ECBlock-remove", ...props, onClick: remove }, import_react5.default.createElement(TrashIcon, { width: 22, height: 22 }))), isSVG && import_react5.default.createElement(Tooltip, { text: "Preview", hideOnClick: !1 }, (props) => import_react5.default.createElement("div", { className: `ECBlock-previewButton${showPreview ? " ECBlock-active" : ""}`, ...props, onClick: () => setShowPreview(!showPreview) }, import_react5.default.createElement(EyeIcon, { width: 22, height: 22 }))), import_react5.default.createElement(Tooltip, { text: messages.DOWNLOAD, hideOnClick: !1 }, (props) => import_react5.default.createElement("div", { className: "ECBlock-downloadButton", ...props, onClick: downloadAction }, import_react5.default.createElement(DownloadIcon, { width: 22, height: 22 }))), import_react5.default.createElement(Tooltip, { text: copied ? messages.COPIED : messages.COPY, hideOnClick: !1 }, (props) => import_react5.default.createElement("div", { className: `ECBlock-copyButton${copied ? " ECBlock-copied" : ""}`, ...props, onClick: copyAction }, import_react5.default.createElement(CopyIcon, { width: 22, height: 22 }))), !modal && import_react5.default.createElement(Tooltip, { text: messages.PREVIEW_WHOLE_FILE, hideOnClick: !1 }, (props) => import_react5.default.createElement("div", { className: "ECBlock-enlarge", ...props, onClick: enlargeAction }, import_react5.default.createElement(EnlargeIcon, { width: 16, height: 16 })))));
}
var import_react5, import_react_spring2, header_default, init_header = __esm({
  "src/codeblock/header.tsx"() {
    "use strict";
    import_react5 = __toESM(require_react()), import_react_spring2 = __toESM(require_react_spring());
    init_components();
    init_changeLang();
    init_hooks();
    header_default = (0, import_react5.memo)(Header);
  }
});

// src/codeblock/table.tsx
function Code({ highlighted, tableRef }) {
  let spl = (0, import_react6.useMemo)(() => highlighted.value.split(`
`), [highlighted]);
  return import_react6.default.createElement("table", { className: "ECBlock-table", ref: tableRef }, import_react6.default.createElement("tbody", null, spl.map((line, i) => import_react6.default.createElement("tr", { key: `${line}__${i}` }, import_react6.default.createElement("td", null, i + 1), import_react6.default.createElement("td", { dangerouslySetInnerHTML: { __html: line } })))));
}
var import_react6, table_default, init_table = __esm({
  "src/codeblock/table.tsx"() {
    "use strict";
    import_react6 = __toESM(require_react());
    table_default = (0, import_react6.memo)(Code);
  }
});

// src/codeblock/preview.tsx
function Preview({ content, height }) {
  let src = useSrc(content);
  return import_react7.default.createElement("div", { className: "ECBlock-preview" }, import_react7.default.createElement("img", { src, height }));
}
var import_react7, preview_default, init_preview = __esm({
  "src/codeblock/preview.tsx"() {
    "use strict";
    import_react7 = __toESM(require_react());
    init_hooks();
    preview_default = (0, import_react7.memo)(Preview);
  }
});

// src/data/index.ts
function useData(key, presetValue) {
  let [state, setState] = (0, import_react8.useState)(() => getData(key, presetValue)), updateState = (0, import_react8.useCallback)((state2) => {
    setState(state2), setData(key, state2);
    let set = listeners.get(key);
    set || (set = /* @__PURE__ */ new Set());
    for (let listener of set)
      listener();
  }, [state]);
  return (0, import_react8.useLayoutEffect)(() => {
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
var import_react8, listeners, init_data = __esm({
  "src/data/index.ts"() {
    "use strict";
    import_react8 = __toESM(require_react()), listeners = /* @__PURE__ */ new Map();
  }
});

// src/codeblock/index.tsx
function CodeBlock({ content, lang, modal, fileName, loading = !1, remove }) {
  let tableRef = (0, import_react9.useRef)(null), [_lang, setLang] = useStateDeps(lang, [lang]), [autoCollapse] = useData("autoCollapse", !1), [collapsed, setCollapsed] = useStateDeps(modal ? !1 : autoCollapse, [autoCollapse]), language = useLanguage(_lang), highlighted = useHighlighted(language, _lang, content), [showPreview, setShowPreview] = (0, import_react9.useState)(!1), { height, angle } = useSizing(collapsed, tableRef, modal, content, lang, showPreview), isSVG = (0, import_react9.useMemo)(() => lang === "svg" && language.name === "HTML, XML", [lang, language]), downloadAction = (0, import_react9.useCallback)(() => {
    loading || window.DiscordNative && window.DiscordNative.fileManager.saveWithDialog(content, fileName());
  }, [content, lang, loading]), [copied, setCopied] = import_react9.default.useState(!1), copyAction = (0, import_react9.useCallback)(() => {
    loading || copied || (window.DiscordNative && window.DiscordNative.clipboard.copy(content), setCopied(!0), setTimeout(() => setCopied(!1), 2e3));
  }, [content, copied, loading]), enlargeAction = (0, import_react9.useCallback)(() => {
    loading || openModal(({ transitionState, onClose }) => import_react9.default.createElement(ModalRoot, { transitionState, onClose, size: "large" }, import_react9.default.createElement(CodeBlock, { content, lang, modal: !0, fileName })));
  }, [content, lang, loading]);
  return import_react9.default.createElement("div", { className: `ECBlock${collapsed ? " ECBlock-collapsed" : ""}${modal ? " ECBlock-modal" : ""}${loading ? " ECBlock-loading" : ""}`, "data-language": language.name }, import_react9.default.createElement(header_default, { angle, collapsed, setCollapsed, languageName: `${isSVG ? "SVG, " : ""}${language.name}`, isSVG, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal, setLang, remove }), import_react9.default.createElement(import_react_spring3.default.animated.div, { className: `ECBlock-wrapper ${thin}`, style: { height } }, loading && import_react9.default.createElement(Spinner, { type: Spinner.Type.WANDERING_CUBES }), !loading && showPreview && isSVG && import_react9.default.createElement(preview_default, { content, height: modal ? 400 : 200 }), !loading && !(showPreview && isSVG) && import_react9.default.createElement(table_default, { highlighted, tableRef })));
}
var import_react9, import_react_spring3, thin, openModal, codeblock_default, init_codeblock = __esm({
  "src/codeblock/index.tsx"() {
    "use strict";
    import_react9 = __toESM(require_react()), import_react_spring3 = __toESM(require_react_spring());
    init_hooks();
    init_header();
    init_table();
    init_preview();
    init_components();
    init_components();
    init_constants();
    init_data();
    init_util();
    ({ thin } = BdApi.Webpack.getModule((m) => m.thin && m.none)), openModal = BdApi.Webpack.getModule((m) => m?.toString?.().includes("onCloseCallback") && m?.toString().includes("Layer"), { searchExports: !0 });
    codeblock_default = (0, import_react9.memo)(CodeBlock);
  }
});

// src/attachment/hooks.ts
function useFetchContent(url) {
  let refOriginalValue = (0, import_react10.useMemo)(() => cache.has(url) ? cache.get(url) : !1, []), body = import_react10.default.useRef(refOriginalValue), forceUpdate = useForceUpdate();
  return (0, import_react10.useLayoutEffect)(() => {
    if (body.current)
      return;
    let abortController = new AbortController();
    return (async () => {
      let result = await fetch(url, { signal: abortController.signal });
      result.ok ? (body.current = await result.text(), cache.set(url, body.current)) : body.current = `Enhance Codeblocks FETCH ERROR: STATUS=${JSON.stringify(result.status)} OK=${JSON.stringify(result.ok)} URL=${JSON.stringify(result.url)}`, forceUpdate();
    })(), () => abortController.abort();
  }, []), body.current;
}
var import_react10, cache, init_hooks2 = __esm({
  "src/attachment/hooks.ts"() {
    "use strict";
    import_react10 = __toESM(require_react());
    init_util();
    cache = /* @__PURE__ */ new Map();
  }
});

// src/attachment/index.tsx
function Attachment({ attachment: attachment2, onContextMenu, className, remove }) {
  let content = useFetchContent(attachment2.url), lang = (0, import_react11.useMemo)(() => {
    let spl = attachment2.filename.split(".");
    return spl.length - 1 ? spl.pop() : "";
  }, []);
  return import_react11.default.createElement("div", { className: `ECBlock-file ${className}`, onContextMenu }, import_react11.default.createElement(codeblock_default, { content: content || "", lang, modal: !1, fileName: () => attachment2.filename, loading: typeof content != "string", remove }));
}
var import_react11, attachment_default, init_attachment = __esm({
  "src/attachment/index.tsx"() {
    "use strict";
    import_react11 = __toESM(require_react());
    init_hooks2();
    init_codeblock();
    attachment_default = (0, import_react11.memo)(Attachment);
  }
});

// src/settings/index.tsx
function Settings() {
  let [autoCollapse, setAutoCollapse] = useData("autoCollapse", !1);
  return import_react12.default.createElement("div", null, import_react12.default.createElement(
    Switch,
    {
      value: autoCollapse,
      onChange: setAutoCollapse
    },
    "Auto Collapse"
  ));
}
var import_react12, settings_default, init_settings = __esm({
  "src/settings/index.tsx"() {
    "use strict";
    import_react12 = __toESM(require_react());
    init_components();
    init_data();
    settings_default = (0, import_react12.memo)(Settings);
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var import_react13, BdApi2, codeBlock, MessageAttachment, messageListItem, ECBlocks, src_default, init_src = __esm({
  "src/index.tsx"() {
    "use strict";
    import_react13 = __toESM(require_react());
    init_styles();
    init_codeblock();
    init_attachment();
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
        BdApi2.Patcher.after(codeBlock, "react", (_that, [props], res) => import_react13.default.createElement(ErrorBoundary, { fallback: res }, import_react13.default.createElement(codeblock_default, { ...props, modal: !1, fileName: () => `codeblock-${Date.now()}.${props.lang || "txt"}` }))), BdApi2.Patcher.after(MessageAttachment.prototype, "renderAttachments", (that, props, res) => {
          if (res)
            for (let attachment2 of res.props.attachments) {
              let { renderPlaintextFilePreview } = attachment2;
              attachment2.renderPlaintextFilePreview = (props2) => import_react13.default.createElement(ErrorBoundary, { fallback: renderPlaintextFilePreview.call(attachment2, props2) }, import_react13.default.createElement(attachment_default, { ...props2, remove: () => attachment2.onRemoveAttachment(attachment2.attachment) }));
            }
        }), BdApi2.DOM.addStyle(styles_default), this.forceUpdateMessages();
      }
      stop() {
        BdApi2.Patcher.unpatchAll(), BdApi2.DOM.removeStyle(), this.forceUpdateMessages();
      }
      getSettingsPanel() {
        return import_react13.default.createElement(settings_default, null);
      }
    }, src_default = ECBlocks;
  }
});

// index.js
module.exports = (init_src(), __toCommonJS(src_exports));
