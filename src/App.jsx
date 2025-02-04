// https://github.com/Rod97139/argent-bank-frontend/blob/main/src/slices/authSlice.js

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"

import Header from "./components/header/Header"
import Footer from "./components/Footer"
import store from './app/store'

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
            path: "/login",
            element: <Login />
          },
          {
            path: "/signup",
            element: <SignUp />
          },
          {
            path: "/profile",
            element: <>
              <Profile />
            </>
          }
        ]
      }
    ]
  }
])

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
