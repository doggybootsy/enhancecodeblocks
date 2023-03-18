/// <reference path="../index.d.ts" />
import hljs, { Language } from "highlight.js";
import { useMemo, useRef, useEffect, useLayoutEffect, useState } from "react";
import ReactSpring from "react-spring";

import { createURL } from "../util";
import { useData } from "../data";

export function useLanguage(language: string): Language {
  return useMemo(() => {
    const lang = hljs.getLanguage(language);    
    if (lang) return lang;
    return hljs.getLanguage("txt") as Language;
  }, [ language ]);
};

export function useHighlighted(language: Language, _lang: string, content: string) {
  const [ maxBytes ] = useData("maxBytes", 21_846);

  return useMemo(() => {
    const lang = (language.aliases?.[0] ? language.aliases[0] : language.name) as string;

    const _content = content.length > maxBytes ? `${content.slice(0, maxBytes)}\n\n[Download to view the rest of this file]` : content;

    if (hljs.getLanguage(lang)) return hljs.highlight(lang, _content);
    return hljs.highlight(_lang, _content);
  }, [ content, language, maxBytes ]);
};

export function useSrc(content: string) {
  const [ src, setSrc ] = useState(() => createURL(content));

  useEffect(() => () => URL.revokeObjectURL(src));
  useLayoutEffect(() => {
    setSrc((old) => {
      URL.revokeObjectURL(old);
      return createURL(content);
    })
  }, [ content ]);

  return src;
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
