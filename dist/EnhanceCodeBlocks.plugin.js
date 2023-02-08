/**
 * @name enhancecodeblocks
 * @description Enhances Discords Codeblocks
 * @version 1.0.0
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
    Object.assign(exports2, BdApi.React, { default: BdApi.React });
  }
});

// src/styles.css
var styles_default, init_styles = __esm({
  "src/styles.css"() {
    styles_default = `.ECBlock-file {\r
  width: 100%;\r
  display: flex;\r
}\r
.ECBlock {\r
  background: var(--background-secondary-alt);\r
  border: 1px solid var(--background-tertiary);\r
  border-radius: 4px;\r
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
    var rs = BdApi.Webpack.getModule((m) => m.useSpring);
    Object.assign(exports2, rs, { default: rs });
  }
});

// shim-highlight.js:highlight.js
var require_highlight = __commonJS({
  "shim-highlight.js:highlight.js"(exports2) {
    var hljs2 = BdApi.Webpack.getModule((m) => m.highlight);
    Object.assign(exports2, hljs2, { default: hljs2 });
  }
});

// src/codeblock/constants.ts
var init_constants = __esm({
  "src/codeblock/constants.ts"() {
    "use strict";
  }
});

// src/codeblock/hooks.ts
function useLanguage(language) {
  return (0, import_react.useMemo)(() => {
    let lang = import_highlight.default.getLanguage(language);
    return lang || import_highlight.default.getLanguage("txt");
  }, [language]);
}
function useAlaises(language, lang) {
  return (0, import_react.useMemo)(() => {
    if (!language.aliases)
      return `.${lang}`;
    let langs = Array.from(/* @__PURE__ */ new Set([...language.aliases, lang]), (alias) => alias && `.${alias}`);
    return listFormat.format(langs.filter(Boolean));
  }, [language]);
}
function useHighlighted(language, content) {
  return (0, import_react.useMemo)(() => {
    let lang = language.aliases?.[0] ? language.aliases[0] : language.name;
    return import_highlight.default.highlight(lang, content);
  }, [content, language]);
}
function useSrc(content) {
  let [, forceUpdate] = (0, import_react.useState)(Symbol()), src = (0, import_react.useRef)(createURL(content));
  return (0, import_react.useEffect)(() => () => URL.revokeObjectURL(src.current), []), (0, import_react.useLayoutEffect)(() => {
    URL.revokeObjectURL(src.current), src.current = createURL(content), forceUpdate(Symbol());
  }, [content]), src.current;
}
function useSizing(collapsed, tableRef, modal, content, lang, showPreview) {
  let ref = (0, import_react.useRef)(!1), [tableHeight, setTableHeight] = (0, import_react.useState)(0), { height, angle } = import_react_spring.default.useSpring({
    config: ref.current ? {
      mass: 1,
      tension: 250
    } : {
      duration: 0
    },
    height: collapsed ? 0 : tableHeight,
    angle: collapsed ? 0 : 1
  });
  return (0, import_react.useLayoutEffect)(() => {
    if (ref.current = !1, modal)
      setTableHeight(400);
    else if (tableRef.current && tableRef.current.parentElement) {
      let scrollerHeight = Number(getComputedStyle(tableRef.current.parentElement, "::-webkit-scrollbar").height.replace("px", ""));
      tableRef.current, tableRef.current.parentElement.scroll({ left: 1e4 });
      let add = tableRef.current.parentElement.scrollLeft !== 0;
      tableRef.current.parentElement.scroll({ left: 0 }), setTableHeight(Math.min(add ? scrollerHeight + tableRef.current.offsetHeight : tableRef.current.offsetHeight, 300));
    } else
      setTableHeight(200);
    setTimeout(() => ref.current = !0);
  }, [content, showPreview, lang]), { height, angle };
}
var import_react, import_highlight, import_react_spring, listFormat, createURL, init_hooks = __esm({
  "src/codeblock/hooks.ts"() {
    "use strict";
    import_react = __toESM(require_react()), import_highlight = __toESM(require_highlight()), import_react_spring = __toESM(require_react_spring());
    init_constants();
    listFormat = new Intl.ListFormat();
    createURL = (content) => {
      let svg = content.includes("xmlns=") ? content : content.replace(/^(<svg) /, '$1 xmlns="http://www.w3.org/2000/svg" ');
      return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    };
  }
});

// src/components/index.tsx
function Enlarge({ width, height }) {
  return import_react2.default.createElement("svg", { "aria-hidden": "true", role: "img", width, height, viewBox: "0 0 16 16" }, import_react2.default.createElement("path", { fill: "currentColor", d: "M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z" }), import_react2.default.createElement("path", { fill: "currentColor", d: "M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z" }));
}
var import_react2, ModalRoot, Spinner, Arrow, Eye, Download, Copy, Tooltip, init_components = __esm({
  "src/components/index.tsx"() {
    "use strict";
    import_react2 = __toESM(require_react());
    ModalRoot = BdApi.Webpack.getModule((m) => m?.toString?.().includes("ENTERING"), { searchExports: !0 }), Spinner = BdApi.Webpack.getModule((m) => m.Type?.PULSING_ELLIPSIS), Arrow = BdApi.Webpack.getModule((m) => m.toString().includes("M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.")), Eye = BdApi.Webpack.getModule((m) => m.toString().includes("13.1046 10.8954 14 12 14Z")), Download = BdApi.Webpack.getModule((m) => m.toString().includes("20V18H6V20H18Z")), Copy = BdApi.Webpack.getModule((m) => m.toString().includes("21V7h6v5h5v9H8z")), Tooltip = BdApi.Webpack.getModule((m) => m.prototype?.setDomElement && m.prototype.render.toString().includes("renderTooltip()"));
  }
});

// src/codeblock/header.tsx
function Header({ angle, collapsed, setCollapsed, aliases, language, isSVG, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal }) {
  return import_react3.default.createElement("div", { className: "ECBlock-header" }, import_react3.default.createElement("div", { className: "ECBlock-title" }, !modal && import_react3.default.createElement(import_react_spring2.default.animated.div, { style: {
    transform: angle.to({
      output: ["rotate(-90deg)", "rotate(0deg)"]
    })
  } }, import_react3.default.createElement(Tooltip, { text: collapsed ? "Collapsed" : "Uncollapse", hideOnClick: !1 }, (props) => import_react3.default.createElement("div", { className: "ECBlock-collapse", ...props, onClick: () => setCollapsed(!collapsed) }, import_react3.default.createElement(Arrow, { width: 22, height: 22 })))), import_react3.default.createElement(Tooltip, { text: aliases, hideOnClick: !1 }, (props) => import_react3.default.createElement("div", { className: "ECBlock-lang", ...props }, language.name))), import_react3.default.createElement("div", { className: "ECBlock-actions" }, isSVG && import_react3.default.createElement(Tooltip, { text: "Preview", hideOnClick: !1 }, (props) => import_react3.default.createElement("div", { className: `ECBlock-previewButton${showPreview ? " ECBlock-active" : ""}`, ...props, onClick: () => setShowPreview(!showPreview) }, import_react3.default.createElement(Eye, { width: 22, height: 22 }))), import_react3.default.createElement(Tooltip, { text: "Download", hideOnClick: !1 }, (props) => import_react3.default.createElement("div", { className: "ECBlock-downloadButton", ...props, onClick: downloadAction }, import_react3.default.createElement(Download, { width: 22, height: 22 }))), import_react3.default.createElement(Tooltip, { text: copied ? "Copied" : "Copy", hideOnClick: !1 }, (props) => import_react3.default.createElement("div", { className: `ECBlock-copyButton${copied ? " ECBlock-copied" : ""}`, ...props, onClick: copyAction }, import_react3.default.createElement(Copy, { width: 22, height: 22 }))), !modal && import_react3.default.createElement(Tooltip, { text: "Enlarge", hideOnClick: !1 }, (props) => import_react3.default.createElement("div", { className: "ECBlock-enlarge", ...props, onClick: enlargeAction }, import_react3.default.createElement(Enlarge, { width: 16, height: 16 })))));
}
var import_react3, import_react_spring2, header_default, init_header = __esm({
  "src/codeblock/header.tsx"() {
    "use strict";
    import_react3 = __toESM(require_react()), import_react_spring2 = __toESM(require_react_spring());
    init_components();
    header_default = (0, import_react3.memo)(Header);
  }
});

// src/codeblock/table.tsx
function Code({ highlighted, tableRef }) {
  let spl = (0, import_react4.useMemo)(() => highlighted.value.split(`
`), [highlighted]);
  return import_react4.default.createElement("table", { className: "ECBlock-table", ref: tableRef }, import_react4.default.createElement("tbody", null, spl.map((line, i) => import_react4.default.createElement("tr", { key: `${line}__${i}` }, import_react4.default.createElement("td", null, i + 1), import_react4.default.createElement("td", { dangerouslySetInnerHTML: { __html: line } })))));
}
var import_react4, table_default, init_table = __esm({
  "src/codeblock/table.tsx"() {
    "use strict";
    import_react4 = __toESM(require_react());
    table_default = (0, import_react4.memo)(Code);
  }
});

// src/codeblock/preview.tsx
function Preview({ content, height }) {
  let src = useSrc(content);
  return import_react5.default.createElement("div", { className: "ECBlock-preview" }, import_react5.default.createElement("img", { src, height }));
}
var import_react5, preview_default, init_preview = __esm({
  "src/codeblock/preview.tsx"() {
    "use strict";
    import_react5 = __toESM(require_react());
    init_hooks();
    preview_default = (0, import_react5.memo)(Preview);
  }
});

// src/codeblock/index.tsx
function CodeBlock({ content, lang, modal, fileName, loading = !1 }) {
  let tableRef = (0, import_react6.useRef)(null), [collapsed, setCollapsed] = (0, import_react6.useState)(!1), language = useLanguage(lang), highlighted = useHighlighted(language, content), [showPreview, setShowPreview] = (0, import_react6.useState)(!1), { height, angle } = useSizing(collapsed, tableRef, modal, content, lang, showPreview), aliases = useAlaises(language, lang), isSVG = (0, import_react6.useMemo)(() => lang === "svg", [lang]), downloadAction = (0, import_react6.useCallback)(() => {
    loading || window.DiscordNative.fileManager.saveWithDialog(content, fileName());
  }, [content, lang, loading]), [copied, setCopied] = import_react6.default.useState(!1), copyAction = (0, import_react6.useCallback)(() => {
    loading || copied || (window.DiscordNative.clipboard.copy(content), setCopied(!0), setTimeout(() => setCopied(!1), 2e3));
  }, [content, copied, loading]), enlargeAction = (0, import_react6.useCallback)(() => {
    loading || openModal((props) => import_react6.default.createElement(ModalRoot, { ...props, size: "large" }, import_react6.default.createElement(CodeBlock, { content, lang, modal: !0, fileName })));
  }, [content, lang, loading]);
  return import_react6.default.createElement("div", { className: `ECBlock${collapsed ? " ECBlock-collapsed" : ""}${modal ? " ECBlock-modal" : ""}${loading ? " ECBlock-loading" : ""}` }, import_react6.default.createElement(header_default, { angle, collapsed, setCollapsed, aliases, language, isSVG, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal }), import_react6.default.createElement(import_react_spring3.default.animated.div, { className: `ECBlock-wrapper ${thin}`, style: { height } }, loading && import_react6.default.createElement(Spinner, { type: Spinner.Type.WANDERING_CUBES }), !loading && showPreview && isSVG && import_react6.default.createElement(preview_default, { content, height: modal ? 400 : 200 }), !loading && !(showPreview && isSVG) && import_react6.default.createElement(table_default, { highlighted, tableRef })));
}
var import_react6, import_react_spring3, thin, openModal, codeblock_default, init_codeblock = __esm({
  "src/codeblock/index.tsx"() {
    "use strict";
    import_react6 = __toESM(require_react()), import_react_spring3 = __toESM(require_react_spring());
    init_hooks();
    init_header();
    init_table();
    init_preview();
    init_components();
    init_components();
    init_constants();
    ({ thin } = BdApi.Webpack.getModule((m) => m.thin && m.none)), openModal = BdApi.Webpack.getModule((m) => m?.toString?.().includes("onCloseCallback") && m?.toString().includes("Layer"), { searchExports: !0 });
    codeblock_default = (0, import_react6.memo)(CodeBlock);
  }
});

// src/attachment/hooks.ts
function useFetchContent(url) {
  let refOriginalValue = (0, import_react7.useMemo)(() => cache.has(url) ? cache.get(url) : !1, []), body = import_react7.default.useRef(refOriginalValue), [, forceUpdate] = (0, import_react7.useState)(Symbol());
  return (0, import_react7.useLayoutEffect)(() => {
    if (body.current)
      return;
    let abortController = new AbortController();
    return (async () => {
      let result = await fetch(url, { signal: abortController.signal });
      result.ok ? (body.current = await result.text(), cache.set(url, body.current)) : body.current = `Enhance Codeblocks FETCH ERROR: STATUS=${JSON.stringify(result.status)} OK=${JSON.stringify(result.ok)} URL=${JSON.stringify(result.url)}`, forceUpdate(Symbol());
    })(), () => abortController.abort();
  }, []), body.current;
}
var import_react7, cache, init_hooks2 = __esm({
  "src/attachment/hooks.ts"() {
    "use strict";
    import_react7 = __toESM(require_react()), cache = /* @__PURE__ */ new Map();
  }
});

// src/attachment/index.tsx
function Attachment({ attachment, renderAdjacentContent, onContextMenu, className }) {
  let content = useFetchContent(attachment.url), lang = (0, import_react8.useMemo)(() => {
    let spl = attachment.filename.split(".");
    return spl.length - 1 ? spl.pop() : "";
  }, []);
  return import_react8.default.createElement("div", { className: `ECBlock-file ${className}`, onContextMenu }, import_react8.default.createElement(codeblock_default, { content: content || "", lang, modal: !1, fileName: () => attachment.filename, loading: typeof content != "string" }), renderAdjacentContent());
}
var import_react8, attachment_default, init_attachment = __esm({
  "src/attachment/index.tsx"() {
    "use strict";
    import_react8 = __toESM(require_react());
    init_hooks2();
    init_codeblock();
    attachment_default = (0, import_react8.memo)(Attachment);
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var import_react9, BdApi2, codeBlock, Message, messageListItem, ECBlocks, src_default, init_src = __esm({
  "src/index.tsx"() {
    "use strict";
    import_react9 = __toESM(require_react());
    init_styles();
    init_codeblock();
    init_attachment();
    BdApi2 = new window.BdApi("ECBlocks"), { codeBlock } = BdApi2.Webpack.getModule((m) => m.parse && m.parseTopic).defaultRules, Message = BdApi2.Webpack.getModule((m) => m.defaultProps?.renderEmbeds, { searchExports: !0 }), { messageListItem } = BdApi2.Webpack.getModule((m) => m.messageListItem), ECBlocks = class {
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
        BdApi2.Patcher.instead(codeBlock, "react", (_that, [props]) => import_react9.default.createElement(codeblock_default, { ...props, modal: !1, fileName: () => `codeblock-${Date.now()}.${props.lang || "txt"}` })), BdApi2.Patcher.after(Message.prototype, "renderAttachments", (that, props, attachments) => {
          if (attachments)
            for (let attachment of attachments)
              attachment.props.children.props.renderPlaintextFilePreview = (props2) => import_react9.default.createElement(attachment_default, { ...props2 });
        }), BdApi2.DOM.addStyle(styles_default), this.forceUpdateMessages();
      }
      stop() {
        BdApi2.Patcher.unpatchAll(), BdApi2.DOM.removeStyle(), this.forceUpdateMessages();
      }
    }, src_default = ECBlocks;
  }
});

// index.js
module.exports = (init_src(), __toCommonJS(src_exports));
