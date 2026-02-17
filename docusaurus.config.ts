import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Trezu Docs',
  tagline: 'Cross-chain multisig security for managing digital assets',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.trezu.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NEAR Dev', // Usually your GitHub org/user name.
  projectName: 'trezu-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          breadcrumbs: false,
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [ 
    'docusaurus-plugin-sass',
  ],
  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '0LUM67N2P2',
      // Public API key: it is safe to commit it
      apiKey: '41e2feb6ffa0d3450ca9d0a0c1826c1c',
      indexName: 'docs',
      askAi: {
        assistantId: 'ck1jQv3AzZ5R',
        indexName: 'docs.md',
        apiKey: '41e2feb6ffa0d3450ca9d0a0c1826c1c',
        appId: '0LUM67N2P2',
      },
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Algolia search parameters
      searchParameters: {
        clickAnalytics: true,
        analytics: true,
      },
      //... other Algolia params
      placeholder: 'Search the Docs...',
      insights: true,
    },
    navbar: {
      logo: {
        alt: 'Trezu',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [ ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     // {
    //     //   title: 'Docs',
    //     //   items: [
    //     //     {
    //     //       label: 'Tutorial',
    //     //       to: '/docs/intro',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'Community',
    //     //   items: [
    //     //     {
    //     //       label: 'Stack Overflow',
    //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'Discord',
    //     //       href: 'https://discordapp.com/invite/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'X',
    //     //       href: 'https://x.com/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'More',
    //     //   items: [
    //     //     {
    //     //       label: 'Blog',
    //     //       to: '/blog',
    //     //     },
    //     //     {
    //     //       label: 'GitHub',
    //     //       href: 'https://github.com/facebook/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Trezu.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
