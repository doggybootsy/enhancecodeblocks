import React from "react";

type Icon = React.ComponentClass<{ width: number, height: number }>;
export const ArrowIcon = BdApi.Webpack.getModule(m => m.toString().includes("M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.")) as Icon;
export const EyeIcon = BdApi.Webpack.getModule(m => m.toString().includes("13.1046 10.8954 14 12 14Z")) as Icon;
export const DownloadIcon = BdApi.Webpack.getModule(m => m.toString().includes("20V18H6V20H18Z")) as Icon;
export const CopyIcon = BdApi.Webpack.getModule(m => m.toString().includes("21V7h6v5h5v9H8z")) as Icon;
export const TrashIcon = BdApi.Webpack.getModule(m => m.toString?.().includes("17H9V11H11V17ZM15 17H13V11H15V17Z")) as Icon;

export function EnlargeIcon({ width, height }: { width: number, height: number }) {
  return (
    <svg aria-hidden="true" role="img" width={width} height={height} viewBox="0 0 16 16">
      <path fill="currentColor" d="M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z" />
      <path fill="currentColor" d="M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z" />
    </svg>
  )
};

export const ModalRoot = BdApi.Webpack.getModule(m => m?.toString?.().includes("ENTERING"), { searchExports: true  }) as React.ComponentClass<{
  onClose: () => void,
  transitionState: null | number,
  children: React.ReactNode,
  size?: "large" | "medium" | "small"
}>;

export const Spinner = BdApi.Webpack.getModule(m => m.Type?.PULSING_ELLIPSIS, { searchExports: true }) as React.ComponentClass<{ type: string }> & { Type: { WANDERING_CUBES: "string" }};

export const Tooltip = BdApi.Webpack.getModule(m => m.prototype?.setDomElement && m.prototype.render.toString().includes("renderTooltip()")) as React.ComponentClass<{
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

export const Popout = BdApi.Webpack.getModule((m) => m.prototype?.render?.toString().includes("shouldShowPopout")) as React.ComponentClass<{
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

export const NumberInputStepper = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byStrings(".minValue,", ".maxValue,"));

const classes = BdApi.Webpack.getModule(m => m.container && m.dividerDefault);
const { divider } = BdApi.Webpack.getModule(m => m.divider && Object.keys(m).length === 1);

export function SettingItem({ title, disabled, hideBorder, item }: {
  title: string,
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
      <div className="ECBlock-error">
        <div className="react-error" onClick={() => this.setState({ hasError: false })}>
          There was an unexpected Error with Enhance Codeblocks. Click to try and rerender.
        </div>
        {this.props.fallback}
      </div>
    );
    return this.props.children; 
  };
}