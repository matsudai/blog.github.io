import React, { FC } from 'react';
import Link from 'next/link';
import locales from '../../locales/jp/common.config';
import styles from '../styles/components/Header.module.css';

// eslint-disable-next-line arrow-body-style
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">
          <a>{locales.common.title}</a>
        </Link>
      </h1>

      <ul className={styles.menu}>
        {
          locales.common.menuItems.map(({ name, path }) => (
            <li key={name} className={styles.menuItem}>
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  );
};

export default Header;
