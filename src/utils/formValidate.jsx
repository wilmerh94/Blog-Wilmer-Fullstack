// eslint-disable-next-line no-unused-vars
export const formValidate = (getValues) => {
  return {
    required: {
      value: true,
      message: 'Required'
    },
    patternEmail: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Format email invalid'
    },
    minLength: {
      value: 6,
      message: 'Minimum 6 characters'
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return 'Do not be a clown write something'
        }
        return true
      }
    },
    validateEquals(value) {
      return {
        equals: (v) => v === value || 'Password are not the same!'
      }
    }
  }
}

// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
