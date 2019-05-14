function ViewModel (personName, errors) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    idPrefix: 'personName',
    firstName: {
      label: {
        text: 'First name'
      },
      classes: 'govuk-input--width-20',
      id: 'firstName',
      name: 'firstName'
    },

    lastName: {
      label: {
        text: 'Last name'
      },
      classes: 'govuk-input--width-20',
      id: 'lastName',
      name: 'lastName'
    },

    errors: []
  }

  if (errors != null) {
    if (errors.indexOf('firstName') > -1) {
      this.model.firstName.errorMessage = {
        'text': 'Please enter your First name'
      }
      this.model.errors.push({
        text: this.model.firstName.errorMessage.text,
        href: '#firstName'
      })
    }
    if (errors.indexOf('lastName') > -1) {
      this.model.lastName.errorMessage = {
        'text': 'Please enter your Last name'
      }
      this.model.errors.push({
        text: this.model.lastName.errorMessage.text,
        href: '#lastName'
      })
    }
  }

  if (personName != null) {
    this.model.firstName.value = personName.firstName
    this.model.lastName.value = personName.lastName
  }
}

module.exports = ViewModel
