// jest-puppeteer.config.js
module.exports = {
    server: {
      command: 'python -m SimpleHTTPServer',
      port: 8000,
    },
    launch: {
      args: ['--no-sandbox'],
    },
  }