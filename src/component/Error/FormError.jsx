import { toast } from 'react-toastify'

export const FormError = ({ error }) => {
  return error && toast.error(error.message)
}
