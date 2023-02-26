/// <reference path="../index.d.ts" />
import hljs, { Language } from "highlight.js";
import { useMemo, useRef, useEffect, useLayoutEffect, useState } from "react";
import ReactSpring from "react-spring";

import { useForceUpdate } from "./common";
import { createURL } from "../util";
import { useData } from "../data";

const intl = BdApi.Webpack.getModule(m => m.Messages) as {
  _fetchMessages(lang: string): Record<string, string>,
  getLocale(): string
};
export function useMessages() {
  return useMemo(() => intl._fetchMessages(intl.getLocale()), [ ]);
};

export function useLanguage(language: string): Language {
  return useMemo(() => {
    const lang = hljs.getLanguage(language);    
    if (lang) return lang;
    return hljs.getLanguage("txt") as Language;
  }, [ language ]);
};

export function useHighlighted(language: Language, _lang: string, content: string) {
  return useMemo(() => {
    const lang = (language.aliases?.[0] ? language.aliases[0] : language.name) as string;
    if (hljs.getLanguage(lang)) return hljs.highlight(lang, content);
    return hljs.highlight(_lang, content);
  }, [ content, language ]);
};

export function useSrc(content: string) {
  const forceUpdate = useForceUpdate();

  const src = useRef(createURL(content));
  
  useEffect(() => () => URL.revokeObjectURL(src.current), []);
  useLayoutEffect(() => {
    URL.revokeObjectURL(src.current);
    src.current = createURL(content);
    forceUpdate();
  }, [ content ]);

  return src.current;
};

export function useSizing(collapsed: boolean, tableRef: React.RefObject<HTMLTableElement>, modal: boolean,content: string, lang:string, showPreview: boolean) {
  const [ maxHeight ] = useData("maxHeight", 300);
  const [ previewHeight ] = useData("previewHeight", 200);  

  const ref = useRef(false);
  const [ tableHeight, setTableHeight ] = useState(0);

  const { height, angle } = ReactSpring.useSpring({
    config: ref.current ? ReactSpring.config.default : { duration: 0 },
    height: collapsed ? 0 : tableHeight,
    angle: collapsed ? 0 : 1
  });

  useLayoutEffect(() => {
    ref.current = false;

    if (modal) setTableHeight(400);
    else if (tableRef.current && tableRef.current.parentElement) {
      const scrollerHeight = Number(getComputedStyle(tableRef.current.parentElement, "::-webkit-scrollbar").height.replace("px", ""));

      tableRef.current.parentElement.scroll({ left: 10000 });
      const add = tableRef.current.parentElement.scrollLeft !== 0;
      tableRef.current.parentElement.scroll({ left: 0 });

      setTableHeight(
        // Max Height of 300px
        Math.min(add ? scrollerHeight + tableRef.current.offsetHeight : tableRef.current.offsetHeight, maxHeight)
      );
    }
    else setTableHeight(previewHeight);
    
    setTimeout(() => ref.current = true);
  }, [ content, showPreview, lang, maxHeight, previewHeight ]);

  return { height, angle };
};
