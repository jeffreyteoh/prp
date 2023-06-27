import { Layout, ConfigProvider, Breadcrumb } from 'antd';
import React, { Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
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
  breadcrumb = [],
  menu,
}: {
  children: React.ReactNode;
  title?: string;
  breadcrumb?: string[],
  menu?: string
}) {
  let bc: any = "";

  if (breadcrumb.length > 0) {
    const list = breadcrumb.map((item) => {
      return {title:item}
    });

    bc = (<Breadcrumb style={{ margin: '16px 16px' }} items={list} />
);
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
        <Header menu={menu}/>
        <Suspense fallback={<Loading />}>
          <Content>
            {bc}
            {children}
          </Content>
        </Suspense>
        <Footer />
      </Layout>
    </ConfigProvider>

  );
}
