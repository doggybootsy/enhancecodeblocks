import React, { memo } from "react";

import { Switch } from "../components";
import { useData } from "../data";

function Settings() {
  const [ autoCollapse, setAutoCollapse ] = useData("autoCollapse", false);

  return (
    <div>
      <Switch
        value={autoCollapse}
        onChange={setAutoCollapse}
      >Auto Collapse</Switch>
    </div>
  )
};

export default memo(Settings);