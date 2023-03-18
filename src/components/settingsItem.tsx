import React, { memo } from "react";

const classes = BdApi.Webpack.getModule(m => m.container && m.dividerDefault);
const noteClasses = BdApi.Webpack.getModule(m => m.description && m.modeDefault);

const Divider = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings("),style:", "().divider,"), { searchExports: true }) as React.ComponentClass<{
  style?: React.CSSProperties,
  className?: string
}>;
const Text = BdApi.Webpack.getModule(m => m.Colors && m.Sizes) as React.ComponentClass<{
  className?: string,
  children: React.ReactNode
}>;

export function SettingItem({ title, disabled, hideBorder, item, note }: {
  title: React.ReactNode,
  note?: React.ReactNode,
  disabled?: boolean,
  hideBorder?: boolean,
  item: React.ReactNode | JSX.Element
}) {
  return (
    <div className={`${classes.container}${disabled ? ` ${classes.disabled}` : ""}`}>
      <div className={classes.labelRow}>
        <label className={classes.title}>{title}</label>
        <div className={classes.control}>{item}</div>
      </div>
      {note && <Text className={`${noteClasses.description} ${noteClasses.modeDefault}${disabled ? ` ${noteClasses.modeDisabled}` : ""}`}>{note}</Text>}
      {!hideBorder && <Divider className={classes.dividerDefault} />}
    </div>
  )
};

export default memo(SettingItem);