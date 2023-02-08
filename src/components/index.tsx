import React from "react";

type Icon = React.ComponentClass<{ width: number, height: number }>;

export function Enlarge({ width, height }: { width: number, height: number }) {
  return (
    <svg aria-hidden="true" role="img" width={width} height={height} viewBox="0 0 16 16">
      <path fill="currentColor" d="M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z" />
      <path fill="currentColor" d="M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z" />
    </svg>
  )
};

export const ModalRoot = BdApi.Webpack.getModule(m => m?.toString?.().includes("ENTERING"), {searchExports: true}) as React.ComponentClass<any>;

export const Spinner = BdApi.Webpack.getModule(m => m.Type?.PULSING_ELLIPSIS);

export const Arrow = BdApi.Webpack.getModule(m => m.toString().includes("M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.")) as Icon;
export const Eye = BdApi.Webpack.getModule(m => m.toString().includes("13.1046 10.8954 14 12 14Z")) as Icon;
export const Download = BdApi.Webpack.getModule(m => m.toString().includes("20V18H6V20H18Z")) as Icon;
export const Copy = BdApi.Webpack.getModule(m => m.toString().includes("21V7h6v5h5v9H8z")) as Icon;

export const Tooltip = BdApi.Webpack.getModule(m => m.prototype?.setDomElement && m.prototype.render.toString().includes("renderTooltip()")) as React.ComponentClass<{
  text: React.ReactNode, 
  hideOnClick?: boolean, 
  children: (props: any) => React.ReactNode
}>;