/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

const nextConfig = withLess({
  reactStrictMode: true,
  eslint: {},
  lessLoaderOptions: {},
});

module.exports = nextConfig;