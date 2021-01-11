import React, { FC, ReactNode } from 'react';
import styles from '../styles/components/Main.module.css';

interface Props {
  children: ReactNode;
}

// eslint-disable-next-line arrow-body-style
const Main: FC<Props> = ({ children }: Props) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
};

export default Main;
