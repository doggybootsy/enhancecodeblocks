import React, { memo, useMemo } from "react";
import type { HighlightResult } from "highlight.js";

function Code({ highlighted, tableRef }: { highlighted: HighlightResult, tableRef: React.RefObject<HTMLTableElement> }) {
  const spl = useMemo(() => highlighted.value.split("\n"), [ highlighted ]);
  
  return (
    <table className="ECBlock-table" ref={tableRef}>
      <tbody>
        {spl.map((line, i) => (
          <tr key={`${line}__${i}`}>
            <td>{i + 1}</td>
            <td dangerouslySetInnerHTML={{ __html: line }} />
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default memo(Code);