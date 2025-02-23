import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React Native Stylewind",
  tagline: "A utility-first CSS framework designed for React Native",
  favicon: "img/favicon.ico",

  // GitHub Pages Deployment
  url: "https://shervin-ghajar.github.io", // GitHub Pages URL
  baseUrl: "/react-native-stylewind/", // Your repo name

  // GitHub Configuration
  organizationName: "shervin-ghajar", // Your GitHub username
  projectName: "react-native-stylewind", // Your repo name
  deploymentBranch: "gh-pages", // Default branch for GitHub Pages deployment

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/shervin-ghajar/react-native-stylewind/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/shervin-ghajar/react-native-stylewind/edit/main/website/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "React Native Stylewind",
      logo: {
        alt: "React Native Stylewind Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/shervin-ghajar/react-native-stylewind",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Tutorial", to: "/docs/intro" }],
        },
        {
          title: "Community",
          items: [
            { label: "Stack Overflow", href: "https://stackoverflow.com/questions/tagged/docusaurus" },
            { label: "Discord", href: "https://discordapp.com/invite/docusaurus" },
            { label: "X", href: "https://x.com/docusaurus" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub", href: "https://github.com/shervin-ghajar/react-native-stylewind" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Native Stylewind. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
