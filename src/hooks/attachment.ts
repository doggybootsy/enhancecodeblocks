import { useEffect, useState } from "react";

// Maybe store in a window? For hotswapping / updates
const cache = new Map<string, string>();
export function useFetchContent(url: string) {
  const [ content, setContent ] = useState<false | string>(() => {
    const cached = cache.has(url);
    if (cached) return cache.get(url) as string;
    return false;
  });
  
  useEffect(() => {    
    if (content !== false) return;
    
    const abortController = new AbortController();
    
    (async () => {
      const result = await fetch(url, { signal: abortController.signal });
      if (result.ok) {
        const text = await result.text();
        cache.set(url, text);
        setContent(text);        
      }
      else setContent(`Enhance Codeblocks FETCH ERROR: STATUS=${JSON.stringify(result.status)} OK=${JSON.stringify(result.ok)} URL=${JSON.stringify(result.url)}`);
    })();

    return () => abortController.abort();
  }, []);

  return content;
};