import React from "react";

import { Icon } from "../components";
import joinGuild from "./joinGuild";

const displayUserModal = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings(".analyticsLocation,", ",friendToken:"), { searchExports: true }) as (props: { userId: string }) => void;

const Menu = BdApi.ContextMenu.buildMenu([
  {
    label: "Support Discord",
    action: () => joinGuild(),
    icon: () => <Icon name="discord" size={18} />
  },
  {
    label: "Profile",
    action: () => displayUserModal({ userId: "515780151791976453" }),
    icon: () => <Icon name="at" size={18} />
  },
  {
    label: "Source",
    action: () => window.open("https://github.com/doggybootsy/enhancecodeblocks/"),
    icon: () => <Icon name="github" size={18} />
  },
  {
    label: "Website",
    action: () => window.open("https://doggybootsy.github.io/"),
    icon: () => <Icon name="globe" size={18} />
  }
]);

export let shouldShowMenu = true;

try {
  if (Menu({})?.type === undefined) shouldShowMenu = false;
} 
catch (error) {}

export default Menu;