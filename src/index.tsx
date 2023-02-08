import React from "react";
import type { Plugin } from "betterdiscord";

import css from "./styles.css";

import CodeBlock from "./codeblock";
import Attachment, { AttachmentProps } from "./attachment";

const BdApi = new window.BdApi("ECBlocks");

const { codeBlock } = BdApi.Webpack.getModule(m => m.parse && m.parseTopic).defaultRules;
const Message = BdApi.Webpack.getModule(m => m.defaultProps?.renderEmbeds, { searchExports: true });

const { messageListItem } = BdApi.Webpack.getModule(m => m.messageListItem);

type DiscordAttachment = { props: { children: { props: { renderPlaintextFilePreview: (props: AttachmentProps) => React.ReactNode } }}};

class ECBlocks implements Plugin {
  forceUpdateMessages(): void {
    const nodes = document.querySelectorAll(`.${messageListItem}`) as NodeListOf<HTMLElement>;

    const owners = Array.from(nodes, (node) => BdApi.ReactUtils.getOwnerInstance(node)).filter(m => m) as React.Component<any, any, any>[];
    
    for (const owner of new Set(owners)) {
      const { render } = owner;
      owner.render = () => null;
      owner.forceUpdate(() => {
        owner.render = render;
        owner.forceUpdate();
      });
    }
  };
  start(): void {
    BdApi.Patcher.instead(codeBlock, "react", (_that, [ props ]) => <CodeBlock {...props as ({ content: string, lang: string })} modal={false} fileName={() => `codeblock-${Date.now()}.${(props as { lang: string }).lang || "txt"}`} />);
    BdApi.Patcher.after(Message.prototype, "renderAttachments", (that, props, attachments: Array<DiscordAttachment> | false) => {
      if (!attachments) return;
      for (const attachment of attachments)
        attachment.props.children.props.renderPlaintextFilePreview = (props) => <Attachment {...props} />;
    });
    BdApi.DOM.addStyle(css);
    this.forceUpdateMessages();
  };
  stop(): void {
    BdApi.Patcher.unpatchAll();
    BdApi.DOM.removeStyle();
    this.forceUpdateMessages();
  };
};

export default ECBlocks;