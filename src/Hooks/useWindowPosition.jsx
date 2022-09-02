import { useLayoutEffect, useState } from 'react'

export const useWindowPosition = (id) => {
  const [animation, setAnimation] = useState(false)

  useLayoutEffect(() => {
    const updatePosition = () => {
      const offSetHeight = window.document.getElementById(id).offsetHeight
      if (window.pageYOffset > offSetHeight * 0.7) {
        setAnimation(true)
      }
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [id])

  return animation
}
// Set the id in the header element
