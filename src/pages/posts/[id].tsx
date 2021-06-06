import { MDXProvider } from '@mdx-js/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { readdirSync } from 'fs';
import { basename } from 'path';
import PageContainer from '../../layouts/PageContainer';
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';
import CodeBlock from '../../components/CodeBlock';
import styles from '../../styles/pages/posts/[id].module.css';

interface Props {}
interface ComponentProps {
  children: React.Component;
}

const components = {
  p: ({ children }: ComponentProps) => <p className={styles.paragraph}>{children}</p>,
  h2: ({ children }: ComponentProps) => <h2 className={styles.h2}>{children}</h2>,
  h3: ({ children }: ComponentProps) => <h3 className={styles.h3}>{children}</h3>,
  h4: ({ children }: ComponentProps) => <h4 className={styles.h4}>{children}</h4>,
  h5: ({ children }: ComponentProps) => <h5 className={styles.h5}>{children}</h5>,
  h6: ({ children }: ComponentProps) => <h6 className={styles.h6}>{children}</h6>,
  ol: ({ children }: ComponentProps) => <ol className={styles.ol}>{children}</ol>,
  ul: ({ children }: ComponentProps) => <ul className={styles.ul}>{children}</ul>,
  li: ({ children }: ComponentProps) => <li className={styles.li}>{children}</li>,
  inlineCode: ({ children }: ComponentProps) => <code className={styles.inlineCode}>{children}</code>,
  a: ({ children, ...props }: ComponentProps) => (
    <a {...props} className={styles.link}>
      {children}
    </a>
  ),
  // pre: (props) => <CodeBlock {...props} />,
  code: CodeBlock
};

const PostPage: FC<Props> = () => {
  const { id } = useRouter().query;
  const DynamicMDXComponent = dynamic(() => import(`../../posts/${id}.mdx`));
  return (
    <PageContainer>
      <Head>
        <title>記事 | 末代</title>
      </Head>
      <PageHeader />

      <main className={styles.main}>
        <MDXProvider components={components}>
          <DynamicMDXComponent />
        </MDXProvider>
      </main>

      <PageFooter />
    </PageContainer>
  );
};

const getStaticProps: GetStaticProps<Props> = async () => ({ props: {} });

const getStaticPaths: GetStaticPaths = async () => {
  const filepaths = await readdirSync('src/posts', { withFileTypes: true });
  const markdownFilepaths = filepaths.filter((filepath) => filepath.isFile() && filepath.name.match(/\.mdx$/));
  const paths = await Promise.all(
    markdownFilepaths.map(async (filepath, _) => `/posts/${basename(filepath.name, '.mdx')}`)
  );

  return {
    paths,
    fallback: false
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
