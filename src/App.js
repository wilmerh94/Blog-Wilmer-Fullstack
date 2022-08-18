import { Route, Routes } from 'react-router-dom'

// Style
import { useSelector } from 'react-redux'
import './App.css'
import { Blog } from './component/Blog/Blog'
import { Navbar } from './component/Navbar/Navbar'
import { PokeDeck } from './component/PokeDeck/PokeDeck'
import { ContactForm } from './pages/Contact/ContactForm'

import { Login } from './pages/Login/Login'
// Components
// import { Form } from './component/Form/Form'
// import { PrivateRoute } from './component/PrivateRoute/PrivateRoute'
import { Home } from './pages/Home/Home'
function App() {
  const { isSignedIn } = useSelector((store) => store.user2)
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/contact'
          element={<ContactForm />}
        />
        <Route
          path='/blogs'
          element={isSignedIn && <Blog />}
        />
        <Route
          path='/poke-deck'
          element={<PokeDeck />}
        />
      </Routes>
    </div>
  )
}

export default App

// Todo add login form better
// Todo error pages
// Todo basket payment
// Todo main page to introduce myself as a web developer
