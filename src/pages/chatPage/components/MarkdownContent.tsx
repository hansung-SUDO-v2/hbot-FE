import type React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PROSE_STYLE: React.CSSProperties = {
  "--tw-prose-body": "var(--color-header-blue)",
  "--tw-prose-headings": "var(--color-header-blue)",
  "--tw-prose-bold": "var(--color-header-blue)",
  "--tw-prose-links": "var(--color-header-blue)",
  "--tw-prose-code": "var(--color-header-blue)",
  "--tw-prose-bullets": "var(--color-header-blue)",
  "--tw-prose-counters": "var(--color-header-blue)",
} as React.CSSProperties;

interface MarkdownContentProps {
  children: string;
  className?: string;
}

const MarkdownContent = ({ children, className }: MarkdownContentProps) => {
  return (
    <div className={`prose max-w-none ${className ?? ""}`} style={PROSE_STYLE}>
      <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
    </div>
  );
};

export default MarkdownContent;
