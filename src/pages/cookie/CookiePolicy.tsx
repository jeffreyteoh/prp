import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const CookiePolicy = () => {
  return (
    <div className="content">
      <Title level={1}>Cookie Policy</Title>
      <Paragraph>
        This Cookie Policy explains how [Your Website/Company Name] (&quotwe,&quot &quotus,&quot
        or &quotour&quot) uses cookies and similar technologies to recognize you when
        you visit our website at [Your website URL] (&quotWebsite&quot). It explains
        what these technologies are and why we use them, as well as your rights
        to control our use of them.
      </Paragraph>

      <Title level={2}>What are cookies?</Title>
      <Paragraph>
        Cookies are small data files that are placed on your computer or mobile
        device when you visit a website. Cookies are widely used by website
        owners to make their websites work more efficiently, as well as to
        provide reporting information.
      </Paragraph>

      <Title level={2}>Why do we use cookies?</Title>
      <Paragraph>
        We use cookies to enhance your experience on our Website, understand how
        you interact with our content, and improve the performance and
        functionality of our Website. Cookies also help us deliver personalized
        advertisements and measure the effectiveness of our marketing campaigns.
      </Paragraph>

      <Title level={2}>Types of cookies we use:</Title>
      <ul>
        <li>Essential cookies</li>
        <li>Analytical cookies</li>
        <li>Advertising cookies</li>
        <li>Functionality cookies</li>
      </ul>

      <Title level={2}>Your cookie choices:</Title>
      <Paragraph>
        Most web browsers automatically accept cookies, but you can modify your
        browser settings to decline cookies or alert you when a cookie is being
        sent. However, please note that if you choose to disable cookies, some
        parts of our Website may not function properly.
      </Paragraph>

      <Title level={2}>Third-party cookies:</Title>
      <Paragraph>
        We may also allow third-party service providers to place cookies on your
        device through our Website to assist us in analyzing usage data,
        providing relevant advertisements, and improving the functionality of
        our Website. These third parties may collect information about your
        online activities over time and across different websites.
      </Paragraph>

      <Title level={2}>Changes to our Cookie Policy:</Title>
      <Paragraph>
        We may update our Cookie Policy from time to time to reflect changes in
        our practices and service offerings. We encourage you to review this
        policy periodically for any updates.
      </Paragraph>

      <Title level={2}>Contact us:</Title>
      <Paragraph>
        If you have any questions or concerns about our use of cookies, please
        contact us at [your contact information].
      </Paragraph>
    </div>
  );
};

export default CookiePolicy;
