import RootLayout from '../components/Layout';
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Jeffrey Teoh</title>
      </Head>
      <div className="banner">
        <div className="banner-text-wrapper">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{
              scale: 0.8,
              rotate: -180,
              borderRadius: '100%',
            }}
          >
            <div className="banner-slogan">
              <h1 className="prevent-select">Hello</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className="banner-namev prevent-select">Good to see you here!</div>
          </motion.div>
        </div>

        {/* <Logo /> */}
      </div>
    </RootLayout>
  );
}

export default Home;
