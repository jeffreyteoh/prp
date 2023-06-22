import React from 'react';
import { Layout, Row } from 'antd';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navData = {
  Home: {
    name: 'Home',
    to: '/',
    children: 'Home',
    className: 'active menu-item',
  },
  Contact: {
    name: 'Contact',
    to: '/',
    children: 'Contact',
    className: 'menu-item',
  }
}

const navChildren = Object.keys(navData).map((key, i) => {
  const item = navData[key];
  let tag: any = Link;
  const tagProps: { href?: string } = {};

  if (item.to && item.to.match(/\//g)) {
    tagProps.href = item.to;
    tag = 'a';
    delete item.to;
  }

  return React.createElement(
    tag,
    { ...item, ...tagProps, key: key },
    navData[key].children
  );
});



function Header() {
  return (
    <Layout style={{ background: '#fff', padding: 0 }} className="header">
      <Row justify={'space-between'}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'tween' }}
        >
          <Link href="/">
            <div className="header-logo">
              <Image src="/image/logo.svg" alt="Logo" width={150} height={40} />
            </div>
          </Link>

        </motion.div>
        <div className="header-menu">
          {navChildren}
        </div>
      </Row>
    </Layout>
  );
}

export default Header;
