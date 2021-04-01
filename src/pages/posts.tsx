import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import { readdirSync } from 'fs';
import { basename } from 'path';
import styles from '../styles/Home.module.css';

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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

const getStaticProps: GetStaticProps<Props> = async () => {
  const filepaths = await readdirSync('src/posts', { withFileTypes: true });
  const markdownFilepaths = filepaths.filter((filepath) => filepath.isFile() && filepath.name.match(/\.mdx$/));

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
