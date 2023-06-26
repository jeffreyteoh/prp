import RootLayout from '../../components/Layout';
import { Button, Input, Space, Typography, Form } from 'antd';
import { gql } from '@apollo/client';
import client from '../../lib/apollo-client';
import { useState } from 'react';
import Turnstile, { useTurnstile } from 'react-turnstile';

const { Title } = Typography;

const { TextArea } = Input;

const title = 'Contact';

const breadcrumb = ['Home', 'Contact'];

const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 3 },
  },
};

const SEND_EMAIL = gql`
  mutation sendEmail(
    $email: String!
    $name: String!
    $subject: String!
    $message: String!
    $token: String!
  ) {
    sendEmail(
      email: $email
      name: $name
      subject: $subject
      message: $message
      token: $token
    ) {
      success
    }
  }
`;

type Data = {
  email: string;
  subject?: string;
  message: string;
  name?: string;
  token?: string;
};

function Contact() {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const turnstile = useTurnstile();
  const [token, setToken] = useState<string>('');

  const onFinish = async (data: Data) => {
    setComponentDisabled(true);
    setLoading(true);

    if (!token) {
      setComponentDisabled(false);
      setLoading(false);
      return;
    }

    data.token = token;

    try {
      await client().mutate({
        mutation: SEND_EMAIL,
        variables: data,
      });
    } catch (error) {
      console.log(error);
    }

    setComponentDisabled(false);
    setLoading(false);
  };

  console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY);

  return (
    <RootLayout title={title} breadcrumb={breadcrumb}>
      <div className="content">
        <Title level={1}>Contact</Title>

        <div className="form ">
          <Form
            {...formItemLayout}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            disabled={componentDisabled}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ message: 'What is your name?' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                {
                  type: 'email',
                  message: 'Please input a valid email address!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ message: 'Please input your subject!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: 'Please input your message!' },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Write anything you want."
                maxLength={6}
              />
            </Form.Item>

            <Turnstile
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || ''}
              onVerify={setToken}
              onExpire={() => { turnstile.reset(); }}
            />

            <Space style={{ display: 'flex', justifyContent: 'right' }}>
              <Button loading={loading} type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
            </Space>
          </Form>
        </div>
      </div>
    </RootLayout>
  );
}

export default Contact;
