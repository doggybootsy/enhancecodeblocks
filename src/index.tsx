import React from "react";
import type { Plugin } from "betterdiscord";

import css from "./styles.css";

import CodeBlock from "./codeblock";
import Attachment, { AttachmentProps } from "./attachment";
import Settings from "./settings";
import { ErrorBoundary } from "./components";

const BdApi = new window.BdApi("ECBlocks");

const { codeBlock } = BdApi.Webpack.getModule(m => m.parse && m.parseTopic).defaultRules;
const MessageAttachment = BdApi.Webpack.getModule(m => m.defaultProps?.renderEmbeds, { searchExports: true });

const { messageListItem } = BdApi.Webpack.getModule(m => m.messageListItem);

type DiscordAttachment = { renderPlaintextFilePreview: (props: AttachmentProps) => React.ReactNode };

class ECBlocks implements Plugin {
  forceUpdateMessages(): void {
    const nodes = document.querySelectorAll(`.${messageListItem}`) as NodeListOf<HTMLElement>;

    const owners = Array.from(nodes, (node) => BdApi.ReactUtils.getOwnerInstance(node)).filter(m => m) as React.Component<any, any, any>[];

    for (const owner of new Set(owners)) {
      const { render } = owner;
      // Hopefully this wont kill the chat area when hotswapping
      if (render.toString() === "() => null") continue;
      owner.render = () => null;
      owner.forceUpdate(() => {
        owner.render = render;
        owner.forceUpdate();
      });
    };
  };
  start(): void {
    BdApi.Patcher.after(codeBlock, "react", (_that, [ props ], res) => (
      <ErrorBoundary fallback={res}>
        <CodeBlock {...props as ({ content: string, lang: string })} modal={false} fileName={() => `codeblock-${Date.now()}.${(props as { lang: string }).lang || "txt"}`} />
      </ErrorBoundary>
    ));

    BdApi.Patcher.after(MessageAttachment.prototype, "renderAttachments", (that, props, res: React.ReactElement<{ attachments: Array<DiscordAttachment> }, "div"> | false) => {
      if (!res) return;
      
      for (const attachment of res.props.attachments) {        
        const { renderPlaintextFilePreview } = attachment;
        
        attachment.renderPlaintextFilePreview = (props) => (
          <ErrorBoundary fallback={renderPlaintextFilePreview.apply(attachment, [ props ])}>
            <Attachment {...props} />
          </ErrorBoundary>
        );
      }
    });
    BdApi.DOM.addStyle(css);
    this.forceUpdateMessages();
  };
  stop(): void {
    BdApi.Patcher.unpatchAll();
    BdApi.DOM.removeStyle();
    this.forceUpdateMessages();
  };
  getSettingsPanel(): JSX.Element {
    return <Settings />
  }
};

export default ECBlocks;