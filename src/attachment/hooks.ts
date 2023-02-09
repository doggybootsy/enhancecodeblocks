import React, { useLayoutEffect, useMemo } from "react";

import { useForceUpdate } from "../util";

// Maybe store in a window? For hotswapping / updates
const cache = new Map<string, string>();
export function useFetchContent(url: string) {
  const refOriginalValue = useMemo(() => {
    const cached = cache.has(url);
    if (cached) return cache.get(url) as string;
    return false;
  }, []);

  const body = React.useRef<false | string>(refOriginalValue);

  const forceUpdate = useForceUpdate();
  
  useLayoutEffect(() => {
    if (body.current) return;
    
    const abortController = new AbortController();

    (async () => {
      const result = await fetch(url, { signal: abortController.signal });
      if (result.ok) {
        body.current = await result.text();
        cache.set(url, body.current);
      }
      else body.current = `Enhance Codeblocks FETCH ERROR: STATUS=${JSON.stringify(result.status)} OK=${JSON.stringify(result.ok)} URL=${JSON.stringify(result.url)}`;

      forceUpdate();
    })();

    return () => abortController.abort();
  }, []);

  return body.current
};