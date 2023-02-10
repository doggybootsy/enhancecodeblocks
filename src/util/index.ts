import { useState } from "react";

/** @note A easy to way to forceUpdate within a Functional Component */
export function useForceUpdate() {
  const [, forceUpdate ] = useState(Symbol());

  return () => forceUpdate(Symbol());
};
/** @note Convert a svg string to a url usable for viewing them safely */
export function createURL(content: string): string {
  // Add a 'xmlns' tag if it doesnt exist
  const svg = content.includes("xmlns=") ? content : content.replace(/^(<svg) /, "$1 xmlns=\"http://www.w3.org/2000/svg\" ");
  return URL.createObjectURL(new Blob([ svg ], { type: "image/svg+xml" }));
};