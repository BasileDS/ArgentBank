// https://github.com/Rod97139/argent-bank-frontend/blob/main/src/slices/authSlice.js

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import SignIn from "./pages/SignIn"
import User from "./pages/User"
import Points from "./pages/Points"

import Header from "./components/Header"
import Footer from "./components/Footer"
import store from './app/store'

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
            element: <>
              <SignIn />
            </>
          },
          {
            path: "/user",
            element: <>
              <User />
            </>
          },
          {
            path: "/points",
            element: <>
              <Points />
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
  return <>
    <RouterProvider router={router} />
  </>
}

function App() {

  return <>
      <Provider store={store}>
        <Router />
      </Provider>
  </>
}

export default App
