import React, { useLayoutEffect, useMemo, useState } from "react";

const cache = new Map<string, string>();
export function useFetchContent(url: string) {
  const refPureValue = useMemo(() => {
    const cached = cache.has(url);
    if (cached) return cache.get(url) as string;
    return false;
  }, []);

  const body = React.useRef<false | string>(refPureValue);

  const [, forceUpdate ] = useState(Symbol());
  
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

      forceUpdate(Symbol());
    })();

    return () => abortController.abort();
  }, []);

  return body.current
};