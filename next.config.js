/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    baseUrl: 'https://jhekasoft.github.io',
    baseTitle: 'jhekasoft',
    googleTagId: 'GTM-PDXCN6D'
  }
};
