// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/betsy'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
