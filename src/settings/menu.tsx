import React from "react";

import { Icon } from "../components";
import joinGuild from "./joinGuild";

const displayUserModal = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings(".analyticsLocation,", ",friendToken:"), { searchExports: true }) as (props: { userId: string }) => void;

export default BdApi.ContextMenu.buildMenu([
  {
    label: "Github",
    action: () => window.open("https://github.com/doggybootsy/enhancecodeblocks/"),
    icon: () => <Icon name="github" size={18} />
  },
  {
    label: "Join Discord",
    action: () => joinGuild(),
    icon: () => <Icon name="discord" size={18} />
  },
  {
    label: "Profile",
    action: () => displayUserModal({ userId: "515780151791976453" }),
    icon: () => <Icon name="at" size={18} />
  },
  {
    label: "Website",
    action: () => window.open("https://doggybootsy.github.io/"),
    icon: () => <Icon name="globe" size={18} />
  }
]);