import React from 'react';
import { Layout, Row, theme, Divider, Space } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Link from "next/link";

const { useToken } = theme;

function Footer() {
  const { token } = useToken();
  const style = { margin: "5px", fontSize: "24px", color: token.colorPrimary };

  return (
    <Layout style={{ background: '#fff', padding: 0 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'tween' }}
      >
        <Row justify={'center'}>
          <Space>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/jeffreyteoh" >
              <GithubOutlined style={style} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeffrey-teoh-chi-kin-0247b0102/">
              <LinkedinOutlined style={style} />
            </a>
          </Space>
        </Row>
        <Row justify={'center'}>
          <Space>
            <Link href="/privacy">Privacy</Link>
            <Divider type='vertical' />
            <Link href="/cookie">Cookie</Link>
          </Space>
        </Row>
        <Row justify={'center'} style={{ margin: "5px" }}>
          <small>&copy; Copyright 2023, Jeffrey Teoh. All Rights Reserved</small>
        </Row>
      </motion.div>
    </Layout>
  );
}

export default Footer;
