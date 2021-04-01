import { MDXProvider } from '@mdx-js/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { readdirSync } from 'fs';
import { basename } from 'path';
import CodeBlock from '../../components/CodeBlock';
import styles from '../../styles/Post.module.css';

interface Props {}
interface ComponentProps {
  children: React.Component;
}

const components = {
  h2: ({ children }: ComponentProps) => <h2 className={styles.h2}>{children}</h2>,
  h3: ({ children }: ComponentProps) => <h3 className={styles.h3}>{children}</h3>,
  h4: ({ children }: ComponentProps) => <h4 className={styles.h4}>{children}</h4>,
  h5: ({ children }: ComponentProps) => <h5 className={styles.h5}>{children}</h5>,
  h6: ({ children }: ComponentProps) => <h6 className={styles.h6}>{children}</h6>,
  ol: ({ children }: ComponentProps) => <ol className={styles.ol}>{children}</ol>,
  ul: ({ children }: ComponentProps) => <ul className={styles.ul}>{children}</ul>,
  li: ({ children }: ComponentProps) => <li className={styles.li}>{children}</li>,
  // pre: (props) => <CodeBlock {...props} />,
  code: CodeBlock
};

const PostPage: FC<Props> = () => {
  const { id } = useRouter().query;
  const DynamicMDXComponent = dynamic(() => import(`../../posts/${id}.mdx`));
  return (
    <MDXProvider components={components}>
      <DynamicMDXComponent />
    </MDXProvider>
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
