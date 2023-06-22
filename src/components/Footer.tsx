import React from 'react';
import { Layout, Row, theme, Divider, Space } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GA from '../utils/GA';

const { useToken } = theme;

function Footer() {
  const { token } = useToken();
  const style = { margin: '5px', fontSize: '24px', color: token.colorPrimary };

  const trackClicks = (event) => {
    GA.trackEvent('Link', 'Clicks', event.target.dataset.name);
  };

  return (
    <Layout style={{ background: '#fff', padding: 0 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'tween' }}
      >
        <Row justify={'center'}>
          <Space>
            <a
              target="_blank"
              rel="noopener noreferrer"
              data-name="github"
              href="https://github.com/jeffreyteoh"
              onClick={trackClicks}
            >
              <div className="prevent-pointer">
                <GithubOutlined style={style} />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              data-name="linkedin"
              href="https://www.linkedin.com/in/jeffrey-teoh-chi-kin-0247b0102/"
              onClick={trackClicks}
            >
              <div className="prevent-pointer">
                <LinkedinOutlined style={style} />
              </div>
            </a>
          </Space>
        </Row>
        <Row justify={'center'}>
          <Space>
            <Link href="/privacy">Privacy</Link>
            <Divider type="vertical" />
            <Link href="/cookie">Cookie</Link>
          </Space>
        </Row>
        <Row justify={'center'} style={{ margin: '5px' }}>
          <small>
            &copy; Copyright 2023, Jeffrey Teoh. All Rights Reserved
          </small>
        </Row>
      </motion.div>
    </Layout>
  );
}

export default Footer;
