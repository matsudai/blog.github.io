import React, { FC, ReactNode } from 'react';
import styles from '../styles/components/Layout.module.css';

interface Props {
  children: ReactNode;
}

// eslint-disable-next-line arrow-body-style
const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className={styles.rootContainer}>
      {children}
    </div>
  );
};

export default Layout;
