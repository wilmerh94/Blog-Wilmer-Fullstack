import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './store/_index'

import ChatProvider from './context/ChatContext'
import { FirebaseProvider } from './context/FirebaseContext'
import { ColorProvider } from './context/ThemeContext'
import { readUserActiveAction } from './redux/userDuck'

readUserActiveAction()(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <Provider store={store}>
        <ChatProvider>
          <ColorProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ColorProvider>
        </ChatProvider>
      </Provider>
    </FirebaseProvider>
  </React.StrictMode>
)
