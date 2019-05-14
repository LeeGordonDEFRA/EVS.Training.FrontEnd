const routes = [].concat(
  require('../routes/home'),
  require('../routes/public'),
  require('../routes/claim/person-name')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
