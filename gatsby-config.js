/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Gabet Thibaut`,
        short_name: `ThibautG`,
        description: `Porfolio website Gabet Thibaut`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `fullscreen`,
        icon: `src/images/pwa-icon.png`,
        icons: [
          {
            src: `/favicons/pwa-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/pwa-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      },
    },
    `gatsby-plugin-offline`,
  ]
}
