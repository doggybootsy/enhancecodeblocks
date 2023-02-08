import React, { memo, useMemo, useState, useRef, useCallback } from "react";
import ReactSpring from "react-spring";

import { useLanguage, useAlaises, useHighlighted, useSizing } from "./hooks";
import Header from "./header";
import Table from "./table";
import Preview from "./preview";
import { ModalRoot } from "../components";
import { Spinner } from "../components";

const { thin } = BdApi.Webpack.getModule(m => m.thin && m.none);

const openModal = BdApi.Webpack.getModule(m => m?.toString?.().includes("onCloseCallback") && m?.toString().includes("Layer"), {searchExports: true});

function CodeBlock({ content, lang, modal, fileName, loading = false }: { content: string, lang: string, modal: boolean, fileName: () => string, loading?: boolean }) {
  const tableRef = useRef<HTMLTableElement>(null);

  const [ collapsed, setCollapsed ] = useState(false);
  
  const language = useLanguage(lang);
  const highlighted = useHighlighted(language, content);

  const [ showPreview, setShowPreview ] = useState(false);

  const { height, angle } = useSizing(collapsed, tableRef, modal, content, lang, showPreview);

  const aliases = useAlaises(language, lang);

  const isSVG = useMemo(() => lang === "svg", [ lang ]);

  const downloadAction = useCallback(() => {
    if (loading) return;
    (window as any).DiscordNative.fileManager.saveWithDialog(content, fileName());
  }, [ content, lang, loading ]);

  const [ copied, setCopied ] = React.useState(false);
  const copyAction = useCallback(() => {
    if (loading) return;
    if (copied) return;
    (window as any).DiscordNative.clipboard.copy(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [ content, copied, loading ]);

  const enlargeAction = useCallback(() => {
    if (loading) return;
    openModal((props: any) => (
      <ModalRoot {...props} size="large">
        <CodeBlock content={content} lang={lang} modal={true} fileName={fileName} />
      </ModalRoot>
    ));
  }, [ content, lang, loading ]);

  return (
    <div className={`ECBlock${collapsed ? " ECBlock-collapsed" : ""}${modal ? " ECBlock-modal" : ""}${loading ? " ECBlock-loading" : ""}`}>
      <Header angle={angle} collapsed={collapsed} setCollapsed={setCollapsed} aliases={aliases} language={language} isSVG={isSVG} showPreview={showPreview} setShowPreview={setShowPreview} copied={copied} downloadAction={downloadAction} copyAction={copyAction} enlargeAction={enlargeAction} modal={modal} />
      <ReactSpring.animated.div className={`ECBlock-wrapper ${thin}`} style={{ height: modal ? 400 : height }}>
        {loading ? <Spinner type={Spinner.Type.WANDERING_CUBES} /> : showPreview && isSVG ? <Preview content={content} height={modal ? 364 : 200} /> : <Table highlighted={highlighted} tableRef={tableRef} />}
      </ReactSpring.animated.div>
    </div>
  )
};

export default memo(CodeBlock);