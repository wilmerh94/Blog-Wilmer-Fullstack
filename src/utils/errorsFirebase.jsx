import { toast } from 'react-toastify'

export const errorsFirebase = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return { code: 'email', message: toast.error('User Registered already') }
    case 'auth/invalid-email':
      return { code: 'email', message: toast.error('Format email not valid') }
    case 'auth/user-not-found':
      return { code: 'email', message: toast.error('User not found') }
    case 'auth/wrong-password':
      return { code: 'password', message: toast.error('Password invalid') }
    default:
      return { code: 'email', message: toast.error('Error was found it') }
  }
}

// https://stackoverflow.com/questions/39152004/list-of-all-auth-errors-for-firebase-web-api/71151415#71151415
