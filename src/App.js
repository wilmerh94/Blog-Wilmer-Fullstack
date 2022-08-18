import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Style
import './App.css'
// Components
import { Blog } from './component/Blog/Blog'
import { Navbar } from './component/Navbar/Navbar'
import { PokeDeck } from './component/PokeDeck/PokeDeck'

import { ContactForm } from './pages/Contact/ContactForm'
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { Chat } from './pages/Chat/Chat'

// Context
import { ChatContext } from './context/ChatContext'
import { useContext } from 'react'

// import { Form } from './component/Form/Form'
// import { PrivateRoute } from './component/PrivateRoute/PrivateRoute'

function App() {
  const { isSignedIn } = useSelector((store) => store.user2)
  // Initialize context
  const { greet } = useContext(ChatContext)
  return (
    <div className='App'>
      <Navbar />
      {greet}
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
          path='/chat'
          element={<Chat />}
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
