import { useReducer } from "react";

export function debounce<f extends Function>(handler: f, timeout?: number | undefined): f {
  let timer: number;
  return function(this: any) {
    clearTimeout(timer);
    timer = setTimeout(() => handler.apply(this, arguments), timeout);
  } as unknown as f;
};

export function useForceUpdate() {
  const [, forceUpdate ] = useReducer((num) => num + 1, 0);

  return forceUpdate;
};

const domParser = new DOMParser();
export function createURL(content: string): string {
  const svg = domParser.parseFromString(content, "image/svg+xml");
  // add xmlns if not added
  if (!svg.documentElement.getAttribute("xmlns")) svg.documentElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  return URL.createObjectURL(new Blob([ svg.documentElement.outerHTML ], { type: "image/svg+xml" }));
};

export function formatBytes(bytes: number): string {
  if (Number.isNaN(bytes)) return ""; 
  if (bytes === 0) return "0 B";

  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${[ "", "K", "M" ][i]}B`;
};