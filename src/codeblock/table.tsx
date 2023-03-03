/// <reference path="../index.d.ts" />
import React, { memo, useMemo } from "react";
import type { HighlightResult, Language } from "highlight.js";

function properties(language: Language, line: string) {
  const props: { dangerouslySetInnerHTML: { __html: string }, className?: string } = {
    dangerouslySetInnerHTML: { __html: line }
  };

  if (language.name !== "Diff") return props;
  const match = line.match(/<span class="hljs-(deletion|addition)">(.*?)<\/span>/);
  if (!match) return props;
  const [, type, content] = match;
  
  props.dangerouslySetInnerHTML.__html = content;
  props.className = `hljs-${type}`;

  return props;
};

function Code({ highlighted, tableRef, language }: { highlighted: HighlightResult, tableRef: React.RefObject<HTMLTableElement>, language: Language }) {
  const spl = useMemo(() => highlighted.value.split("\n"), [ highlighted ]);

  return (
    <table className="ECBlock-table" ref={tableRef}>
      <tbody>
        {spl.map((line, i) => (
          <tr key={`${line}__${i}`}>
            <td>{i + 1}</td>
            <td {...properties(language, line)} />
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default memo(Code);