import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const hello = {
    myName : "Sumit Kumar Gangwar",
    position : "Front end Dev",
  }
  const myArr = ["Sumit","Kumar","Gangwar"]
  return (
    <>
    <h1>This is My Tailwind CSS</h1>
    <Card myName="Sumit Kumar Gangwar" position="Front end Dev" />
    <Card/>
    </>
  )
}

export default App
