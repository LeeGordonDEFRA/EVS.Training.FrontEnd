const routes = [].concat(
  require('../routes/home'),
  require('../routes/public'),
  require('../routes/claim/person-name'),
  require('../routes/claim/person-email')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
