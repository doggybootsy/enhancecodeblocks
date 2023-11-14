import React, { memo, useLayoutEffect, useRef, useState } from "react";

import { Icon, Popout, SettingItem, Switch } from "../components";
import { useData } from "../data";
import Menu, { shouldShowMenu } from "./menu";

function clamp(x: number, lower: number, upper: number) {
  return Math.min(upper, Math.max(lower, x));
}

function Settings() {
  const [ autoCollapse, setAutoCollapse ] = useData("autoCollapse", false);  
  const [ instantCollapse, setInstantCollapse ] = useData("instantCollapse", false);  
  const [ maxHeight, setMaxHeight ] = useData("maxHeight", 300);
  const [ previewHeight, setPreviewHeight ] = useData("previewHeight", 200);  
  const [ maxBytes, setBytes ] = useData("maxBytes", 21_846);
  const [ maxFileBytes, setFileBytes ] = useData("maxFileBytes", 200_000_000);
  const [ wrapText, setWrapText ] = useData("wrapText", false);

  const [ open, setOpen ] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;
    ref.current.parentElement.classList.add("ECBlock-zIndex-hook");
  }, [ ]);  
  
  return (
    <div className="ECBlock-settings" ref={ref}>
      {shouldShowMenu && <Popout
        onRequestClose={() => setOpen(false)}
        shouldShow={open}
        position="left"
        align="top"
        spacing={8}
        autoInvert={true}
        nudgeAlignIntoViewport={true}
        renderPopout={() => <Menu onClose={() => setOpen(false)} />}
      >
        {(props) => (
          <div {...props} onClick={() => setOpen(!open)} role="button" tabIndex={1} className={`ECBlock-overflow${open ? ` ECBlock-selected` : ""}`}>
            <Icon name="overflow" size={24} />
          </div>
        )}
      </Popout>}
      <Switch
        value={autoCollapse}
        onChange={setAutoCollapse}
      >Auto Collapse</Switch>
      <Switch
        value={instantCollapse}
        onChange={setInstantCollapse}
      >Instant Collapse</Switch>
      <SettingItem 
        item={(
          <div className="ECBlock-numberSetting">
            <input 
              type="number" 
              onChange={(event) => {
                setMaxHeight(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
              }} 
              value={maxHeight}
            />
          </div>
        )}
        title="Max Height" />
      <SettingItem 
        item={(
          <div className="ECBlock-numberSetting">
            <input 
              type="number" 
              onChange={(event) => {
                setPreviewHeight(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
              }} 
              value={previewHeight}
            />
          </div>
        )}
        title="Preview Height" />
      <SettingItem 
        item={(
          <div className="ECBlock-numberSetting">
            <input 
              type="number" 
              onChange={(event) => {
                setBytes(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
              }} 
              value={maxBytes}
            />
          </div>
        )}
        note="This helps reduce lag, by limiting the amount of characters that gets highlighted"
        title="Max Number of Characters" />
      <SettingItem 
        item={(
          <div className="ECBlock-numberSetting">
            <input 
              type="number" 
              onChange={(event) => {
                setFileBytes(clamp(event.currentTarget.valueAsNumber, 0, Number.MAX_SAFE_INTEGER));
              }} 
              value={maxFileBytes}
            />
          </div>
        )}
        note="This helps preventing crashing on large files"
        title="Max Number of Bytes allowed on files" />
      <Switch
        value={wrapText}
        onChange={setWrapText}
      >Wrap Text</Switch>
    </div>
  )
};

export default memo(Settings);