require('dotenv').config()

module.exports = {
  databaseEndpoint: process.env.API_URL,
  databasePort: process.env.API_KEY,
  port: process.env.PORT
}
