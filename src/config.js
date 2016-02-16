require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'St. Paul\'s Preschool',
    description: 'St. Paul\'s Preschool',
    head: {
      titleTemplate: 'St. Paul\'s Preschool %s',
      meta: [
        {name: 'description', content: 'St. Paul\'s Preschool'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'St. Paul\'s Preschool'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'St. Paul\'s Preschool'},
        {property: 'og:description', content: 'St. Paul\'s Preschool'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@mscienski'},
        {property: 'og:creator', content: '@mscienski'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
