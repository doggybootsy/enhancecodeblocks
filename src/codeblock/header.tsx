/// <reference path="../index.d.ts" />
import React, { memo } from "react";
import ReactSpring from "react-spring";
import type { SpringValue } from "@react-spring/web";

import { Tooltip, ArrowIcon, EyeIcon, DownloadIcon, CopyIcon, EnlargeIcon, Popout } from "../components";
import ChangeLang from "./changeLang";
import { useMessages } from "./hooks";

function Header({ angle, collapsed, setCollapsed, languageName, isSVG, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal, setLang }: { angle: SpringValue<number>, collapsed: boolean, setCollapsed: (v: boolean) => void, languageName: string, isSVG: boolean, showPreview: boolean, setShowPreview: (v: boolean) => void, copied: boolean, downloadAction: () => void, copyAction: () => void, enlargeAction: () => void, modal: boolean, setLang: (lang: string) => void }) {
  const [ shouldShow, setShouldShow ] = React.useState(false);
  const messages = useMessages();

  return (
    <div className="ECBlock-header">
      <div className="ECBlock-title">
        {!modal && <ReactSpring.animated.div style={{
          transform: angle.to({
            output: [ "rotate(-90deg)", "rotate(0deg)" ]
          })
        }}>
          <Tooltip text={!collapsed ? "Uncollapse" : "Collapsed"} hideOnClick={false}>
            {(props) => (
              <div className="ECBlock-collapse" {...props} onClick={() => setCollapsed(!collapsed)}>
                <ArrowIcon width={22} height={22} />
              </div>
            )}
          </Tooltip>
        </ReactSpring.animated.div>}
        <Popout
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
            <div className="ECBlock-lang" {...props} onClick={(event) => {
              setShouldShow(!shouldShow);
              props.onClick(event);
            }}>{languageName}</div>
          )}
        </Popout>
      </div>
      <div className="ECBlock-actions">
        {isSVG && (
          <Tooltip text="Preview" hideOnClick={false}>
            {(props) => (
              <div className={`ECBlock-previewButton${showPreview ? " ECBlock-active" : ""}`} {...props} onClick={() => setShowPreview(!showPreview)}>
                <EyeIcon width={22} height={22} />
              </div>
            )}
          </Tooltip>
        )}
        <Tooltip text={messages.DOWNLOAD} hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-downloadButton" {...props} onClick={downloadAction}>
              <DownloadIcon width={22} height={22} />
            </div>
          )}
        </Tooltip>
        <Tooltip text={copied ? messages.COPIED : messages.COPY} hideOnClick={false}>
          {(props) => (
            <div className={`ECBlock-copyButton${copied ? " ECBlock-copied" : ""}`} {...props} onClick={copyAction}>
              <CopyIcon width={22} height={22} />
            </div>
          )}
        </Tooltip>
        {!modal && <Tooltip text={messages.PREVIEW_WHOLE_FILE} hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-enlarge" {...props} onClick={enlargeAction}>
              <EnlargeIcon width={16} height={16} />
            </div>
          )}
        </Tooltip>}
      </div>
    </div>
  )
};

export default memo(Header);