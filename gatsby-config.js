require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "clasi",
    siteUrl: "https://clasihome.com"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layout`)
      }
    },    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito\:400,900`, // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },    
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },     
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
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
    /*{
      resolve: "gatsby-source-custom-api",
      options: {
          url: `https://api.clasihome.com/rest/builders/?builderId=${builderId}`,
          rootKey: "template"
      }
    }*/
  ],
};