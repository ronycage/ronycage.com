"use client";
import { IArticles } from "@/utils/parseMarkdown";
import React, { useEffect } from "react";
import Card from "../CardPreview/CardPreview";
import "./ArticlesList.scss";

interface IArticlesList {
  articles: IArticles[];
}

const ArticlesList: React.FC<IArticlesList> = ({ articles }) => {
  return (
    <div className="ArticlesList">
      {articles.map((article) => (
        <Card
          key={article.id}
          href={`/blog/${article.id}`}
          title={article.title}
          date={article.date}
          desc={article.subtitle}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
