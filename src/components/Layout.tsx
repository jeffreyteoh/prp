import { Layout, ConfigProvider } from 'antd';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const { Content } = Layout;

/**
 * Renders a layout with root HTML element and body.
 *
 * @param {{ children: React.ReactNode }} props - Object containing the children.
 * @return {JSX.Element} A react element with HTML and body tags.
 */
export default function RootLayout({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Layout>
      </ConfigProvider>

  );
}
