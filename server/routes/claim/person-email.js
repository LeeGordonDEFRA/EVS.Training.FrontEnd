const ViewModel = require('../../models/claim/person-email')
const schema = require('../../schemas/claim/person-email')
const sessionHandler = require('../../services/session-handler')

module.exports = [{
  method: 'GET',
  path: '/claim/person-email',
  options: {
    handler: (request, h) => {
      let claim = sessionHandler.get(request, 'claim')
      return h.view('claim/person-email', new ViewModel(claim.email, null))
    }
  }
},
{
  method: 'POST',
  path: '/claim/person-email',
  options: {
    validate: { payload: { email: schema },
      failAction: async (request, h, error) => {
        return h.view('claim/person-email', new ViewModel(request.payload.email, error)).takeover()
      }
    },
    handler: async (request, h) => {
      sessionHandler.update(request, 'claim', request.payload)
      return h.redirect('./address')
    }
  }
}]
