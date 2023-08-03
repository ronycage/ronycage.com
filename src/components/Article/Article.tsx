"use client";
import React from "react";
import "./Article.scss";
import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkToc from "remark-toc";

type IArticle = {
  date: string;
  href: Url;
  content: string;
};

const Markdown: React.FC<{ content: string }> = ({ content }) => {
  // TODO: REWRITE USING THIS https://github.com/rehypejs/rehype-react#options
  return (
    <ReactMarkdown
      className="markdown"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={theme}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
      disallowedElements={["script"]}
      remarkPlugins={[remarkGfm, remarkMath, remarkToc]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
};

const Article: React.FC<IArticle> = ({ date, href, content }) => {
  const router = useRouter();
  return (
    <div className="Card">
      <div className="header">
        <button className="btn" onClick={() => router.back()}>
          Go back
        </button>
        <p className="date">{date}</p>
      </div>
      <Markdown content={content} />
      <button className="btn" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
};

export default Article;
