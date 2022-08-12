// import { Navigate, Route, Routes } from 'react-router-dom'

// Style
import { useSelector } from 'react-redux'
import './App.css'
import { Blog } from './component/Blog/Blog'
import { Navbar } from './component/Navbar/Navbar'
import { selectSignedIn } from './features/userSlice'
import { Home } from './pages/Home/Home'
// Components
// import { Form } from './component/Form/Form'
// import { PrivateRoute } from './component/PrivateRoute/PrivateRoute'
// import { Home } from './pages/Home/Home'
// import { Login } from './pages/Login/Login'
function App() {
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className='App'>
      <Navbar />
      <Home />
      {isSignedIn && <Blog />}
    </div>
  )
}

export default App
