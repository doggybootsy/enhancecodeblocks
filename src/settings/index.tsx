import React, { memo } from "react";

import { NumberInputStepper, SettingItem, Switch } from "../components";
import { useData } from "../data";

function Settings() {
  const [ autoCollapse, setAutoCollapse ] = useData("autoCollapse", false);  
  const [ maxHeight, setMaxHeight ] = useData("maxHeight", 300);
  const [ previewHeight, setPreviewHeight ] = useData("previewHeight", 200);  
  const [ maxBytes, setBytes ] = useData("maxBytes", 21_846);

  return (
    <div>
      <Switch
        value={autoCollapse}
        onChange={setAutoCollapse}
      >Auto Collapse</Switch>
      <SettingItem 
        item={<NumberInputStepper onChange={setMaxHeight} value={maxHeight} />}
        title="Max Height" />
      <SettingItem 
        item={<NumberInputStepper onChange={setPreviewHeight} value={previewHeight} />}
        title="Preview Height" />
      <SettingItem 
        item={<NumberInputStepper onChange={setBytes} value={maxBytes} />}
        note="This helps reduce lag, by limiting the amount of characters that gets highlighted"
        title="Max Number of Characters" />
    </div>
  )
};

export default memo(Settings);