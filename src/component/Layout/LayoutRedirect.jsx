import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useFirestore } from 'src/Hooks/useFirestore'

export const LayoutRedirect = () => {
  const { searchData } = useFirestore()
  const params = useParams()

  useEffect(() => {
    searchData('projects', params).then((docSnap) => {
      if (docSnap.exist()) {
        window.location.href = docSnap.data().url
      }
    })
  }, [])

  return (
    <div>
      <Outlet />
    </div>
  )
}
