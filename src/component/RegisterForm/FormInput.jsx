import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const FormInput = forwardRef(({ type, placeholder }, ref) => {
  return <input type={type} placeholder={placeholder} ref={ref} />
})
