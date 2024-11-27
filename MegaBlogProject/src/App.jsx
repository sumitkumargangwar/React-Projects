import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import './index.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice.js'
import {Header,Footer} from './components'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        useDispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-4 bg-slate-900 p-4 text-blue-300'>
      <div className='w-full'>
        <Header />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App









