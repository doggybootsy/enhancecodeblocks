/// <reference path="../../index.d.ts" />
import React, { memo, useMemo } from "react";
import type { HighlightResult, Language } from "highlight.js";

import Line from "./line";

function Code({ highlighted, tableRef, language }: { highlighted: HighlightResult, tableRef: React.RefObject<HTMLTableElement>, language: Language }) {
  const spl = useMemo(() => highlighted.value.split("\n"), [ highlighted ]);

  return (
    <table className="ECBlock-table" ref={tableRef}>
      <tbody>
        {spl.map((line, index) => (
          <Line key={`${line}__${index}`} index={index} line={line} language={language} />
        ))}
      </tbody>
    </table>
  )
};

export default memo(Code);