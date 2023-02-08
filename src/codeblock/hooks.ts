/// <reference path="../index.d.ts" />
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { Language } from "highlight.js";
import hljs from "highlight.js";
import ReactSpring from "react-spring";

import { PREVIEW_HEIGHT, MODAL_CONTENT_HEIGHT, MAX_HEIGHT } from "./constants";

const listFormat = new Intl.ListFormat();

export function useLanguage(language: string): Language {
  return useMemo(() => {
    const lang = hljs.getLanguage(language);
    if (lang) return lang;
    return hljs.getLanguage("txt") as Language;
  }, [ language ]);
};

export function useAlaises(language: Language, lang: string) {
  return useMemo(() => {
    if (!language.aliases) return `.${lang}`;
    const langs = Array.from(new Set([ ...language.aliases, lang ]), (alias) => alias ? `.${alias}` : alias);
    return listFormat.format(langs.filter(Boolean));
  }, [ language ]);
};

export function useHighlighted(language: Language, content: string) {
  return useMemo(() => {
    const lang = language.aliases?.[0] ? language.aliases[0] : language.name;
    return hljs.highlight(lang as string, content);
  }, [ content, language ]);
};

const createURL = (content: string) => {
  // Add a 'xmlns' tag if it doesnt exist
  const svg = content.includes("xmlns=") ? content : content.replace(/^(<svg) /, "$1 xmlns=\"http://www.w3.org/2000/svg\" ");
  return URL.createObjectURL(new Blob([ svg ], { type: "image/svg+xml" }));
};
export function useSrc(content: string) {
  const [, forceUpdate ] = useState(Symbol());

  const src = useRef(createURL(content));
  
  useEffect(() => () => URL.revokeObjectURL(src.current), []);
  useLayoutEffect(() => {
    URL.revokeObjectURL(src.current);
    src.current = createURL(content);
    forceUpdate(Symbol());
  }, [ content ]);

  return src.current;
};

export function useSizing(collapsed: boolean, tableRef: React.RefObject<HTMLTableElement>, modal: boolean,content: string, lang:string, showPreview: boolean) {
  const ref = useRef(false);
  const [ tableHeight, setTableHeight ] = useState(0);

  const { height, angle } = ReactSpring.useSpring({
    config: ref.current ? {
      mass: 1,
      tension: 250
    } : {
      duration: 0
    },
    height: collapsed ? 0 : tableHeight,
    angle: collapsed ? 0 : 1
  });

  useLayoutEffect(() => {
    ref.current = false;

    if (modal) setTableHeight(MODAL_CONTENT_HEIGHT);
    else if (tableRef.current && tableRef.current.parentElement) {
      const scrollerHeight = Number(getComputedStyle(tableRef.current.parentElement, "::-webkit-scrollbar").height.replace("px", ""));

      tableRef.current

      tableRef.current.parentElement.scroll({ left: 10000 });
      const add = tableRef.current.parentElement.scrollLeft !== 0;
      tableRef.current.parentElement.scroll({ left: 0 });

      setTableHeight(Math.min(add ? scrollerHeight + tableRef.current.offsetHeight : tableRef.current.offsetHeight, MAX_HEIGHT));
    }
    else setTableHeight(PREVIEW_HEIGHT);
    
    setTimeout(() => ref.current = true);
  }, [ content, showPreview, lang ]);

  return { height, angle };
};