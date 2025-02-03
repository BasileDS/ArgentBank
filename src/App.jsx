// https://github.com/Rod97139/argent-bank-frontend/blob/main/src/slices/authSlice.js

import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'

import Home from './pages/Home'
import SignIn from "./pages/SignIn"
import User from "./pages/User"

import Header from "./components/Header"
import Footer from "./components/Footer"
import store from './app/store'
import { selectLogged } from './app/userSlice'

// const logged = false

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <>
          <Header /> 
          <Outlet />
          <Footer />
        </>,
        children: [
          {
            path: "/",
            element: <>
              <Home />
            </>
          },
          {
            path: "/signin",
            element: <AuthRedirect />
          },
          {
            path: "/user",
            element: <>
              <User />
            </>
          }
        ]
      }
    ]
  }
])

function AuthRedirect () {
  const logged = useSelector(selectLogged)

  if (logged) {
    return <Navigate replace to="/user" />
  } else {
    return <SignIn />
  }
}

function Root() {
  return <Outlet />
}

function Router () {
  return <RouterProvider router={router} />
}

function App() {
  return <>
      <Provider store={store}>
        <Router />
      </Provider>
  </>
}

export default App
