import Article from "@/components/Article/Article";
import Page from "@/components/Page/Page";
import { getArticle, getArticles } from "@/utils/parseMarkdown";

export const generateStaticParams = async () => {
  const articles = getArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
};

export default function BlogPage(props: any) {
  const id = props.params.slug;
  const { content, title, date } = getArticle(id);

  return (
    <Page title={title}>
      <Article date={date} content={content} href={id} />
    </Page>
  );
}
