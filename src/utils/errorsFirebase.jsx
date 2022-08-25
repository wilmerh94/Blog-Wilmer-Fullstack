import { toast } from 'react-toastify'

export const errorsFirebase = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return toast.error('User Registered already')
    case 'auth/invalid-email':
      return toast.error('Format email not valid')
    default:
      toast.error('Error was found it')
  }
}
