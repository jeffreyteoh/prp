import RootLayout from '../../components/Layout';
import React from 'react';
import CookiePolicy from './CookiePolicy';

const title = "Jeffrey Teoh - Cookie Policy"

const breadcrumb = ['Home', "Cookie Policy"];

function Cookie() {
  return (
    <RootLayout title={title} breadcrumb={breadcrumb}>
    <CookiePolicy />
    </RootLayout>
  );
}

export default Cookie;
