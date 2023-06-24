import RootLayout from '../../components/Layout';
import React from 'react';
import CookiePolicy from './CookiePolicy';
import { Button } from 'antd';
import { ResetCookie } from '../../components/CookieConsent';

const title = 'Cookie Policy';

const breadcrumb = ['Home', 'Cookie Policy'];

function Cookie() {
  return (
    <RootLayout title={title} breadcrumb={breadcrumb}>
      <CookiePolicy />
      <Button
        className="content-btn"
        type="primary"
        onClick={() => {
          ResetCookie();
          window.location.reload();
        }}
      >
        Manage Preferences
      </Button>
    </RootLayout>
  );
}

export default Cookie;
