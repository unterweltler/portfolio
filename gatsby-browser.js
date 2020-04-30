const { registerLinkResolver } = require('gatsby-source-prismic-graphql')
const { linkResolver } = require('./src/core/helpers/linkResolver')

registerLinkResolver(linkResolver)
