import RootLayout from '../../components/Layout';
import PrivacyPolicy from './PrivacyPolicy';
import React from 'react';

const title = "Jeffrey Teoh - Privacy Policy"
const breadcrumb = ['Home', "Privacy Policy"];


function Privacy() {
  return (
    <RootLayout title={title} breadcrumb={breadcrumb}>
    <PrivacyPolicy/>
    </RootLayout>
  );
}

export default Privacy;
