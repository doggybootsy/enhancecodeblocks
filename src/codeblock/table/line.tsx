/// <reference path="../../index.d.ts" />
import React, { memo, useMemo } from "react";
import type { Language } from "highlight.js";

import properties from "./handler";

function Line({ index, language, line }: { index: number, language: Language, line: string }) {
  const props = useMemo(() => properties(language, line), [ language, line ]);

  return (
    <tr className="ECBlock-row">
      <td className="ECBlock-index">{index + 1}</td>
      <td {...props} />
    </tr>
  );
};

export default memo(Line);