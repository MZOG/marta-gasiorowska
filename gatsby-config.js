module.exports = {
  siteMetadata: {
    title: "Marta Gąsiorowska - Dietetyk & Trener",
    description: "Hej tutaj jest opis mojej strony",
    siteUrl: "https://martagasiorowska.co.uk",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "36b0e7a297e4410ebec07d7e9430c0",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "9999",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
