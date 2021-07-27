module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "first-gatsby-site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "JosueRS12",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {},
        failOnError: true,
        base64Width: 20,
        forcesBase64Format: "",
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === "MOZJPEG",
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:"http://localhost:1337",
        collectionTypes: [
          "article",
        ],
        queryLimit: 1000,
      },
    },
  ],
};
