import React from "react";

export { default as Icon } from "./icon";

export const ModalRoot = BdApi.Webpack.getModule(m => m?.toString?.().includes("ENTERING") && m?.toString?.()?.includes("headerId"), { searchExports: true  }) as React.ComponentClass<{
  onClose: () => void,
  transitionState: null | number,
  children: React.ReactNode,
  size?: "large" | "medium" | "small"
}>;

export const Spinner = BdApi.Webpack.getModule(m => m.Type?.PULSING_ELLIPSIS, { searchExports: true }) as React.ComponentClass<{ type: string }> & { Type: { WANDERING_CUBES: "string" }};

type Tooltip = React.ComponentClass<{
  text: React.ReactNode, 
  hideOnClick?: boolean, 
  children: (props: {
    "aria-label": string,
    onBlur: () => void,
    onClick: () => void,
    onContextMenu: () => void,
    onFocus: () => void,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
  }) => React.ReactNode
}>;

// If my search fails hopefully bds doesnt
const foundToolTip = BdApi.Webpack.getModule(m => m.prototype?.setDomElement && m.prototype.render.toString().includes("renderTooltip()"), { searchExports: true }) as Tooltip | undefined;
export const Tooltip = foundToolTip ?? (BdApi.Components.Tooltip as Tooltip);

export const Switch = BdApi.Webpack.getModule((m) => m.toString?.().includes(".tooltipNote,"), { searchExports: true }) as React.ComponentClass<{
  children: React.ReactNode,
  note?: React.ReactNode,
  style?: React.CSSProperties,
  className?: string,
  onChange: (val: boolean) => void,
  tooltipNote?: string,
  hideBorder?: boolean,
  disabled?: boolean,
  value: boolean
}>;

export const Popout = BdApi.Webpack.getModule((m) => m.prototype?.render?.toString().includes("shouldShowPopout"), { searchExports: true }) as React.ComponentClass<{
  children: (props: {
    "aria-controls": string | undefined,
    "aria-expanded": boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>,
    onKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
    onMouseDown: React.MouseEventHandler<HTMLDivElement>
  }) => React.ReactNode,
  shouldShow: boolean,
  position: string,
  align: string,
  renderPopout: (props: any) => React.ReactNode,
  spacing: number,
  autoInvert: boolean,
  nudgeAlignIntoViewport: boolean,
  onRequestClose: () => void
}>;

export const NumberInputStepper = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings(".minValue,", ".maxValue,")) as React.ComponentClass<{
  value: number,
  onChange: (v: number) => void,
  className?: string,
  minValue?: number
  maxValue?: number
}>;

export const Text = BdApi.Webpack.getModule(m => m.Colors && m.Sizes) as React.ComponentClass<{
  className?: string,
  children: React.ReactNode
}>;

const classes = BdApi.Webpack.getModule(m => m.container && m.dividerDefault);
const noteClasses = BdApi.Webpack.getModule(m => m.description && m.modeDefault);
const { divider } = BdApi.Webpack.getModule(m => m.divider && Object.keys(m).length === 1);

export function SettingItem({ title, disabled, hideBorder, item, note }: {
  title: React.ReactNode,
  note?: React.ReactNode,
  disabled?: boolean,
  hideBorder?: boolean,
  item: React.ReactNode
}) {
  return (
    <div className={`${classes.container}${disabled ? ` ${classes.disabled}` : ""}`}>
      <div className={classes.labelRow}>
        <label className={classes.title}>{title}</label>
        <div className={classes.control}>{item}</div>
      </div>
      {note && <Text className={`${noteClasses.description} ${noteClasses.modeDefault}${disabled ? ` ${noteClasses.modeDisabled}` : ""}`}>{note}</Text>}
      {!hideBorder && <div className={`${divider} ${classes.dividerDefault}`} />}
    </div>
  )
};

export class ErrorBoundary extends React.Component<
  { fallback?: React.ReactNode, children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  componentDidCatch() {    
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) return (
      <div className="ECBlock ECBlock-error">
        <div className="react-error" onClick={() => this.setState({ hasError: false })}>
          There was an unexpected Error with Enhance Codeblocks. Click to try and rerender.
        </div>
        {this.props.fallback}
      </div>
    );
    return this.props.children; 
  };
}