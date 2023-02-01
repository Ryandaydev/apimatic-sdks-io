// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome SDK Builders',
  tagline: 'Creating SDKs, Connecting APIs',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Turn off indexing until the site is ready for release.
  noIndex: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apimatic', // Usually your GitHub org/user name.
  projectName: 'apimatic-sdks-io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SDKS.io',
        logo: {
          alt: 'Creating SDKs',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/introduction/what-is-an-sdk', label: 'Introduction', position: 'left'},
          {to: '/docs/best-practices/overview', label: 'Best Practices', position: 'left'},
          {to: '/docs/ways-to-build-sdks', label: 'Ways to Build', position: 'left'},
          {to: '/docs/industry-research/', label: 'Industry Research', position: 'left'},   
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/apimatic/apimatic-sdks-io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/category/introduction',
              },
              {
                label: 'Best Practices',
                to: '/docs/category/best-practices',
              },
              {
                label: 'Ways to build SDKs',
                to: '/docs/category/ways-to-build-sdks',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/apimatic',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apimatic/apimatic-sdks-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SDKs.io Built by APIMatic.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
