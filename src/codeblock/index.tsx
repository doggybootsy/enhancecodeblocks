/// <reference path="../index.d.ts" />
import React, { memo, useMemo, useState, useRef, useCallback } from "react";
import ReactSpring from "react-spring";

import { useLanguage, useHighlighted, useSizing } from "./hooks";
import Header from "./header";
import Table from "./table";
import Preview from "./preview";
import { ModalRoot } from "../components";
import { Spinner } from "../components";
import { MODAL_HEIGHT, PREVIEW_HEIGHT } from "./constants";
import { getData } from "../data";

const { thin } = BdApi.Webpack.getModule(m => m.thin && m.none);

const openModal = BdApi.Webpack.getModule(m => m?.toString?.().includes("onCloseCallback") && m?.toString().includes("Layer"), {searchExports: true}) as (cb: (props: {
  onClose: () => void,
  transitionState: null | number
}) => React.ReactNode) => string;

function CodeBlock({ content, lang, modal, fileName, loading = false }: { content: string, lang: string, modal: boolean, fileName: () => string, loading?: boolean }) {
  const tableRef = useRef<HTMLTableElement>(null);

  const [ _lang, setLang ] = useState(lang);
  
  const [ collapsed, setCollapsed ] = useState<boolean>(modal ? false : getData("autoCollapse", false));
  
  const language = useLanguage(_lang);
  const highlighted = useHighlighted(language, _lang, content);

  const [ showPreview, setShowPreview ] = useState(false);

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

  return (
    <div className={`ECBlock${collapsed ? " ECBlock-collapsed" : ""}${modal ? " ECBlock-modal" : ""}${loading ? " ECBlock-loading" : ""}`} data-language={language.name}>
      <Header angle={angle} collapsed={collapsed} setCollapsed={setCollapsed} languageName={`${isSVG ? "SVG, " : ""}${language.name}`} isSVG={isSVG} showPreview={showPreview} setShowPreview={setShowPreview} copied={copied} downloadAction={downloadAction} copyAction={copyAction} enlargeAction={enlargeAction} modal={modal} setLang={setLang} />
      <ReactSpring.animated.div className={`ECBlock-wrapper ${thin}`} style={{ height }}>
        {loading && <Spinner type={Spinner.Type.WANDERING_CUBES} />}
        {(!loading && showPreview && isSVG) && <Preview content={content} height={modal ? MODAL_HEIGHT : PREVIEW_HEIGHT} />}
        {(!loading && !(showPreview && isSVG)) && <Table highlighted={highlighted} tableRef={tableRef} />}
      </ReactSpring.animated.div>
    </div>
  )
};

export default memo(CodeBlock);