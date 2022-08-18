import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './store/_index'

import { ColorProvider } from './context/ThemeContext'
import { readUserActiveAction } from './redux/userDuck'
import ChatProvider from './context/ChatContext'

readUserActiveAction()(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChatProvider>
        <ColorProvider>
          <GoogleOAuthProvider
            clientId='219357780165-ffsofj93pfp4mfa82p2bmcp0h2so3kmq.apps.googleusercontent.com'
            UxMode='popup'>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </GoogleOAuthProvider>
        </ColorProvider>
      </ChatProvider>
    </Provider>
  </React.StrictMode>
)
