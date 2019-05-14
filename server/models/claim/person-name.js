function ViewModel (personName, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
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
    }
  }

  if (personName != null) {
    this.model.firstName.value = personName.firstName
    this.model.lastName.value = personName.lastName
  }
  if (error) {
    this.model.errorMessage = {
      'text': 'Please enter both names'
    }
  }
}

module.exports = ViewModel
