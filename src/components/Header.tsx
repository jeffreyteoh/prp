import React from 'react';
import { Layout, Row } from 'antd';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Menu from './Menu';

function Header({menu} : {
  menu ?: string
}) {

  let navData = {
    Home: {
      name: 'Home',
      to: '/',
      children: 'Home',
      className: 'menu-item',
    },
    Contact: {
      name: 'Contact',
      to: '/contact',
      children: 'Contact',
      className: 'menu-item',
    }
  }

  if (menu && navData[menu]) {
    navData[menu].className = 'active menu-item';
  }
  

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
          {Menu(navData)}
        </div>
      </Row>
    </Layout>
  );
}

export default Header;
