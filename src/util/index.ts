import { useState, useReducer } from "react";

/** @note A easy to way to forceUpdate within a Functional Component */
export function useForceUpdate() {
  const [, forceUpdate ] = useReducer((num) => num + 1, 0);

  return forceUpdate;
};
/** @note Convert a svg string to a url usable for viewing them safely */
export function createURL(content: string): string {
  // Add a 'xmlns' tag if it doesnt exist
  const svg = content.includes("xmlns=") ? content : content.replace(/^(<svg) /, "$1 xmlns=\"http://www.w3.org/2000/svg\" ");
  return URL.createObjectURL(new Blob([ svg ], { type: "image/svg+xml" }));
};
export function formatBytes(bytes: number): string {
  if (Number.isNaN(bytes)) return ""; 
  if (bytes === 0) return "0 B";

  const i = Math.floor(Math.log(bytes) / Math.log(1024))

  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${[ "", "K", "M" ][i]}B`
}