import React from 'react';
import {Typography } from "antd";

const { Title, Paragraph } = Typography;


export default function PrivacyPolicy() {
    return (
      <div className="content">
        <Title level={1}>Privacy Policy</Title>
        <Paragraph>
          This Privacy Policy governs the manner in which this website collects, uses, maintains, and discloses information collected from users (each, a "User") of the https://prp-nine.vercel.app/ website ("Site").
        </Paragraph>
        
        <Title level={2}>1. Personal Identification Information</Title>
        <Paragraph>
          We may collect personal identification information from Users in various ways, including, but not limited to, when Users visit our site, fill out a form, subscribe to the newsletter, respond to a survey, and in connection with other activities, services, features or resources we make available on our Site.
        </Paragraph>
  
        <Title level={2}>2. Non-personal Identification Information</Title>
        <Paragraph>
          We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our Site, such as the operating system and the Internet service providers utilized, and other similar information.
        </Paragraph>
  
        <Title level={2}>3. Web Browser Cookies</Title>
        <Paragraph>
          Our Site may use "cookies" to enhance the User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
        </Paragraph>
  
        <Title level={2}>4. How We Use Collected Information</Title>
        <Paragraph>
          Our Site may collect and use Users' personal information for the following purposes:
        </Paragraph>
        <ul>
          <li>To personalize user experience</li>
          <li>To improve our Site</li>
          <li>To send periodic emails</li>
        </ul>
  
        <Title level={2}>5. How We Protect Your Information</Title>
        <Paragraph>
          We adopt appropriate data collection, storage, and processing practices, and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
        </Paragraph>
  
        <Title level={2}>6. Sharing Your Personal Information</Title>
        <Paragraph>
          We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
        </Paragraph>
  
        <Title level={2}>7. Changes to This Privacy Policy</Title>
        <Paragraph>
          We has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
        </Paragraph>
      </div>
    );
  };
  
