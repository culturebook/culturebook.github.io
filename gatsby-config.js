module.exports = {
  siteMetadata: {
    title: 'Culturebook',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `src/markdown`,
          name: "markdown-pages",
        },
      },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify', // make sure to put last in the array
    ]
}
