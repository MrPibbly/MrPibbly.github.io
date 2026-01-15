import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Swyft Wiki',
  tagline: 'Wiki for SwyftMC',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.swyftmc.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MrPibbly', // Usually your GitHub org/user name.
  projectName: 'MrPibbly.github.io/', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'http://google.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', // Sets dark mode as the default
      disableSwitch: false, // Keeps the user-facing switch enabled
      respectPrefersColorScheme: false, // Prioritizes user system settings
    },
    navbar: {
      title: 'Swyft Wiki',
      logo: {
        alt: 'Swyft Logo',
        src: 'img/logo.png',
      },
      items: [
        {
            href: 'https://github.com/MrPibbly/MrPibbly.github.io/',
            label: 'Contribute to the Wiki!',
            position: 'right',
          },
      ],
    },
   // footer: {
     // style: 'dark',
     // links: [
       // {
         // title: 'Docs',
         // items: [
           // {
             // label: 'Tutorial',
             // to: '/docs/intro',
           // },
         // ],
       // },
       // {
         // title: 'Community',
         // items: [
           // {
             // label: 'Stack Overflow',
             // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
           // },
           // {
             // label: 'Discord',
             // href: 'https://discordapp.com/invite/docusaurus',
           // },
           // {
             // label: 'Twitter',
             // href: 'https://twitter.com/docusaurus',
           // },
         // ],
       // },
       // {
         // title: 'More',
         // items: [
           // {
             // label: 'Blog',
             // to: '/blog',
           // },
           // {
             // label: 'GitHub',
             // href: 'https://github.com/facebook/docusaurus',
           // },
         // ],
       // },
     // ],
     // copyright: `Copyright © ${new Date().getFullYear()} Swyft Minecraft Network`,
   // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
