import { Layout, ConfigProvider, Breadcrumb } from 'antd';
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
  title = "Jeffrey Teoh",
  breadcrumb = []
}: {
  children: React.ReactNode;
  title?: string;
  breadcrumb?: string[]
}) {
  let bc: any = "";

  if (breadcrumb.length > 0) {
    const list = breadcrumb.map((item) => {
      return (<Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>);
    });

    bc = (<Breadcrumb style={{ margin: '16px 16px' }}>
      {list}
    </Breadcrumb>);
  }

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
        <Content>
          {bc}
          {children}
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>

  );
}
