/// <reference path="../index.d.ts" />
import React, { memo, useMemo, useState, useRef, useCallback } from "react";
import ReactSpring from "react-spring";

import { useLanguage, useHighlighted, useSizing, useStateDeps } from "../hooks";
import Header from "./header";
import Table from "./table";
import Preview from "./preview";
import { ModalRoot, Spinner } from "../components";
import { useData } from "../data";

const { thin } = BdApi.Webpack.getModule(m => m.thin && m.none) as { thin: string };

const openModal = BdApi.Webpack.getModule(m => m?.toString?.().includes("onCloseCallback") && m?.toString().includes("Layer"), {searchExports: true}) as (cb: (props: {
  onClose: () => void,
  transitionState: null | number
}) => React.ReactNode) => string;

function CodeBlock({ content, lang, modal, fileName, loading = false, remove }: { content: string, lang: string, modal: boolean, fileName: () => string, loading?: boolean, remove?: (() => void) | false }) {
  const tableRef = useRef<HTMLTableElement>(null);
  
  const [ _lang, setLang ] = useStateDeps(lang, [ lang ]);
  
  const [ autoCollapse ] = useData("autoCollapse", false);
  const [ collapsed, setCollapsed ] = useStateDeps(() => modal ? false : autoCollapse, [ autoCollapse ]);
  
  const language = useLanguage(_lang);
  const highlighted = useHighlighted(language, _lang, content);
  
  const [ showPreview, setShowPreview ] = useState(false);
  const [ previewHeight ] = useData("previewHeight", 200); 
  
  const { height, angle } = useSizing(collapsed, tableRef, modal, content, lang, showPreview);
  
  // Original language must be CSS and the language name must be the html like
  const isSVG = useMemo(() => lang === "svg" && language.name === "HTML, XML", [ lang, language ]);

  const downloadAction = useCallback(() => {
    if (loading) return;
    if (window.DiscordNative) window.DiscordNative.fileManager.saveWithDialog(content, fileName());
  }, [ content, lang, loading ]);
  
  const [ copied, setCopied ] = React.useState(false);
  const copyAction = useCallback(() => {
    if (loading) return;
    if (copied) return;
    if (window.DiscordNative) window.DiscordNative.clipboard.copy(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [ content, copied, loading ]);
  
  const enlargeAction = useCallback(() => {
    if (loading) return;
    openModal(({ transitionState, onClose }) => (
      <ModalRoot transitionState={transitionState} onClose={onClose} size="large">
        <CodeBlock content={content} lang={lang} modal={true} fileName={fileName} />
      </ModalRoot>
    ));
  }, [ content, lang, loading ]);
  
  const byteSize = useMemo(() => new File([ content ], "").size, [ content ]);

  return (
    <div 
      className={`ECBlock${collapsed ? " ECBlock-collapsed" : ""}${modal ? " ECBlock-modal" : ""}${loading ? " ECBlock-loading" : ""}`} 
      data-language={language.name}>
      <Header 
        angle={angle} 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        languageName={`${isSVG ? "SVG, " : ""}${language.name}`} 
        isSVG={isSVG} 
        showPreview={showPreview} 
        setShowPreview={setShowPreview} 
        copied={copied} 
        downloadAction={downloadAction} 
        copyAction={copyAction} 
        enlargeAction={enlargeAction} 
        modal={modal} 
        setLang={setLang} 
        remove={remove}
        bytes={byteSize}
        loading={loading} />
      <ReactSpring.animated.div className={`ECBlock-wrapper ${thin}`} style={{ height }}>
        {loading && <Spinner type={Spinner.Type.WANDERING_CUBES} />}
        {(!loading && showPreview && isSVG) && <Preview content={content} height={modal ? 400 : previewHeight} />}
        {(!loading && !(showPreview && isSVG)) && <Table highlighted={highlighted} tableRef={tableRef} language={language} />}
      </ReactSpring.animated.div>
    </div>
  )
};

export default memo(CodeBlock);