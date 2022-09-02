import { Route, Routes } from 'react-router-dom'

// Style
// Components
import { Blog } from './component/Blog/Blog'
import { NewCard } from './component/CardDashboard/NewCard'
import { LayoutMain } from './component/Layout/LayoutMain'
import { LayoutRequireAuth } from './component/Layout/LayoutRequireAuth'
import { FullPokeDetails } from './component/PokeDeck/FullPokeDetails'
import { PokeDeck } from './component/PokeDeck/PokeDeck'
import { PokeDeckMain } from './component/PokeDeck/PokeDeckMain'
import { RegisterForm } from './component/RegisterForm/RegisterForm'

import { Chat } from './pages/Chat/Chat'
import { Checkout } from './pages/Checkout/Checkout'
import { ContactForm } from './pages/Contact/ContactForm'
import { NewDashboard } from './pages/Dashboard/NewDashboard'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { MyAccount } from './pages/MyAccount/MyAccount'
import { NotFound } from './pages/NotFound/NotFound'

// Context

// import { Form } from './component/Form/Form'
// import { PrivateRoute } from './component/PrivateRoute/PrivateRoute'

function App() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='login' element={<Login />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='sign-up' element={<RegisterForm />} />
        <Route path='contact' element={<ContactForm />} />
        <Route element={<LayoutRequireAuth />}>
          <Route path='/profile' element={<MyAccount />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/poke-deck' element={<PokeDeckMain />}>
            <Route index element={<PokeDeck />} />
            <Route path=':pokeId' element={<FullPokeDetails />} />
          </Route>
          <Route path='/dashboard' element={<NewDashboard />} />
          <Route path='/reports' element={<NewCard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

// Todo add login form better
// Todo error pages
// Todo basket payment
// Todo main page to introduce myself as a web developer
