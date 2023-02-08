/// <reference path="../index.d.ts" />
import React, { memo } from "react";
import ReactSpring from "react-spring";
import type { SpringValue } from "@react-spring/web";
import type { Language } from "highlight.js";

import { Tooltip, Arrow, Eye, Download, Copy, Enlarge } from "../components";

function Header({ angle, collapsed, setCollapsed, aliases, language, isSVG, showPreview, setShowPreview, copied, downloadAction, copyAction, enlargeAction, modal }: { angle: SpringValue<number>, collapsed: boolean, setCollapsed: (v: boolean) => void, aliases: string[], language: Language, isSVG: boolean, showPreview: boolean, setShowPreview: (v: boolean) => void, copied: boolean, downloadAction: () => void, copyAction: () => void, enlargeAction: () => void, modal: boolean }) {
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
                <Arrow width={22} height={22} />
              </div>
            )}
          </Tooltip>
        </ReactSpring.animated.div>}
        <Tooltip text={aliases} hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-lang" {...props}>{language.name}</div>
          )}
        </Tooltip>
      </div>
      <div className="ECBlock-actions">
        {isSVG && (
          <Tooltip text="Preview" hideOnClick={false}>
            {(props) => (
              <div className={`ECBlock-previewButton${showPreview ? " ECBlock-active" : ""}`} {...props} onClick={() => setShowPreview(!showPreview)}>
                <Eye width={22} height={22} />
              </div>
            )}
          </Tooltip>
        )}
        <Tooltip text="Download" hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-downloadButton" {...props} onClick={downloadAction}>
              <Download width={22} height={22} />
            </div>
          )}
        </Tooltip>
        <Tooltip text={copied ? "Copied" : "Copy"} hideOnClick={false}>
          {(props) => (
            <div className={`ECBlock-copyButton${copied ? " ECBlock-copied" : ""}`} {...props} onClick={copyAction}>
              <Copy width={22} height={22} />
            </div>
          )}
        </Tooltip>
        {!modal && <Tooltip text="Enlarge" hideOnClick={false}>
          {(props) => (
            <div className="ECBlock-enlarge" {...props} onClick={enlargeAction}>
              <Enlarge width={16} height={16} />
            </div>
          )}
        </Tooltip>}
      </div>
    </div>
  )
};

export default memo(Header);