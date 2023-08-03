import mattter from "gray-matter";
import fs from "fs";
import matter from "gray-matter";
import { markdownFolder } from "@config/app.config";

export interface IArticles {
  title: string;
  date: string;
  subtitle: string;
  id: string;
}

export interface IArticle {
  title: string;
  date: string;
  subtitle: string;
  content: string;
}

export const getArticle = (id: string): IArticle => {
  const article = `${markdownFolder}/${id}.md`;

  if (!fs.existsSync(article))
    throw new Error("TODO: Create 404 exception page");

  const contents = fs.readFileSync(article, "utf-8");
  const articleMeta = matter(contents);

  return {
    title: articleMeta.data.title,
    date: articleMeta.data.date,
    subtitle: articleMeta.data.subtitle,
    // markdown images must be located in @/images
    content: articleMeta.content,
  };
};

export const getArticles = (): IArticles[] => {
  const allFiles = fs.readdirSync(markdownFolder);
  const onlyArticles = allFiles.filter((file: string) => file.endsWith(".md"));

  const articlesMeta = onlyArticles.map((article) => {
    const articleBody = fs.readFileSync(
      `${markdownFolder}/${article}`,
      "utf-8"
    );

    const articleMeta = matter(articleBody);

    return {
      title: articleMeta.data.title,
      date: articleMeta.data.date,
      subtitle: articleMeta.data.subtitle,
      id: article.replace(".md", ""),
    };
  });

  return articlesMeta;
};
