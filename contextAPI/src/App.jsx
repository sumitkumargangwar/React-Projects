import React from "react"
import Login from "./Components/Login"
import { Profile } from "./Components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1>User Context API</h1>
      <Login />
      <Profile />
      </UserContextProvider>
  )
}

export default App
