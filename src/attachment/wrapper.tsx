import React, { memo, useMemo } from "react";

import { useFetchContent } from "../hooks";
import Codeblock from "../codeblock";

export type attachment = {
  content_type: string,
  filename: string,
  id: string,
  proxy_url: string,
  size: number,
  spoiler: false,
  url: string
};
export type AttachmentProps = {
  attachment: attachment,
  renderAdjacentContent: () => React.ReactNode,
  onContextMenu: (event: React.MouseEvent<HTMLDivElement>) => void,
  className: string,
  remove: () => void,
  canDeleteAttachments: boolean
};

function AttachmentWrapper({ attachment, onContextMenu, className, remove, canDeleteAttachments }: AttachmentProps) {
  const content = useFetchContent(attachment.url);

  const lang = useMemo(() => {    
    const spl = attachment.filename.split(".");
    if (spl.length - 1) return spl.pop() as string;
    return "";
  }, []);

  return (
    <div className={`ECBlock-file ${className}`} onContextMenu={onContextMenu}>
      <Codeblock 
        content={content || ""} 
        lang={lang} 
        modal={false} 
        fileName={() => attachment.filename} 
        loading={typeof content !== "string"} 
        remove={canDeleteAttachments ? remove : false} />
    </div>
  );
};

export default memo(AttachmentWrapper);