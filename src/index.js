import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './store/_index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ChatProvider from './context/ChatContext'
import { FirebaseProvider } from './context/FirebaseContext'
import { ColorProvider } from './context/ThemeContext'
import { readUserActiveAction } from './redux/userDuck'

readUserActiveAction()(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ColorProvider>
      <FirebaseProvider>
        <Provider store={store}>
          <BrowserRouter>
            <ChatProvider>
              <App />
            </ChatProvider>
          </BrowserRouter>
        </Provider>
      </FirebaseProvider>

      <ToastContainer
        position='top-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ColorProvider>
  </React.StrictMode>
)
