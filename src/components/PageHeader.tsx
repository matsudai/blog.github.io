import React, { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/components/PageHeader.module.css';

// eslint-disable-next-line arrow-body-style
const PageHeader: FC = () => {
  return (
    <header>
      <div>
        <h1 className={styles.title}>
          <Link href="/">末代</Link>
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">概要</Link>
          </li>
          <li>
            <Link href="/posts">記事</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
