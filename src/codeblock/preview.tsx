import React, { memo } from "react";

import { useSrc } from "../hooks";

function Preview({ content, height }: { content: string, height: number }) {
  const src = useSrc(content);

  return (
    <div className="ECBlock-preview">
      <img src={src} height={height} />
    </div>
  )
};

export default memo(Preview);