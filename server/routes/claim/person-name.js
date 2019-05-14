const ViewModel = require('../../models/claim/person-name')
const schema = require('../../schemas/claim/person-name')
const sessionHandler = require('../../services/session-handler')

module.exports = [{
  method: 'GET',
  path: '/claim/person-name',
  options: {
    handler: (request, h) => {
      const claim = sessionHandler.get(request, 'claim')
      return h.view('claim/person-name', new ViewModel(claim.personName, null))
    }
  }
},
{
  method: 'POST',
  path: '/claim/person-name',
  options: {
    validate: { payload: { personName: schema },
      failAction: async (request, h, error) => {
        return h.view('claim/person-name', new ViewModel(request.payload.personName, error)).takeover()
      }
    },
    handler: async (request, h) => {
      sessionHandler.update(request, 'claim', request.payload)
      return h.redirect('./person-email')
    }
  }
}]
