import Link from 'next/link';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import { readdirSync } from 'fs';
import { basename } from 'path';
import PageContainer from '../layouts/PageContainer';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import styles from '../styles/pages/Posts.module.css';

interface Props {
  posts: {
    key: string;
    path: string;
    frontFormatter: {
      title: string;
      createdAt: string;
      description: string;
    };
  }[];
}

// eslint-disable-next-line arrow-body-style
const Posts: FC<Props> = ({ posts }: Props) => {
  return (
    <PageContainer>
      <Head>
        <title>記事 | 末代</title>
      </Head>
      <PageHeader />

      <main className={styles.main}>
        <ul className={styles.grid}>
          {posts.map(({ key, path, frontFormatter }) => (
            <li key={key} className={styles.card}>
              <Link href={path}>
                <a>
                  <h3>{frontFormatter.title}</h3>
                  <i>{frontFormatter.createdAt}</i>
                  <p>{frontFormatter.description}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <PageFooter />
    </PageContainer>
  );
};

const getStaticProps: GetStaticProps<Props> = async () => {
  const filepaths = await readdirSync('src/posts', { withFileTypes: true });
  const markdownFilepaths = filepaths
    .filter((filepath) => filepath.isFile() && filepath.name.match(/\.mdx$/))
    .reverse();

  const posts = await Promise.all(
    markdownFilepaths.map(async (filepath, _) => {
      const path = `/posts/${basename(filepath.name, '.mdx')}`;
      const frontFormatter = (await import(`../posts/${filepath.name}`))
        .frontFormatter as Props['posts'][0]['frontFormatter'];
      return { key: filepath.name, path, frontFormatter };
    })
  );

  return {
    props: { posts }
  };
};

export { getStaticProps };
export default Posts;
