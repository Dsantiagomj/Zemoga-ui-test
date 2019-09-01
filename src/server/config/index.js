require("dotenv").config();

const config = {
  server: {
    port: process.env.SERVER_PORT || 5000,
  },
};

module.exports = config;
