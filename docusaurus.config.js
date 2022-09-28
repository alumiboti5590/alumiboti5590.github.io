// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FRC Team 5590 - The Alumiboti",
  tagline:
    "Empowering the next generation of engineers, artists, and creative geniuses through FIRST robotics",
  url: "https://docs.alumiboti5590.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "alumiboti",
  projectName: "team-documentation",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/alumiboti5590/alumiboti5590.github.io/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "28ZWVRZKGY",
        apiKey: "6ee2ca81fb321315a8b5b334757ef853",
        indexName: "alumiboti_documentation",
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Alumiboti 5590",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/alumiboti5590",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Home",
                to: "docs/",
              },
              {
                label: "What is FIRST?",
                to: "docs/#what-is-first",
              },
              {
                label: "Who Are We?",
                to: "docs/#who-are-the-alumiboti",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Chief Delphi",
                href: "https://www.chiefdelphi.com/",
              },
              {
                label: "FRC Discord",
                href: "https://discord.gg/frc",
              },
              {
                label: "Reddit",
                href: "https://reddit.com/r/frc/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/FRCTeams",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/orgs/alumiboti5590",
              },
            ],
          },
        ],
        copyright: "Built with Docusaurus.",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=block",
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=block",
  ],
};

module.exports = config;
