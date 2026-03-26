/// <reference path="../index.d.ts" />
import React, { memo, useMemo } from "react";
import ReactSpring from "react-spring";
import type { SpringValue } from "@react-spring/web";

import { Tooltip, Icon, Popout } from "../components";

import ChangeLang from "./changeLang";
import { formatBytes, message } from "../util";

function Header({ angle, collapsed, setCollapsed, languageName, isSVG, isMarkdown, markdownViewMode, setMarkdownViewMode, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal, setLang, remove, bytes, loading }: { angle: SpringValue<number>, collapsed: boolean, setCollapsed: (v: boolean) => void, languageName: string, isSVG: boolean, isMarkdown?: boolean, markdownViewMode?: string, setMarkdownViewMode?: (v: string) => void, showPreview: boolean, setShowPreview: (v: boolean) => void, copied: boolean, downloadAction: () => void, copyAction: () => void, enlargeAction: () => void, modal: boolean, setLang: (lang: string) => void, remove?: (() => void) | false, bytes: number, loading?: boolean }) {
  const [ shouldShow, setShouldShow ] = React.useState(false);

  const targetElementRef = React.useRef<HTMLDivElement>(null);
  
  const formattedBytes = useMemo(() => formatBytes(bytes), [ bytes ]);

  return (
    <div className="ECBlock-header">
      <div className="ECBlock-title">
        {!modal && (
          <ReactSpring.animated.div style={{
            transform: angle.to({
              output: [ "rotate(180deg)", "rotate(270deg)" ]
            })
          }}>
            <Tooltip text={!collapsed ? "Uncollapse" : "Collapsed"} hideOnClick={false}>
              {(props) => (
                <div className="ECBlock-collapse" {...props} onClick={() => setCollapsed(!collapsed)}>
                  <Icon size={22} name="arrow" />
                </div>
              )}
            </Tooltip>
          </ReactSpring.animated.div>
        )}
        <Popout
          targetElementRef={targetElementRef}
          renderPopout={() => (
            <ChangeLang value={languageName} onChange={(value) => {
              setShouldShow(false);
              setLang(value);
            }} />
          )}
          shouldShow={shouldShow}
          position="right"
          align="top"
          spacing={16}
          autoInvert={true}
          nudgeAlignIntoViewport={true}
          onRequestClose={() => setShouldShow(false)}
        >
          {(props) => (
            <div className="ECBlock-lang" ref={targetElementRef} {...props} onClick={(event) => {
              setShouldShow(!shouldShow);
              if (props.onClick) props.onClick(event);
            }}>{languageName}</div>
          )}
        </Popout>
        {!loading && (
          <Tooltip text={`${bytes} B`} hideOnClick={false}>
            {(props) => <div className="ECBlock-byteSize" {...props}>{formattedBytes}</div>}
          </Tooltip>
        )}
      </div>
      <div className="ECBlock-actions">
        {remove && <Tooltip text={message("oyYWHE" || "DELETE")} hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-remove" {...props} onClick={remove}>
              <Icon size={22} name="trash" />
            </div>
          )}
        </Tooltip>}
        {isSVG && (
          <Tooltip text="Preview" hideOnClick={false}>
            {(props) => (
              <div className={`ECBlock-previewButton${showPreview ? " ECBlock-active" : ""}`} {...props} onClick={() => setShowPreview(!showPreview)}>
                <Icon size={22} name="eye" />
              </div>
            )}
          </Tooltip>
        )}
        {isMarkdown && (
          <Tooltip text={markdownViewMode === "rendered" ? "View Code" : "View Rendered"} hideOnClick={false}>
            {(props) => (
              <div className={`ECBlock-markdownButton${markdownViewMode === "rendered" ? " ECBlock-active" : ""}`} {...props} onClick={() => setMarkdownViewMode?.(markdownViewMode === "rendered" ? "raw" : "rendered")}>
                <Icon size={22} name={markdownViewMode === "rendered" ? "copy" : "eye"} />
              </div>
            )}
          </Tooltip>
        )}
        <Tooltip text={message("1WjMbC" || "DOWNLOAD")} hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-downloadButton" {...props} onClick={downloadAction}>
              <Icon size={22} name="download" />
            </div>
          )}
        </Tooltip>
        <Tooltip text={copied ? message("t5VZ88" || "COPIED") : message("OpuAlK" || "COPY")} hideOnClick={false}>
          {(props) => (
            <div className={`ECBlock-copyButton${copied ? " ECBlock-copied" : ""}`} {...props} onClick={copyAction}>
              <Icon size={22} name="copy" />
            </div>
          )}
        </Tooltip>
        {!modal && <Tooltip text={message("0PQYk3" || "PREVIEW_WHOLE_FILE")} hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-enlarge" {...props} onClick={enlargeAction}>
              <Icon size={22} name="enlarge" />
            </div>
          )}
        </Tooltip>}
      </div>
    </div>
  )
};

export default memo(Header);