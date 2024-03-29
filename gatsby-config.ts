import type { GatsbyConfig } from "gatsby";

const path = require("path");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Evgeny Mironenko | Software Engineer`,
    siteUrl: `https://miron4dev.com`
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@common": path.resolve(__dirname, "src/components/common"),
          "@models": path.resolve(__dirname, "src/models"),
          "@assets": path.resolve(__dirname, "src/assets"),
        },
        extensions: [
          "ts", "tsx", "svg"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Mono\:400,500`,
          `Fira Sans\:300,400,700`
        ],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `miron4dev`,
        short_name: `miron4dev`,
        start_url: `/`,
        background_color: `#070707`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/logo.png`
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://miron4dev.com",
        sitemap: "https://miron4dev.com/sitemap.xml",
        policy: [{ userAgent: "*" }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138655376-1"
      }
    }
  ]
};

export default config;