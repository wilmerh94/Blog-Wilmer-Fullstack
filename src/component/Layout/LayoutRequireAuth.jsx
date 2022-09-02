import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const LayoutRequireAuth = () => {
  const { isSignedIn } = useSelector((store) => store.user)
  //   const { user } = useFirebase()
  // Need to use spinner loading
  return isSignedIn ? <Outlet /> : <Navigate to='/login' />
}
