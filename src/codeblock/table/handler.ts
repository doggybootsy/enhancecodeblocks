/// <reference path="../../index.d.ts" />
import type { Language } from "highlight.js";

type props = { dangerouslySetInnerHTML: { __html: string }, className: string };

const propHandlers: Record<string, (line: string, props: props) => props> = {
  Diff(line, props) {
    const match = line.match(/<span class="hljs-(deletion|addition)">(.*?)<\/span>/);
    if (!match) return props;
    const [, type, content] = match;
    
    props.dangerouslySetInnerHTML.__html = content;
    props.className = `${props.className} hljs-${type}`;
  
    return props;
  }
};

function properties(language: Language, line: string) {
  const props = {
    dangerouslySetInnerHTML: { __html: line },
    className: "ECBlock-line"
  };

  if (!language.name) return props;

  const handler = propHandlers[language.name];
  if (handler) return handler(line, props);

  return props;
};

export default properties;