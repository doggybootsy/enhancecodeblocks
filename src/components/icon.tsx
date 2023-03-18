import React, { Component } from "react";

type icon = React.ComponentClass<{ width: number, height: number }>;

class Icon extends Component<{ name: keyof typeof Icon.icons, size: number }> {
  static error({ width, height }: { width: number, height: number }) {
    return (
      <svg aria-hidden="true" role="img" width={width} height={height} viewBox="0 0 20 20" color="var(--status-danger)">
        <path d="M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" />
      </svg>
    )
  }
  static icons = {
    arrow: BdApi.Webpack.getModule(m => m.toString().includes("M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.")) as icon,
    eye: BdApi.Webpack.getModule(m => m.toString().includes("13.1046 10.8954 14 12 14Z")) as icon,
    download: BdApi.Webpack.getModule(m => m.toString().includes("20V18H6V20H18Z")) as icon,
    copy: BdApi.Webpack.getModule(m => m.toString().includes("21V7h6v5h5v9H8z")) as icon,
    trash: BdApi.Webpack.getModule(m => m.toString?.().includes("17H9V11H11V17ZM15 17H13V11H15V17Z")) as icon,
    discord: BdApi.Webpack.getModule(m => m.toString?.().includes("9.54272 12.0187 10.994C12.0187")) as icon,
    at: BdApi.Webpack.getModule(m => m.toString?.().includes("11.999C14.6 13.433")) as icon,
    globe: BdApi.Webpack.getModule(m => m.toString?.().includes("16H15V13C15 12.45 14.55")) as icon,
    overflow: BdApi.Webpack.getModule(m => m.toString?.().includes(".8954305-2 2-2zm0-6c1.1045695 0 2 .8954305")) as icon,
    enlarge({ width, height }: { width: number, height: number }) {
      return (
        <svg aria-hidden="true" role="img" width={width} height={height} viewBox="0 0 16 16">
          <path fill="currentColor" d="M1.93956 14.6668H6.18203C6.51658 14.6668 6.7881 14.3953 6.7881 14.0607C6.7881 13.7262 6.51658 13.4547 6.18203 13.4547H3.40261L7.21658 9.64069C7.45325 9.40402 7.45325 9.02038 7.21658 8.78371C7.0984 8.66522 6.94325 8.60613 6.7881 8.60613C6.63294 8.60613 6.47779 8.66522 6.35961 8.78371L2.54563 12.5977V9.81826C2.54563 9.48372 2.27411 9.2122 1.93956 9.2122C1.60501 9.2122 1.3335 9.48372 1.3335 9.81826V14.0607C1.3335 14.3953 1.60501 14.6668 1.93956 14.6668Z" />
          <path fill="currentColor" d="M8.78374 7.21643C9.02041 7.4531 9.40405 7.4531 9.64072 7.21643L13.4547 3.40245V6.18188C13.4547 6.51643 13.7262 6.78794 14.0608 6.78794C14.3953 6.78794 14.6668 6.51643 14.6668 6.18188V1.93941C14.6668 1.60486 14.3953 1.33334 14.0608 1.33334L9.8183 1.33334C9.48375 1.33334 9.21223 1.60486 9.21223 1.93941C9.21223 2.27396 9.48375 2.54548 9.8183 2.54548H12.5977L8.78374 6.35945C8.54707 6.59612 8.54707 6.97976 8.78374 7.21643Z" />
        </svg>
      );
    },
    github({ width, height }: { width: number, height: number }) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={width} height={height}>
          <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
        </svg>
      );
    }
  };

  render() {
    const CachedIcon = Icon.icons[this.props.name];

    if (CachedIcon) return <CachedIcon width={this.props.size} height={this.props.size} />;
    return <Icon.error width={this.props.size} height={this.props.size} />;
  };
};

export default Icon;