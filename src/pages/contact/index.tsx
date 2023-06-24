import RootLayout from '../../components/Layout';
import { Button, Input, Space, Typography, Form } from 'antd';

const { Title } = Typography;

const { TextArea } = Input;

const title = 'Contact';

const breadcrumb = ['Home', 'Contact'];

const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 3 },
  }
};

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    };

  return (
    <RootLayout title={title} breadcrumb={breadcrumb}>
      <div className="content">
        <Title level={1}>Contact</Title>

        <div className="form ">
          <Form
          {...formItemLayout} 
          initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'What is your name?' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
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

            <Space style={{ display: 'flex', justifyContent: 'right' }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={() => {
                form.resetFields();
              }}>Clear</Button>
            </Space>
          </Form>
        </div>
      </div>
    </RootLayout>
  );
}

export default Contact;
