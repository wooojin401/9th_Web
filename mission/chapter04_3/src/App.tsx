import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Layout from "./components/Layout"
import SignupPage from "./pages/SignupPage"

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          path : '',
          element : <HomePage />,
        },

        {
          path : 'login', 
          element : <LoginPage />,
        },

        {
          path : 'signin', 
          element : <SignupPage />,
        },
      ],
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App