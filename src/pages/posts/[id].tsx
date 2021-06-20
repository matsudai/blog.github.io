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

const componentP = ({ children }: ComponentProps) => <p className={styles.paragraph}>{children}</p>;
const compoentH2 = ({ children }: ComponentProps) => <h2 className={styles.h2}>{children}</h2>;
const compoentH3 = ({ children }: ComponentProps) => <h3 className={styles.h3}>{children}</h3>;
const compoentH4 = ({ children }: ComponentProps) => <h4 className={styles.h4}>{children}</h4>;
const compoentH5 = ({ children }: ComponentProps) => <h5 className={styles.h5}>{children}</h5>;
const compoentH6 = ({ children }: ComponentProps) => <h6 className={styles.h6}>{children}</h6>;
const compoentOl = ({ children }: ComponentProps) => <ol className={styles.ol}>{children}</ol>;
const compoentUl = ({ children }: ComponentProps) => <ul className={styles.ul}>{children}</ul>;
const compoentLi = ({ children }: ComponentProps) => <li className={styles.li}>{children}</li>;
const compoentInlineCode = ({ children }: ComponentProps) => <code className={styles.inlineCode}>{children}</code>;
const compoentA = ({ children, ...props }: ComponentProps) => (
  <a {...props} className={styles.link}>
    {children}
  </a>
);

const components = {
  p: componentP,
  h2: compoentH2,
  h3: compoentH3,
  h4: compoentH4,
  h5: compoentH5,
  h6: compoentH6,
  ol: compoentOl,
  ul: compoentUl,
  li: compoentLi,
  inlineCode: compoentInlineCode,
  a: compoentA,
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
