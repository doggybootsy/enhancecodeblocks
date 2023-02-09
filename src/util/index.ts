import { useState } from "react";

export function useForceUpdate() {
  const [, forceUpdate ] = useState(Symbol());

  return () => forceUpdate(Symbol());
};
export function createURL(content: string) {
  // Add a 'xmlns' tag if it doesnt exist
  const svg = content.includes("xmlns=") ? content : content.replace(/^(<svg) /, "$1 xmlns=\"http://www.w3.org/2000/svg\" ");
  return URL.createObjectURL(new Blob([ svg ], { type: "image/svg+xml" }));
};