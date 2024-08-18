import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../src/store/store.js'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import './index.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import Dashboard from './components/Dashboard.jsx'
import { UserProvider } from '../src/contexts/UserContext.jsx'
import Home from './pages/Home.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "add-todo",
        element: <PrivateRoute element={<AddTodo />} />
      },
      {
        path: "todos",
        element: <PrivateRoute element={<Todos />} />
      },
      {
        path: "dashboard",
        element: <PrivateRoute element={<Dashboard />} />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </Provider>,
)
