import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Form, Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {  About,Home,Contact,Footer,Header,Github,PageListing } from './components/Index/Index.js'
import { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> 
    <Route path='' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route 
      path='/github' 
      element={<Github />}
      loader = {githubInfoLoader} 
    />
    <Route path='/header' element={<Header />} />
    <Route path='/footer' element={<Footer />} />
    <Route path='/:pageid' element={<PageListing />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
