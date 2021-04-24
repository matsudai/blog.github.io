import React, { FC } from 'react';
import Head from 'next/head';
import PageContainer from '../layouts/PageContainer';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import styles from '../styles/pages/index.module.css';

// eslint-disable-next-line arrow-body-style
const Home: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>概要 | 末代</title>
      </Head>
      <PageHeader />

      <main className={styles.main}>
        <h2>誰</h2>
        <p>
          島根県松江市でエンジニアをやっています。
          <br />
          現在は業務でRuby on Railsを用いたWebシステムの開発・保守に携わっています。
        </p>

        <h2>技術</h2>
        <h3>Ruby / Ruby on Rails</h3>
        <p>設計・製造・テスト・運用の経験があります。趣味レベルでRSPecによる自動テストを触りました。</p>

        <h3>AWS</h3>

        <p>下記の開発・運用基盤を構築した経験があります。</p>

        <h4>Webシステムの実行基盤</h4>
        <p>
          アプリケーションの開発・運用のためEC2インスタンス内にNginx+Unicorn+Rails5実行環境を構築しました。
          <br />
          フロントにCroudFront・ELBがあったためNginxはリバースプロキシではなくWebサーバとして利用しました。
        </p>

        <h4>バッチ処理の実行基盤</h4>
        <p>EventBridge、SQSとEC2を用いたジョブキュー型のバッチ処理実行基盤の設計および構築を行いました。</p>

        <h3>JavaScript / CSS</h3>
        <p>
          機能改修のために触った経験はありますが、いずれも趣味程度です。
          <br />
          ちなみに本サイトは勉強のためにNext.jsで作成しています。
        </p>
        <h2>足跡</h2>
        <ul>
          <li>2018.03：松江工業高等専門学校&nbsp;専攻科&nbsp;電子情報工学システム専攻&nbsp;卒業</li>
          <li>2018.04：株式会社CMC Solutions入社</li>
        </ul>

        <h2>連絡先など</h2>
        <ul>
          <li>Email：matsudai.public.1131@gmail.com</li>
          <li>
            GitHub：<a href="https://github.com/matsudai">matsudai</a>
          </li>
          <li>
            Qiita：<a href="https://qiita.com/matsudai">matsudai</a>
          </li>
        </ul>
      </main>

      <PageFooter />
    </PageContainer>
  );
};

export default Home;
