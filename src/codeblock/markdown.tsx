/// <reference path="../index.d.ts" />
import React from "react";

function MarkdownRenderer({ content }: { content: string }) {
  const marked = window.marked || (() => {
    // Inline fallback markdown parser
    return (text: string) => {
      // Basic markdown parsing logic
      let html = text
        .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/\*\*\*(.*?)\*\*\*/gim, "<strong><em>$1</em></strong>")
        .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/gim, "<em>$1</em>")
        .replace(/~~(.*?)~~/gim, "<del>$1</del>")
        .replace(/`(.*?)`/gim, "<code>$1</code>")
        .replace(/\n/gim, "<br>");

      // Handle blockquotes
      html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

      // Handle task lists
      html = html.replace(/^\- \[x\] (.*$)/gim, '<li class="task-list-item"><input type="checkbox" checked disabled> $1</li>');
      html = html.replace(/^\- \[ \] (.*$)/gim, '<li class="task-list-item"><input type="checkbox" disabled> $1</li>');

      // Handle unordered lists
      html = html.replace(/^\- (.*$)/gim, "<li>$1</li>");

      // Handle ordered lists
      html = html.replace(/^\d+\. (.*$)/gim, "<li>$1</li>");

      // Handle horizontal rules
      html = html.replace(/^---$/gim, "<hr>");
      html = html.replace(/^\*\*\*$/gim, "<hr>");

      // Handle links
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>');

      // Handle images
      html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1">');

      // Handle code blocks
      html = html.replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>");

      // Wrap consecutive list items
      html = html.replace(/(<li[^>]*>.*?<\/li>\n?)+/gim, "<ul>$&</ul>");

      return html;
    };
  })();

  const html = marked(content);

  return (
    <div
      className="ECBlock-markdown"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default React.memo(MarkdownRenderer);
