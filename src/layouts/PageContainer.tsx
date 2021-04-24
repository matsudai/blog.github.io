import React, { FC, ReactNode } from 'react';
import styles from '../styles/layouts/PageContainer.module.css';

interface Props {
  children: ReactNode;
}

// eslint-disable-next-line arrow-body-style
const PageContainer: FC = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
