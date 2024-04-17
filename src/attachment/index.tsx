import React, { memo } from "react";

import AttachmentWrapper, { AttachmentProps, attachment } from "./wrapper";
import { ErrorBoundary } from "../components";
import { useData } from "../data";
import { useStateDeps } from "../hooks";

export type DiscordAttachment = { renderPlaintextFilePreview: (props: AttachmentProps) => React.ReactNode, onRemoveAttachment: (attachment: attachment) => void, item: attachment };

function Attachment({ props, item: attachment, renderPlaintextFilePreview, canDeleteAttachments }: { props: AttachmentProps, item: DiscordAttachment, renderPlaintextFilePreview(props: AttachmentProps): React.ReactNode, canDeleteAttachments: boolean }) {
  const [ maxFileBytes ] = useData("maxFileBytes", 200_000_000);
  

  const [ error, setError ] = useStateDeps(() => attachment.item.originalItem.size > maxFileBytes, [ maxFileBytes ]);

  if (error) return (
    <div className="ECBlock ECBlock-error">
      <div className="react-error" onClick={() => setError(false)}>File is too large for Enhance Codeblocks to handle. Click to try anyways</div>
      {renderPlaintextFilePreview.call(attachment, props)}
    </div>
  );
  
  return (
    <ErrorBoundary fallback={renderPlaintextFilePreview.call(attachment, props)}>
      <AttachmentWrapper {...props} canDeleteAttachments={canDeleteAttachments} remove={() => attachment.onRemoveAttachment(attachment.item)} />
    </ErrorBoundary>
  );
};

export default memo(Attachment);