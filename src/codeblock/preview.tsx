import React, { memo } from "react";

function Preview({ height, src }: { height: number, src: string }) {
  return (
    <div className="ECBlock-preview">
      <img src={src} height={height} />
    </div>
  );
};

export default memo(Preview);