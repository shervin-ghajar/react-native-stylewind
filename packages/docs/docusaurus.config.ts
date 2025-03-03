import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'React Native Stylewind',
  tagline: 'A utility-first style design system for React Native',
  favicon: 'img/favicon.ico',

  // GitHub Pages Deployment
  url: 'https://shervin-ghajar.github.io', // GitHub Pages URL
  baseUrl: '/react-native-stylewind/', // Your repo name

  // GitHub Configuration
  organizationName: 'shervin-ghajar', // Your GitHub username
  projectName: 'react-native-stylewind', // Your repo name
  deploymentBranch: 'gh-pages', // Default branch for GitHub Pages deployment

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/shervin-ghajar/react-native-stylewind/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/shervin-ghajar/react-native-stylewind/edit/main/website/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/icon.png',
    navbar: {
      title: 'React Native Stylewind',
      logo: {
        alt: 'React Native Stylewind Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/shervin-ghajar/react-native-stylewind',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     { label: 'Introduction', to: '/docs/intro' },
        //     { label: 'Getting Started', to: '/docs/getting-started' },
        //     { label: 'Usage', to: '/docs/usage' },
        //     { label: 'API Reference', to: '/docs/api' },
        //     { label: 'Customization', to: '/docs/customization' },
        //     { label: 'Theming', to: '/docs/theming' },
        //     { label: 'Examples', to: '/docs/examples' },
        //     { label: 'CLI Commands', to: '/docs/cli-commands' },
        //     { label: 'Troubleshooting', to: '/docs/troubleshooting' },
        //     { label: 'Contributing', to: '/docs/contributing' },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/shervin-ghajar/react-native-stylewind/discussions',
            },
          ],
        },
      ],
      copyright: 'Copyright © ' + new Date().getFullYear() + ' Shervin Ghajar.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
