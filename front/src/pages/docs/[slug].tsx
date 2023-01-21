import { Container } from '@mui/material';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { DocsContent } from '../../components/docs/docs-content';
import { DocsLayout } from '../../components/docs/docs-layout';
import { gtm } from '../../lib/gtm';
import { getArticleBySlug, getArticles } from '../../utils/docs';

import type { NextPage } from 'next';

interface Article {
  content?: string;
  slug?: string;
  title?: string;
}

export const getStaticPaths = () => {
  const articles = getArticles(['slug']);

  return {
    paths: articles.map((article) => ({
        params: {
          slug: article.slug
        }
      })),
    fallback: false
  };
};

export const getStaticProps = ({ params }: { params: { slug: string } }) => {
  const article = getArticleBySlug(
    params.slug,
    ['content', 'slug', 'title']
  );

  return {
    props: {
      article
    }
  };
};

const Article: NextPage<{ article?: Article; }> = (props) => {
  const { article } = props;
  const router = useRouter();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          {`Docs: ${article!.title} | Material Kit Pro`}
        </title>
      </Head>
      <Container
        maxWidth="lg"
        sx={{ pb: '120px' }}
      >
        <DocsContent content={article!.content} />
      </Container>
    </>
  );
};

Article.getLayout = (page) => (
  <DocsLayout>
    {page}
  </DocsLayout>
);

export default Article;
