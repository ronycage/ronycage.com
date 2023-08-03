import ArticlesList from "@/components/ArticlesList/ArticlesList";
import Page from "@/components/Page/Page";
import { getArticles } from "@/utils/parseMarkdown";

export default function Blog() {
  const articles = getArticles();
  
  return (
    <Page title="Blog">
      <ArticlesList articles={articles} />
    </Page>
  );
}
