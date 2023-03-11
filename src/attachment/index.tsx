import React, { memo, useState } from "react";

import AttachmentWrapper, { AttachmentProps, attachment } from "./wrapper";
import { ErrorBoundary } from "../components";

export type DiscordAttachment = { renderPlaintextFilePreview: (props: AttachmentProps) => React.ReactNode, onRemoveAttachment: (attachment: attachment) => void, attachment: attachment };

function Attachment({ props, attachment, renderPlaintextFilePreview, canDeleteAttachments }: { props: AttachmentProps, attachment: DiscordAttachment, renderPlaintextFilePreview(props: AttachmentProps): React.ReactNode, canDeleteAttachments: boolean }) {
  const [ error, setError ] = useState(attachment.attachment.size > 200_000_000);

  if (error) return (
    <div className="ECBlock ECBlock-error">
      <div className="react-error" onClick={() => setError(false)}>File is too large for Enhance Codeblocks to handle. Click to try anyways</div>
      {renderPlaintextFilePreview.call(attachment, props)}
    </div>
  );
  return (
    <ErrorBoundary fallback={renderPlaintextFilePreview.call(attachment, props)}>
      <AttachmentWrapper {...props} canDeleteAttachments={canDeleteAttachments} remove={() => attachment.onRemoveAttachment(attachment.attachment)} />
    </ErrorBoundary>
  );
};

export default memo(Attachment);